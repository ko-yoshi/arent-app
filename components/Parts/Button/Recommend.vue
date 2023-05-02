<template>
  <button class="recommend-button" :class="{ active: active }">
    <p class="title">RECOMMENDED {{ subTitle }}</p>
    <hr class="divider" />
    <p class="word">{{ label }}</p>
  </button>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    props: {
      subTitle: {
        type: String,
        required: true,
      },
      label: {
        type: String,
        required: true,
      },
      active: {
        type: Boolean,
        default: false,
      },
    },
  })
</script>
<style lang="scss" scoped>
  .recommend-button {
    width: 216px;
    height: 144px;
    background-color: #2e2e2e;

    .title {
      color: #ffcc21;
      font-size: 22px;
      line-height: 27px;
      font-family: Inter;
      margin-bottom: 0;
    }

    .divider {
      width: 56px;
      color: #777;
    }

    .word {
      color: rgba(255, 255, 255, 0.7);
      font-size: 18px;
      line-height: 26px;
      margin-top: 0;
    }

    &.active {
      .divider,
      .word {
        color: #fff;
      }
    }
  }
</style>
