<script setup>
import snuColor from '../assets/snu-color.png'
import hcsColor from '../assets/hcs-color.png'
import snuWhite from '../assets/snu-white-full.png'
import hcsWhite from '../assets/hcs-white.png'
import hcsFull from '../assets/hcs-full-white.png'
defineProps({ variant: { type: String, default: 'cover' } })
</script>
<template>
  <div :class="['hcs-brand', `hcs-brand-${variant}`]" aria-label="Seoul National University, Human-Centered Computer Systems Lab">
    <template v-if="variant === 'cover'">
      <img class="snu-color" :src="snuColor" alt="Seoul National University" />
      <img class="hcs-color" :src="hcsColor" alt="HCS" />
    </template>
    <template v-else>
      <div class="snu-crest"><img :src="snuWhite" alt="Seoul National University" /></div>
      <img class="hcs-white" :src="variant === 'end' ? hcsFull : hcsWhite" alt="HCS" />
    </template>
  </div>
</template>
