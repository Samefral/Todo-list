let season = document.querySelector(".data-php").getAttribute("data-attr");
let list = document.querySelector(".list");

let button = document.querySelector(".add");
let input = document.querySelector(".input");

let itemValue;
let mistake = document.querySelector(".mistake");

function listChange() {
  itemValue = list.innerHTML;
  localStorage.setItem(season, itemValue);
}

list.addEventListener("click", function (evt) {
  if (evt.target.tagName === "LI") {
    evt.target.classList.toggle("checked");
    listChange();
  }
  if (evt.target.tagName === "SPAN") {
    let listItem = evt.target.parentNode;
    listItem.classList.toggle("checked");
    listChange();
  }
  if (evt.target.tagName === "BUTTON") {
    let listItem = evt.target.parentNode;
    listItem.remove();
    listChange();
  }
});

button.onclick = function () {
  let li = document.createElement("li");
  li.draggable = true;
  li.classList.add("list-item");
  let inputValue = input.value;
  let txt = document.createElement("span");
  txt.className = "item-text";
  txt.appendChild(document.createTextNode(inputValue));
  li.appendChild(txt);

  if (inputValue === "") {
    mistake.style.display = "flex";
  } else {
    mistake.style.display = "none";
    list.appendChild(li);
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.className = "close";
    li.appendChild(deleteButton);
  }

  li.addEventListener("mousedown", function (evt) {
    if (evt.button === 1) {
      li.classList.add("copied");
      setTimeout(function () {
        li.classList.remove("copied");
      }, 900);
      let str = txt.textContent;
      let el = document.createElement("textarea");
      el.value = str;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
  });

  input.value = "";
  listChange();
};

if (localStorage.getItem(season)) {
  list.innerHTML = localStorage.getItem(season);
}

input.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 13) {
    button.click();
  }
});

input.oninput = function() {
  if (input.value.charAt(0) === " ") {
    input.value = "";
  }
};

input.addEventListener("focus", function () {
  mistake.style.display = "none";
});

list.addEventListener("dragstart", function (evt) {
  evt.target.classList.add("selected");
  list.classList.remove("hover");
  setTimeout(function () {
    evt.target.style.opacity = "0";
  }, 1);
});

list.addEventListener("dragend", function (evt) {
  evt.target.classList.remove("selected");
  evt.target.style.opacity = "1";
  setTimeout(function () {
    list.classList.add("hover");
  }, 50);
  listChange();
});

list.addEventListener("dragover", function (evt) {
  evt.preventDefault();
  let activeElement = list.querySelector(".selected");
  let currentElement = evt.target;
  let isMoveable =
    activeElement !== currentElement &&
    currentElement.classList.contains("list-item");
  if (!isMoveable) {
    return;
  }
  let nextElement =
    currentElement === activeElement.nextElementSibling
      ? currentElement.nextElementSibling
      : currentElement;
  list.insertBefore(activeElement, nextElement);
});

let items = list.querySelectorAll(".list-item");
for (let item of items) {
  let text = item.querySelector(".item-text");
  item.addEventListener("mousedown", function (evt) {
    if (evt.button === 1) {
      item.classList.add("copied");
      setTimeout(function () {
        item.classList.remove("copied");
      }, 900);
      let str = text.textContent;
      let el = document.createElement("textarea");
      el.value = str;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
  });
  if (item.classList.contains("copied")) {
    item.classList.remove("copied");
  }
}
