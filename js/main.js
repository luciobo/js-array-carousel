
const immages = [
    "imgs/01.webp",
    "imgs/02.webp",
    "imgs/03.webp",
    "imgs/04.webp",
    "imgs/05.webp"

];
console.log(immages);


let currentImgIndex = 0;

const sliderImgEl = document.querySelector(".slider-img");

sliderImgEl.src = immages[currentImgIndex];


const btnAvanti = document.getElementById("slider-btn-avanti");
const btnIndietro = document.getElementById("slider-btn-indietro");



btnAvanti.addEventListener("click", function () {
    console.log("bottone avanti cliccato")

    currentImgIndex++;

    if (currentImgIndex > immages.length - 1) {
        currentImgIndex = 0;
    }

    sliderImgEl.src = immages[currentImgIndex];

})


btnIndietro.addEventListener("click", function () {
    console.log("bottone indietro cliccato")

    currentImgIndex--;

    if (currentImgIndex < 0) {
        currentImgIndex = 4;
    }

    sliderImgEl.src = immages[currentImgIndex];
})