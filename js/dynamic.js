let names = [
    "Bryan","Celina","Lance","Andrea","Jonathan","Tyler"
];

const addName = () => {
    let nameCtrl = document.getElementById('newname');
    let name = nameCtrl.value;
    names.push(name);
    loadDiv();
}

const loadDiv = () => {
    let divCtrl = document.getElementById("ps");
    divCtrl.innerHTML = "";
    
    for(let name of names){
        let p = `<p>${name}</p>`;
        divCtrl.innerHTML += p;
    }
}