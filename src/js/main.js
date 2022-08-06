import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';

window.addEventListener('DOMContentLoaded', () => {
    modals();
    tabs('.glazing_slider', '.glazing_block', '.active', '.glazing_content');
    tabs('.decoration_slider', '.no_click', '.after_click', '.decoration_content > div > div', 'focus_a');
});