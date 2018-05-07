function headerProfile() {
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

function headerBasket() {
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

function headerSearch() {
    let block = document.querySelector('.header-main__search');
    let block2 = document.querySelector('.header-main__pic_search');
    block.classList.toggle('header-main__search_active');
    block2.classList.toggle('header-main__pic_search_is-hidden');
    
}

//Видимость блока корзина и профиля
let profileHeader = document.querySelector('.header-main__pic_profile');
let basketHeader = document.querySelector('.header-main__pic_basket');
profileHeader.onclick = headerProfile;
basketHeader.onclick = headerBasket;

//Видимость меню поиска
let searchHeader = document.querySelector('.header-main__pic_search');
searchHeader.onclick = headerSearch;