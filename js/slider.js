//Aqui esta toda la lógica del sistema de fotos, porele que se pulsa un botón que cambia la foto cuando se llama al 
//evento cuando se hace click, bastante simple

const sliderImg = document.querySelector('#imgSlider img');
const next = document.querySelector("#imgSlider h2[name='next']");
const back = document.querySelector("#imgSlider h2[name='back']");
const photoList = ["1.png", "2.jpg","3.jpg","4.jpg","5.jpg"];
let i = 0;
next.addEventListener("click", ()=>{
    i++;
    if (i < photoList.length){
        sliderImg.src = "img/sliderPhotos/"+photoList[i];
    } else {
        i = 0;
        sliderImg.src = "img/sliderPhotos/"+photoList[i];
    }
});
back.addEventListener("click", ()=>{
    i--;
    if (i >= 0){
        sliderImg.src = "img/sliderPhotos/"+photoList[i];
    } else {
        i = photoList.length -1;
        sliderImg.src = "img/sliderPhotos/"+photoList[i];
    }
});