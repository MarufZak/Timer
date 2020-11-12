// document - обьект , где хранится вся html страница
// document.querySelector("селектор") - подключается к одному тегу по имени селектора
// возвращается тег в виде обьекта
// console.dir(document.querySelector(".s"));

const sec = document.querySelector(".s"); // подключаемя к секундной стрелке
const min = document.querySelector(".m"); // подключаемя к минутной стрелке
const hour = document.querySelector(".h"); // подключаемя к часовой стрелке
const hourNum = document.querySelector(".hours"); // подключаемя к цифровым часам
const minNum = document.querySelector('.minutes'); // подключаемя к цифровым минутам

function clock() {
    // new Date - создает экземпляр  Date , который возвращает текущую дату и время
    let time = new Date;
    // .getSeconds - возвращает секунды
    // .getMinutes - возвращает секунды
    // .getHours - возвращает секунды
    // console.log(time.getSeconds());
    let seconds = time.getSeconds() * 6;
    let minutes = time.getMinutes() * 6;
    let hours = time.getHours() * 30;
    // console.dir(hourNum);
    sec.style.transform = `rotate(${seconds}deg)`;
    // sec.style.transition = `0.2s`

    min.style.transform = `rotate(${minutes}deg)`
    hour.style.transform = `rotate(${hours}deg)`
    hourNum.innerHTML = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
    minNum.innerHTML = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
        setTimeout(() => {
            clock()
        }, 1000);
}
clock()


// Рекурсия - когда функция вызывает саму себя

/* let i = 0;

function rec() {
    if (i < 10) {

    }

}
 */


// document.querySelectorAll("селектор") - подключается к всем тегам по указанному селектору
const links = document.querySelectorAll('.tabsItem'); // подключаемся к тегам li
const tabs = document.querySelectorAll('.tabsContentItem'); // подключаемся к табам
// console.log(links);
for (let i = 0; i < links.length; i++) {
    console.dir(links[i]);
    // HTMLelement.addEventListener("событие", функция) -привязывает функию(слушателя) с событием;
    links[i].addEventListener('click',function (event) { 
        event.preventDefault(); // метод отменяет действие по умолочанию 
        // console.log(event);
        // HTMLelement.classList.add("класс") - добавляет класс к тегу
        // HTMLelement.classList.contans("класс") - проверяет класс в теге
        // HTMLelement.classList.remove("класс") - удаляет класс в теге
        for (let x = 0; x < links.length; x++) {
            links[x].classList.remove('active'); 
            tabs[x].classList.remove('active');   
        }
        // this - возвращает тег на который нажал пользователь;
        tab(this,tabs[i])
    })
}
 
function tab(lins,tab) {
    lins.classList.add('active');
    tab.classList.add('active');
}


let btn = document.querySelector('.stopwatch__btn');
let swSec = document.querySelector('.stopwatch__seconds');
let swMin = document.querySelector('.stopwatch__minutes');
let swHour = document.querySelector('.stopwatch__hours');
let round = document.querySelector('.tabsLink__span');

function nothing() {
    
}

function time() {
    ++swSec.innerHTML
    if (swSec.innerHTML == 60) {
        swSec.innerHTML = 0;
        ++swMin.innerHTML
        if (swMin.innerHTML == 60) {
            swMin.innerHTML = 0
            ++swHour.innerHTML
        }
    }
    setTimeout(() => {
        if (btn.innerHTML == 'stop') {
            time()
        } else if (btn.innerHTML == 'clean') {
            console.log('hi');
        }
    }, 1000);

}

btn.addEventListener('click',function () {  
    btn.innerHTML = 'stop'
    round.classList.add('active')
    time()
    if (btn.innerHTML = 'stop') {
        btn.addEventListener('click',function () {  
            btn.innerHTML = 'clear'
            btn.addEventListener('click',function () {  
                swSec.innerHTML = 0;
                swMin.innerHTML = 0;
                swHour.innerHTML = 0;
            })
            round.classList.add('active_clear')
        })
    }


})