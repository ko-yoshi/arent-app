<template>
  <div class="article-card">
    <PartsCardImageAndLabel :img-src="imgSrc" :label="label" :width="width" :height="height" />
    <div class="text-contents">
      <span class="headline">{{ text }}</span>
      <span class="tag">{{ tag }}</span>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    props: {
      imgSrc: {
        type: String,
        required: true,
      },
      label: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
      tag: {
        type: String,
        required: true,
      },
      width: {
        type: String,
        default: '234px',
      },
      height: {
        type: String,
        default: '144.47px',
      },
    },
  })
</script>
<style lang="scss" scoped>
  .article-card {
    width: 234px;
  }
  .text-contents {
    color: #414141;
    font-size: 15px;
    font-weight: 300;
    line-height: 22px;
    margin-top: 5px;

    .headline,
    .tag {
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

    .tag {
      color: #ff963c;
      font-size: 12px;
      font-weight: 300;
      line-height: 22px;
    }
  }
</style>
