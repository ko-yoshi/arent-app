<template>
  <section class="main-service-footer">
    <NuxtLink to="/mypage">会員登録</NuxtLink>
    <NuxtLink to="/mypage">運営会社</NuxtLink>
    <NuxtLink to="/mypage">利用規約</NuxtLink>
    <NuxtLink to="/mypage">個人情報の取扱について</NuxtLink>
    <NuxtLink to="/mypage">特定商取引法に基づく表記</NuxtLink>
    <NuxtLink to="/mypage">お問い合わせ</NuxtLink>
  </section>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
  .main-service-footer {
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 128px;
    background-color: #414141;
    padding: 0 160px;

    a {
      color: #fff;
      font-size: 11px;
      &:not(:first-child) {
        margin-left: 45px;
      }
    }
  }
</style>
