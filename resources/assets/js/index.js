import bootstrap from './bootstrap';
import Vue from 'vue';
import App from './components/App.vue';
import store from './store';
import vuetify from './plugins/vuetify.js';

new Vue({
    el: '#app',
    vuetify,
    components: {App},
    store
});
