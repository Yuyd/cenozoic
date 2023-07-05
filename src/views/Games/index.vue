<template>
  <div class="games">
    <div class="games-conent">
      <div class="games-title">
        游戏列表
      </div>
      <div class="game-list">
        <li class="game-list-item">
          <div class="game-list-item-left">
            <div class="game-list-item-left-logo">
              <img src="./../../assets/account/game1.png" alt="" />
            </div>
            <div class="game-list-item-left-detail">
              <div class="game-list-item-name">Conqistador</div>
              <div class="game-list-item-describe">玩家扮演一个</div>
              <div class="game-list-item-type">
                游戏类型:
                <span>RTS类型游戏(类似文明/帝国时代)</span>
              </div>
              <div class="game-list-item-state">
                游戏状态:
                <span>免费游戏/已上线</span>
              </div>
              <div class="game-list-item-btn">
                <div>开始游戏</div>
                <div @click="moreDialogVisible = true"><div>更多内容</div></div>
              </div>
            </div>
          </div>
          <div class="game-list-item-right">
            <div
              class="echart1"
              id="myEchart1"
              style="width: 300px; height: 220px;"
            ></div>
          </div>
        </li>
      </div>
    </div>
    <el-dialog :visible.sync="moreDialogVisible" :show-close="false">
      <div class="more-dialog">
        <div class="more-dialog-header">
          <div>
            当前赛季:
            <span>第1赛季</span>
          </div>
          <div><i class="el-icon-circle-close"></i></div>
        </div>
        <div class="more-dialog-access">
          游戏访问概况
        </div>
        <div class="more-dialog-data-list">
          <li
            v-for="(item, index) in moreList"
            :key="index"
            :class="{ activeBorder: moreActive == index }"
            @click="goItem(index)"
          >
            <div
              class="more-item-type"
              :class="{ active: moreActive == index }"
            >
              {{ item.moreType }}
            </div>
            <div>
              {{ item.moreQuantity }}
              <span v-if="item.data == '1'"><i class="el-icon-top"></i></span>
              <span v-else-if="item.data == '2'">CEON</span>
            </div>
          </li>
        </div>
        <div class="more-dialog-echars">
          <li v-if="moreActive == 0">
            <div
              class="echart2"
              id="myEchart2"
              style="width: 400px; height: 300px;"
            ></div>
          </li>
          <li v-else-if="moreActive == 1">1</li>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button class="determine">
          进入游戏
        </el-button>
        <el-button
          class="cancel"
          @click=";(moreDialogVisible = false), (scoringDialogVisible = true)"
        >
          为游戏打分
        </el-button>
      </span>
    </el-dialog>

    <el-dialog
      class="scoringDialog"
      :visible.sync="scoringDialogVisible"
      :show-close="false"
    >
      <div class="scoring-dialog">
        <li class="star-list" v-for="(list, index) in scoringList" :key="index">
          <div>{{ list.scoringType }}</div>
          <div
            v-for="(val, i) in list.scoringItem"
            :key="i"
            @click="selectStar(i, list)"
          >
            {{ val.scoringCount }}{{ val.scoringItem }}
            <i
              class="el-icon-star-on"
              :class="list.scoringCount - 1 >= i ? 'yesStar' : 'noStar'"
            ></i>
          </div>
        </li>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button class="determine" @click="scoringDialogVisible = false">
          提交
        </el-button>
        <el-button
          class="cancel"
          @click=";(moreDialogVisible = true), (scoringDialogVisible = false)"
        >
          取消
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myEchart1: '',
      opinion: ['1', '2'],
      opinionData: [
        { value: 85, itemStyle: '#1ab394' },
        { value: 45, itemStyle: 'red' },
      ],
      moreDialogVisible: false,
      moreList: [
        {
          moreType: '累计钱包地址',
          moresData: '1',
          moreQuantity: '3.8K',
        },
        {
          moreType: '当前赛季钱包地址',
          moresData: '1',
          moreQuantity: '3.8K',
        },
        {
          moreType: '累计投入CENO',
          moresData: '0',
          moreQuantity: '145.43K',
        },
        {
          moreType: '累计产生gas fee',
          moresData: '2',
          moreQuantity: '3.8K',
        },
      ],
      moreActive: 0,
      scoringDialogVisible: false,
      scoringList: [
        {
          scoringType: '去中心化',
          scoringItem: 5,
          scoringCount: 2,
        },
        {
          scoringType: '开放性',
          scoringItem: 5,
          scoringCount: 0,
        },
        {
          scoringType: '可玩性',
          scoringItem: 5,
          scoringCount: 0,
        },
        {
          scoringType: '安全性',
          scoringItem: 5,
          scoringCount: 0,
        },
        {
          scoringType: '对抗性',
          scoringItem: 5,
          scoringCount: 0,
        },
        {
          scoringType: '趣味性',
          scoringItem: 5,
          scoringCount: 0,
        },
      ],
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.echart1()
      let timeId = setInterval(() => {
        this.echart2()
      }, 1000)
    })
    clearInterval(timeId)
  },
  methods: {
    echart1() {
      this.myEchart1 = this.$echarts.init(document.getElementById('myEchart1'))
      this.myEchart1.setOption({
        tooltip: {
          show: true,
          trigger: 'item',
          // position: ['30%', '80%'],
        },
        // title: {
        //   text: 'Basic Radar Chart',
        // },
        // legend: {
        //   data: ['Allocated Budget', 'Actual Spending'],
        // },
        radar: {
          // shape: 'circle',
          axisLine: {
            lineStyle: {
              color: '#2c3630', // 射线
            },
          },
          splitLine: {
            lineStyle: {
              color: ['#2c3630'], // 分割线
              width: 2,
            },
          },
          indicator: [
            { name: '开放性', max: 6500 },
            { name: '去中心化', max: 16000 },
            { name: '可玩性', max: 30000 },
            { name: '安全性', max: 38000 },
            { name: '趣味性', max: 52000 },
            { name: '对抗性', max: 25000 },
          ],
          axisName: {
            color: '#fff',
          },
          splitArea: {
            show: false,
            areaStyle: {
              color: 'rgba(0,0,0,0)', // 图表背景的颜色
            },
          },
        },
        series: [
          {
            name: '打分',
            type: 'radar',

            data: [
              {
                value: [4200, 3500, 20000, 35000, 50000, 18000],
                // label: {
                //   show: true,
                //   formatter: function (params) {
                //     return params.value
                //   },
                // },
                lineStyle: {
                  color: '#8fe584', // 折线颜色
                },
                itemStyle: {
                  color: '#8fe584', // 圆点颜色
                },
              },
            ],
          },
        ],
      })
    },
    echart2() {
      this.myEchart2 = this.$echarts.init(document.getElementById('myEchart2'))
      this.myEchart2.setOption({
        title: {
          text: '赛季兵力分布',
          left: 'left',
        },
        tooltip: {
          trigger: 'item',
        },
        legend: {
          top: '0%',
          left: 'right',
        },
        labelLine: {
          show: true, // 是否显示视觉引导线
          length: 10, // 视觉引导线的长度
          length2: 50,
          smooth: false,
          lineStyle: {
            width: 5,
            type: 'solid',
            color: '#fff',
          },
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['30%', '50%'],
            labelLine: {
              show: true, // 是否显示视觉引导线
              length: 10, // 视觉引导线的长度
              length2: 10,
              smooth: false,
              lineStyle: {
                width: 1,
                type: 'solid',
                color: '#fff',
              },
            },
            data: [
              { value: 654, name: '步兵' },
              { value: 453, name: '枪兵' },
              { value: 453, name: '骑兵' },
            ],
          },
        ],
        // title: {
        //   text: '赛季兵力分布',
        //   left: 'left',
        //   color: '#fff',
        // },
        // tooltip: {
        //   trigger: 'item',
        // },
        // // legendHoverLink: true,
        // legend: {
        //   top: '0%',
        //   left: 'right',
        // },
        // labelLine: {
        //   show: true, // 是否显示视觉引导线
        //   length: 10, // 视觉引导线的长度
        //   length2: 50,
        //   smooth: false,
        //   lineStyle: {
        //     width: 5,
        //     type: 'solid',
        //     color: '#fff',
        //   },
        // },
        // series: [
        //   {
        //     name: 'Access From',
        //     type: 'pie',
        //     radius: ['40%', '70%'],
        //     avoidLabelOverlap: true,
        //     label: {
        //       show: true,
        //       position: 'left',
        //       color: '#fff',
        //     },
        //     emphasis: {
        //       label: {
        //         show: true,
        //         fontSize: 24,
        //         fontWeight: 'bold',
        //       },
        //     },
        //     labelLine: {
        //       show: true, // 是否显示视觉引导线
        //       length: 10, // 视觉引导线的长度
        //       length2: 10,
        //       smooth: false,
        //       lineStyle: {
        //         width: 1,
        //         type: 'solid',
        //         color: '#fff',
        //       },
        //     },
        //     data: [
        //       { value: 654, name: '步兵' },
        //       { value: 453, name: '枪兵' },
        //       { value: 453, name: '骑兵' },
        //     ],
        //   },
        // ],
      })
    },

    // 弹窗tab切换
    goItem(index) {
      this.moreActive = index
    },

    // 选中星星
    selectStar(i, item) {
      if (item.scoringCount === i + 1) {
        item.scoringCount = 0
        return
      }
      item.scoringCount = i + 1
    },
  },
}
</script>

