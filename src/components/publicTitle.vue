<template>
  <div class="public-title">
      <p>{{ title }}</p>
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
  font-size: 32px;
  background: linear-gradient(to bottom, #d6f9a3, #98ebc7);
  -webkit-background-clip: text;
  color: transparent;
}
</style>