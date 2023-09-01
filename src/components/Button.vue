<script setup>
    import { defineProps } from 'vue'
    const props = defineProps({
        background: String,
        color: String,
    })
</script>

<template>
    <a id="button" :style="{color: '#' + color, backgroundColor: '#' + background}">
        <slot> </slot>
    </a>
</template>

<style scoped>
#button {
    display: block;
    margin: auto;
    line-height: 32px;
    width: 131px;
    text-align: center;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin-bottom: 12px;
    font-weight: 600;
    font-size: 12px;
}
@media screen and (min-width: 780px) {
    #button {
        margin: 0;
    }
}
</style>