/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function ()  {
    const tabs = __webpack_require__(/*! ./js/modules/tabs */ "./src/js/modules/tabs.js"),
          modal =__webpack_require__(/*! ./js/modules/modal */ "./src/js/modules/modal.js"),
          calc =__webpack_require__(/*! ./js/modules/calc */ "./src/js/modules/calc.js"),
          slider =__webpack_require__(/*! ./js/modules/slider */ "./src/js/modules/slider.js"),
          forms =__webpack_require__(/*! ./js/modules/forms */ "./src/js/modules/forms.js"),
          timer =__webpack_require__(/*! ./js/modules/timer */ "./src/js/modules/timer.js"),
          cards =__webpack_require__(/*! ./js/modules/cards */ "./src/js/modules/cards.js");
    
        tabs();
        modal();
        calc();
        slider();
        forms();
        timer();
        cards();
    });

/***/ }),

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/js/modules/cards.js":
/*!*********************************!*\
  !*** ./src/js/modules/cards.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function cards () {
    class MenuCard  {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt; 
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }
        changeToUAH () {
            this.price = this.price * this.transfer;
        }
    
        render () {
            const element = document.createElement('div');
            
            if (this.classes.length === 0) {
                this.elem = 'menu__item';
                element.classList.add(this.elem);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }
    
            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            this.parent.append(element);
        }
    }
    
    const getResource = async (url) => {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, statu:${res.status}`);
        }
        return await res.json();
    };
    
    getResource('http://localhost:3000/menu')
    .then(data => {
        data.forEach(({img, altimg, title, descr, price}) => {
         new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
        });
    });
}
module.exports = cards;

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function forms() {
    const forms = document.querySelectorAll('form');

    forms.forEach(item => {
        bindPostData(item);
    });
    
    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: data          
        });
        return await res.json();
    };
    
    const Message= {
        loading: 'img/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся.',
        failure: 'Что-то пошло не так'
    };
    
    function bindPostData (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
    
            const statusMessage = document.createElement('img');
            statusMessage.src = Message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);
    
            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-type', 'application/json');
    
            const formData = new FormData(form);
    
            const object = {};
            formData.forEach(function(value, key) {
                object[key] = value;
            });
    
            const json = JSON.stringify(Object.fromEntries(formData.entries()));
    
        postData('http://localhost:3000/requests', json)
        .then(function(data) {
            console.log(data);
            showThanksModal(Message.success);
            setTimeout(function () {
                statusMessage.remove();
            }, 2000);
        }).catch(function () {
            showThanksModal(Message.failure);
        }).finally(function(){
            form.reset();
        });
        
     
        });
    }
    
        function showThanksModal (message) {
            const prevModal = document.querySelector('.modal__dialog');
    
            prevModal.classList.add('hide');
            showModal();
        
            const thanksModal = document.createElement('div');
            thanksModal.classList.add('modal__dialog');
            thanksModal.innerHTML = `
            <div class="modal__content"> 
            <div data-close class="modal__close">&times;</div>
            <div class="modal__title">${message}</div>
            </div>
            `
            document.querySelector('.modal').append(thanksModal);
    
            setTimeout(function() {
                thanksModal.remove();
                prevModal.classList.add('show');
                prevModal.classList.remove('hide');
                closeModal();
            }, 4000);
        }
    
        fetch('http://localhost:3000/menu')
        .then(data => data.json());
}
module.exports = forms;

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal() {
    const callTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal');



function showModal () {
  modal.classList.add('show');
  modal.classList.remove('hide');

  document.body.style.overflow= 'hidden';
  clearTimeout(openModalByTime);
}

callTrigger.forEach(item => {
  item.addEventListener('click', () => {
      showModal();
  });
});

function closeModal () {
      modal.classList.remove('show');
      modal.classList.add('hide');

      document.body.style.overflow= '';
}

modal.addEventListener('click', (e) => {
  if (e.target === modal || e.target.getAttribute('data-close') == '') {
      closeModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape' && modal.classList.contains('show')) {
      closeModal();
  }
});

const openModalByTime = setTimeout(showModal, 500000);

window.addEventListener('scroll',showModalByScroll);

function showModalByScroll () {
  if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      showModal();
      window.removeEventListener('scroll', showModalByScroll);
}
}
}
module.exports = modal;

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider() {
    const slides = document.querySelectorAll('.offer__slide'),
          slider = document.querySelector('.offer__slider'),
          current = document.querySelector('#current'),
          total = document.querySelector('#total'),
          prev = document.querySelector('.offer__slider-prev'),
          next = document.querySelector('.offer__slider-next'),
          slideField = document.querySelector('.offer__slider-field'),
          slideWrapper = document.querySelector('.offer__slider-wrapper'),
          width = window.getComputedStyle(slideWrapper).width;


        let slideIndex = 1;
        let offset = 0;


        if (slides.length < 10) {
            total.textContent = `0${slides.length}`;
            current.textContent = `0${slideIndex}`;
        } else {
            total.textContent = `${slides.length}`;
            current.textContent= `${slideIndex}`;
        }

        slider.style.position = 'relative';

        const indicators = document.createElement('ol'),
              dots = [];

        indicators.classList.add('data-carousel');
        indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
        `;
        slider.append(indicators);

        for (let i =0; i <slides.length; i++){
            const dot = document.createElement('li');
            dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
            `;
            dot.setAttribute('data-slide-to', i +1);
            if (i == 0) {
                dot.style.opacity = 1;
            }
            indicators.append(dot);
            dots.push(dot);
        }

        slideField.style.width = 100 * slides.length +'%';
        slides.forEach(slide => {
        slide.style.width = width;
        });
        slideField.style.display = 'flex';
        slideField.style.transition = '0.5s all';

        slideWrapper.style.overflow ='hidden';

        current.textContent = `0${slideIndex}`;

        function deleteDigits (str) {
            return +str.replace(/\D/g, '');
        }

          next.addEventListener('click', () => {
            if (offset == (deleteDigits(width) * (slides.length -1))){
                offset = 0;
            } else {
                offset += deleteDigits(width);
            }
            slideField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == slides.length) {
                slideIndex = 1;
            } else {
                slideIndex++;
            }

            if (slideIndex < 10) {
                current.textContent= `0${slideIndex}`;
            } else {
                current.textContent = `${slideIndex}`;
            }

            dots.forEach(dot => dot.style.opacity = '.5');
            dots[slideIndex -1].style.opacity = 1;
             });
         
          prev.addEventListener('click', () => {
            if (offset == 0){
                offset = deleteDigits(width) * (slides.length -1);
            } else {
                offset -= deleteDigits(width);
            }
            slideField.style.transform = `translateX(-${offset}px)`;
            if (slideIndex == 1) {
                slideIndex = slides.length;
            } else {
                slideIndex--;
            }

            if (slideIndex < 10) {
                current.textContent= `0${slideIndex}`;
            } else {
                current.textContent = `${slideIndex}`;
            }
            dots.forEach(dot => dot.style.opacity = '.5');
            dots[slideIndex -1].style.opacity = 1;
          });

          dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                const slideTo = e.target.getAttribute('data-slide-to');

                slideIndex = slideTo;

                offset = deleteDigits(width) * (slideTo -1);


                dots.forEach(dot => dot.style.opacity = '.5');
                dots[slideIndex -1].style.opacity = 1;

                if (slideIndex < 10) {
                    current.textContent= `0${slideIndex}`;
                } else {
                    current.textContent = `${slideIndex}`;
                }

                slideField.style.transform = `translateX(-${offset}px)`;

            });
          });

}
module.exports = slider;

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
    const tabContent = document.querySelectorAll('.tabcontent'),
          tabs = document.querySelectorAll('.tabheader__item'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabs () {
        tabContent.forEach(item => {
            item.classList.remove('show');
            item.classList.add('hide', 'fade');
        });
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabs (i = 0) {
        tabContent[i].classList.add('show', 'fade');
        tabContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }
    hideTabs();
    showTabs();

	tabsParent.addEventListener('click', function(event) {
		const target = event.target;
		if(target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabs();
                    showTabs(i);
                }
            });
		}
	});
}
module.exports = tabs;

/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
    const deadline = '2021-09-25';

    function getTimeRemaining (endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / (1000*60*60*24)),
              hours = Math.floor((t / (1000*60*60)%24)),
              minutes = Math.floor((t / (1000*60))%60),
              seconds = Math.floor((t / 1000)%60);

        return {
            'total':t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero (num) {
        if (num >= 0 && num <10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock (selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateCLock, 1000);
        updateCLock();

        function updateCLock () {
            const t = getTimeRemaining(endtime);

                days.innerHTML=getZero(t.days);
                hours.innerHTML=getZero(t.hours);
                minutes.innerHTML=getZero(t.minutes);
                seconds.innerHTML=getZero(t.seconds);
        
            if (t.total <=0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock('.timer', deadline);
}
module.exports= timer;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map