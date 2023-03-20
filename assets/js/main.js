var listItemThird = document.querySelector('.category-menu-item:nth-child(3)');

var listItems = document.querySelector('.list-items');

var category = document.querySelector('.category');

listItemThird.onclick = function(e) {
    listItems.classList.toggle('hide-box');
    category.classList.toggle('hide-scroll');
    e.preventDefault();
}


listItems.onclick = function(e) {
    e.stopPropagation();
}

var categoryInforItemSecond = document.querySelector('.category-infor-item:nth-child(2)');
var overlayContact = document.querySelector('.overlay');

categoryInforItemSecond.onclick = function(e) {
    overlayContact.classList.remove('hide-box');
}

var close = document.querySelector('.modal-close');
close.onclick = function() {
    overlayContact.classList.add('hide-box');
}