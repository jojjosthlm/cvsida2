const courseList = document.querySelector('.courseList');
const workList = document.querySelector('.workList');
const skillsList = document.querySelector('.skillsList');

async function getData() {
    const url = '/cv.json';
    let response = await fetch(url);
    console.log('response: ', response);

    if(response.ok) {
        let json = await response.json();
        console.log('json: ', json);
        
        json.courses.forEach(element => {
            courseList.innerHTML += `
            <h3>${element.course}</h3>
            <li>${element.school}</li>
            <li>${element.desc}</li>
            <li>${element.period}</li>`;
        });

        json.work.forEach(element => {
            workList.innerHTML += `
            <li>
            <p>${element.experience}</p>
            </li>`;
        });
           
        json.skills.forEach(element => {
            skillsList.innerHTML += `
            <li>
            <p>${element.info}</p>
            </li>`;
        });

    } else {
        console.log("HTTP-Error: " + response.status);
    }
}

getData();

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