<template>
  <div class="account">
    <div class="account-conent">
      <div class="account-information">
        <div class="account-information-left">
          <div class="account-my">
            我的账户
            <div>
              <img src="./../../assets/account/display.png" alt="" />
            </div>
          </div>
          <div class="account-balance">
            <div class="one">
              CENO余额:
              <span>476</span>
            </div>
            <div class="segmentation">|</div>
            <div class="tow">
              累计Gas fee:
              <span>58.23</span>
              CENO
            </div>
          </div>
        </div>
        <div class="account-information-right">
          <div class="account-mint">
            <div>mint CENO</div>
          </div>
        </div>
      </div>
    </div>
    <div class="account-conent">
      <div class="account-my-game">
        我的游戏
      </div>
    </div>
    <div class="account-conent">
      <div class="account-game">
        <div class="account-game-left">
          <div class="account-game-left-img">
            <img src="./../../assets/account/game1.png" alt="" />
          </div>
          <div class="account-game-left-season">
            <div>当前赛季：<span>第一赛季</span></div>
            <div>投入的CENO: <span>984.34</span></div>
          </div>
        </div>
        <div class="account-game-right">
          加入游戏
        </div>
      </div>
    </div>
    <div class="account-conent">
      <div class="game-list" @click="goGameList">
        游戏列表
      </div>
      <div class="game-list" @click="goIntegral">
        积分兑换
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  methods: {
    // 挑战游戏列表
    goGameList() {
      this.$router.push('/games')
    },
    goIntegral() {
      this.$router.push('/integral')
    },
  },
}
</script>

<style lang="less" scoped>
.account {
  padding-top: 72px;
  background: #070707;
  color: #fff;
  height: 100vh;
  .account-conent {
    width: 1614px;
    margin: 0 auto;
    text-align: left;
  }
  .account-information {
    display: flex;
    justify-content: space-between;
    margin-top: 84px;
    .account-information-left {
      width: 55%;
      display: flex;
      // justify-content: space-between;
      .account-my {
        margin-right: 200px;
        font-size: 44px;
        display: flex;
        div {
          width: 39px;
          height: 21px;
          margin-left: 20px;
          cursor: pointer;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .account-balance {
        display: flex;
        // justify-content: center;
        // flex-direction: column;
        color: #a7abac;
        .one {
          // flex-grow: 1;
          // display: flex;
        }
        .segmentation {
          margin: 0 30px;
          font-size: 30px;
          font-weight: 100;
          color: #fff;
        }
        .tow {
          // flex-shrink: 0;
        }
      }
      span {
        font-size: 30px;
        color: #fff;
      }
    }
    .account-information-right {
      width: 40%;
      display: flex;
      justify-content: end;
      .account-mint {
        width: 173px;
        text-align: center;
        border: 1.5px dashed #000;
        // border-color: rgba(0, 0, 0, 0);
        // border-image: linear-gradient(0deg, #76d965, #d1ff9a) 10 10;
        background: linear-gradient(90deg, #76d965 0%, #d1ff9a 100%);
        background-origin: border-box;
        border-radius: 4px;
        div {
          height: 44px;
          line-height: 44px;
          background: #000;
          color: #a7abac;
        }
      }
    }
  }
  .account-my-game {
    width: 120px;
    height: 28px;
    font-size: 30px;
    font-family: Alibaba;
    font-weight: normal;
    color: #8ee583;
    margin: 80px 0 40px 0;
  }
  .account-game {
    // margin-top: 80px;
    margin-bottom: 20px;
    height: 220px;
    border: 1px solid #535353;
    padding: 40px 50px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .account-game-left {
      display: flex;
      .account-game-left-img {
        width: 382px;
        height: 202px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .account-game-left-season {
        margin-left: 40px;
        div {
          margin-top: 40px;
          color: #a7abac;
          span {
            color: #fff;
            font-size: 24px;
          }
        }
      }
    }
    .account-game-right {
      line-height: 120px;
      width: 227px;
      height: 73px;
      line-height: 73px;
      font-size: 24px;
      font-weight: 600;
      color: #000;
      background: url('./../../assets/account/bg.png') no-repeat;
      background-size: 100% 100%;
      border-radius: 5px;
      text-align: center;
      cursor: pointer;
    }
  }
  .game-list {
    line-height: 120px;
      width: 227px;
      height: 73px;
      line-height: 73px;
      font-size: 24px;
      font-weight: 600;
      color: #000;
      background: url('./../../assets/account/bg.png') no-repeat;
      background-size: 100% 100%;
      border-radius: 5px;
      text-align: center;
      cursor: pointer;
  }
}
</style>
