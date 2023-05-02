<template>
  <button class="hexagon-button" :class="mealType">
    <client-only>
      <span class="label">{{ label }}</span>
    </client-only>
  </button>
</template>
<script lang="ts">
  import { PropType, defineComponent } from 'vue'

  export default defineComponent({
    props: {
      label: {
        type: String,
        required: true,
      },
      mealType: {
        type: String as PropType<'main' | 'snack'>,
        default: 'main',
      },
    },
    computed: {
      labelMarginLeft(): string {
        if (process.client) {
          const len = this.label.length
          if (len === 7) return '29px'
          if (len === 6) return '37px'
          if (len === 5) return '39px'
        }
        return '0'
      },
    },
  })
</script>
<style lang="scss" scoped>
  .hexagon-button {
    position: relative;
    width: 136px;
    height: 136px;
    background-image: url(@/assets/img/icon_hexagon.svg);
    background-repeat: no-repeat;
    background-color: transparent;
    background-size: contain;
    background-position: center center;

    &::after {
      content: '';
      position: absolute;
      top: 28px;
      left: 40px;
      width: 56px;
      height: 56px;
    }

    &.main::after {
      background-image: url(@/assets/img/icon_knife.svg);
    }

    &.snack::after {
      background-image: url(@/assets/img/icon_cup.svg);
    }

    .label {
      position: absolute;
      top: 83px;
      left: v-bind('labelMarginLeft');
      font-size: 20px;
      font-family: Inter;
      color: #fff;
      line-height: 24px;
    }
  }
</style>
