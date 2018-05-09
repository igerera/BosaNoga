//Видимость блока корзина и профиля
function headerHiddenPanelProfileVisibility() {
    let block = document.querySelector('.header-main__hidden-panel');
    let blockActive = document.querySelector('.header-main__hidden-panel_not-hidden');
    let menu = document.querySelector('.header-main__pic_profile_menu');
    let menuActive = document.querySelector('.header-main__pic_profile_menu_is-active');
    let menu2Active = document.querySelector('.header-main__pic_basket_menu_is-active');
    if (menu2Active) {
        menu2Active.classList.toggle('header-main__pic_basket_menu_is-active');
        menu.classList.toggle('header-main__pic_profile_menu_is-active');
    } else {
        block.classList.toggle('header-main__hidden-panel_not-hidden');
        menu.classList.toggle('header-main__pic_profile_menu_is-active');
    }

}

function headerHiddenPanelBasketVisibility() {
    let block = document.querySelector('.header-main__hidden-panel');
    let blockActive = document.querySelector('.header-main__hidden-panel_not-hidden');
    let menu = document.querySelector('.header-main__pic_basket_menu');
    let menuActive = document.querySelector('.header-main__pic_basket_menu_is-active');
    let menu2Active = document.querySelector('.header-main__pic_profile_menu_is-active');
    if (menu2Active) {
        menu.classList.toggle('header-main__pic_basket_menu_is-active');
        menu2Active.classList.toggle('header-main__pic_profile_menu_is-active');
    } else {
        block.classList.toggle('header-main__hidden-panel_not-hidden');
        menu.classList.toggle('header-main__pic_basket_menu_is-active');
    }

}

let headerProfile = document.querySelector('.header-main__pic_profile');
let headerBasket = document.querySelector('.header-main__pic_basket');
headerProfile.onclick = headerHiddenPanelProfileVisibility;
headerBasket.onclick = headerHiddenPanelBasketVisibility;

//Функция видимости меню поиска
function headerMainSearchVisibility() {
    let block = document.querySelector('.header-main__search');
    let block2 = document.querySelector('.header-main__pic_search');
    block.classList.toggle('header-main__search_active');
    block2.classList.toggle('header-main__pic_search_is-hidden');
    
}

let headerSearch = document.querySelector('.header-main__pic_search');
headerSearch.onclick = headerMainSearchVisibility;

//Слайдер

window.requestAnimationFrame = (function () { // для поддержки requestAnimationFrame всеми браузерами
    return window.requestAnimationFrame ||
           function (callback) {
               return window.setTimeout(callback, 1000 / 60);
           };
})();
// функция слайдера
function slider(f, img, button, V, Vo, arrows) {
console.log(button.length);
var iii = 0,
  start = null,
  clear = 0;
function step(time) {
if (start === null) start = time;
var progress = time - start;
if (progress > V) {
  start = null;
  for (var i=0; i<img.length; i++) {
    img[i].style.zIndex = "0";
    button[i].style.opacity = "0.5";
  }
  img[iii].style.zIndex = "1";
  iii = ((iii != (img.length - 1)) ? (iii + 1) : 0);
  img[iii].style.zIndex = "2";
  img[iii].style.opacity = "0";
  button[iii].style.opacity = "1";
} else if(img[iii].style.opacity != "") {
  img[iii].style.opacity = ((progress/Vo < 1) ? (progress/Vo) : 1);
}
if(clear != "0" && progress > Vo) {} else {requestAnimationFrame(step);}
}
requestAnimationFrame(step);
f.onmouseenter = function() { if(clear == "0") clear = "1"; }  // при наведении на слайдер
f.onmouseleave = function() { if(clear == "1") {clear = "0"; requestAnimationFrame(step);} }  // курсор убран со слайдера
for (var j=0; j<button.length; j++) {  // при нажатии кнопок
button[j].onclick = function() {
  for (var i=0; i<img.length; i++) {
    img[i].style.zIndex = "0";
    button[i].style.opacity = "0.5";
  }
iii = +this.value;
  img[this.value].style.zIndex = "2";
  button[this.value].style.opacity = "1";
  console.log(this.value);
}
arrows[0].onclick = function(){
    console.log(iii); 
    img[iii].style.zIndex = "0";
    button[iii].style.opacity = "0.5";
    iii--;
    iii = ((iii < 0) ? img.length-1 : iii);
    console.log(iii); 
  img[iii].style.zIndex = "2";
  button[iii].style.opacity = "1";
}
arrows[1].onclick = function(){
    console.log(iii); 
    img[iii].style.zIndex = "0";
    button[iii].style.opacity = "0.5";
    iii++;
    iii = ((iii === img.length) ? 0 : iii);
    console.log(iii); 
  img[iii].style.zIndex = "2";
  button[iii].style.opacity = "1";
}
}
}  

var f = document.querySelector('.slider__pictures'),
a = f.getElementsByClassName('slider__image'),
button = f.getElementsByClassName('slider__circles')[0].getElementsByClassName('slider__circle'),
arrows = f.getElementsByClassName('slider__arrow');
console.log(arrows);
slider(f, a, button, '4000', '1000', arrows);


