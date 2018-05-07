
function hoverHeader() {
    let block = document.querySelector('.header-main__hidden-panel');
    block.classList.toggle('header-main__hidden-panel_not-hidden');
}

function droppedMenuActive() {
    console.log('1');
}
//Видимость блока корзина и профиль
let profileHover = document.querySelector('.header-main__pic_profile');
let basketHover = document.querySelector('.header-main__pic_basket');
profileHover.onclick = hoverHeader;
basketHover.onclick = hoverHeader;

//Видимость выпадающего меню
let droppedMenu = document.querySelectorAll('.main-menu__item');
console.log(droppedMenu)




