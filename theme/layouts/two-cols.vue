<script setup>
defineProps({ ratio: { type: String, default: '1fr 1fr' } })
</script>
<template><HcsFrame><div class="hcs-stack"><div><slot /></div><div class="hcs-columns" :style="{ gridTemplateColumns: ratio }"><div class="hcs-column-text"><slot name="left" /></div><div class="hcs-column-text"><slot name="right" /></div></div></div></HcsFrame></template>
