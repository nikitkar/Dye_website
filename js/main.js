////////////////////////////////
//////  index
////////////////////////////////

// function myFunction(x) {
//   if (x.matches) { // Если медиа запрос совпадает
//     const rigthInner = document.querySelector('.rigthInner');
//     const rigthInner_Width = rigthInner.clientWidth;
//     const styles = 'width: ' + rigthInner_Width + 'px';
    
//     rigthInner.insertAdjacentHTML('beforebegin', '<style>.rigth:before{'+styles+'}</style>');
    
//     rigthInner.insertAdjacentHTML('afterend', '<style>.rigth:after{'+styles+'}</style>');
//   } else {
//    document.body.style.backgroundColor = "pink";
//   }
// }

// var x = window.matchMedia("(max-width: 700px)")
// myFunction(x) // Вызов функции прослушивателя во время выполнения
// x.addListener(myFunction) // Прикрепить функцию прослушивателя при изменениисостояния

////////////////////////////////
//////  prise
////////////////////////////////

function sliderFacade(){
    let offset = 0;
    let a = 1;
    let sliderToShow = 2;

    var x = window.matchMedia("(max-width: 1000px)");

    if (x.matches) { // Если медиа запрос совпадает
        sliderToShow = 1;
    }

    const sliderToScroll = 1;
    const slider = document.querySelector('.slick-wrapper-facade');
    const items = document.querySelectorAll('.slick-box-facade');
    const dots = document.querySelectorAll('.slickDots-li-facade');
    let ulDot_facade = document.querySelector('.slick-dots-facade > li:last-child');
    const itemsCount = items.length; // количество объектов 
    const itemWidth = slider.clientWidth / sliderToShow - 40; // рамер сколько надо показать объектов
    let movePosition = sliderToScroll * itemWidth + 80; // размер на соклько прокручивать

    var x = window.matchMedia("(max-width: 1400px)");
    if (x.matches) { // Если медиа запрос совпадает
        movePosition = sliderToScroll * itemWidth + 40;
    }

    var x = window.matchMedia("(max-width: 1000px)");
    if (x.matches) { // Если медиа запрос совпадает

        ulDot_facade.style.display = "block";
    }

    const btnPrev = document.querySelector('.btn__prev--facade');
    const btnPrevId = document.getElementById('btn__prev--facade');
    const btnNext = document.querySelector('.btn__next--facade');
    const btnNextId = document.getElementById('btn__next--facade');

    items.forEach((item) => {
        item.style.minWidth = itemWidth + 'px'; // вывод нужного количества объектов на экран
    });

    btnNext.addEventListener('click', function(){
        offset += movePosition;

        items.forEach((item) => {
            item.style.left = -offset + 'px';
        });

        if (dots[a].classList.contains('slickDots-active')){
            dots[a].classList.remove('slickDots-active');
        }
        else {
            dots[a].classList.add('slickDots-active');
            dots[a-1].classList.remove('slickDots-active');
        }

        // dots[a-1].classList.remove('slickDots-active');
        // dots[a].classList.add('slickDots-active');

        checkBtns();
        a++;
    });

    btnPrev.addEventListener('click', function(){
        offset -= movePosition;

        items.forEach((item) => {
            item.style.left = -offset + 'px';
        });
        a--;
        if (dots[a].classList.contains('slickDots-active')){
            dots[a].classList.remove('slickDots-active');
            dots[a-1].classList.add('slickDots-active');
        }
        else dots[a].classList.add('slickDots-active');

        // dots[a+1].classList.remove('slickDots-active');
        // dots[a-1].classList.add('slickDots-active');

        checkBtns();
        
    });

    const checkBtns = () => {
        if(btnPrev.disabled = offset === 0){
            btnPrevId.style.opacity = '.4';
        }
        else btnPrevId.style.opacity = '1';

        if(btnNext.disabled = offset >= (itemsCount - sliderToShow) * itemWidth){
            btnNextId.style.opacity = '.4';
        }
        else btnNextId.style.opacity = '1';
    }    

    checkBtns();
}

