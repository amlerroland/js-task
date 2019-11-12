<template>
    <form>
        <general-fieldset></general-fieldset>
        <bank-account-fieldset></bank-account-fieldset>
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
    data() {
        return {

        };
    },
    methods: {

    },
    computed: {
        ...mapState(['banks'])
    }
}
</script>
