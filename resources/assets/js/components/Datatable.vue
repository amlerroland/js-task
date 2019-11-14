<template>
    <v-data-table
        :headers="headers"
        :items="partners"
        :items-per-page="5"
        @click:row="rowClicked"
    >
        <template v-slot:item.membership="{ item }">
            {{ getMembership(item) }}
        </template>
        <template v-slot:item.type="{ item }">
            {{ getType(item) }}
        </template>
        <template v-slot:item.paymentMethod="{ item }">
            {{ getPaymentMethod(item) }}
        </template>
    </v-data-table>
</template>

<script>
import * as VDataTable from 'vuetify/es5/components/VDataTable';
import { mapState } from 'vuex';

export default {
    name: 'datatable',
    components: {...VDataTable},
    data() {
        return {
            headers: [
                {text: '#', value: 'id'},
                {text: 'Nev', value: 'name'},
                {text: 'Tagsag', value: 'membership'},
                {text: 'Tipus', value: 'type'},
                {text: 'Fizetesi mod', value: 'paymentMethod'},
            ],
        }
    },
    methods: {
        rowClicked(partner) {
            this.$store.commit('fillForm', partner);

            this.$modal.show('new_partner');
        },
        getMembership(item) {
            return this.memberships.find(membership => item.membership == membership.id).name;
        },
        getType(item) {
            return this.types.filter(type => item.type.includes(type.id)).map(type => type.name).join(', ');
        },
        getPaymentMethod(item) {
            return this.payments.find(payment => item.paymentMethod == payment.id).name;
        },
    },
    computed: {
        ...mapState(['partners', 'types', 'memberships', 'payments'])
    }
}
</script>
