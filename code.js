import ItemDeal from './ItemDeal'

let motivation_array = [
    'люблю webpack',
    'кто не работает, тот ест',
    'как не быть ленивым??',
    'Д/з само себя не сделает))'
];

let background_array = [
    'has-background-dark',
    'has-background-info',
    'has-background-link',
    'has-background-success',
    'has-background-white'
];

let IA = [
    'has-background-danger',
    'has-background-primary',
    'has-background-neutral'
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
let hero = document.querySelector(".hero");
let random_color = GR(background_array);

hero.classList.add(background_array[random_color]);
if(random_color == 4){
    let hero_h1 = document.querySelector('.hero h1')
    hero_h1.classList.remove('has-text-white')
    hero_h1.classList.add('has-text-black')
    button.classList.remove('has-background-white')
    button.classList.add('has-background-dark')
    let button_i = document.querySelector(".button_plus i")
    button_i.classList.remove('has-text-black')
    button_i.classList.add('has-text-white')
}

//функция создания нашего дела
function addDeal(){
    let content = field.value;
    if(!content){
        return;
    }
    let item = new ItemDeal(content, select.value-1);
    let item_to_JSON = JSON.stringify(item);
    localStorage.setItem(+item.now, item_to_JSON);
    GenerateDOM(item);
    field.value = '';
}

button.addEventListener("click", addDeal);
document.addEventListener("keypress", (e)=>{
    if(e.keyCode == 13){
        addDeal();
    }
})

function drawOnLoad(){
    for (let i = 0; i < localStorage.length; i++) {
        let lk_key = localStorage.key(i); // получить по номеру в объекте
        let content = localStorage.getItem(lk_key);
        let item = JSON.parse(content); 
        let tempo_dat = Date.parse(item.now);
        item.now = new Date(tempo_dat);
        GenerateDOM(item);
    }
};
drawOnLoad();


//д/з
// сделать классный дизайн, что бы срочное дело имело яркий красный цвет
// несрочное - зеленый или другой ( какой найдете в бульма)
// самое несрочное - любой нейтральный
// немного поиграть с дизайном
// все сдать пулл реквестом

function GenerateDOM(obj){
    deals.insertAdjacentHTML("afterbegin",
    `<div class="wrap_task animated bounce ${IA[obj.color]}" id="${+obj.now}">
        <div class="task is-size-4">
            <p> <span class="has-text-white"> ${obj.name}</span>
            ${obj.now.getDate()} ${Month_Array[obj.now.getMonth()]}
            </p>
        </div>
        <span class="icon is-large tr">
            <i class="fa fa-trash thrash"></i>
        </span>
    </div>
    `)
}


deals.addEventListener("click", (e) =>{
    // let trash = e.target.closest("i");
    let wrap_task = e.target.closest(".wrap_task");
    wrap_task.classList.remove("zoomInLeft");
    wrap_task.classList.add(Animation_Array[GR(Animation_Array)]);
    setTimeout(() => {
        wrap_task.remove();
        localStorage.removeItem(wrap_task.id);
    }, 1500);
    
});


function ChangeColorSelect(el){
    switch(el.value){
        case '1':
            el.className ="has-background-danger has-text-white";
            break;
        case '2':
            el.className ="has-background-primary has-text-white";
            break;
        case '3':
            el.className ="has-background-neutral has-text-white";
            break;
        default:
            break;
    }
}

window.onload = () => {
    ChangeColorSelect(select);
}

select.onchange = () =>{
    ChangeColorSelect(select);
}

function GR(arr){
    return Math.round(Math.random() * (arr.length-1));
}