function sliderInterior(){
    let offset = 0;
    let a = 1;
    let sliderToShow = 2;

    var x = window.matchMedia("(max-width: 1000px)");

    if (x.matches) { // Если медиа запрос совпадает
        sliderToShow = 1;
    }

    const sliderToScroll = 1;
    const slider = document.querySelector('.slick-wrapper-interior');
    const items = document.querySelectorAll('.slick-box-interior');
    const dots = document.querySelectorAll('.slickDots-li-interior');
    let ulDot_interior = document.querySelector('.slick-dots-interior > li:last-child');
    const itemsCount = items.length; // количество объектов 
    const itemWidth = slider.clientWidth / sliderToShow - 40; // рамер сколько надо показать объектов
    let movePosition = sliderToScroll * itemWidth + 80; // размер на соклько прокручивать

    var x = window.matchMedia("(max-width: 1400px)");
    if (x.matches) { // Если медиа запрос совпадает
        movePosition = sliderToScroll * itemWidth + 40;
    }

    var x = window.matchMedia("(max-width: 1000px)");
    if (x.matches) { // Если медиа запрос совпадает
        ulDot_interior.style.display = "block";
    }

    const btnPrev = document.querySelector('.btn__prev--interior');
    const btnPrevId = document.getElementById('btn__prev--interior');
    const btnNext = document.querySelector('.btn__next--interior');
    const btnNextId = document.getElementById('btn__next--interior');

    items.forEach((item) => {
        item.style.minWidth = itemWidth + 'px'; // вывод нужного количества объектов на экран
    });

    btnNext.addEventListener('click', function(){
        offset += movePosition;

        items.forEach((item) => {
            item.style.left = -offset + 'px';
        });

        if (dots[a].classList.contains('slickDots-active')){
            dots[a].classList.remove('slickDots-active');
        }
        else {
            dots[a].classList.add('slickDots-active');
            dots[a-1].classList.remove('slickDots-active');
        }

        // dots[a-1].classList.remove('slickDots-active');
        // dots[a].classList.add('slickDots-active');

        checkBtns();
        a++;
    });

    btnPrev.addEventListener('click', function(){
        offset -= movePosition;

        items.forEach((item) => {
            item.style.left = -offset + 'px';
        });
        a--;
        if (dots[a].classList.contains('slickDots-active')){
            dots[a].classList.remove('slickDots-active');
            dots[a-1].classList.add('slickDots-active');
        }
        else dots[a].classList.add('slickDots-active');

        // dots[a+1].classList.remove('slickDots-active');
        // dots[a-1].classList.add('slickDots-active');

        checkBtns();
        
    });

    const checkBtns = () => {
        if(btnPrev.disabled = offset === 0){
            btnPrevId.style.opacity = '.4';
        }
        else btnPrevId.style.opacity = '1';

        if(btnNext.disabled = offset >= (itemsCount - sliderToShow) * itemWidth){
            btnNextId.style.opacity = '.4';
        }
        else btnNextId.style.opacity = '1';
    }    

    checkBtns();
}

function sliderEnamels(){
    let offset = 0;
    let a = 1;
    let sliderToShow = 2;

    var x = window.matchMedia("(max-width: 1000px)");

    if (x.matches) { // Если медиа запрос совпадает
        sliderToShow = 1;
    }

    const sliderToScroll = 1;
    const slider = document.querySelector('.slick-wrapper-enamel');
    const items = document.querySelectorAll('.slick-box-enamel');
    const dots = document.querySelectorAll('.slickDots-li-enamel');
    let ulDot_enamel = document.querySelector('.slick-dots-enamel > li:last-child');
    const itemsCount = items.length; // количество объектов 
    const itemWidth = slider.clientWidth / sliderToShow - 40; // рамер сколько надо показать объектов
    let movePosition = sliderToScroll * itemWidth + 80; // размер на соклько прокручивать
    
    var x = window.matchMedia("(max-width: 1400px)");

    var x = window.matchMedia("(max-width: 1400px)");
    if (x.matches) { // Если медиа запрос совпадает
        movePosition = sliderToScroll * itemWidth + 40;
    }

    var x = window.matchMedia("(max-width: 1000px)");
    if (x.matches) { // Если медиа запрос совпадает
        ulDot_enamel.style.display = "block";
    }

    const btnPrev = document.querySelector('.btn__prev--enamel');
    const btnPrevId = document.getElementById('btn__prev--enamel');
    const btnNext = document.querySelector('.btn__next--enamel');
    const btnNextId = document.getElementById('btn__next--enamel');

    items.forEach((item) => {
        item.style.minWidth = itemWidth + 'px'; // вывод нужного количества объектов на экран
    });

    btnNext.addEventListener('click', function(){
        offset += movePosition;

        items.forEach((item) => {
            item.style.left = -offset + 'px';
        });

        if (dots[a].classList.contains('slickDots-active')){
            dots[a].classList.remove('slickDots-active');
        }
        else {
            dots[a].classList.add('slickDots-active');
            dots[a-1].classList.remove('slickDots-active');
        }

        // dots[a-1].classList.remove('slickDots-active');
        // dots[a].classList.add('slickDots-active');

        checkBtns();
        a++;
    });

    btnPrev.addEventListener('click', function(){
        offset -= movePosition;

        items.forEach((item) => {
            item.style.left = -offset + 'px';
        });
        a--;
        if (dots[a].classList.contains('slickDots-active')){
            dots[a].classList.remove('slickDots-active');
            dots[a-1].classList.add('slickDots-active');
        }
        else dots[a].classList.add('slickDots-active');

        // dots[a+1].classList.remove('slickDots-active');
        // dots[a-1].classList.add('slickDots-active');

        checkBtns();
        
    });

    const checkBtns = () => {
        if(btnPrev.disabled = offset === 0){
            btnPrevId.style.opacity = '.4';
        }
        else btnPrevId.style.opacity = '1';

        if(btnNext.disabled = offset >= (itemsCount - sliderToShow) * itemWidth){
            btnNextId.style.opacity = '.4';
        }
        else btnNextId.style.opacity = '1';
    }    

    checkBtns();
}

