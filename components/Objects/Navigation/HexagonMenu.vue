<template>
  <div class="hexagonal-menu-contents">
    <PartsButtonHexagon label="Morning" />
    <PartsButtonHexagon label="Lunch" />
    <PartsButtonHexagon label="Dinner" />
    <PartsButtonHexagon label="Snack" meal-type="snack" />
  </div>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
  .hexagonal-menu-contents {
    display: flex;
    padding-left: 282px;
    padding-top: 25px;

    button:not(:first-child) {
      margin-left: 84px;
    }
  }
</style>
