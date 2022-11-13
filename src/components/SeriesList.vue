<script lang="ts" setup>
import type { Game } from '@/services/api.service';

const props = defineProps<{
    games: Game[];
}>();
</script>

<template>
    <div class="row">
        <div class="col-md-4 mb-3" v-for="game in props.games" :key="game.key">
            <div class="card card-body">
                <h5 class="card-title">{{ game.name }}</h5>
                <p class="card-text">
                    Code: <code>{{ game.key }}</code>
                </p>
            </div>
        </div>
    </div>
</template>
