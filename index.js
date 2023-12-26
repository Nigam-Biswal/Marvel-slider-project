// marvel project

const  items = document.querySelectorAll('.slider .list .item')
const next = document.getElementById('next')
const prev = document.getElementById('prev')
const thumbnails = document.querySelectorAll('.thumbnail .item');

let countItem = items.length;
let itemActive = 0;

next.addEventListener('click', function(){
    itemActive = itemActive + 1;
    if (itemActive >= countItem) {
        itemActive = 0;
        
    }
    showSlider();
})

prev.addEventListener('click', () => {
    itemActive = itemActive - 1;
    if (itemActive < 0) {
        itemActive = countItem - 1;
    }
    showSlider();
})

// auto slider

let refreshInterval = setInterval(() => {
    next.click();
},5000);

function showSlider(){
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');


    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    clearInterval(refreshInterval);
    let refreshInterval = setInterval(() => {
        next.click();
    },5000);
}

thumbnails.forEach((thumbnail, index) => [
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
])