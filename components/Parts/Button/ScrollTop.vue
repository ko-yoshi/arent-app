<template>
  <button class="scroll-button" @click="scrollToTop"></button>
</template>
<script lang="ts">
  export default {
    methods: {
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      },
    },
  }
</script>
<style lang="scss" scoped>
  .scroll-button {
    width: 48px;
    height: 48px;
    background-color: transparent;
    background-image: url(@/assets/img/icon_scroll.svg);
  }
</style>
