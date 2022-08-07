import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
    modals();
    tabs('.glazing_slider', '.glazing_block', '.active', '.glazing_content', 'block');
    tabs('.decoration_slider', '.no_click', '.after_click', '.decoration_content > div > div', undefined, 'focus_a');
    forms();
    tabs('.popup_calc_content .balcon_icons', '.balcon_icons_img', 'do_image_more', '.big_img > img', 'inline-block');

});