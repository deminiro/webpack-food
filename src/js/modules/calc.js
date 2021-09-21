function Calc () {
    const res = document.querySelector('.calculating__result span');
let sex, height, weight, age, ratio;

if (localStorage.getItem('sex')) {
   sex = localStorage.getItem('sex');
} else {
    sex = 'female';
    localStorage.setItem('sex', 'female');
}

if (localStorage.getItem('ratio')) {
    ratio = localStorage.getItem('ratio');
} else {
    ratio = '1.375';
    localStorage.setItem('ratio', 1.375);
}

function calcTotal() {
    if(!sex || !height || !weight || !age || !ratio) {
        res.textContent ='____';
        return;
    }
    if (sex === 'female') {
        res.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
    } else {
        res.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
    }
}
calcTotal();

function initLocalStorage(selector, activeClass) {
    const elements = document.querySelectorAll(selector);

    elements.forEach(elem => {
        elem.classList.remove(activeClass);
        if (elem.getAttribute('id') === localStorage.getItem('sex')) {
            elem.classList.add(activeClass);
        }
        if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
            elem.classList.add(activeClass);
        }
    });
}
initLocalStorage('#gender div' , 'calculating__choose-item_active');
initLocalStorage('.calculating__choose_big div', 'calculating__choose-item_active');

function getInformationStatic (selector, activeClass) {
    const elements = document.querySelectorAll(selector);

    elements.forEach(elem => {
        elem.addEventListener('click', (e) => {
            if (e.target.getAttribute('data-ratio')) {
                ratio = +e.target.getAttribute('data-ratio');
                localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
            } else {
                sex = e.target.getAttribute('id');
                localStorage.setItem('sex', e.target.getAttribute('id'));
            }
            
            elements.forEach(item => {
                item.classList.remove(activeClass);
            });
            e.target.classList.add(activeClass);
            calcTotal();
        });
    });
}

getInformationStatic('#gender div' , 'calculating__choose-item_active');
getInformationStatic('.calculating__choose_big div', 'calculating__choose-item_active');


function getDinamicStatic (selector) {
    const input = document.querySelector(selector); 

    input.addEventListener('input', () => {
        if (input.value.match(/\D/g)) {
            input.style.border = '1px solid red';
        } else {
            input.style.border = 'none';
        }
        
        switch(input.getAttribute('id')){
            case 'height':
                height = +input.value;
            break;
            case 'weight':
                weight = +input.value;
            break;
            case 'age':
                age = +input.value;
            break;
        }
        calcTotal();
    });
}
getDinamicStatic('#height');
getDinamicStatic('#weight');
getDinamicStatic('#age');
}

module.exports = calc;