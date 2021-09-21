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