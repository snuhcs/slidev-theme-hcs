<script setup>
import { computed } from 'vue'
const props = defineProps({ src: { type: String, required: true }, alt: { type: String, required: true }, caption: String, fit: { type: String, default: 'contain' } })
// A deck's own public/ is served under the deck's base path, not the site root,
// so a figure written as /overview.png has to be resolved against BASE_URL.
// Vite guarantees BASE_URL ends with a slash: / under the dev server,
// /<deck path>/ in a build.
const href = computed(() => (props.src.startsWith('/') ? import.meta.env.BASE_URL + props.src.slice(1) : props.src))
</script>
<template>
  <figure class="hcs-figure"><div class="hcs-image-box"><img :src="href" :alt="alt" :style="{ objectFit: fit }" /><slot /></div><figcaption v-if="caption">{{ caption }}</figcaption></figure>
</template>
