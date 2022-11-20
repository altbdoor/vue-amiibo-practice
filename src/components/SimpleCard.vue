<script lang="ts" setup>
const props = defineProps<{ title: string }>();
</script>

<template>
    <div class="card card-body">
        <h5 class="card-title">{{ props.title }}</h5>
        <!-- https://v2.vuejs.org/v2/guide/components-slots.html#Named-Slots -->
        <slot name="content"></slot>
    </div>
</template>
