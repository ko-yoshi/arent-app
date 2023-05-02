<template>
  <section class="card">
    <img :src="imgSrc" :alt="label" loading="lazy" />
    <div class="date">{{ label }}</div>
  </section>
</template>

<script>
  export default {
    props: {
      imgSrc: {
        type: String,
        required: true,
      },
      label: {
        type: String,
        required: true,
      },
      width: {
        type: String,
        default: '234px',
      },
      height: {
        type: String,
        default: '234px',
      },
    },
  }
</script>

<style lang="scss" scoped>
  .card {
    position: relative;
    width: v-bind('width');
    height: v-bind('height');
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .date {
    position: absolute;
    bottom: 0;
    background-color: #ffcc21;
    color: #fff;
    font-family: Inter;
    padding: 7px 0 7px 8px;
    font-size: 15px;
    line-height: 18px;
    width: 120px;
    height: 32px;
  }
</style>
