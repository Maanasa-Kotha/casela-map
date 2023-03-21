const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

const tulawaka = document.querySelector(".tulawaka");

//this section shows the modal when the open modal button is clicked 
const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};
openModalBtn.addEventListener("click",openModal);

//this section allows the modal to be crossed out with the x
const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};
closeModalBtn.addEventListener("click", closeModal);

overlay.addEventListener("click",closeModal);

tulawaka.addEventListener("click", openModal);