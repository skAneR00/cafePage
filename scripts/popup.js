const popup = document.querySelector(".popup");
const openButton = document.querySelector("#popup-open");
const closeButton = document.querySelector("#popup-close");

popup.style.display = "none";

closeButton.addEventListener('click', function () {
    popup.style.display = "none";
})

openButton.addEventListener('click', function () {
    popup.style.display = "flex";
})