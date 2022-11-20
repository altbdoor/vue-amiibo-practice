<script lang="ts" setup></script>

<template>
    <div>
        <h1>Search</h1>
        <p>Select from the choices below on how to find Amiibo</p>

        <ol>
            <li>
                <router-link :to="{ name: 'series-list' }">Search by series</router-link>
            </li>
        </ol>
    </div>
</template>
