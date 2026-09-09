<script setup>
defineProps({ imageSide: { type: String, default: 'right' }, ratio: { type: String, default: '1fr 1fr' } })
</script>
<template>
  <HcsFrame><div class="hcs-stack"><div><slot /></div><div :class="['hcs-columns', { 'image-left': imageSide === 'left' }]" :style="{ gridTemplateColumns: ratio }"><div class="hcs-column-text"><slot name="text" /></div><div class="hcs-figure-area"><slot name="image" /></div></div></div></HcsFrame>
</template>
