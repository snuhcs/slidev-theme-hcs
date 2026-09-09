<script setup>
// Any number of figures in one row. Put the HcsFigure elements in the
// `figures` slot; `cols` overrides the column widths when they should not be
// equal, the same way `ratio` works on two-cols.
defineProps({ cols: { type: String, default: '' } })
</script>
<template>
  <HcsFrame><div class="hcs-stack"><div><slot /></div><div class="hcs-figure-row" :style="cols ? { gridTemplateColumns: cols } : undefined"><slot name="figures" /></div></div></HcsFrame>
</template>