function sliderPrimer(){
    let offset = 0;
    let a = 1;
    let sliderToShow = 2;

    var x = window.matchMedia("(max-width: 1000px)");

    if (x.matches) { // Если медиа запрос совпадает
        sliderToShow = 1;
    }

    const sliderToScroll = 1;
    const slider = document.querySelector('.slick-wrapper-primer');
    const items = document.querySelectorAll('.slick-box-primer');
    const dots = document.querySelectorAll('.slickDots-li-primer');
    let ulDot_primer = document.querySelector('.slick-dots-primer > li:last-child');    
    const itemsCount = items.length; // количество объектов 
    const itemWidth = slider.clientWidth / sliderToShow - 40; // рамер сколько надо показать объектов
    let movePosition = sliderToScroll * itemWidth + 80; // размер на соклько прокручивать

    var x = window.matchMedia("(max-width: 1400px)");
    if (x.matches) { // Если медиа запрос совпадает
        movePosition = sliderToScroll * itemWidth + 40;
    }

    var x = window.matchMedia("(max-width: 1000px)");
    if (x.matches) { // Если медиа запрос совпадает
        ulDot_primer.style.display = "block";
    }

    const btnPrev = document.querySelector('.btn__prev--primer');
    const btnPrevId = document.getElementById('btn__prev--primer');
    const btnNext = document.querySelector('.btn__next--primer');
    const btnNextId = document.getElementById('btn__next--primer');

    items.forEach((item) => {
        item.style.minWidth = itemWidth + 'px'; // вывод нужного количества объектов на экран
    });

    btnNext.addEventListener('click', function(){
        offset += movePosition;

        items.forEach((item) => {
            item.style.left = -offset + 'px';
        });

        if (dots[a].classList.contains('slickDots-active')){
            dots[a].classList.remove('slickDots-active');
            dots[a].classList.add('slickDots-active');
        }
        else {
            dots[a].classList.add('slickDots-active');
            dots[a-1].classList.remove('slickDots-active');
        }

        checkBtns();
        a++;
    });

    btnPrev.addEventListener('click', function(){
        offset -= movePosition;

        items.forEach((item) => {
            item.style.left = -offset + 'px';
        });

        a--;
        if (dots[a].classList.contains('slickDots-active')){
            dots[a].classList.remove('slickDots-active');
            dots[a-1].classList.add('slickDots-active');
        }
        else dots[a].classList.add('slickDots-active');

        checkBtns();
        
    });

    const checkBtns = () => {
        if(btnPrev.disabled = offset === 0){
            btnPrevId.style.opacity = '.4';
        }
        else btnPrevId.style.opacity = '1';

        if(btnNext.disabled = offset >= (itemsCount - sliderToShow) * itemWidth){
            btnNextId.style.opacity = '.4';
        }
        else btnNextId.style.opacity = '1';
    }    

    checkBtns();
}

