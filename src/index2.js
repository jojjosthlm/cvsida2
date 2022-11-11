const modal = document.querySelector('.modal');
const trigger = document.querySelector('.trigger');
const closeButton = document.querySelector('.close-button');

function toggleModal(){
    modal.classList.toggle('show-modal');
}

function windowsOnclick(event) {
    if (event.target === modal){
        toggleModal();
    }
}

trigger.addEventListener('click', toggleModal); //Här är något felfel..
closeButton.addEventListener('click', toggleModal); // Kan detta vara felet, att addEventListner används två gånger???
window.addEventListener('click', windowsOnclick);