const changeBtn = document.querySelector("button[name='changecss']");

function changeCSS() {
    /*Funcion para alternar entre los dos documentos CSS*/
    console.log("entra");
    var currentCSS = document.querySelector("link");
    if (currentCSS.getAttribute("href") == "css/default.css") {
        currentCSS.setAttribute("href", "css/nightMode.css");
        console.log("if");
    } else {
        currentCSS.setAttribute("href", "css/default.css");
        console.log("else");
    }
}

changeBtn.addEventListener("click", changeCSS);