<script setup>
// Coordinates use the surrounding figure box, from 0 to 100.
import { useId } from 'vue'
const markerId = `arrow-${useId().replaceAll(':', '')}`
defineProps({ x1: { type: Number, default: 20 }, y1: { type: Number, default: 25 }, x2: { type: Number, default: 65 }, y2: { type: Number, default: 55 }, color: { type: String, default: '#d46a26' } })
</script>
<template>
  <svg class="hcs-arrow" viewBox="0 0 100 100" preserveAspectRatio="none" aria-label="Emphasis arrow" role="img">
    <defs><marker :id="markerId" markerWidth="4" markerHeight="4" refX="3.5" refY="2" orient="auto"><path d="M0 0 L4 2 L0 4 Z" :fill="color" /></marker></defs>
    <line :x1="x1" :y1="y1" :x2="x2" :y2="y2" :stroke="color" stroke-width="0.65" :marker-end="`url(#${markerId})`" />
  </svg>
</template>
