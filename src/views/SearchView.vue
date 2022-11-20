<script lang="ts" setup>
const searchLinks = [
    { name: 'series-list', text: 'Search by series' },
    { name: 'chara-list', text: 'List of characters' },
];
</script>

<template>
    <div>
        <h1>Search</h1>
        <p>Select from the choices below on how to find Amiibo</p>

        <ol>
            <li v-for="link in searchLinks" :key="link.name">
                <router-link :to="{ name: link.name }">{{ link.text }}</router-link>
            </li>
        </ol>
    </div>
</template>
