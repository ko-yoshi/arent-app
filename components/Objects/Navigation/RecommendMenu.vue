<template>
  <div class="recommend-contents">
    <nuxt-link to="/column?type=1">
      <PartsButtonRecommend sub-title="COLUMN" label="オススメ" :active="isActive('1')" />
    </nuxt-link>
    <nuxt-link to="/column?type=2">
      <PartsButtonRecommend sub-title="DIET" label="ダイエット" :active="isActive('2')" />
    </nuxt-link>
    <nuxt-link to="/column?type=3">
      <PartsButtonRecommend sub-title="BEAUTY" label="美容" :active="isActive('3')" />
    </nuxt-link>
    <nuxt-link to="/column?type=4">
      <PartsButtonRecommend sub-title="HEALTH" label="健康" :active="isActive('4')" />
    </nuxt-link>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    methods: {
      isActive(type: '1' | '2' | '3' | '4') {
        return this.$route.query.type === type
      },
    },
  })
</script>
<style lang="scss" scoped>
  .recommend-contents {
    padding-top: 56px;
    padding-left: 160px;

    a:not(:first-child) {
      margin-left: 32px;
    }
  }
</style>
