const Kish = new function(){
    this.dir = "/"

    this.kish = function(){
        return "kish v0.0.1";
    }

    this.echo = function(arg){
        return arg;
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