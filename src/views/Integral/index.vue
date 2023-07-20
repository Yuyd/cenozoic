<template>
  <div class="integral">
    <div class="integral-conent">
      <h1>玩游戏转积分 积分兑换NFT</h1>
    </div>
    <div class="integral-conent">
      <div class="myintegral">
        我的积分:
        <span>896</span>
      </div>
      <div class="integral-NFT-list">
        <li v-for="(item, index) in FNTList" :key="index">
          <div class="integral-NFT-list-no" v-if="item.NFTType == '0'">
            <div class="integral-NFT-name">{{ item.NFTName }}</div>
            <div class="integral-NFT-logo">
              <img :src="item.NFTImg" alt="" />
            </div>
            <div class="integral-NFT-quantity">
              {{ item.NFTIntegralQuantity }}
            </div>
            <div class="prompt">
              <div>以上NFT在ZOIC正式上线后可对兑换为ZOIC</div>
            </div>
            <div class="line"></div>
          </div>
          <div class="integral-NFT-list-yes" v-if="item.NFTType == '1'">
            <div class="integral-NFT-name">{{ item.NFTName }}</div>
            <div class="integral-NFT-logo">
              <img :src="item.NFTImg" alt="" />
            </div>
            <div
              class="integral-NFT-quantity"
              @click="exchangeDialogVisible = true"
            >
              {{ item.NFTIntegralQuantity }}
            </div>
            <div class="prompt">
              <div>以上NFT在ZOIC正式上线后可对兑换为ZOIC</div>
            </div>
          </div>
        </li>
      </div>
      <div class="integral-NFT-list-mobile">
        <li v-for="(item, index) in FNTList" :key="index">
          <div class="integral-NFT-list-no" v-if="item.NFTType == '0'">
            <div class="integral-NFT-list-left">
              <img :src="item.NFTImg" alt="" />
            </div>
            <div class="integral-NFT-list-right">
              <div class="integral-NFT-name">{{ item.NFTName }}</div>
              <div class="prompt">以上NFT在ZOIC正式上线后可对兑换为ZOIC</div>
              <div class="integral-NFT-quantity">
                {{ item.NFTIntegralQuantity }}
              </div>
            </div>
          </div>
          <div class="integral-NFT-list-yes" v-if="item.NFTType == '1'">
            <div class="integral-NFT-list-left">
              <img :src="item.NFTImg" alt="" />
            </div>
            <div class="integral-NFT-list-right">
              <div class="integral-NFT-name">{{ item.NFTName }}</div>
              <div class="prompt">以上NFT在ZOIC正式上线后可对兑换为ZOIC</div>
              <div class="integral-NFT-quantity" @click="exchangeDialogVisible = true">
                {{ item.NFTIntegralQuantity }}
              </div>
            </div>
          </div>
        </li>
      </div>
    </div>
    <div class="integral-conent">
      <div class="integral-ranking">
        活动排行
      </div>
      <div class="integral-ranking-list">
        <li class="title">
          <div>
            <div>#</div>
            <div>地址</div>
          </div>
          <div>
            <div>积分获得</div>
            <div>完成关卡</div>
          </div>
        </li>
        <li v-for="(item, index) in rankingList" :key="index">
          <div>
            <div>{{ item.id }}</div>
            <div>{{ item.address }}</div>
          </div>
          <div>
            <div>{{ item.integral }}</div>
            <div>{{ item.level }}</div>
          </div>
        </li>
      </div>
      <div class="integral-ranking-paging">
        <div class="integral-ranking-paging-left">
          <span>每页行数：</span>
          <div class="integral-ranking-paging-dropdown">
            <el-dropdown>
              <span class="el-dropdown-link">
                10
                <i class="el-icon-arrow-down el-icon-caret-bottom"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>10</el-dropdown-item>
                <el-dropdown-item>20</el-dropdown-item>
                <el-dropdown-item>30</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div>第1条到第10条，共240条</div>
        </div>
        <div class="integral-ranking-paging-right">
          <div>
            <img src="./../../assets/activity/left.png" alt="" />
          </div>
          <div>
            <img src="./../../assets/activity/right.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <el-dialog :visible.sync="exchangeDialogVisible" :show-close="false">
      <div class="exchange-dialog-btn" @click="exchangeDialogVisible = false">
        已获得
      </div>
      <div class="exchange-dialog">
        <div
          class="exchange-dialog-close"
          @click="exchangeDialogVisible = false"
        >
          <i class="el-icon-circle-close"></i>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      FNTList: [
        {
          NFTName: 'FNT名称',
          NFTImg: require('./../../assets/activity/01.png'),
          NFTIntegralQuantity: 3000,
          NFTType: '0',
        },
        {
          NFTName: 'FNT名称',
          NFTImg: require('./../../assets/activity/02.png'),
          NFTIntegralQuantity: 20000,
          NFTType: '1',
        },
        {
          NFTName: 'FNT名称',
          NFTImg: require('./../../assets/activity/03.png'),
          NFTIntegralQuantity: 60000,
          NFTType: '1',
        },
      ],
      rankingList: [
        {
          id: 1,
          address: 'rtghyjnjkhjn',
          integral: '8888',
          level: '10',
        },
        {
          id: 2,
          address: 'rtghyjnjkhjn',
          integral: '8888',
          level: '10',
        },
        {
          id: 3,
          address: 'rtghyjnjkhjn',
          integral: '8888',
          level: '10',
        },
        {
          id: 4,
          address: 'rtghyjnjkhjn',
          integral: '8888',
          level: '10',
        },
        {
          id: 4,
          address: 'rtghyjnjkhjn',
          integral: '8888',
          level: '10',
        },
        {
          id: 4,
          address: 'rtghyjnjkhjn',
          integral: '8888',
          level: '10',
        },
        {
          id: 4,
          address: 'rtghyjnjkhjn',
          integral: '8888',
          level: '10',
        },
        {
          id: 4,
          address: 'rtghyjnjkhjn',
          integral: '8888',
          level: '10',
        },
        {
          id: 2,
          address: 'rtghyjnjkhjn',
          integral: '8888',
          level: '10',
        },
        {
          id: 3,
          address: 'rtghyjnjkhjn',
          integral: '8888',
          level: '10',
        },
      ],
      exchangeDialogVisible: false,
    }
  },
  mounted() {
    this.$nextTick(() => {})
  },
  methods: {},
}
</script>

