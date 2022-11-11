const courseList = document.querySelector('.courseList');
const workList = document.querySelector('.workList');
const skillsList = document.querySelector('.skillsList');

async function getData() {
    const url = './cv.json';
    let response = await fetch(url);
    console.log('response: ', response);

    if(response.ok) {
        let json = await response.json();
        console.log('json: ', json);
        
        json.courses.forEach(element => {
            courseList.innerHTML += `
            <h4>${element.course}</h4>
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

