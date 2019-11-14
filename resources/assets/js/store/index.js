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
    }, {
        name: 'required',
        type: 'required',
        membership: 'required',
        paymentMethod: 'required',
        bankAccounts: 'required',
    }),
    bankAccount: {
        bank: '',
        accountNumber: '',
    },
    partners: [
        {
            id: 1,
            name: 'Kiss Janos',
            paymentMethod: 1,
            type: [1,2],
            membership: 1,
            bankAccounts: [
                {
                    bank: 1,
                    accountNumber: '11111111-11111111-11111111'
                }
            ]
        },
        {
            id: 2,
            name: 'Nagy Jozsef',
            paymentMethod: 2,
            type: [2],
            membership: 2,
            bankAccounts: [
                {
                    bank: 2,
                    accountNumber: '22222222-22222222-22222222'
                }
            ]
        },
    ],
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
    save(state) {
        state.partners.push({
            ...state.form.getData(),
            ...{
                id: state.partners[state.partners.length - 1].id + 1
            }
        });
    },
    updateFormProperty(state, payload) {
        if (state.form.errors.has(payload.name)) {
            state.form.errors.empty(payload.name);
        }

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
    fillForm(state, partner) {
        state.form.fill(partner);
    }
};

export default new Vuex.Store({
    state,
    mutations,
})
