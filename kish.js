((_pid) => {
    const Kish = new function(){
        this.kish = function(){
            //S.alert("kish command is running");
            return "kish v0.0.1";
        }
    }
    S.dom(_pid, "#kish-input").on( "keypress", (e) => {
        if( e.keyCode == 13 ){
            let input = S.dom(_pid, "#kish-input").val().split(" ");
            //Notification.push(input.shift(), input);
            let cmd = input.shift();
            let exec = "Kish." + cmd + "(" + input + ")";
            try {
                let rtn = eval(exec);
                if( typeof rtn == "object" ) rtn = JSON.stringify(rtn);
                S.dom(_pid, "#kish-out").append( "<div class='kish-item'>" + rtn + "</div>" );            
            } catch (error) {
                S.dom(_pid, "#kish-out").append( "<div class='kish-item'>" + error + "</div>" );
            }

        }
    } )
})(pid);