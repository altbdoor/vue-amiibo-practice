<script lang="ts" setup>
import type { Game } from '@/services/api.service';
import SimpleCard from '@/components/SimpleCard.vue';

const props = defineProps<{
    games: Game[];
}>();
</script>

<template>
    <div class="row">
        <div class="col-md-4 mb-3" v-for="game of props.games" :key="game.key">
            <SimpleCard :title="game.name">
                <template #content>
                    <p class="card-text">
                        Code: <code>{{ game.key }}</code>
                    </p>
                </template>
            </SimpleCard>
        </div>
    </div>
</template>
