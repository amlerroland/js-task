<template>
    <div class="container">
        <section class="hero">
            <div class="hero-body">
                <div class="container">
                <h1 class="title">Tesztfeladat</h1>
                <h2 class="subtitle">Partnerek</h2>
                </div>
            </div>
        </section>
        <section>
            <div class="table-container">
                <!-- <datatable :data="data"></datatable> -->
            </div>
        </section>

        <button @click="newPartner">Uj partner</button>

        <modal id="new_partner">
            <partner-form></partner-form>
        </modal>
    </div>
</template>

<script>
import Datatable from './Datatable.vue';
import partnerForm from './Form.vue';
import { mapState } from 'vuex';

export default {
    name: 'App',
    components: { Datatable, partnerForm },
    methods: {
        newPartner() {
            this.$store.commit('resetForm');

            this.$modal.show('new_partner')
        },
    },
    computed: {
        ...mapState(['data'])
    }
}
</script>
