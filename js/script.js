function hoverProfile() {
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
function hoverBasket() {
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


function droppedMenuActive() {
    console.log('1');
}
//Видимость блока корзина и профиль
let profileHover = document.querySelector('.header-main__pic_profile');
let basketHover = document.querySelector('.header-main__pic_basket');
profileHover.onclick = hoverProfile;
basketHover.onclick = hoverBasket;

//Видимость выпадающего меню
let droppedMenu = document.querySelectorAll('.main-menu__item');
console.log(droppedMenu)