<template>
    <form>
        <div class="panel is-primary">
            <p class="panel-heading">Altalanos</p>
            <div class="panel-block">
                <div class="column">
                    <div class="field">
                        <label for="name" class="label">Nev</label>
                        <div class="control">
                            <input class="input" type="text" name="name" placeholder="Nev" v-model="form.data.name">
                        </div>
                    </div>
                </div>
            </div>
            <div class="panel-block">
                <div class="column is-4">
                    <div class="field">
                        <label for="membership" class="label">Tagsag</label>
                        <div class="control">
                            <label class="radio is-block is-marginless" v-for="membership in memberships" :key="membership.id">
                                <input type="radio" name="membership" :value="membership.id" v-model="form.data.membership">
                                {{ membership.name }}
                            </label>
                        </div>
                    </div>
                </div>
                <div class="column is-4">
                    <div class="field">
                        <label for="type" class="label">Tipus</label>
                        <div class="control">
                            <label class="checkbox is-block is-marginless" v-for="type in types" :key="type.id">
                                <input type="checkbox" name="type" :value="type.id" v-model="form.data.type">
                                {{ type.name }}
                            </label>
                        </div>
                    </div>
                </div>
                <div class="column is-4">
                    <div class="field">
                        <label for="payment_method" class="label">Fizetesi mod</label>
                        <div class="control">
                            <div class="select">
                                <select name="payment_method" v-model="form.data.paymentMethod">
                                    <option value="" disabled="disabled">Valasszon</option>
                                    <option :value="payment.id" v-for="payment in payments" :key="payment.id" v-text="payment.name"></option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
                        <tr v-for="(bankAccount, index) in form.data.bankAccounts" :key="index">
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
                                            <select :name="`bank_account[${index}][bank]`" v-model="bankAccount.bank">
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
                                            :name="`bank_account[${index}][accountNumber]`"
                                            type="text"
                                            placeholder="Bankszamlaszam"
                                            v-model="bankAccount.accountNumber"
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
    </form>
</template>

<script>
import Form from '../classes/Form.js';
import $ from 'jquery';
window.$ = $;

export default {
    name: 'Form',
    data() {
        return {
            form: new Form({
                name: '',
                type: [],
                membership: '',
                paymentMethod: '',
                bankAccounts: [],
            }),
            payments: [
                {
                    id: 1,
                    name: 'Keszpenz'
                },
                {
                    id: 2,
                    name: 'Bankkartya'
                },
            ],
            memberships: [
                {
                    id: 1,
                    name: 'Belfoldi'
                },
                {
                    id: 2,
                    name: 'EU-n beluli'
                },
                {
                    id: 3,
                    name: 'EU-n kivuli'
                },
            ],
            types: [
                {
                    id: 1,
                    name: 'Vevo'
                },
                {
                    id: 2,
                    name: 'Szallito'
                },
                {
                    id: 3,
                    name: 'Maganszemely'
                },
            ],
            banks: [
                {
                    id: 1,
                    name: 'OTP'
                },
                {
                    id: 2,
                    name: 'Erste'
                },
            ],
            bankAccount: {
                bank: '',
                accountNumber: '',
            }
        }
    },
    methods: {
        add(){
            this.form.data.bankAccounts.push(Object.assign({}, this.bankAccount));
        },
        remove(index) {
            this.form.data.bankAccounts.splice(index, 1);
        }
    }
}
</script>
