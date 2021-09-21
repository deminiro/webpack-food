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