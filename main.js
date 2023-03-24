const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

const infoWin = document.querySelector(".iw");
const infoWinText = document.querySelector(".iw-text");

const tulawaka = document.querySelector(".tulawaka");

//shows the svg info window when clicked
const openInfoWind = function () {
    infoWin.classList.remove("hidden");
    infoWinText.classList.remove("hidden");
    overlay.classList.remove("hidden");
};
//hides the svg info window
const closeInfoWind = function () {
    infoWin.classList.add("hidden");
    infoWinText.classList.add("hidden");
    overlay.classList.add("hidden");
}

//this section shows the modal when the open modal button is clicked 
// const openModal = function () {
//     modal.classList.remove("hidden");
//     //overlay.classList.remove("hidden");
// };
// openModalBtn.addEventListener("click",openModal);

// //this section allows the modal to be crossed out with the x
// const closeModal = function () {
//     modal.classList.add("hidden");
//     //overlay.classList.add("hidden");
// };
// closeModalBtn.addEventListener("click", closeModal);

//overlay.addEventListener("click",closeModal);
overlay.addEventListener("click",closeInfoWind);

//tulawaka.addEventListener("click",openModal);
tulawaka.addEventListener("click",openInfoWind);