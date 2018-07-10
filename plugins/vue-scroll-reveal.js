import Vue from 'vue'
import VueScrollReveal from 'vue-scroll-reveal';


Vue.use(VueScrollReveal, {
    duration: 700,
    scale: 1,
    distance: '100px',
    easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    mobile: false
});