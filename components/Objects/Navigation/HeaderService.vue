<template>
  <section class="main-service-header">
    <figure class="logo">
      <nuxt-link to="/mypage">
        <img src="@/assets/img/logo.svg" alt="Healthy logo" />
      </nuxt-link>
    </figure>
    <div class="header-main">
      <nuxt-link to="/myrecord">
        <button class="memo">自分の記録</button>
      </nuxt-link>
      <nuxt-link to="/column?type=1">
        <button class="challenge">チャレンジ</button>
      </nuxt-link>
      <button class="info">
        <template v-if="noticeNum">
          <span class="badge">{{ noticeNum }}</span>
        </template>
        お知らせ
      </button>
    </div>
    <figure class="menu">
      <img src="@/assets/img/icon_menu.svg" alt="menu" />
    </figure>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    data() {
      return {
        noticeNum: 0 as number,
      }
    },
    mounted() {
      // 本来はここでAPIを叩いてお知らせの件数を取得する
      this.noticeNum = 3
    },
  })
</script>

<style lang="scss" scoped>
  .main-service-header {
    display: flex;
    align-items: center;
    height: 64px;
    background-color: #414141;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.160784);
    position: fixed;
    left: 0;
    right: 0;
    z-index: 100;
  }
  figure {
    position: absolute;
    cursor: pointer;
  }
  .logo {
    width: 144px;
    height: 64px;
    left: 160px;
  }
  .menu {
    width: 32px;
    height: 32px;
    right: 160px;
  }
  .header-main {
    button {
      position: absolute;
      top: 8px;
      bottom: 8px;
      width: 160px;
      height: 48px;
      color: #fff;
      font-size: 16px;
      background-color: transparent;

      &::before {
        content: '';
        display: inline-block;
        width: 32px;
        height: 32px;
        margin-right: 8px;
        background-size: contain;
        vertical-align: middle;
      }
    }
    .nuxt-link-active button {
      color: #ff963c;
    }

    .memo {
      left: calc(50% - 160px / 2 + 32px);
      &::before {
        background-image: url(@/assets/img/icon_memo.svg);
      }
    }
    .challenge {
      left: calc(50% - 160px / 2 + 192px);
      &::before {
        background-image: url(@/assets/img/icon_challenge.svg);
      }
    }
    .info {
      left: calc(50% - 160px / 2 + 352px);
      &::before {
        background-image: url(@/assets/img/icon_info.svg);
      }

      .badge {
        background-image: url(@/assets/img/icon_badge.svg);
        font-size: 10px;
        font-family: Inter;
        line-height: 16px;
        display: inline-block;
        position: absolute;
        margin-left: -16px;
        width: 16px;
        height: 16px;
        background-size: contain;
        vertical-align: middle;
      }
    }
  }
</style>
