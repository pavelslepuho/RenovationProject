const modals = () => {

    function bindModal(triggerSelector, modalSelector, closeSelector) {
        let trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            modalsDialogs = document.querySelectorAll('[data-modal-dialog]'),
            listener;

        trigger.forEach(item => {
            if (item == undefined) {
                item.removeEventListener('click', listener);
            } else {
                listener = item.addEventListener('click', (e) => {
                    if (e.target) {
                        e.preventDefault();
                    }
                    modalsDialogs.forEach(item => {
                        item.style.display = 'none';
                    });

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
            }
        });
    }

    let timer;
    function showModalByTime(selector, time) {

        timer = setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    }

    function sync() {
        let height = document.querySelector('#height'),
            width = document.querySelector('#width'),
            heightV, widthV,
            windowProfile = document.querySelectorAll('.checkbox');

        height.addEventListener('input', () => {
            heightV = height.value;

            checkValue();
        });

        width.addEventListener('input', () => {
            widthV = width.value;
            checkValue();
        });

        windowProfile.forEach((item) => {
            item.addEventListener('change', () => {
                windowProfile.forEach(box => {
                    if (box.checked === true) {
                        bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close');
                    } else {
                        bindModal(undefined, undefined, undefined);
                    }
                });
            });
        });

        function checkValue() {
            if (heightV && widthV) {
                bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close');
            } else {
                bindModal(undefined, undefined, undefined);
            }
        }
    }

    bindModal('.header .contact_us_wrap .phone_link', '.popup', '.popup_close');
    bindModal('.feedback_block a', '.popup', '.popup_close');
    bindModal('.header_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.glazing_price_btn', '.popup_calc', '.popup_calc_close');
    sync();
    // bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close');
    // bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close');
    showModalByTime('.popup', 60000);

};

export default modals;