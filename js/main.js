let share = document.querySelector(".profile__shareIcon").addEventListener("click touchstart", function () {
    document.querySelector(".sharing").style.display="flex";
});

let hide = document.querySelector(".sharing__icon").addEventListener("click touchstart", function () {
    document.querySelector(".sharing").style.display="none";
});

let shareDesktop = document.querySelector(".profile__shareIcon").addEventListener("click", function () {
    document.querySelector(".sharing").style.display="flex";
});

let hideDesktop = document.querySelector(".sharing__icon").addEventListener("click", function () {
    document.querySelector(".sharing").style.display="none";
});