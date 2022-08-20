import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import images from './modules/images';

window.addEventListener('DOMContentLoaded', () => {

    let modalState = {
        windowNumber: 0,
        view: "tree"
    };

    modals();
    tabs('.glazing_slider', '.glazing_block', '.active', '.glazing_content', 'block');
    tabs('.decoration_slider', '.no_click', '.after_click', '.decoration_content > div > div', undefined, 'focus_a');
    forms(modalState);
    tabs('.popup_calc_content .balcon_icons', '.balcon_icons_img', 'do_image_more', '.big_img > img', 'inline-block');
    changeModalState(modalState);
    timer('2022-08-18T00:00:00');
    images();
});