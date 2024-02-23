//#################### ELEMENTOS DEL HTML QUE NECESITAMOS PARA LA LÓGICA ###################
const playBtn = document.querySelector(".playBtn");
const video = document.querySelector("video");
const progBar = document.querySelector(".progressBar");
const sliderBox = document.querySelector(".sliderBox");
const volSlider = document.querySelector("input[name='volume']")

//################## FUNCIONES ###################

function togglePlay() {
    if (video.paused){
        video.play();
    } else {
        video.pause()
    }
}

function progressUpdate (){ //Para la barra de tiempo he usado el metodo mas simple, crear una caja y cambiar su ancho en funcion del tiempo mediante una simple regla de tres, empezando desde 0 hasta el ancho del elemento video
    let percent = video.currentTime / video.duration;
    progBar.style.width = String(video.width * percent) + "px";
}

function scrub(e){ //para detectar el tiempo al que hay que saltar tambien hacemos una regla de tres
    video.currentTime = (e.offsetX / sliderBox.offsetWidth) * video.duration;
}

//################# EVENTOS #####################

volSlider.addEventListener("input", () => {video.volume = volSlider.value/100;}); //Evento de slider de volumen

playBtn.addEventListener("click", togglePlay);//cambio entre play y pause

video.addEventListener("timeupdate", progressUpdate);

video.addEventListener("pause", () => {playBtn.innerHTML = "\u23F5";});//Cambios de los iconos de play y pause
video.addEventListener("play", () => {playBtn.innerHTML = "\u23F8";});


//Esto de abajo es el scrubber, para que puedas pinchar y arrastrar para seleccionar la parte del video que ver
let mousedown = false; //para controlar que no cambie el tiempo cuando el boton no ha sido presionado en la barra de tiempo
sliderBox.addEventListener("mousemove", (e) => {
    if(mousedown){
        scrub(e)
    }
});
sliderBox.addEventListener("click", scrub);//Este ocurre solo al hacer click una vez
sliderBox.addEventListener("mousedown", () => {mousedown = true}); //al hacer click sobre la barra de tiempo se detecta y se cambia la variable "mousedown"
sliderBox.addEventListener("mouseup", () => {mousedown = false});//al leventar el click se cabia la variable a false
