<template>
    <div class="container">
        <section class="hero">
            <div class="hero-body">
                <div class="container">
                <h1 class="title">Tesztfeladat</h1>
                </div>
            </div>
        </section>
        <section>
            <h1 class="subtitle">Partnerek</h1>
            <div class="my-2">
                <vue-button text="Uj partner" icon="plus" class="is-primary" @click="$modal.show('new_partner')"></vue-button>
            </div>
            <div class="table-container">
                <datatable class="table is-fullwidth"></datatable>
            </div>
        </section>

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
}
</script>
