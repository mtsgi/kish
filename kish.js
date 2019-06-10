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

        this.cat = function(arg){
            let path = arg.split(" ", 1), _r = "";
            if( S.userarea[path] ) _r = JSON.stringify( System.userarea[path], null, 4 );
            else _r = "File not found: " + path;
            return _r;
        }

        this.clear = function(){
            S.dom(_pid, "#kish-out").html("");
            return false;
        }
    
        this.echo = function(arg){
            _r = arg;
            if( typeof arg == "object" ) _r = JSON.stringify(arg, null, 4);
            return _r;
        }
    
        this.exec = function(arg){
            S.dom(_pid, "#kish-out").append( "<div class='kish-item'><i class='fa fa-dollar-sign'></i> " + arg + "</div>" );
            let cmd = arg.split(" ", 1);
            let args = "";
            if( arg.indexOf(" ") != -1 ) args = arg.substring( arg.indexOf(" ") + 1 );
            if( !Kish[cmd] ){
                S.dom(_pid, "#kish-out").append( "<div class='kish-item'><i class='fa fa-angle-double-right'></i> kishコマンドは存在しません: " + cmd + "</div>" );
                return false;  
            }
            let exec = "Kish." + cmd + "('" + args + "')";
            try {
                let rtn = eval(exec)
                if( typeof rtn == "object" ) rtn = JSON.stringify(rtn, null, 4);
                if( rtn ) S.dom(_pid, "#kish-out").append( "<div class='kish-item'><span class='kish-from'>" +cmd+ "</span><i class='fa fa-angle-double-right'></i> " + rtn + "</div>" );            
            }
            catch (error) {
                S.dom(_pid, "#kish-out").append( "<div class='kish-item'><span class='kish-from'>" +cmd+ "</span><i class='fa fa-exclamation-triangle'></i> " + error + "</div>" );
            }
    
        }

        this.install = function(arg){
            let args = arg.split(" ");
            let iobj = new Object();
            $.getJSON( args[0] + "define.json" , function( data ){
                iobj.path = args[0];
                iobj.id = data.id;
                iobj.name = data.name;
                iobj.icon = args[0] + data.icon;
                System.installed.push(iobj);
                localStorage.setItem("kit-installed", JSON.stringify(System.installed));
                Kish.print("An app was installed from " + args[0], "install");
                $.getJSON("config/apps.json", System.initLauncher);

            }).fail( function() {
                Kish.print("Faild to install an app from " + args[0], "install");
            } );
            return "Start installing...";
        }
    
        this.kish = function(){
            return "kish v0.2.1";
        }

        this.ls = function(){
            let _r = "<i>path ~</i><br>";
            for( let i in System.userarea ){
                _r += "- " + i + "<br>";
            }
            return _r;
        }

        this.open = function(arg){
            if( !arg ) return "ファイル名を指定してください";
            else System.open(arg);
        }

        this.print = function(arg, from){
            let _from = "";
            if( from ){
                _from = "<span class='kish-from'>" +from+ "</span><i class='fa fa-angle-double-right'></i> "
            }
            S.dom(_pid, "#kish-out").append( "<div class='kish-item'>" + _from + arg + "</div>" );          
        }

        this.uninstall = function(arg){
            let count = 0;
            for( let i in System.installed ){
                if( System.installed[i].path == arg ){
                    System.installed.splice(i, 1);
                    count ++;
                }
            }
            localStorage.setItem("kit-installed", JSON.stringify(System.installed));
            $.getJSON("config/apps.json", System.initLauncher);
            return count + "app(s) was uninstalled from kit.";
        }
    }

    S.dom(_pid, "#kish-input").on( "keypress", (e) => {
        if( e.keyCode == 13 && S.dom(_pid, "#kish-input").val() ){
            Kish.exec( S.dom(_pid, "#kish-input").val() );
            S.dom(_pid, "#kish-input").val("");
        }
    } );

    KWS.changeWindowTitle(_pid, "(kish)"+ System.username);
})(pid);