<template>
  <div class="public-title">
    <span>{{ title }}</span>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style lang="less" scoped>
.public-title {
  span {
    font-size: 32px;
    font-weight: 700;
    background: linear-gradient(to right, #3cfdce, #e0f871);
    -webkit-background-clip: text;
    color: transparent;
  }
}
</style>