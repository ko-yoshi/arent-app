<template>
  <section class="mypage-contents">
    <section class="chart-area">
      <PartsChartPie :late="late" />
      <PartsChartLine :x-labels="xLabels" :weight-data="weightData" :fat-data="fatData" />
    </section>
    <section class="hexagonal-menu-area">
      <ObjectsNavigationHexagonMenu />
    </section>
    <section class="dietary-history-area">
      <ObjectsNavigationDietaryHistory />
    </section>
  </section>
</template>
<script lang="ts">
  export default {
    asyncData() {
      // 本来はAPIからデータを取得する
      const res = {
        xLabels: [
          '1月',
          '2月',
          '3月',
          '4月',
          '5月',
          '6月',
          '7月',
          '8月',
          '9月',
          '10月',
          '11月',
          '12月',
        ],
        weightData: [60, 62, 61, 60, 58, 60, 59, 58, 57, 56, 55, 54],
        fatData: [20, 21, 20, 22, 23, 21, 22, 22, 21, 20, 21, 21],
      }
      const late = 70
      return {
        xLabels: res.xLabels,
        weightData: res.weightData,
        fatData: res.fatData,
        late,
      }
    },
    data() {
      return {
        xLabels: [] as string[],
        weightData: [] as number[],
        fatData: [] as number[],
        late: 0 as number,
      }
    },
  }
</script>
<style lang="scss" scoped>
  .mypage-contents {
    padding-top: 64px;
    padding-bottom: 144px;
  }
  .chart-area {
    display: flex;
    width: 100%;
    height: 100%;
  }
</style>
