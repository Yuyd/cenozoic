<template>
  <div class="compounder">
    <h1>This is an about page</h1>
    <div class="compounder-conent">
      <div class="compounder-trend">
        <div class="compounder-trend-left">
          <div class="compounder-trend-left-title">
            近期走势
          </div>
          <div class="compounder-trend-left-chart">
            <div
              class="echart1"
              id="myEchart1"
              style="width: 600px; height: 400px;"
            ></div>
          </div>
        </div>
        <div class="compounder-trend-right">
          <div class="compounder-trend-right-title">
            <TabActive :filter="topRightFilter" @onTabSwitch="onTopTabSwitch" />
          </div>
          <div class="compounder-trend-right-chart">
            <div v-show="topRightIndex == 0" class="chart-border chart-pledge">
              <div class="pledge">
                <div class="pledge-item">
                  <div class="pledge-item-label">
                    <div>抵押：</div>
                    <div>0</div>
                  </div>
                  <div class="pledge-item-select">
                    <el-select v-model="pledgeValue1" placeholder="请选择">
                      <el-option
                        v-for="item in pledgeOptions1"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                </div>
                <div class="pledge-item">
                  <div class="pledge-item-label">
                    <div>得到：</div>
                    <div>0</div>
                  </div>
                  <div class="pledge-item-select">
                    <el-select v-model="pledgeValue2" placeholder="请选择">
                      <el-option
                        v-for="item in pledgeOptions2"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                </div>
                <div class="pledge-button">
                  <el-button>12s</el-button>
                </div>
              </div>
            </div>
            <div v-show="topRightIndex == 1" class="chart-border">
              <div class="redemption">
                <li>
                  <div>
                    可赎回数量：
                    <span>0</span>
                  </div>
                  <div>最大值</div>
                  <div>
                    ZOIC余额：
                    <span>0</span>
                  </div>
                </li>
                <li>
                  <div>
                    <div class="pledge-item-label">
                      <div>燃烧：</div>
                      <div>0</div>
                    </div>
                    <div class="pledge-item-select">
                      <el-select v-model="redemptionValue1" placeholder="请选择">
                        <el-option
                          v-for="item in redemptionOptions1"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>
                    </div>
                  </div>
                  <div>
                    <div class="pledge-item-label">
                      <div>燃烧：</div>
                      <div>0</div>
                    </div>
                    <div class="pledge-item-select">
                      <el-select v-model="redemptionValue2" placeholder="请选择">
                        <el-option
                          v-for="item in redemptionOptions2"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>
                    </div>
                  </div>
                </li>
                <li>
                  <div>
                    <div class="pledge-item-label">
                      <div>抵押：</div>
                      <div>0</div>
                    </div>
                    <div class="pledge-item-select">
                      <el-select v-model="redemptionValue3" placeholder="请选择">
                        <el-option
                          v-for="item in redemptionOptions3"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>
                    </div>
                  </div>
                </li>
                <li>
                  <el-button>提交</el-button>
                </li>
                <li>
                  <p>
                    <i>!</i>
                    赎回U需要燃烧一定比例的ZOIC（填入CEON自动计算），可以通过玩游戏获得ZOIC,也可以通过市场自行购入。
                  </p>
                </li>
              </div>
            </div>
            <div v-show="topRightIndex == 2" class="chart-border">
              <div class="income">
                <li>
                  <div>
                    收益余额：
                    <span>0</span>
                    CEON
                  </div>
                </li>
                <li>
                  <div class="pledge-item-label">
                    <!-- <div>抵押：</div> -->
                    <div>0</div>
                  </div>
                  <div class="pledge-item-select">
                   <el-input  v-model="incomeValue" placeholder="CEON" />
                  </div>
                </li>
                <li>
                  <div>25%</div>
                  <div>50%</div>
                  <div>75%</div>
                  <div>最大值</div>
                </li>
                <li>
                  <el-button>提交</el-button>
                </li>
              </div>
            </div>
            <div v-show="topRightIndex == 3" class="chart-border">
              <div class="details">
                <li v-for="(item, index) in detailsList" :key="index">
                  <div class="list-item">
                    <div>{{ item.title }}：</div>
                    <div>{{ item.address }}</div>
                  </div>
                  <div class="details-copy" @click="addressCopy(item.address)">
                    <i class="el-icon-document-copy"></i>
                  </div>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="compounder-conent">
      <div class="compounder-bottom">
        <div class="compounder-bottom-left">
          <div class="compounder-bottom-left-title">
            TOP持有者
          </div>
          <div class="compounder-bottom-left-box">
            <div class="compounder-bottom-list">
              <li>
                <div>
                  <div>#</div>
                  <div>地址</div>
                </div>
                <div>
                  拥有
                </div>
              </li>
              <li v-for="(item, index) in holderList" :key="index">
                <div>
                  <div>{{ item.id }}</div>
                  <div><span>{{ item.address.slice(0, 7) }}</span>...<span>{{ item.address.slice(-4) }}</span></div>
                </div>
                <div>
                  {{ item.balance }}
                </div>
              </li>
            </div>
          </div>
          <div class="compounder-bottom-paging">
            <Paginate />
          </div>
        </div>
        <div class="compounder-bottom-right">
          <div class="compounder-bottom-right-title">
            <TabActive :filter="btmRightFilter" @onTabSwitch="onBtmTabSwitch" />
          </div>
          <div class="compounder-bottom-right-box">
            <div v-show="btmRightIndex == 0" class="compounder-bottom-active">
              <li>
                <div class="compounder-bottom-active-left">
                  <div class="active-icon">#</div>
                  <div class="active-list">
                    <div>1</div>
                    <div>1</div>
                  </div>
                </div>
                <div class="compounder-bottom-active-right">
                  <div>1</div>
                  <div>1</div>
                </div>
              </li>
            </div>
            <div
              v-show="btmRightIndex == 1"
              class="compounder-bottom-forging"
            ></div>
            <div
              v-show="btmRightIndex == 2"
              class="compounder-bottom-income"
            ></div>
          </div>
          <div class="compounder-bottom-paging"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TabActive from './../../components/tabActive/index.vue'
