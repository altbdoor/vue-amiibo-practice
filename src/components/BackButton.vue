<script lang="ts" setup>
import IconVue from './Icon.vue';
</script>

<template>
    <!-- https://v2.vuejs.org/v2/guide/events.html#Event-Modifiers -->
    <a @click.prevent="$router.back()" class="link-primary">
        <IconVue :icon="'arrow-left-circle-fill'"></IconVue>
    </a>
</template>

<style scoped>
    a {
        cursor: pointer;
    }
</style>