function sliderPlaster(){
    let offset = 0;
    let a = 1;
    let sliderToShow = 2;

    var x = window.matchMedia("(max-width: 1000px)");
    if (x.matches) { // Если медиа запрос совпадает
        sliderToShow = 1;
    }

    const sliderToScroll = 1;
    const slider = document.querySelector('.slick-wrapper-plaster');
    const items = document.querySelectorAll('.slick-box-plaster');
    const dots = document.querySelectorAll('.slickDots-li-plaster');
    let ulDot_plaster = document.querySelector('.slick-dots-plaster > li:last-child');
    const itemsCount = items.length; // количество объектов 
    const itemWidth = slider.clientWidth / sliderToShow - 40; // рамер сколько надо показать объектов
    let movePosition = sliderToScroll * itemWidth + 80; // размер на соклько прокручивать

    var x = window.matchMedia("(max-width: 1400px)");
    if (x.matches) { // Если медиа запрос совпадает
        movePosition = sliderToScroll * itemWidth + 40;
    }

    var x = window.matchMedia("(max-width: 1000px)");
    if (x.matches) { // Если медиа запрос совпадает
        ulDot_plaster.style.display = "block";
    }

    const btnPrev = document.querySelector('.btn__prev--plaster');
    const btnPrevId = document.getElementById('btn__prev--plaster');
    const btnNext = document.querySelector('.btn__next--plaster');
    const btnNextId = document.getElementById('btn__next--plaster');

    items.forEach((item) => {
        item.style.minWidth = itemWidth + 'px'; // вывод нужного количества объектов на экран
    });

    btnNext.addEventListener('click', function(){
        offset += movePosition;

        items.forEach((item) => {
            item.style.left = -offset + 'px';
        });

        if (dots[a].classList.contains('slickDots-active')){
            dots[a].classList.remove('slickDots-active');
            dots[a].classList.add('slickDots-active');
        }
        else {
            dots[a].classList.add('slickDots-active');
            dots[a-1].classList.remove('slickDots-active');
        }

        checkBtns();
        a++;
    });

    btnPrev.addEventListener('click', function(){
        offset -= movePosition;

        items.forEach((item) => {
            item.style.left = -offset + 'px';
        });

        a--;
        if (dots[a].classList.contains('slickDots-active')){
            dots[a].classList.remove('slickDots-active');
            dots[a-1].classList.add('slickDots-active');
        }
        else dots[a].classList.add('slickDots-active');

        checkBtns();
        
    });

    const checkBtns = () => {
        if(btnPrev.disabled = offset === 0){
            btnPrevId.style.opacity = '.4';
        }
        else btnPrevId.style.opacity = '1';

        if(btnNext.disabled = offset >= (itemsCount - sliderToShow) * itemWidth){
            btnNextId.style.opacity = '.4';
        }
        else btnNextId.style.opacity = '1';
    }    

    checkBtns();
}

sliderFacade();
sliderInterior();
sliderEnamels();


const tabDye = document.querySelector('.tabDye');
const dye = document.querySelector('.dye');
const primer = document.querySelector('.primer');
const plaster = document.querySelector('.plaster');
const tabPrimer = document.querySelector('.tabPrimer');
const tabPlaster = document.querySelector('.tabPlaster');

tabDye.addEventListener('click', () => {
    tabDye.classList.add('activeTab');
    dye.classList.add('activeContent');

    tabPrimer.classList.remove('activeTab');
    primer.classList.remove('activeContent');

    tabPlaster.classList.remove('activeTab');
    plaster.classList.remove('activeContent');
});

tabPrimer.addEventListener('click', () => {
    tabDye.classList.remove('activeTab');
    dye.classList.remove('activeContent');

    tabPrimer.classList.add('activeTab');
    primer.classList.add('activeContent');

    tabPlaster.classList.remove('activeTab');
    plaster.classList.remove('activeContent');

    sliderPrimer();
});

tabPlaster.addEventListener('click', () => {
    tabDye.classList.remove('activeTab');
    dye.classList.remove('activeContent');

    tabPrimer.classList.remove('activeTab');
    primer.classList.remove('activeContent');

    tabPlaster.classList.add('activeTab');
    plaster.classList.add('activeContent');

    sliderPlaster()
});
