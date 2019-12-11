class ItemDeal{
    constructor(content, color){
        this.content = content;
        this.color = color;
        this.now = new Date;
    }
}

let motivation_array = [
    'люблю webpack',
    'кто не работает, тот ест',
    'как не быть ленивым??',
    'Д/з само себя не сделает))'
];

let IA = [
    'has-text-danger',
    'has-text-warning',
    'has-text-success'
];

let Animation_Array = [
    'bounceOut',
    'rollOut',
    'rotateOut',
    "lightSpeedOut"
];
let Month_Array = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября','Ноября', 'Декабря'];

let select = document.querySelector("select");
let field = document.querySelector("input");
let button = document.querySelector(".button_plus");
let deals = document.querySelector(".deals");

//функция создания нашего дела
function addDeal(){
    let content = field.value;
    if(!content){
        return;
    }
    let item = new ItemDeal(content, select.value-1);
    let item_to_JSON = JSON.stringify(item);
    localStorage.setItem(+item.now, item_to_JSON);
    // GenerateDOM(item);
    field.value = '';
}

button.addEventListener("click", addDeal);







// самовызывающаяся функция
// при запуске приложения она отрисовывает все наши дела 
// из localStorage



