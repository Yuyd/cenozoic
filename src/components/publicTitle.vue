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
}
</script>

<style lang="less" scoped>
.public-title {
  span {
    font-size: 36px;
    font-family: LigaMontserratSemiBold;
    font-weight: 600;
    color: #ffffff;
    // background: linear-gradient(to right, #3cfdce, #e0f871);
    // -webkit-background-clip: text;
    // color: transparent;
  }
}
@media screen and (max-width: 1300px) {
  .public-title {
    span {
      font-size: .5rem;
    }
  }
}
</style>
