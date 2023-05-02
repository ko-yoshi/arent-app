<template>
  <button class="rectangle-button" @click="$emit('click')">{{ label }}</button>
</template>
<script lang="ts">
  export default {
    props: {
      label: {
        type: String,
        required: true,
      },
    },
  }
</script>
<style lang="scss" scoped>
  .rectangle-button {
    width: 296px;
    height: 56px;
    background: linear-gradient(32.95deg, #ffcc21 8.75%, #ff963c 86.64%);
    border-radius: 4px;
    color: #fff;
    font-size: 18px;
    line-height: 26px;
    font-weight: 300;
  }
</style>
