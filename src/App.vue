
<template>
  <div>
    demo
  </div>
   <a-space direction="vertical" align="center">
    <a-qrcode :value="text" />
    <a-input v-model:value="text" placeholder="-" :maxlength="60" />
  </a-space>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const text = ref('https://www.antdv.com/');

</script>

<style lang="scss" scoped>

</style>