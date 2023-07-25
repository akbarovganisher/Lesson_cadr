let cadrInputNumber = document.querySelector('.cadr-number-input');
let cadrInputHolder = document.querySelector('.cadr-holder-input');
let cadrTextOne = document.querySelector('.card-number-box');
let cadrTextTwo = document.querySelector('.card-holder-name');
let cadrMonth = document.querySelector('.exp-month');
let cadrYear = document.querySelector('.exp-year');
let cadrMonthInput = document.querySelector('.month-input');
let cadrYearInput = document.querySelector('.year-input');
let cadrCvvInput = document.querySelector('.cvv-input');
let cadrStripe = document.querySelector('.stripe');
let cadrCvvText = document.querySelector('.cvv-box');
let cadrFront = document.querySelector('.front');
let cadrBack = document.querySelector('.back');

cadrInputNumber.addEventListener('input', () => {
    if(cadrInputNumber.value == '') {
        cadrTextOne.textContent = '################';
    } else{
        cadrTextOne.textContent = cadrInputNumber.value;
    }
    cadrTextOne.style.letterSpacing = '6px';
    
});

cadrInputHolder.addEventListener('input', () => {
    
    if(cadrInputHolder.value == '') {
        cadrTextTwo.textContent = 'full name';
    } else{
        cadrTextTwo.textContent = cadrInputHolder.value;
    }
});

cadrMonthInput.addEventListener('input', () => {
    cadrMonth.textContent = cadrMonthInput.value;
});

cadrYearInput.addEventListener('input', () => {
    cadrYear.textContent = cadrYearInput.value;
});

cadrCvvInput.addEventListener('click', () => {
    cadrFront.classList.toggle('show-one');
    cadrBack.classList.toggle('show-two');
});

cadrCvvInput.addEventListener('input', () => {

    if(cadrCvvInput.value == '') {
        cadrCvvText.textContent = '';
    } else{
        cadrCvvText.textContent = cadrCvvInput.value;
    }
});