<template>
    <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <slot></slot>
            </div>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="close"></button>
    </div>
</template>

<script>
export default {
    name: 'modal',
    methods: {
        close() {
            this.$el.classList.remove('is-active');
        }
    }
}
</script>
