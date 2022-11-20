<script lang="ts" setup>
import BackButton from '@/components/BackButton.vue';
import Pagination from '@/components/Pagination.vue';
import { getInitPageData, getCharacters, type Character } from '@/services/api.service';
import { ref, watchEffect } from 'vue';

const page = ref(1);
const pageData = ref(getInitPageData<Character>());

watchEffect(() => {
    getCharacters(page.value).then((res) => {
        pageData.value = res;
    });
});
</script>

<template>
    <div>
        <h1>
            <BackButton></BackButton>
            Character list
        </h1>
        <p>List of characters for Amiibo</p>
        <div class="alert alert-info">Shows a basic table pagination</div>

        <table class="table table-bordered">
            <thead>
                <tr>
                    <th class="text-end" style="width: 1%">#</th>
                    <th>Name</th>
                    <th>Code</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(chara, index) of pageData.records" :key="chara.key">
                    <td class="text-end">{{ (page - 1) * pageData._meta.per_page + index + 1 }}</td>
                    <td>{{ chara.name }}</td>
                    <td>
                        <code>{{ chara.key }}</code>
                    </td>
                    <td></td>
                </tr>
            </tbody>
        </table>

        <Pagination
            :current-page="pageData._meta.current_page"
            :last-page="pageData._meta.last_page"
            @pagination:update="page = $event"
        ></Pagination>
    </div>
</template>
