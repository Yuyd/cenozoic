<template>
  <div class="public-title">
      <h1>{{ title }}</h1>
      <hr>
  </div>
</template>
<script>
export default {
  props: {
    title: String
  },
}
</script>

<style lang="less" scoped>
.public-title {
}
</style>