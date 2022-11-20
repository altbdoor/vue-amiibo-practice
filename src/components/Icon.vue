<script lang="ts" setup>
import { ref, watchEffect } from 'vue';

const props = defineProps<{ icon: string; size?: number }>();
const svgElem = ref<SVGElement | null>(null);

// https://vuejs.org/guide/essentials/watchers.html#watcheffect
watchEffect(async () => {
    const res = await fetch(`https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/icons/${props.icon}.svg`);
    const text = await res.text();

    const frag = document.createDocumentFragment();
    const wrapperDiv = document.createElement('div');
    wrapperDiv.innerHTML = text;
    frag.appendChild(wrapperDiv);

    const fragSvgElem = frag.querySelector('svg')!;
    svgElem.value!.innerHTML = fragSvgElem.innerHTML;
});
</script>

<template>
    <!-- https://icons.getbootstrap.com/ -->
    <svg
        ref="svgElem"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
    ></svg>
</template>

<style scoped>
/* copied from bootstrap icon .bi class */
svg {
    display: inline-block;
    fill: currentColor;
    vertical-align: -0.125em;
    width: 1em;
    height: 1em;
}
</style>
