<template>
  <div class="pagess">
    <div class="paginatine">
      <div class="pain-left" @click="left">
        <!-- <img src="../assets/left_1.png"> -->
        <!-- {{ `<` }} -->
      </div>
      <div class="pain-text">
        Page
      </div>
      <div class="pain-inpt">
        <input type="text" name="" id="" v-model="num" @keyup.enter="ent"  @input="ac()"
               onkeyup="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'1')}else{this.value=this.value.replace(/\D/g,'')}"
               onafterpaste="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'1')}else{this.value=this.value.replace(/\D/g,'')}"/>
      </div>
      <div class="pain-num">
        of {{ maxnum }}
      </div>
      <div class="pain-left" @click="right">
        <!-- <img src="../assets/right_1.png"> -->
        >
      </div>
    </div>
  </div>
</template>

<script>
// import '@/assets/icon/iconfont.css'

export default {
  props: {
    maxnum: Number
  },
  data() {
    return {
      num: 1
    }
  },
  methods: {
    left() {
      if (this.num == 1) return

      this.num--

      this.$emit('changePage', this.num);

    },
    right() {
      if (this.num >= this.maxnum) return
      this.num++

      this.$emit('changePage', this.num);

    },
    ac(e) {
      console.log("🚀 ~ file: paginate.vue ~ line 54 ~ ac ~ e", e);
      console.log(this.num)
    },
    ent() {
      if(this.num > this.maxnum) {
        this.num = this.maxnum
        this.$emit('changePage', this.num)
      } else {
        this.$emit('changePage', this.num)
      }
    },
    reset(){
      this.num=1;
    }
  }
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
  justify-content: center;
  width: 100%;
  //margin: 0 auto;
  //margin-top: 10px;
  // background: @pacBgc;
  padding: 10px 0;
  text-align: center;
  div {
    //margin: 0 auto;
    margin: 0 5px;
  }
}

.pain-left {
  width: 58px;
  height: 34px;
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
  width: 60px;
  height: 34px;

  input {
    width: 100%;
    height: 100%;
    border: 0px;
    // background: @mainBgc;
    color: white;
    //border-radius: 4px;
    //padding: 0 0 0 12px;
    box-sizing: border-box;
    font-size: 20px;
    outline: none;
    text-align: center;
  }

  input:focus {
    //border: 1px solid #3082f2;
  }
}
</style>
