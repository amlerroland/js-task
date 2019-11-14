<template>
    <form>
        <general-fieldset></general-fieldset>
        <bank-account-fieldset></bank-account-fieldset>
        <div class="btn-container is-flex">
            <vue-button text="Mentes" icon="save" class="is-primary" @click="save"></vue-button>
            <vue-button text="Megse" icon="ban" @click="cancel"></vue-button>
        </div>
    </form>
</template>

<script>
import Form from '../classes/Form.js';
import { mapState } from 'vuex';
import generalFieldset from './General.vue';
import bankAccountFieldset from './Bank.vue';

export default {
    name: 'Form',
    components: { generalFieldset, bankAccountFieldset },
    methods: {
        cancel() {
            this.$store.commit('resetForm');

            this.$modal.hide('new_partner');
        },
        save() {
            if (this.failsValidation()) {
                return;
            }

            this.$store.commit('save');

            this.$store.commit('resetForm');

            this.$modal.hide('new_partner');
        },
        failsValidation() {
            try {
                this.form.validate();

                return false;
            } catch (error) {
                console.log(error);
                return true;
            }
        }
    },
    computed: {
        ...mapState(['form'])
    }
}
</script>
