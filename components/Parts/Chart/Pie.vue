<template>
  <section class="pie-chart-contents">
    <svg>
      <circle cx="91" cy="91" r="90" fill="transparent" />
    </svg>
    <div>
      <span class="date">{{ date }}</span
      ><span class="rate">{{ late }}%</span>
    </div>
  </section>
</template>
<script lang="ts">
  import { getFormattedToday } from '~/utils/index'
  export default {
    props: {
      late: {
        type: Number,
        required: true,
        default: 0,
      },
    },
    data() {
      return {
        date: getFormattedToday(),
      }
    },
  }
</script>
<style lang="scss" scoped>
  .pie-chart-contents {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 540px;
    height: 312px;
    color: #fff;
    font-weight: 400;

    background-image: url(@/assets/img/d01.jpg);
    background-size: cover;
    background-position: center center;

    svg {
      position: absolute;
      width: 183px;
      height: 183px;
      transform: rotate(-90deg);
      circle {
        position: relative;
        fill: none;
        stroke-width: 3;
        stroke: #fff;
        stroke-dasharray: calc(180 * 3.14);
        stroke-dashoffset: calc((180 * 3.14) - (180 * 3.14 * v-bind('late')) / 100);
        stroke-linecap: round;
      }
    }

    .date {
      font-family: Inter;
      font-size: 18px;
      line-height: 22px;
      margin-top: 6px;
    }
    .rate {
      font-family: Inter;
      font-size: 25px;
      line-height: 30px;
      margin-left: 4px;
    }
  }
</style>
