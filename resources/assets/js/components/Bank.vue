<template>
    <div class="panel is-primary">
        <p class="panel-heading">Bankszamla</p>
        <div class="panel-block">
            <table class="table is-fullwidth">
                <thead>
                    <tr>
                        <th>Muveletek</th>
                        <th>Bank</th>
                        <th>Bankszamlaszam</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(bankAccount, index) in bankAccounts" :key="index">
                        <td>
                            <button type="button" class="button is-danger is-outlined" @click="remove(index)">
                                <span class="icon is-small">
                                    <i class="fas fa-trash"></i>
                                </span>
                            </button>
                        </td>
                        <td>
                            <div class="field">
                                <div class="control">
                                    <div class="select">
                                        <select :name="`bank_account[${index}][bank]`" @change="updateBankAccountBank(index, $event)" :value="bankAccount.bank">
                                            <option value="" disabled="disabled">Valasszon</option>
                                            <option :value="bank.id" v-for="bank in banks" :key="bank.id" v-text="bank.name"></option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="field">
                                <div class="control">
                                    <input
                                        class="input"
                                        type="text"
                                        placeholder="Bankszamlaszam"
                                        :name="`bank_account[${index}][accountNumber]`"
                                        :value="bankAccount.accountNumber"
                                        @input="updateBankAccountNumber(index, $event)"
                                        v-mask="'99999999-99999999-99999999'"
                                    >
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="panel-block">
            <button type="button" class="button is-primary" @click="add">Uj bankszamlaszam</button>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'bank',
    methods: {
        add(){
            this.$store.commit('newBankAccount');
        },
        remove(index) {
            this.$store.commit('removeBankAccount', index);
        },
        updateBankAccountNumber(index, event) {
            this.$store.commit('updateBankAccountNumber', {
                index,
                value: event.target.value
            });
        },
        updateBankAccountBank(index, event) {
            this.$store.commit('updateBankAccountBank', {
                index,
                value: event.target.value
            });
        },
    },
    computed: {
        bankAccounts: {
            get() {
                return this.$store.state.form.data.bankAccounts;
            },
            set(value) {
                console.log(value);
            },
        },
        ...mapState(['banks'])
    },
}
</script>
