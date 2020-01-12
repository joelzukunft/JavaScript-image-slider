const slider = document.querySelector(".slider");

// Przycisk "prev" do przesuwania zdjęć wstecz i przycisk "next"
const prev = slider.querySelector("#prevPicture");
const next = slider.querySelector("#nextPicture");

const mySlides = slider.querySelectorAll("li");

// indeks obrazka, który jest aktualnie widoczny
let indexOfImg = 0;
mySlides[indexOfImg].className = "visible";

// ---------------------

let list = [];
mySlides.forEach(function(el) {
    list.push(el);
})
console.log(list);

list[0].className = "visible";

// ----------------------


// eventy reagujące na kliknięcie
prev.addEventListener("click", function () {
    indexOfImg--;
    if (indexOfImg < 0) {
        indexOfImg = list.length-1
        list[0].className = "";
        list[indexOfImg].className = "visible";
    } else {
        list[indexOfImg+1].className = "";
        list[indexOfImg].className = "visible";
    }
})

next.addEventListener("click", function () {
    indexOfImg++;
    if (indexOfImg >= list.length) {
        indexOfImg = 0;
        list[list.length-1].className = "";
        list[indexOfImg].className = "visible";
    } else {
        list[indexOfImg-1].className = "";
        list[indexOfImg].className = "visible";
    }
})

