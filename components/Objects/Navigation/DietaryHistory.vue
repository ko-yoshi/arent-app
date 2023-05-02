<template>
  <div class="dietary-history-contents">
    <PartsCardImageAndLabel
      v-for="(item, idx) in items"
      :key="idx"
      :img-src="item.imgSrc"
      :label="item.label"
      class="item"
    />
    <PartsButtonRectangle class="more-button" label="記録をもっと見る" @click="addHistoryItems" />
    <PartsButtonScrollTop class="scroll-button" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  type HistoryItem = {
    imgSrc: string
    label: string
  }

  export default defineComponent({
    data() {
      return {
        items: [] as HistoryItem[],
      }
    },
    mounted() {
      // 下記のようにassets配下を呼び出したいが、ファイルが存在しないエラーとなるので外部ファイルを利用する
      // APIで取得時はS3などのパスが格納される想定なので一旦許容して進める
      // { imgSrc: '~/assets/img/m01.jpg', label: '05.21.Morning' },
      // { imgSrc: '~/assets/img/l03.jpg', label: '05.21.Lunch' },
      // { imgSrc: '~/assets/img/d01.jpg', label: '05.21.Dinner' },
      // { imgSrc: '~/assets/img/l01.jpg', label: '05.21.Snack' },
      // { imgSrc: '~/assets/img/m01.jpg', label: '05.22.Morning' },
      // { imgSrc: '~/assets/img/l02.jpg', label: '05.22.Lunch' },
      // { imgSrc: '~/assets/img/d02.jpg', label: '05.22.Dinner' },
      // { imgSrc: '~/assets/img/s01.jpg', label: '05.22.Snack' },

      // 本来はAPIで取得する
      const items = [
        { imgSrc: 'https://source.unsplash.com/random/?Morning,food', label: '05.21.Morning' },
        { imgSrc: 'https://source.unsplash.com/random/?Lunch,food', label: '05.21.Lunch' },
        { imgSrc: 'https://source.unsplash.com/random/?Dinner,food', label: '05.21.Dinner' },
        { imgSrc: 'https://source.unsplash.com/random/?Snack,food', label: '05.21.Snack' },
        { imgSrc: 'https://source.unsplash.com/random/?Morning,food,2', label: '05.22.Morning' },
        { imgSrc: 'https://source.unsplash.com/random/?Lunch,food,2', label: '05.22.Lunch' },
        { imgSrc: 'https://source.unsplash.com/random/?Dinner,food,2', label: '05.22.Dinner' },
        { imgSrc: 'https://source.unsplash.com/random/?Snack,food,2', label: '05.22.Snack' },
      ]
      this.items.push(...items)
    },

    methods: {
      addHistoryItems() {
        // 本来はAPIで取得する
        const data = [
          { imgSrc: 'https://source.unsplash.com/random/?Morning,food,3', label: '05.23.Morning' },
          { imgSrc: 'https://source.unsplash.com/random/?Lunch,food,3', label: '05.23.Lunch' },
          { imgSrc: 'https://source.unsplash.com/random/?Dinner,food,3', label: '05.23.Dinner' },
          { imgSrc: 'https://source.unsplash.com/random/?Snack,food,3', label: '05.23.Snack' },
          { imgSrc: 'https://source.unsplash.com/random/?Morning,food,4', label: '05.24.Morning' },
          { imgSrc: 'https://source.unsplash.com/random/?Lunch,food,4', label: '05.24.Lunch' },
          { imgSrc: 'https://source.unsplash.com/random/?Dinner,food,4', label: '05.24.Dinner' },
          { imgSrc: 'https://source.unsplash.com/random/?Snack,food,4', label: '05.24.Snack' },
        ]
        this.items.push(...data)
      },
    },
  })
</script>

<style lang="scss" scoped>
  .dietary-history-contents {
    display: flex;
    flex-wrap: wrap;
    width: 960px;
    margin-top: 22px;
    margin-left: 160px;

    .item {
      margin-top: 8px;
    }

    .item:not(:first-child):not(:nth-child(4n + 1)) {
      margin-left: 8px;
    }

    .more-button {
      margin: auto;
      margin-top: 28px;
    }

    .scroll-button {
      position: fixed;
      left: 1140px;
      top: 740px;
    }
  }
</style>
