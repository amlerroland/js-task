import Vue from 'vue';
import Vuex from 'vuex';
import Modal from './plugins/modal/ModalPlugin.js';
import Inputmask from 'vuejs-inputmask';
import Button from './components/Button.vue';
import Vuetify from 'vuetify/lib';

Vue.component('vue-button', Button);
Vue.use(Vuex);
Vue.use(Vuetify);
Vue.use(Modal);
Vue.use(Inputmask);