import Paginate from './../../components/paginate.vue'

export default {
  components: {
    TabActive,
    Paginate,
    // Bottom,
  },
  data() {
    return {
      myEchart1: '',
      opinion: ['1', '2'],
      opinionData: [
        { value: 85, itemStyle: '#1ab394' },
        { value: 45, itemStyle: 'red' },
      ],
      topRightFilter: ['质押', '赎回', '收益', '详细信息'],
      topRightIndex: 0,
      pledgeValue1: '',
      pledgeOptions1: [
        {
          value: '111',
          label: '11'
        }
      ],
      pledgeValue2: '',
      pledgeOptions2: [
        {
          value: '222',
          label: '22'
        }
      ],
      redemptionValue1: '',
      redemptionOptions1: [
        {
          value: '1',
          label: '燃烧1'
        }
      ],
      redemptionValue2: '',
      redemptionOptions2: [
        {
          value: '2',
          label: '燃烧2'
        }
      ],
      redemptionValue3: '',
      redemptionOptions3: [
        {
          value: '3',
          label: '得到'
        }
      ],
      incomeValue: 0,
      detailsList: [
        {
          title: 'Deposit wrapper contract address',
          address: '222tjje3lctgmz6mzjex3pgh5qjr1saz5rlye',
        },
        {
          title: 'Deposit wrapper contract address',
          address: '111tjje3lctgmz6mzjex3pgh5qjr1saz5rlye',
        },
      ],
      holderList: [
        {
          id: 1,
          address: '111tjje3lctgmz6mzjex3pgh5qjr1saz5rlye',
          balance: 999,
        },
        {
          id: 2,
          address: '111tjje3lctgmz6mzjex3pgh5qjr1saz5rlye',
          balance: 888,
        },
        {
          id: 3,
          address: '111tjje3lctgmz6mzjex3pgh5qjr1saz5rlye',
          balance: 666,
        },
      ],
      btmRightFilter: ['活跃', '锻造', '收益'],
      btmRightIndex: 0,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.echart1()
    })
  },
  methods: {
    echart1() {
      this.myEchart1 = this.$echarts.init(document.getElementById('myEchart1'))
      this.myEchart1.setOption({
        xAxis: {
          data: ['一月', '二月', '三月', '四月', '五月', '六月'],
        },
        yAxis: {},
        series: [
          {
            type: 'bar',
            data: [
              10,
              22,
              28,
              {
                value: 43,
                // 设置单个柱子的样式
                itemStyle: {
                  color: '#9de98c',
                  shadowColor: '#9de98c',
                  borderType: 'dashed',
                  opacity: 0.5,
                },
              },
              49,
            ],
            itemStyle: {
              barBorderRadius: 5,
              borderWidth: 1,
              borderType: 'solid',
              borderColor: '#73c0de',
              shadowColor: '#5470c6',
              shadowBlur: 3,
            },
          },
        ],
      })
    },
    // topTabActive 切换
    onTopTabSwitch(index) {
      this.topRightIndex = index
    },

    // 
      handleChange(value) {
        console.log(value);
      },

    // btmTabSwitch 切换
    onBtmTabSwitch(index) {
      this.btmRightIndex = index
    },
    // copy详细信息地址 订单号
    addressCopy(text) {
      let oInput = document.createElement('input')
      oInput.value = text
      document.body.appendChild(oInput)
      oInput.select()
      document.execCommand('Copy')
      oInput.className = 'oInput'
      oInput.style.display = 'none'
      this.$message.success('Copy succeeded')
    },
  },
}
</script>

