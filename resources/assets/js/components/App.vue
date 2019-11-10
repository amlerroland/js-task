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
        <button @click="$modal.show('asd')">asdasdas</button>
        <modal id="asd">
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
    computed: {
        ...mapState(['data'])
    }
}
</script>
