<template>
  <div class="slidev-layout hcs-cover">
    <div class="hcs-cover-title"><slot /></div>
    <div class="hcs-cover-subtitle"><slot name="subtitle" /></div>
    <div class="hcs-cover-rule" />
    <div class="hcs-cover-author"><slot name="author" /></div>
    <HcsBrand variant="cover" />
  </div>
</template>
