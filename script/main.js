'use strict';

const btnBurger = document.querySelector('.btn-burger');
const catalog = document.querySelector('.catalog');
/* const overlay = document.querySelector('.overlay'); */
const btnClose = document.querySelector('.btn-close');
const subCatalog = document.querySelector('.subcatalog');
const subCatalogHeader = document.querySelector('.subcatalog-header');
const btnReturn = document.querySelector('.btn-return');

const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.insertAdjacentElement('beforeend', overlay);

const openMenu = () => {
    catalog.classList.add('open');        //classList объект для работы с классами/   точку писать не надо т.к. написали уже класс лист поэтому без точки
    overlay.classList.add('active');
};

const closeMenu = () => {
    catalog.classList.remove('open');
    overlay.classList.remove('active');
    closeSubMenu();
}

const openSubMenu = (event) => {
    event.preventDefault();   //запрет перехода по ссылке на другую страницу
    const target = event.target;
    const itemList = target.closest('.catalog-list__item'); //closest если не находит сласс то поднимается вверх пока не найдет. Иначе null
    if(itemList) {
        subCatalogHeader.innerHTML = itemList.innerHTML;
        subCatalog.classList.add('subopen');
    };
};

const closeSubMenu = () => {
    subCatalog.classList.remove('subopen');
}

btnBurger.addEventListener('click', openMenu);   //по клику вызываем функцию 
btnClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
catalog.addEventListener('click', openSubMenu);
btnReturn.addEventListener('click', closeSubMenu);

 