import ItemDeal from "./ItemDeal" 
import GR from "./RandomInt"

const json = require("./fixtures.json");

console.table(json);

let {motivation_array, background_array, IA, Animation_Array, Month_Array} = json;


let select = document.querySelector("select");

let field = document.querySelector("input");

let button = document.querySelector(".button_plus");
let deals = document.querySelector(".deals");
let hero = document.querySelector(".hero");
let main_slogan = document.getElementById("main_slogan");
let random_color = Math.floor(Math.random() * 6);

hero.classList.add(background_array[random_color]);
// нам нужно что бы раз в 7 секунд у нас менялась надпись
//которая рисуется к main_slogan и которая тоже h3
//main_slogan должен остаться
let motiv_h3 = document.createElement("h3");
motiv_h3.classList.add("is-size-4", "label", "has-text-centered", "has-text-white")
function slogan(){
    motiv_h3.innerHTML = motivation_array[GR(motivation_array)];
    main_slogan.insertAdjacentElement("afterend", motiv_h3);
}
slogan();
setInterval(() => {
    slogan();
}, 3000);







//функция создания нашего дела
function addDeal() {
  let content = field.value;
  if (!content) {
    return;
  }
  let item = new ItemDeal(content, select.value - 1);
  let item_to_JSON = JSON.stringify(item);
  localStorage.setItem(+item.now, item_to_JSON);
  GenerateDOM(item);

  field.value = "";
}

button.addEventListener("click", addDeal);
document.addEventListener("keypress", e => {
  if (e.keyCode == 13) {
    addDeal();
  }
});

function drawOnLoad() {
  for (let i = 0; i < localStorage.length; i++) {
    let lk_key = localStorage.key(i); // получить по номеру в объекте
    let content = localStorage.getItem(lk_key);
    let item = JSON.parse(content);
    let tempo_dat = Date.parse(item.now);
    item.now = new Date(tempo_dat);
    GenerateDOM(item);
  }
}
drawOnLoad();

//д/з
// сделать классный дизайн, что бы срочное дело имело яркий красный цвет
// несрочное - зеленый или другой ( какой найдете в бульма)
// самое несрочное - любой нейтральный
// немного поиграть с дизайном
// все сдать пулл реквестом

function GenerateDOM(obj) {
  deals.insertAdjacentHTML(
    "afterbegin",
    `<div class="wrap_task animated has-background-white bounce" id="${+obj.now}">
        <div class="task is-size-4">
            <p> <span class="${IA[obj.color]}"> ${obj.name}</span>
            ${obj.now.getDate()} ${Month_Array[obj.now.getMonth()]}
            </p>
        </div>
        <span class="icon is-large tr">
            <i class="fa fa-trash thrash"></i>
        </span>
        </div>
    `
  );
}

deals.addEventListener("click", e => {
  // let trash = e.target.closest("i");
  let wrap_task = e.target.closest(".wrap_task");
  wrap_task.classList.remove("zoomInLeft");
  wrap_task.classList.add(Animation_Array[GR(Animation_Array)]);
  setTimeout(() => {
    wrap_task.remove();
    localStorage.removeItem(wrap_task.id);
  }, 1500);
});

function ChangeColorSelect(el) {
  switch (el.value) {
    case "1":
      el.className = " has-background-danger has-text-white";
      break;
    case "2":
      el.className = " has-background-info has-text-white";
      break;
    case "3":
      el.className = " has-background-primary has-text-white";
      break;
    default:
      break;
  }
}

window.onload = () => {
  ChangeColorSelect(select);
};

select.onchange = () => {
  ChangeColorSelect(select);
};

