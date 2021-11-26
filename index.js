onload = () => {
    var button = document.getElementById("create");

    button.onclick = () => {

        var element = document.getElementById("element").value;
        var class_name = document.getElementById("class_name").value;
        var id_name = document.getElementById("id_name").value;
        var id_checker = !!document.getElementById(id_name);

        if(!id_checker){
            var inner_html = document.getElementById("inner_html").value;
            var color = document.getElementById("color").value;
            console.log(color);
    
            var html = document.createElement(element);
            html.innerHTML = inner_html;
            html.style.background = color;
            html.setAttribute('class',class_name);
            html.setAttribute('id',id_name);
    
            document.getElementById("output").appendChild(html);
        }
        else{
            var dom = document.getElementById(id_name);
            console.log(dom);
            dom.style.display = "none";
        }
    }
};


