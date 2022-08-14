let changeModalState = (state) => {

    let windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');
    
    console.log(state);

    windowForm.forEach((item, i) => {
        item.addEventListener('click', () => {
            state.windowNumber = i;
            console.log(state);
        });
    });

    windowWidth.forEach((item) => {
        item.addEventListener('input', () => {
            state.width = +item.value;
            console.log(state);
        });
    });

    windowHeight.forEach((item) => {
        item.addEventListener('input', () => {
            state.height = +item.value;
            console.log(state);
        });
    });

    windowType.forEach((item) => {
        item.addEventListener('change', () => {
            state.view = item.value;
            console.log(state);
        });
    });

    windowProfile.forEach((item) => {

        item.addEventListener('change', (e) => {
            e.preventDefault();

            if (item.checked === true) {
                state.temp = item.dataset.temp;
            } else if (item.checked === false) {
                delete state.temp;
            }
            windowProfile.forEach((box) => {
                if (box.dataset.temp != state.temp) {
                    box.checked = false;
                }
            });

            console.log(state);

        });
        
    });

};

export default changeModalState;