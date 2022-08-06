const modals = () => {

    function bindModal(triggerSelector, modalSelector, closeSelector) {
        let trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                // document.body.classList.add('modal-open');
                clearInterval(timer);
            });

            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                    document.body.style.overflow = 'visible';
                }
            });

            close.addEventListener('click', () => {
                modal.style.display = 'none';
                document.body.style.overflow = 'visible';
            });

        });
    }

    let timer;
    function showModalByTime(selector, time) {

        timer = setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    }

    bindModal('.header .contact_us_wrap .phone_link', '.popup', '.popup_close');
    bindModal('.feedback_block a', '.popup', '.popup_close');
    bindModal('.header_btn', '.popup_engineer', '.popup_engineer .popup_close');
    // showModalByTime('.popup', 4000);

};

export default modals;