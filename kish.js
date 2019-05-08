((_pid) => {
    /*
    if( !kish_init ){
        $.getScript("./app/kish/kish_core.js" ).fail( ()=>{
            System.alert("kishのエラー", "kishコアの初期化に失敗しました。");
            return false;
        } );
        var kish_init = true;
    }
    */

    const Kish = new function(){
        this.dir = "~"
    
        this.kish = function(){
            return "kish v0.0.1";
        }
    
        this.echo = function(arg){
            return arg;
        }

        this.cd = function(arg){
            Kish.dir += "/" + arg;
            KWS.changeWindowTitle(_pid, Kish.dir);
            return Kish.dir;
        }
    
        this.exec = function(arg){
            S.dom(_pid, "#kish-out").append( "<div class='kish-item'><i class='fa fa-dollar-sign'></i> " + arg + "</div>" );
            let input = arg.split(" ");
            let cmd = input.shift();
            let exec = "Kish." + cmd + "(" + input + ")";
            try {
                let rtn = eval(exec);
                if( typeof rtn == "object" ) rtn = JSON.stringify(rtn);
                S.dom(_pid, "#kish-out").append( "<div class='kish-item'><i class='fa fa-angle-double-right'></i> " + rtn + "</div>" );            
            } catch (error) {
                S.dom(_pid, "#kish-out").append( "<div class='kish-item'><i class='fa fa-exclamation-triangle'></i> " + error + "</div>" );
            }
    
        }
    }

    S.dom(_pid, "#kish-input").on( "keypress", (e) => {
        if( e.keyCode == 13 ){
            Kish.exec( S.dom(_pid, "#kish-input").val() );
        }
    } )

    KWS.changeWindowTitle(_pid, Kish.dir);
})(pid);