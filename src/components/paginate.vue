<template>
  <div class="pagess">
    <div class="paginatine">
      <div>
        <div class="pain-text">
          每页条数：
        </div>
        <div class="pain-inpt">
          <!-- <input
          type="text"
          name=""
          id=""
          v-model="num"
          @keyup.enter="ent"
          @input="ac()"
          onkeyup="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'1')}else{this.value=this.value.replace(/\D/g,'')}"
          onafterpaste="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'1')}else{this.value=this.value.replace(/\D/g,'')}"
        /> -->
          <el-select
            v-model="pledgeValue1"
            placeholder="10"
          >
            <el-option
              v-for="item in pledgeOptions1"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="pain-num">
          <!-- of {{ maxnum }} -->
          第1条到第10条，共204条
        </div>
      </div>
      <div>
        <div class="pain-left" @click="left">
          <img src="../assets/comment/left.png" />
        </div>
        <div class="pain-left" @click="right">
          <img src="../assets/comment/right.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import '@/assets/icon/iconfont.css'

export default {
  props: {
    maxnum: Number,
  },
  data() {
    return {
      num: 1,
      pledgeValue1: '',
      pledgeOptions1: [
        {
          value: '10',
          label: '10',
        },
        {
          value: '20',
          label: '10',
        },
      ],
    }
  },
  methods: {
    left() {
      if (this.num == 1) return

      this.num--

      this.$emit('changePage', this.num)
    },
    right() {
      if (this.num >= this.maxnum) return
      this.num++

      this.$emit('changePage', this.num)
    },
    ac(e) {
      console.log('🚀 ~ file: paginate.vue ~ line 54 ~ ac ~ e', e)
      console.log(this.num)
    },
    ent() {
      if (this.num > this.maxnum) {
        this.num = this.maxnum
        this.$emit('changePage', this.num)
      } else {
        this.$emit('changePage', this.num)
      }
    },
    reset() {
      this.num = 1
    },
  },
}
</script>

<style scoped="scoped" lang="less">
// @import "../style/currency.lcss";
.pagess {
  width: 50%;
  margin: 0 auto;
}
.paginatine {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  //margin: 0 auto;
  //margin-top: 10px;
  // background: @pacBgc;
  padding: 10px 0;
  text-align: center;
  div {
    //margin: 0 auto;
    margin: 0 5px;
    display: flex;
    align-items: center;
    color: #a7a9ae;
  }
}

.pain-left {
  width: 40px;
  height: 15px;
  // border: 1px solid red;
  box-sizing: border-box;
  //border: 1px solid #6b7185;
  //background-color: #242735;
  cursor: pointer;
  img {
    height: 100%;
    margin: 0 auto;
  }
}

.pain-left:hover {
  //border-color: #a1a6b6;
  // background-color: @active;
}

.pain-text {
  // color: @grey;
  // font-size: @font18;
}
.pain-num {
  // color: @grey;
  // font-size: @font18;
}

.pain-inpt {
  width: 80px;
  height: 34px;
  /deep/.el-select {
    .el-input {
      input {
        background: rgba(0, 0, 0, 0);
        border: 1px solid #535353;
        color: #acacb5;
        height: 30px;
        line-height: 30px;
      }
      .el-select__caret {
        color: #acacb5;
      }
      .el-input__icon {
        line-height: 30px;
      }
    }
  }
  // input {
  //   width: 100%;
  //   height: 100%;
  //   border: 0px;
  //   // background: @mainBgc;
  //   color: white;
  //   //border-radius: 4px;
  //   //padding: 0 0 0 12px;
  //   box-sizing: border-box;
  //   font-size: 20px;
  //   outline: none;
  //   text-align: center;
  // }

  // input:focus {
  //   //border: 1px solid #3082f2;
  // }
}
</style>

<style lang="less">
.el-select-dropdown {
  background: #1e293b !important;
  border: 1px solid #1e293b !important;
  color: #fff !important;
  .el-scrollbar {
    background: #1e293b;
    .el-scrollbar__wrap {
      margin-bottom: -12px !important;
    }
    .el-select-dropdown__item {
      background: #1e293b;
      color: #fff;
    }
    .el-scrollbar__thumb {
      background: #1e293b;
    }
  }
}
.el-popper {
  .popper__arrow {
    border-bottom-color: #1e293b !important;
  }
  .popper__arrow::after {
    border-bottom-color: #1e293b !important;
  }
}
</style>