<style lang="less" scoped>
.games {
  padding-top: 72px;
  height: 100vh;
  background: #070707;
  .games-conent {
    width: 1614px;
    margin: 0 auto;
    .games-title {
      width: 220px;
      // height: 47px;
      margin: 0 auto;
      margin-top: 150px;
      font-size: 50px;
      font-family: Alibaba;
      font-weight: normal;
      color: #ffffff;
      line-height: 106px;
    }
    .game-list {
      .game-list-item {
        width: 1614px;
        height: 220px;
        padding: 40px;
        border: 1px solid #535353;
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #ffffff;
        .game-list-item-left {
          display: flex;
          .game-list-item-left-logo {
            margin-right: 40px;
          }
          .game-list-item-left-detail {
            text-align: left;
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            .game-list-item-name {
              font-size: 44px;
              height: 50px;
              line-height: 50px;
            }
            .game-list-item-describe {
              color: #a8a9ae;
              line-height: 1.5;
            }
            .game-list-item-btn {
              display: flex;
              justify-content: space-between;
              div {
                width: 120px;
                height: 35px;
                line-height: 35px;
                text-align: center;
                color: #000;
                background: url('./../../assets/account/bg.png') no-repeat;
                background-size: 100% 100%;
                cursor: pointer;
              }
              div:last-child {
                color: #a7abac;
                border: 1.5px dashed #000;
                // border-color: rgba(0, 0, 0, 0);
                // border-image: linear-gradient(0deg, #76d965, #d1ff9a) 10 10;
                background: linear-gradient(90deg, #76d965 0%, #d1ff9a 100%);
                background-origin: border-box;
                div {
                  background: #000;
                  width: 118px;
                  height: 33px;
                  line-height: 33px;
                }
              }
            }
          }
        }
        .game-list-item-right {
        }
      }
    }
  }
  /deep/.el-dialog {
    background: url('./../../assets/docs/01.jpg');
    background-size: 100% 100%;
    border: 1px solid #535353;
    border-radius: 5px;
    .el-dialog__header {
      display: none;
    }
    .el-dialog__body {
      .more-dialog {
        .more-dialog-header {
          display: flex;
          justify-content: space-between;
          color: #fff;
          div {
            span {
              font-size: 24px;
              font-weight: 600;
              color: #8ee584;
            }
            i {
              font-size: 24px;
              cursor: pointer;
            }
          }
        }
        .more-dialog-access {
          margin: 30px 0;
          text-align: left;
          color: #fff;
          font-size: 18px;
        }
        .more-dialog-data-list {
          display: flex;
          justify-content: space-around;
          width: 100%;
          li {
            border-top: 1px solid #535353;
            width: 25%;
            color: #fff;
            cursor: pointer;
            .more-item-type {
              margin: 20px 0;
            }
          }
          .activeBorder {
            border-top: 1px solid #76d965;
            .active {
              color: #76d965;
            }
          }
        }
        .more-dialog-echars {
          li {
            .echart2 {
              margin: 50px auto;
              border: 1px solid #666;
              border-radius: 5px;
              padding: 20px;
            }
          }
        }
      }
    }
    .el-dialog__footer {
      text-align: center;
      .dialog-footer {
        .el-button {
          background: linear-gradient(90deg, #77d965, #d1ff9a);
          border: 0px;
          color: #000;
          font-weight: 600;
        }
      }
    }
  }

  .scoringDialog {
    /deep/.el-dialog {
      background: url('./../../assets/docs/01.jpg');
      background-size: 100% 100%;
      border: 1px solid #535353;
      border-radius: 5px;
      width: 400px;
      .scoring-dialog {
        color: #fff;
        .star-list {
          display: flex;
          justify-content: center;
          font-size: 18px;
          div:first-child {
            width: 80px;
            margin-bottom: 20px;
            text-align: left;
          }
          .star {
            margin-right: 5px;
            cursor: pointer;
          }
          .yesStar {
            color: #78d965;
          }
          .noStar {
            color: #fff;
          }
        }
      }
      .el-dialog__footer {
        text-align: center;
        .dialog-footer {
          .el-button {
            width: 100px;
            background: linear-gradient(90deg, #77d965, #d1ff9a);
            border: 0px;
            color: #000;
            font-weight: 600;
          }
          .el-button:last-child {
            background: #858a86;
          }
        }
      }
    }
  }
}
</style>
