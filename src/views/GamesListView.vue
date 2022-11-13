<script lang="ts" setup>
import { getSeries, type Game } from '@/services/api.service';
import { ref } from 'vue';
import SeriesSearch from '@/components/SeriesSearch.vue';
import SeriesList from '@/components/SeriesList.vue';

let games: Game[] = [];
const filteredGames = ref([] as Game[]);

const filterGames = (filterText: string) => {
    if (filterText) {
        filteredGames.value = games.filter(({ name }) => name.toLowerCase().includes(filterText.toLowerCase()));
    } else {
        filteredGames.value = [...games];
    }
};

getSeries()
    .then((res) => res.amiibo)
    .then((res) => {
        games = [...res];
        filterGames('');
    });
</script>

<template>
    <div>
        <h1>Series list</h1>

        <p>List of series for Amiibo</p>

        <div class="mb-3">
            <SeriesSearch @form:filter="filterGames"></SeriesSearch>
        </div>

        <SeriesList :games="filteredGames"></SeriesList>
    </div>
</template>
