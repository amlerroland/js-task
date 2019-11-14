<template>
    <div class="panel is-primary">
        <p class="panel-heading">Altalanos</p>
        <div class="panel-block">
            <div class="column">
                <div class="field">
                    <label for="name" class="label">Nev</label>
                    <div class="control">
                        <input
                            class="input"
                            type="text"
                            name="name"
                            placeholder="Nev"
                            v-model="name"
                            :class="{'is-danger': errors.has('name')}"
                        >
                    </div>
                    <p v-if="errors.has('name')" class="help is-danger" v-text="errors.get('name').join(', ')"></p>
                </div>
            </div>
        </div>
        <div class="panel-block">
            <div class="column is-4">
                <div class="field">
                    <label for="membership" class="label">Tagsag</label>
                    <div class="control">
                        <label class="radio is-block is-marginless" v-for="membership in memberships" :key="membership.id">
                            <input
                                type="radio"
                                name="membership"
                                :value="membership.id"
                                v-model="formMembership"
                                :class="{'is-danger': errors.has('membership')}"
                            >
                            {{ membership.name }}
                        </label>
                    </div>
                    <p v-if="errors.has('membership')" class="help is-danger" v-text="errors.get('membership').join(', ')"></p>
                </div>
            </div>
            <div class="column is-4">
                <div class="field">
                    <label for="type" class="label">Tipus</label>
                    <div class="control">
                        <label class="checkbox is-block is-marginless" v-for="type in types" :key="type.id">
                            <input
                                type="checkbox"
                                name="type"
                                :value="type.id"
                                v-model="formType"
                                :class="{'is-danger': errors.has('type')}"
                            >
                            {{ type.name }}
                        </label>
                    </div>
                    <p v-if="errors.has('type')" class="help is-danger" v-text="errors.get('type').join(', ')"></p>
                </div>
            </div>
            <div class="column is-4">
                <div class="field">
                    <label for="payment_method" class="label">Fizetesi mod</label>
                    <div class="control">
                        <div class="select">
                            <select
                                name="payment_method"
                                v-model="paymentMethod"
                                :class="{'is-danger': errors.has('paymentMethod')}"
                            >
                                <option value="" disabled="disabled">Valasszon</option>
                                <option :value="payment.id" v-for="payment in payments" :key="payment.id" v-text="payment.name"></option>
                            </select>
                        </div>
                    </div>
                    <p v-if="errors.has('paymentMethod')" class="help is-danger" v-text="errors.get('paymentMethod').join(', ')"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'general',
    computed: {
        name: {
            get() {
                return this.$store.state.form.data.name;
            },
            set(value) {
                this.$store.commit('updateFormProperty', {name: 'name', value});
            }
        },
        formMembership: {
            get() {
                return this.$store.state.form.data.membership;
            },
            set(value) {
                this.$store.commit('updateFormProperty', {name: 'membership', value});
            }
        },
        formType: {
            get() {
                return this.$store.state.form.data.type;
            },
            set(value) {
                this.$store.commit('updateFormProperty', {name: 'type', value});
            }
        },
        paymentMethod: {
            get() {
                return this.$store.state.form.data.paymentMethod;
            },
            set(value) {
                this.$store.commit('updateFormProperty', {name: 'paymentMethod', value});
            }
        },
        errors(){
            return this.$store.state.form.errors;
        },
        ...mapState(['payments', 'types', 'memberships'])
    }
}
</script>
