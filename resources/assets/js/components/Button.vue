<template>
    <button class="button is-flex is-aligned-center" type="button" @click="$emit('click')">
        <i :class="iconClass"></i>
        <span class="ml-1" v-text="text"></span>
    </button>
</template>

<script>
export default {
    name: 'vue-button',
    props: {
        icon: {
            type: String,
            required: false,
            default: 'font-awesome-flag',
        },
        type: {
            type: String,
            required: false,
            default: 'fas',
        },
        text: {
            type: String,
            required: false,
            default: 'Text',
        },
    },
    computed: {
        iconClass() {
            return `${this.type} fa-${this.icon}`;
        }
    }
}
</script>
