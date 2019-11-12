import Vuex from 'vuex';
import Form from '../classes/Form.js';

const state = {
    data: [],
    form: new Form({
        name: '',
        type: [],
        membership: '',
        paymentMethod: '',
        bankAccounts: [],
    }),
    bankAccount: {
        bank: '',
        accountNumber: '',
    },
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
};

const mutations = {
    resetForm(state) {
        state.form.reset();
    },
    updateFormProperty(state, payload) {
        state.form.set(payload.name, payload.value);
    },
    newBankAccount(state) {
        state.form.data.bankAccounts.push(Object.assign({}, state.bankAccount));
    },
    removeBankAccount(state, index) {
        state.form.data.bankAccounts.splice(index, 1);
    },
    updateBankAccountNumber(state, payload) {
        state.form.data.bankAccounts[payload.index].accountNumber = payload.value;
    },
    updateBankAccountBank(state, payload) {
        state.form.data.bankAccounts[payload.index].bank = payload.value;
    },
};

export default new Vuex.Store({
    state,
    mutations,
})