<style lang="less" scoped>
.compounder {
  padding-top: 72px;
  background: #070707;
  color: #fff;
  .compounder-conent {
    max-width: 1300px;
    margin: 0 auto;
    word-break: break-all;
    word-wrap: break-word;
    .compounder-trend {
      display: flex;
      justify-content: space-around;
      align-items: center;
      text-align: left;
      margin-top: 80px;
      .compounder-trend-left {
        width: 48%;
        .compounder-trend-left-title {
          font-weight: 700;
          font-size: 18px;
          color: #8ee482;
          margin-bottom: 30px;
        }
        .compounder-trend-left-chart {
          border: 1px solid #232323;
          padding: 20px 40px;
        }
      }
      .compounder-trend-right {
        width: 48%;
        .compounder-trend-right-title {
          margin-bottom: 30px;
        }
        .compounder-trend-right-chart {
          .chart-border {
            height: 400px;
            border: 1px solid #232323;
            border-radius: 5px;
            padding: 20px 40px;
            .pledge {
              .pledge-item {
                display: flex;
                margin-bottom: 20px;
                .pledge-item-label {
                }
                .pledge-item-select {
                  margin-left: 20px;
                }
              }
              .pledge-button {
                text-align: center;
              }
            }
            .redemption {
              li {
                display: flex;
                align-items: center;
                text-align: center;
                margin-bottom: 50px;
                > div {
                  display: flex;
                  margin-right: 20px;
                }
              }
            }
            .income {
              li {
                display: flex;
              }
            }
            .details {
              li {
                display: flex;
                justify-content: space-between;
                margin-bottom: 20px;
                .list-item {
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  div:nth-child(1) {
                    flex: 1;
                    font-size: 14px;
                  }
                  div:nth-child(2) {
                    font-size: 12px;
                  }
                }
                .details-copy {
                  width: 35px;
                  height: 35px;
                  line-height: 35px;
                  border: 1px solid #969796;
                  border-radius: 50%;
                  text-align: center;
                  cursor: pointer;
                }
              }
            }
          }
          .chart-pledge {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
    .compounder-bottom {
      display: flex;
      justify-content: space-around;
      align-items: center;
      text-align: left;
      margin-top: 80px;
      .compounder-bottom-left {
        width: 48%;
        .compounder-bottom-left-title {
          margin-bottom: 30px;
        }
        .compounder-bottom-left-box {
          border: 1px solid #fff;
          border-radius: 5px 5px 0 0;
          padding: 20px 30px;
          .compounder-bottom-list {
            li {
              display: flex;
              justify-content: space-between;
              margin-bottom: 20px;
              div {
                display: flex;
                div:nth-child(1) {
                  margin-right: 30px;
                }
              }
            }
          }
        }
        .compounder-bottom-paging {
          height: 60px;
          border: 1px solid #fff;
          border-top: none;
          border-radius: 0 0 5px 5px;
        }
      }
      .compounder-bottom-right {
        width: 48%;
        .compounder-bottom-right-title {
          margin-bottom: 30px;
        }
        .compounder-bottom-right-box {
          border: 1px solid #fff;
          border-radius: 5px 5px 0 0;
          padding: 20px 30px;
          .compounder-bottom-active {
            li {
              display: flex;
              justify-content: space-between;
              margin-bottom: 20px;
              .compounder-bottom-active-left {
                display: flex;
                justify-content: space-between;
                .active-icon {
                  margin-right: 30px;
                  height: 35px;
                  width: 35px;
                }
                .active-list {
                  display: block;
                  div:nth-child(1) {
                    font-size: 14px;
                  }
                  div:nth-child(2) {
                    font-size: 12px;
                  }
                }
              }
              .compounder-bottom-active-right {
                display: block;
                div:nth-child(1) {
                    font-size: 14px;
                  }
                  div:nth-child(2) {
                    font-size: 12px;
                  }
              }
            }
          }
          .compounder-bottom-forging {
          }
          .compounder-bottom-income {
          }
        }
        .compounder-bottom-paging {
          height: 60px;
          border: 1px solid #fff;
          border-top: none;
          border-radius: 0 0 5px 5px;
        }
      }
    }
  }
}
</style>
