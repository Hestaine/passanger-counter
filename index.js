let count = 0; 
let countEl =  document.getElementById("count-el");
let saveEl = document.querySelector('.save-el');

function increase() {
    count += 1;
    countEl.textContent  = count;
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;  
    console.log(count)
}
