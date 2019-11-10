import Component from './Component.vue';

let Plugin = {
    install(Vue, options = {}) {
        Vue.component('modal', Component);

        Vue.prototype.$modal = {
            show(name) {
                document.getElementById(name).classList.add('is-active');
            },

            hide(name) {
                document.getElementById(name).classList.remove('is-active');
            }
        }
    }
};

export default Plugin;
