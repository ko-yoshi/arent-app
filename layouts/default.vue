<!-- layouts/default.vue -->

<template>
  <div class="container">
    <ObjectsNavigationHeaderService :notice-badge="7" />
    <nuxt />
    <ObjectsNavigationFooterService />
  </div>
</template>
<style lang="scss" scoped>
  .container {
    height: 1280px;
    width: 100%;
  }
</style>
