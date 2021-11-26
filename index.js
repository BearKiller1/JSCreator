onload = () => {
    var button = document.getElementById("create");

    button.onclick = () => {
        var color       =   document.getElementById("color").value;
        var width       =   document.getElementById("width").value;
        var height      =   document.getElementById("height").value;
        var element     =   document.getElementById("element").value;
        var class_name  =   document.getElementById("class_name").value;
        var inner_html  =   document.getElementById("inner_html").value;
        var id_name = document.getElementById("id_name").value;
        var id_checker = !!document.getElementById(id_name);

        if(!id_checker){
            var html = document.createElement(element);
            var styles = {
                "background-color": color,
                "width": width+"px",
                "height": height+"px"
            };
            Object.assign(html.style, styles);

            html.innerHTML = inner_html;

            html.setAttribute('class',class_name);
            html.setAttribute('id',id_name);
    
            document.getElementById("output").appendChild(html);
        }
        // else{
        //     var html = document.getElementById(id_name);
            
        //     var styles = {
        //         "background-color": color,
        //         "width": width+"px",
        //         "height": height+"px"
        //     };
        //     Object.assign(html.style, styles);
            
        //     html.innerHTML = inner_html;
                
        // }
    }
};


