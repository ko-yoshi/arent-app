<template>
  <section class="column-contents">
    <ObjectsNavigationRecommendMenu />
    <ObjectsNavigationRecommendArticle />
  </section>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    mounted() {
      if (!this.$route.query.type) {
        this.$router.push('/column?type=1')
      }
    },
  })
</script>
<style lang="scss" scoped>
  .column-contents {
    padding-top: 64px;
    padding-bottom: 144px;
  }
</style>
