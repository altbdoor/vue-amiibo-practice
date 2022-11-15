<script lang="ts" setup>
import { onMounted, ref } from 'vue';

// https://vuejs.org/guide/essentials/template-refs.html#accessing-the-refs
const filterField = ref<HTMLInputElement | null>(null);

const filterText = ref('');
const emit = defineEmits<{
    (e: 'form:filter', val: string): void;
}>();

const handleSubmit = (evt: Event) => {
    evt.preventDefault();
    emit('form:filter', filterText.value);
};

const handleReset = () => {
    filterText.value = '';
    emit('form:filter', '');
    filterField.value!.focus();
};

onMounted(() => {
    filterField.value!.focus();
});
</script>

<template>
    <form @submit="handleSubmit">
        <div class="mb-3">
            <label class="form-label">Filter series by name</label>
            <input type="text" class="form-control" v-model="filterText" ref="filterField" />
        </div>
        <div>
            <button type="button" class="btn btn-secondary me-2" @click="handleReset">Reset</button>
            <button type="submit" class="btn btn-primary">Search</button>
        </div>
    </form>
</template>
