<template>
  <div id="change-over">
    <span
      id=""
      v-for="(z, index) in filter"
      :class="{ tabactive: filt == index }"
      :key="index"
      @click="gofilter(index)"
    >
      {{ z }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    filter: Array,
  },

  data() {
    return {
      filt: 0,
    }
  },

  methods: {
    gofilter(index) {
      this.filt = index
      this.$emit('onTabSwitch', index)
    },
  },
}
</script>

<style lang="less" scoped>
div {
  span {
    font-weight: 700;
    font-size: 18px;
    margin-right: 20px;
    cursor: pointer;
  }
  .tabactive {
    color: #8ee482;
  }
  span:hover {
    color: #8ee482;
  }
}
</style>
