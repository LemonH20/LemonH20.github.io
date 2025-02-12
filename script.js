function yesSize(elm) {
    let currentSize = parseInt(window.getComputedStyle(elm).fontSize);
    elm.style.Size = (currentSize + 5) + "px";
}

const yesButton = document.querySelector("#yes-Size")
const noButton = document.querySelector("#no-Button");

noButton.addEventListener("click",() => {
    yesSize(yesButton);
});