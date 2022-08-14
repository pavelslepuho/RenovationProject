const forms = (state) => {
    const form = document.querySelectorAll('form'),
        telInputs = document.querySelectorAll('input[name="user_phone"]');

    telInputs.forEach((item) => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/[^-^(^)^+\d]/gi, '');
        });
    });
        
    let message = {
        loading: 'Загрузка...',
        success: 'Готово! Мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    let div = document.createElement('div');

    div.classList.add('status');

    async function post(body, url) {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: body
        });
        let result = await response.json();
        return result;
    }

    form.forEach(item => {
        item.addEventListener('submit', async (e) => {
            e.preventDefault();

            item.append(div);
            div.textContent = message.loading;

            let data = new FormData(item);
            let objectData = Object.fromEntries(data);

            if (item.dataset.end === "popup_calc_end") {
                objectData = Object.assign(objectData, state);
                console.log(objectData);
            }

            let jsondata = JSON.stringify(objectData);
            console.log(objectData);

            console.log(state);
            console.log(jsondata);
            form.forEach(item => {
                item.reset();
            });

            post(jsondata, 'http://localhost:3000/posts').then((result) => {
                if (typeof(result) === 'object') {
                    div.textContent = message.success;
                }
            }).catch(() => {
                div.textContent = message.failure;
            }).finally(() => {
                setTimeout(() => {
                    div.remove();
                }, 3000);
            });
        });
    });


};



export default forms;