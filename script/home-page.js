let spring = localStorage.getItem("spring");
let summer = localStorage.getItem("summer");
let autumn = localStorage.getItem("autumn");
let winter = localStorage.getItem("winter");

let springList = document.querySelector(".spring-list");
let summerList = document.querySelector(".summer-list");
let autumnList = document.querySelector(".autumn-list");
let winterList = document.querySelector(".winter-list");

springList.innerHTML = spring;
summerList.innerHTML = summer;
autumnList.innerHTML = autumn;
winterList.innerHTML = winter;

let itemValue;

function listChange(list, season) {
  itemValue = list.innerHTML;
  localStorage.setItem(season, itemValue);
}

let lists = document.querySelectorAll(".list");
for (let list of lists) {
  list.addEventListener("click", function (evt) {
    if (evt.target.tagName === "LI") {
      evt.target.classList.toggle("checked");
    }
    if (evt.target.tagName === "SPAN") {
      let listItem = evt.target.parentNode;
      listItem.classList.toggle("checked");
    }
    if (evt.target.tagName === "BUTTON") {
      let listItem = evt.target.parentNode;
      listItem.remove();
    }
    if (list === springList) {
      listChange(springList, "spring");
    }
    if (list === summerList) {
      listChange(summerList, "summer");
    }
    if (list === autumnList) {
      listChange(autumnList, "autumn");
    }
    if (list === winterList) {
      listChange(winterList, "winter");
    }
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
    if (list === springList) {
      listChange(springList, "spring");
    }
    if (list === summerList) {
      listChange(summerList, "summer");
    }
    if (list === autumnList) {
      listChange(autumnList, "autumn");
    }
    if (list === winterList) {
      listChange(winterList, "winter");
    }
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
}

let items = document.querySelectorAll(".list-item");
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
