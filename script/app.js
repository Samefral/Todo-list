let season = document.querySelector('.data-php').getAttribute('data-attr');
let list = document.querySelector('.list');

let button = document.querySelector('.add');
let input = document.querySelector('.input');

let itemValue;
let mistake = document.querySelector('.mistake');

function listChange() {
    itemValue = list.innerHTML;
    localStorage.setItem(season, itemValue);
}

list.addEventListener('click', function(evt) {
    if (evt.target.tagName === "LI") {
        evt.target.classList.toggle('checked');
        listChange();
    } else if (evt.target.tagName === "SPAN") {
        let listItem = evt.target.parentNode;
        listItem.remove();
        listChange();
    }
})

button.onclick = function() {

    let li = document.createElement('li');
    let inputValue = input.value;
    let txt = document.createTextNode(inputValue);
    li.appendChild(txt);

    if (inputValue === "") {
        mistake.style.display = "flex";
    } else {
        mistake.style.display = "none";
        list.appendChild(li);
        let deleteButton = document.createElement('span');
        deleteButton.textContent = "X";
        deleteButton.className = "close";
        li.appendChild(deleteButton);

    }

    input.value = '';
    listChange();
}

if (localStorage.getItem(season)) {
    list.innerHTML = localStorage.getItem(season);
}

input.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 13) {
        button.click();
    }
})