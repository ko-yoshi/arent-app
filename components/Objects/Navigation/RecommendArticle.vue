<template>
  <div class="recommend-article-contents">
    <ObjectsCardArticleImageText
      v-for="(item, idx) in items"
      :key="idx"
      :img-src="item.imgSrc"
      :label="item.label"
      :text="item.text"
      :tag="item.tag"
      class="item"
    />
    <PartsButtonRectangle class="more-button" label="コラムをもっと見る" @click="addArticleItems" />
    <PartsButtonScrollTop class="scroll-button" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    data() {
      return {
        items: [] as { imgSrc: string; label: string; text: string; tag: string }[],
      }
    },
    mounted() {
      // 本来はAPIで取得する
      const res = [
        {
          imgSrc: 'https://source.unsplash.com/random/?fish',
          label: '2023.05.01',
          text: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリットとは',
          tag: '#魚料理 #和食 #DHA',
        },
        {
          imgSrc: 'https://source.unsplash.com/random/?fish,2',
          label: '2023.05.01',
          text: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリットとは',
          tag: '#魚料理 #和食 #DHA',
        },
        {
          imgSrc: 'https://source.unsplash.com/random/?fish,3',
          label: '2023.05.01',
          text: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリットとは',
          tag: '#魚料理 #和食 #DHA',
        },
        {
          imgSrc: 'https://source.unsplash.com/random/?fish,4',
          label: '2023.05.01',
          text: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリットとは',
          tag: '#魚料理 #和食 #DHA',
        },
        {
          imgSrc: 'https://source.unsplash.com/random/?fish,5',
          label: '2023.05.01',
          text: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリットとは',
          tag: '#魚料理 #和食 #DHA',
        },
        {
          imgSrc: 'https://source.unsplash.com/random/?fish,6',
          label: '2023.05.01',
          text: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリットとは',
          tag: '#魚料理 #和食 #DHA',
        },
        {
          imgSrc: 'https://source.unsplash.com/random/?fish,7',
          label: '2023.05.01',
          text: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリットとは',
          tag: '#魚料理 #和食 #DHA',
        },
        {
          imgSrc: 'https://source.unsplash.com/random/?fish,8',
          label: '2023.05.01',
          text: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリットとは',
          tag: '#魚料理 #和食 #DHA',
        },
      ]
      this.items = res
    },
    methods: {
      addArticleItems() {
        // 本来はAPIで取得する
        const data = [
          {
            imgSrc: 'https://source.unsplash.com/random/?fish',
            label: '2023.05.01',
            text: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリットとは',
            tag: '#魚料理 #和食 #DHA',
          },
          {
            imgSrc: 'https://source.unsplash.com/random/?fish,2',
            label: '2023.05.01',
            text: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリットとは',
            tag: '#魚料理 #和食 #DHA',
          },
          {
            imgSrc: 'https://source.unsplash.com/random/?fish,3',
            label: '2023.05.01',
            text: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリットとは',
            tag: '#魚料理 #和食 #DHA',
          },
          {
            imgSrc: 'https://source.unsplash.com/random/?fish,4',
            label: '2023.05.01',
            text: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリットとは',
            tag: '#魚料理 #和食 #DHA',
          },
          {
            imgSrc: 'https://source.unsplash.com/random/?fish,5',
            label: '2023.05.01',
            text: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリットとは',
            tag: '#魚料理 #和食 #DHA',
          },
          {
            imgSrc: 'https://source.unsplash.com/random/?fish,6',
            label: '2023.05.01',
            text: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリットとは',
            tag: '#魚料理 #和食 #DHA',
          },
          {
            imgSrc: 'https://source.unsplash.com/random/?fish,7',
            label: '2023.05.01',
            text: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリットとは',
            tag: '#魚料理 #和食 #DHA',
          },
          {
            imgSrc: 'https://source.unsplash.com/random/?fish,8',
            label: '2023.05.01',
            text: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリットとは',
            tag: '#魚料理 #和食 #DHA',
          },
        ]
        this.items.push(...data)
      },
    },
  })
</script>
<style lang="scss" scoped>
  .recommend-article-contents {
    display: flex;
    flex-wrap: wrap;
    width: 960px;
    margin-top: 56px;
    margin-left: 160px;

    .item:nth-child(n + 5) {
      margin-top: 18px;
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