<style lang="less" scoped>
.integral {
  padding-top: 72px;
  // height: 100vh;
  background: #070707;
  background: url('./../../assets/docs/01.jpg') no-repeat;
  background-size: 100% 100%;
  color: #fff;
  overflow: hidden;
  .integral-conent {
    width: 1080px;
    margin: 0 auto;
    h1 {
      margin: 80px auto;
      font-size: 36px;
      font-weight: normal;
    }
    .myintegral {
      text-align: left;
      margin-bottom: 30px;
      span {
        font-size: 30px;
        font-family: Alibaba;
        font-weight: normal;
      }
    }
    .integral-NFT-list {
      display: flex;
      justify-content: space-between;
      li {
        width: 28%;
        // height: 380px;
        box-sizing: border-box;
        // border: 1px solid #fff;
        text-align: center;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        position: relative;
        overflow: hidden;
        > div {
          padding: 30px;
          box-sizing: border-box;
          .integral-NFT-name {
            text-align: left;
            font-size: 28px;
          }
          .integral-NFT-logo {
            width: 160px;
            height: 180px;
            margin: 30px auto;
            border: 2px dashed #666;
            margin-top: 80px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .integral-NFT-quantity {
            width: 220px;
            height: 50px;
            line-height: 50px;
            margin: 0 auto;
            border: 0px solid;
            border-image: linear-gradient(0deg, #befa6e, #88eb91) 10 10;
            background: linear-gradient(90deg, #77d965, #d1ff9a);
            border-radius: 7px;
            font-size: 24px;
            font-family: Alibaba;
            font-weight: normal;
            color: #000000;
          }
          .prompt {
            color: #000;
            width: 200px;
            padding: 10px 20px;
            background: linear-gradient(90deg, #77d965, #d1ff9a);
            position: absolute;
            transform: rotate(45deg);
            text-align: center;
            right: -68px;
            top: 30px;
            div {
              width: 125px;
              font-size: 12px;
              line-height: 1.2;
              margin: 0 auto;
            }
          }
        }

        .integral-NFT-list-no {
          background: url('./../../assets/activity/noBg.png') no-repeat;
          background-size: 100% 100%;
          width: 100%;
          height: 100%;
          .line {
            width: 137px;
            height: 137px;
            border: 2px dashed #666;
            position: absolute;
            top: 0;
            right: 0;
          }
          .integral-NFT-quantity {
            background: #858a86;
            cursor: not-allowed;
          }
        }
        .integral-NFT-list-yes {
          background: url('./../../assets/activity/yesBg.png') no-repeat;
          background-size: 100% 100%;
          border: 2px dashed #666;
          width: 100%;
          height: 100%;
          .integral-NFT-quantity {
            border: 1px dashed #666;
            cursor: pointer;
          }
        }
      }
      li:nth-child(3) {
        .integral-NFT-logo {
          width: 220px;
        }
      }
    }
    .integral-ranking {
      margin: 40px 0;
      color: #77d965;
      text-align: left;
    }
    .integral-ranking-list {
      border: 1px solid #535353;
      border-radius: 5px 5px 0 0;
      padding: 20px 30px;
      li {
        display: flex;
        justify-content: space-between;
        height: 40px;
        line-height: 40px;
        div {
          display: flex;
        }
        div:first-child {
          div:first-child {
            width: 100px;
          }
        }
        div:last-child {
          div {
            width: 180px;
            justify-content: center;
          }
        }
      }
      .title {
        color: #a7a9ae;
      }
    }
    .integral-NFT-list-mobile {
      display: none;
    }
    .integral-ranking-paging {
      height: 60px;
      padding: 20px 30px;
      margin-bottom: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid #535353;
      border-top: 0;
      border-radius: 0 0 5px 5px;
      .integral-ranking-paging-left {
        display: flex;
        align-items: center;
        color: #a7a9ae;
        .integral-ranking-paging-dropdown {
          margin: 0 20px;
          cursor: pointer;
          .el-dropdown {
            width: 80px;
            height: 30px;
            line-height: 30px;
            color: #fff;
            border: 1px solid #fff;
            border-radius: 3px;
            .el-dropdown-link {
              display: inline-block;
              width: 100%;
            }
            i {
              color: #a7a9ae;
            }
          }
        }
      }
      .integral-ranking-paging-right {
        display: flex;
        div {
          width: 10px;
          height: 20px;
          cursor: pointer;
          img {
            width: 100%;
            height: 100%;
          }
        }
        div:last-child {
          margin-left: 30px;
        }
      }
    }
  }
  /deep/.el-dialog {
    border: 2px dashed #666;
    background: rgba(0, 0, 0, 0);
    width: 400px;
    height: 480px;
    .exchange-dialog-btn {
      width: 140px;
      height: 50px;
      line-height: 50px;
      background: linear-gradient(90deg, #77d965, #d1ff9a);
      color: #000;
      font-weight: 600;
      font-size: 16px;
      position: absolute;
      top: -40px;
      left: 50%;
      transform: translateX(-50%);
      z-index: -1;
      cursor: pointer;
    }
    .exchange-dialog {
      color: #fff;
      // z-index: 99;
      .exchange-dialog-close {
        font-size: 28px;
        cursor: pointer;
      }
    }
  }
}
@media screen and (max-width: 1280px) {
  .integral {
    padding-top: 1.2rem;
    .integral-conent {
      width: 90%;
      margin: 0 auto;
      h1 {
        margin: 1rem auto;
        font-size: 0.45rem;
      }
      .myintegral {
        margin-bottom: 0.8rem;
        font-size: 0.2rem;
        span {
          font-size: 0.35rem;
          font-family: Alibaba;
          font-weight: normal;
        }
      }
      .integral-NFT-list {
        display: none;
      }
      .integral-NFT-list-mobile {
        display: block;
        li {
          margin-bottom: 0.3rem;
          height: 2.8rem;
          .integral-NFT-list-no {
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            height: 100%;
            border: 1px dashed #666;
            padding: 0.2rem;
          }
          .integral-NFT-list-yes {
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            height: 100%;
            border: 1px solid #666;
            padding: 0.2rem;
            border-radius: 0.08rem;
            .integral-NFT-list-right {
              .integral-NFT-quantity {
                width: 1.8rem;
                height: 0.6rem;
                line-height: 0.6rem;
                margin: 0 auto;
                border: 0px solid;
                border-image: linear-gradient(0deg, #befa6e, #88eb91) 10 10;
                background: linear-gradient(90deg, #77d965, #d1ff9a);
                text-align: center;
                border-radius: 0.05rem;
                font-size: 0.25rem;
                font-family: Alibaba;
                font-weight: 700;
                color: #000000;
                margin-left: 0;
              }
            }
          }
          .integral-NFT-list-left {
            width: 2rem;
            height: 2.3rem;
            border: 0.01rem dashed #666;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .integral-NFT-list-right {
            display: flex;
            justify-content: center;
            flex-direction: column;
            text-align: left;
            font-size: 0.2rem;
            .integral-NFT-name {
              font-size: 0.3rem;
            }
            .prompt {
              margin: 0.2rem 0 0.4rem 0;
            }
            .integral-NFT-quantity {
              width: 1.8rem;
              height: 0.6rem;
              line-height: 0.6rem;
              margin: 0 auto;
              border: 0px solid;
              background: #858a86;
              text-align: center;
              border-radius: 0.05rem;
              font-size: 0.25rem;
              font-family: Alibaba;
              font-weight: 700;
              color: #000000;
              margin-left: 0;
            }
          }
        }
        li:nth-child(3) {
          .integral-NFT-list-left {
            height: 1.6rem;
          }
        }
      }
      .integral-ranking-list {
        padding: 0.3rem 0.2rem;
        font-size: 0.25rem;
        li {
          display: flex;
          justify-content: space-between;
          height: 0.7rem;
          line-height: 0.7rem;
          div {
            display: flex;
          }
          div:first-child {
            div:first-child {
              width: 0.8rem;
            }
          }
          div:last-child {
            div {
              width: 1.4rem;
              justify-content: center;
            }
          }
        }
        .title {
        }
      }
      .integral-ranking-paging {
        height: .8rem;
        padding: 0.2rem;
        .integral-ranking-paging-left {
          font-size: 0.2rem;
          .integral-ranking-paging-dropdown {
            margin: 0 0.2rem;
            .el-dropdown {
              width: 1.2rem;
              height: 0.5rem;
              line-height: 0.5rem;
              border-radius: 3px;
              border: 1px solid #666;
              color: #666;
            }
          }
        }
        .integral-ranking-paging-right {
          div {
            width: 0.12rem;
            height: 0.23rem;
          }
          div:last-child {
            margin-left: 0.3rem;
          }
        }
      }
    }
  }
}
</style>
