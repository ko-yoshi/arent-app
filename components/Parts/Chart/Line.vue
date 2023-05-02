<template>
  <client-only>
    <section class="line-chart-contents">
      <Apexchart height="312" type="line" :options="chartOptions" :series="series"></Apexchart>
    </section>
  </client-only>
</template>

<script lang="ts">
  import { PropType, defineComponent } from 'vue'
  import { ApexOptions } from 'apexcharts'

  export default defineComponent({
    props: {
      xLabels: {
        type: Array as PropType<Array<string>>,
        required: true,
      },
      weightData: {
        type: Array as PropType<Array<number>>,
        required: true,
      },
      fatData: {
        type: Array as PropType<Array<number>>,
        required: true,
      },
    },
    data(): {
      chartOptions: ApexOptions
      series: ApexAxisChartSeries
    } {
      return {
        chartOptions: {
          // グラフの共通設定
          chart: {
            id: 'weight_fat_linechart',
            background: '#2E2E2E',
            zoom: {
              enabled: false,
            },
            toolbar: {
              show: false,
            },
          },
          // X軸関係の設定
          xaxis: {
            categories: this.xLabels,
            labels: {
              style: {
                colors: '#fff',
                fontFamily: 'Inter',
              },
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
          },
          // Y軸関係の設定
          yaxis: {
            show: false,
          },
          // 折れ線の色設定
          colors: ['#FFCC21', '#8FE9D0'],
          // 罫線関係の設定
          grid: {
            borderColor: '#777777',
            xaxis: {
              lines: {
                show: true,
              },
            },
            yaxis: {
              lines: {
                show: false,
              },
            },
            padding: {
              top: -20,
              right: 50,
              bottom: 0,
              left: 50,
            },
          },
          // 凡例関係の設定
          legend: {
            show: false,
          },
          // 軸と交差するポイントにマーカー関係の設定
          markers: {
            size: 4,
            strokeColors: ['#FFCC21', '#8FE9D0'],
          },
          // マウスオーバー時のツールチップ関係の設定
          tooltip: {
            y: {
              formatter(num, { seriesIndex }) {
                return seriesIndex ? `${num} %` : `${num} kg`
              },
            },
          },
        },
        series: [
          {
            name: '体重',
            data: this.weightData,
          },
          {
            name: '体脂肪率',
            data: this.fatData,
          },
        ],
      }
    },
  })
</script>
<style lang="scss" scoped>
  .line-chart-contents {
    flex-grow: 1;

    div {
      min-height: 312px !important;
    }
  }
</style>
