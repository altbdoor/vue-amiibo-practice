<script lang="ts" setup>
// a bit odd how `script setup` is more defined in vue v3, but it works
// https://vuejs.org/api/sfc-script-setup.html
const links = [
    { name: 'home', text: 'Home' },
    { name: 'search', text: 'Search' },
];
</script>

<!--
<script lang="ts">
export default {
    // note, arrow functions are not so cool,
    // since vue depend on `this` a lot.
    data: () => ({
        links: [
            { name: 'home', text: 'Home' },
            { name: 'games', text: 'Games' },
        ],
    }),
};
</script>
-->

<template>
    <div class="container py-3">
        <ul class="nav nav-pills">
            <li class="nav-item" v-for="link of links" :key="link.name">
                <router-link :to="{ name: link.name }" v-slot="{ href, isActive }" custom>
                    <a :href="href" :class="{ active: isActive }" class="nav-link">{{ link.text }}</a>
                </router-link>
            </li>
        </ul>
        <hr />

        <router-view></router-view>
    </div>
</template>
