<script lang="ts" setup>
import Icon from './Icon.vue';

const props = defineProps<{
    currentPage: number;
    lastPage: number;
}>();

const emit = defineEmits<{
    (e: 'pagination:update', val: number): void;
}>();
</script>

<template>
    <ul class="pagination">
        <li class="page-item" :class="{ disabled: props.currentPage === 1 }">
            <a class="page-link" @click="emit('pagination:update', 1)">
                <Icon :icon="'chevron-double-left'"></Icon>
            </a>
        </li>
        <li class="page-item" :class="{ disabled: props.currentPage === 1 }">
            <a class="page-link" @click="emit('pagination:update', props.currentPage - 1)">
                <Icon :icon="'chevron-left'"></Icon>
            </a>
        </li>
        <li class="page-item disabled">
            <span class="page-link"> {{ props.currentPage }} / {{ props.lastPage }} </span>
        </li>
        <li class="page-item" :class="{ disabled: props.currentPage === props.lastPage }">
            <a class="page-link" @click="emit('pagination:update', props.currentPage + 1)">
                <Icon :icon="'chevron-right'"></Icon>
            </a>
        </li>
        <li class="page-item" :class="{ disabled: props.currentPage === props.lastPage }">
            <a class="page-link" @click="emit('pagination:update', props.lastPage)">
                <Icon :icon="'chevron-double-right'"></Icon>
            </a>
        </li>
    </ul>
</template>

<style scoped>
a.page-link {
    cursor: pointer;
}
</style>
