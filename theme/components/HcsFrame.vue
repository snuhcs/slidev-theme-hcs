<script setup>
import { useSlideContext } from '@slidev/client'
const { $frontmatter, $slidev } = useSlideContext()
</script>
<template>
  <div class="slidev-layout hcs-slide">
    <div class="hcs-content"><slot /></div>
    <footer class="hcs-footer">
      <span v-if="$frontmatter.number" class="hcs-page">{{ $slidev.nav.currentPage }}</span>
      <span>{{ $frontmatter.footer ?? 'HCS Lab @ SNU' }}</span>
    </footer>
  </div>
</template>
