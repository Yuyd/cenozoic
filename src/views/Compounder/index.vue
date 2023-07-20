<template>
  <div class="compounder">
    <div class="compounder-conent">
      <div class="compounder-top">
        <div>CENO Compounder</div>
        <div>
          <div>TVL</div>
          <div>$10.38m</div>
        </div>
      </div>
    </div>
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
            ></div>
            <!-- <div
              class="echart2"
              id="myEchart2"
              style="width: 7.1rem; height: 6rem;"
            ></div> -->
          </div>
        </div>
        <div class="compounder-trend-right">
          <div class="compounder-trend-right-title">
            <TabActive
              class="title"
              :filter="topRightFilter"
              @onTabSwitch="onTopTabSwitch"
            />
          </div>
          <div class="compounder-trend-right-chart">
            <div v-show="topRightIndex == 0" class="chart-border chart-pledge">
              <div class="pledge">
                <div class="pledge-item">
                  <div class="pledge-item-label">
                    <div>抵押：</div>
                  </div>
                  <div class="pledge-item-select">
                    <div class="amount">0</div>
                    <el-select v-model="pledgeValue1" placeholder="USDT">
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
                  </div>
                  <div class="pledge-item-select">
                    <div class="amount">0</div>
                    <el-select v-model="pledgeValue2" placeholder="CENO">
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
                  <el-button @click="pledgeBtn">链接钱包</el-button>
                </div>
              </div>
            </div>
            <div v-show="topRightIndex == 1" class="chart-border">
              <div class="redemption">
                <li>
                  <div class="quantity">
                    可赎回数量：
                    <span>0</span>
                  </div>
                  <div class="max">最大值</div>
                  <div class="balance">
                    ZOIC余额：
                    <span>0</span>
                  </div>
                </li>
                <li class="mobile-none">
                  <div>
                    <div class="pledge-item-label">
                      <div>燃烧：</div>
                      <div class="amount">0</div>
                    </div>
                    <div class="pledge-item-select">
                      <el-input v-model="CENOInput" placeholder="CENO" />
                    </div>
                  </div>
                  <div>
                    <div class="pledge-item-label">
                      <div>燃烧：</div>
                      <div class="amount">0</div>
                    </div>
                    <div class="pledge-item-select">
                      <el-input v-model="ZOICInput" placeholder="ZOIC" />
                    </div>
                  </div>
                </li>
                <li class="mobile-none">
                  <div class="obtain">
                    <div class="pledge-item-label">
                      <div>得到：</div>
                      <div class="amount">0</div>
                    </div>
                    <div class="pledge-item-select">
                      <el-select v-model="redemptionValue3" placeholder="USDT">
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
                <li class="mobile-yes">
                  <div class="pledge-item-label">
                    <div>抵押：</div>
                  </div>
                  <div class="pledge-item-select">
                    <div class="amount">0</div>
                    <el-select v-model="pledgeValue1" placeholder="USDT">
                      <el-option
                        v-for="item in pledgeOptions1"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                </li>
                <li class="mobile-yes">
                  <div class="pledge-item-label">
                    <div>抵押：</div>
                  </div>
                  <div class="pledge-item-select">
                    <div class="amount">0</div>
                    <el-select v-model="pledgeValue1" placeholder="USDT">
                      <el-option
                        v-for="item in pledgeOptions1"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                </li>
                <li>
                  <el-button>提交</el-button>
                </li>
                <li class="mobile-none">
                  <p>
                    <b>!</b>
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
                    <span>118.34</span>
                    CEON
                  </div>
                </li>
                <li>
                  <div class="pledge-item-label">
                    <div>0</div>
                  </div>
                  <div class="pledge-item-select">
                    <el-input v-model="incomeValue" placeholder="CEON" />
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
                  持有
                </div>
              </li>
              <li v-for="(item, index) in holderList" :key="index">
                <div>
                  <div>{{ item.id }}</div>
                  <div>
                    <span>{{ item.address.slice(0, 7) }}</span>
                    ...
                    <span>{{ item.address.slice(-5) }}</span>
                  </div>
                </div>
                <div>
                  {{ item.balance }}
                </div>
              </li>
            </div>
          </div>
          <div class="compounder-bottom-paging">
            <Paginate class="paginate" />
          </div>
        </div>
        <div class="compounder-bottom-right">
          <div class="compounder-bottom-right-title">
            <TabActive
              class="title"
              :filter="btmRightFilter"
              @onTabSwitch="onBtmTabSwitch"
            />
          </div>
          <div class="compounder-bottom-right-box">
            <div v-show="btmRightIndex == 0" class="compounder-bottom-active">
              <li v-for="(item, index) in activeList" :key="index">
                <div class="compounder-bottom-active-left">
                  <div class="active-icon">
                    <img :src="item.activeImg" alt="" />
                  </div>
                  <div class="active-list">
                    <div>{{ item.activeType }}</div>
                    <div>
                      <span>{{ item.activeAddress.slice(0, 7) }}</span>
                      ...
                      <span>{{ item.activeAddress.slice(-5) }}</span>
                    </div>
                  </div>
                </div>
                <div class="compounder-bottom-active-right">
                  <div>{{ item.activeAmount }} CENO</div>
                  <div>{{ item.activeTime }}</div>
                </div>
              </li>
            </div>
            <div
              v-show="btmRightIndex == 1"
              class="compounder-bottom-active compounder-bottom-forging"
            >
              <li v-for="(item, index) in activeList" :key="index">
                <div class="compounder-bottom-active-left">
                  <div class="active-icon">
                    <img :src="item.activeImg" alt="" />
                  </div>
                  <div class="active-list">
                    <div>{{ item.activeType }}</div>
                    <div>
                      <span>{{ item.activeAddress.slice(0, 7) }}</span>
                      ...
                      <span>{{ item.activeAddress.slice(-5) }}</span>
                    </div>
                  </div>
                </div>
                <div class="compounder-bottom-active-right">
                  <div>{{ item.activeAmount }} CENO</div>
                  <div>{{ item.activeTime }}</div>
                </div>
              </li>
            </div>
          </div>
          <div class="compounder-bottom-paging">
            <Paginate class="paginate" />
          </div>
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
          label: '11',
        },
      ],
      pledgeValue2: '',
      pledgeOptions2: [
        {
          value: '222',
          label: '22',
        },
      ],
      CENOInput: '',
      incomeValue: '',
      ZOICInput: '',
      redemptionValue1: '',
      redemptionOptions1: [
        {
          value: '1',
          label: '燃烧1',
        },
      ],
      redemptionValue2: '',
      redemptionOptions2: [
        {
          value: '2',
          label: '燃烧2',
        },
      ],
      redemptionValue3: '',
      redemptionOptions3: [
        {
          value: '3',
          label: '得到',
        },
      ],
      detailsList: [
        {
          title: 'Deposit wrapper contract address',
          address: '222tjje3lctgmz6mzjex3pgh5qjr1saz5rlye',
        },
        {
          title: 'Rewards contract address',
          address: '111tjje3lctgmz6mzjex3pgh5qjr1saz5rlye',
        },
        {
          title: 'CENO vault contract address',
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
        {
          id: 4,
          address: '111tjje3lctgmz6mzjex3pgh5qjr1saz5rlye',
          balance: 666,
        },
        {
          id: 5,
          address: '111tjje3lctgmz6mzjex3pgh5qjr1saz5rlye',
          balance: 666,
        },
        {
          id: 6,
          address: '111tjje3lctgmz6mzjex3pgh5qjr1saz5rlye',
          balance: 666,
        },
        {
          id: 7,
          address: '111tjje3lctgmz6mzjex3pgh5qjr1saz5rlye',
          balance: 666,
        },
        {
          id: 8,
          address: '111tjje3lctgmz6mzjex3pgh5qjr1saz5rlye',
          balance: 666,
        },
        {
          id: 9,
          address: '111tjje3lctgmz6mzjex3pgh5qjr1saz5rlye',
          balance: 666,
        },
        {
          id: 10,
          address: '111tjje3lctgmz6mzjex3pgh5qjr1saz5rlye',
          balance: 666,
        },
      ],
      btmRightFilter: ['活跃', '锻造'],
      activeList: [
        {
          activeType: 'CENO mint',
          activeAddress: 'tjje3lctgmz6mzjex3pgh5qjr1saz5rlye',
          activeImg: require('./../../assets/compounder/01.png'),
          activeAmount: '154.38',
          activeTime: 'about 1 hours ago',
        },
        {
          activeType: 'Vault Deposit',
          activeAddress: 'tjje3lctgmz6mzjex3pgh5qjr1saz5rlye',
          activeImg: require('./../../assets/compounder/02.png'),
          activeAmount: '154.38',
          activeTime: 'about 2 hours ago',
        },
        {
          activeType: 'Vault Harvest',
          activeAddress: 'tjje3lctgmz6mzjex3pgh5qjr1saz5rlye',
          activeImg: require('./../../assets/compounder/03.png'),
          activeAmount: '154.38',
          activeTime: 'about 3 hours ago',
        },
        {
          activeType: 'Vault Deposit',
          activeAddress: 'tjje3lctgmz6mzjex3pgh5qjr1saz5rlye',
          activeImg: require('./../../assets/compounder/02.png'),
          activeAmount: '154.38',
          activeTime: 'about 4 hours ago',
        },
        {
          activeType: 'Vault Deposit',
          activeAddress: 'tjje3lctgmz6mzjex3pgh5qjr1saz5rlye',
          activeImg: require('./../../assets/compounder/03.png'),
          activeAmount: '154.38',
          activeTime: 'about 5 hours ago',
        },
      ],
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
        // title: {
        //   text: '',
        //   color: '#fff',
        // },
        tooltip: {
          trigger: 'axis',
          showContent: true,
          triggerOn: 'mousemove',
          axisPointer: {
            type: 'shadow',
          },
        },
        legend: {
          data: ['流通的CENO'],
          bottom: 'bottom',
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            fontSize: 10, //字体大小
            color: '#fff', //字体颜色
          },
        },
        xAxis: {
          data: ['一月', '二月', '三月', '四月', '五月', '六月'],
          axisTick: {
            // 轴刻度
            show: false,
          },
          axisLabel: {
            // 轴文字
            show: true,
            color: '#fff',
            fontSize: 12,
          },
          axisLine: {
            // 轴线
            show: true,
            color: '#268C8C',
          },
        },
        yAxis: {
          splitLine: {
            show: true,
            lineStyle: {
              color: '#666',
              type: 'dashed',
            },
          },
          axisLabel: {
            color: '#fff',
          },
        },
        series: [
          {
            color: '#6dae65',
            type: 'bar',
            data: [874, 1213, 1764, 2143, 3143, 4231],
            name: '流通的CENO',
            label: {
              show: true,
              rotate: '',
              position: 'top',
              color: '#fff',
            },
            // labelStyle: {
            //   show: true,
            //   color: '#fff',
            // }
            // itemStyle: {
            //   barBorderRadius: 5,
            //   borderWidth: 1,
            //   borderType: 'dashed',
            //   borderColor: '#73c0de',
            //   shadowColor: '#5470c6',
            //   shadowBlur: 3,
            // },
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
      console.log(value)
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
    pledgeBtn() {
      this.$message.success('链接成功')
    },
  },
}
</script>

<style lang="less" scoped>
.compounder {
  padding-top: 72px;
  background: #070707;
  background: url('./../../assets/docs/01.jpg') no-repeat;
  background-size: 100% 100%;
  color: #fff;
  .compounder-conent {
    max-width: 1080px;
    margin: 0 auto;
    word-break: break-all;
    word-wrap: break-word;
    .compounder-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 80px 0;
      div:first-child {
        font-size: 30px;
        font-weight: 600;
      }
      div:last-child {
        div:first-child {
          width: 200px;
          height: 60px;
          line-height: 60px;
          color: #c7fa7e;
          font-size: 16px;
          font-weight: 400;
          border-top: 1px solid #c7fa7e;
        }
        div:last-child {
          font-size: 24px;
          color: #acacb5;
        }
      }
    }
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
          font-size: 24px;
          color: #8ee482;
          margin-bottom: 30px;
        }
        .compounder-trend-left-chart {
          border: 1px solid #232323;
          padding: 20px 40px;
          height: 400px;
          .echart1 {
            width: 450px;
            height: 350px;
          }
        }
      }
      .compounder-trend-right {
        width: 48%;
        .compounder-trend-right-title {
          margin-bottom: 30px;
          /deep/.title {
            span {
              font-size: 24px;
            }
          }
        }
        .compounder-trend-right-chart {
          .chart-border {
            height: 400px;
            border: 1px solid #232323;
            border-radius: 5px;
            padding: 20px 40px;
            .pledge {
              width: 100%;
              .pledge-item {
                margin-bottom: 20px;
                .pledge-item-label {
                  margin-bottom: 20px;
                  font-size: 20px;
                  color: #a7a9ae;
                }
                .pledge-item-select {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  padding: 0 10px 5px;
                  border: 1px solid #232323;
                  border-radius: 5px;
                  .amount {
                    font-size: 48px;
                    color: #acacb5;
                  }
                  /deep/.el-select {
                    .el-input {
                      input {
                        background: #1e293b;
                        border: 0px;
                        color: #acacb5;
                      }
                      .el-select__caret {
                        color: #acacb5;
                      }
                    }
                  }
                }
              }
              .pledge-button {
                text-align: center;
                .el-button {
                  width: 160px;
                  color: #000;
                  font-size: 18px;
                  font-weight: 600;
                  border: 0px;
                  background: linear-gradient(to right, #79da66, #ccfd97);
                }
              }
            }
            .redemption {
              li {
                display: flex;
                align-items: center;
                text-align: center;
                margin-bottom: 35px;
                > div {
                  display: flex;
                  align-items: flex-end;
                  margin-right: 20px;
                  .pledge-item-label {
                    color: #acacb4;
                    width: 50px;
                    height: 60px;
                    margin-right: 10px;
                    .amount {
                      font-size: 48px;
                    }
                  }
                  .pledge-item-select {
                    /deep/.el-input {
                      border-radius: 5px;
                      .el-input__inner {
                        width: 150px;
                        height: 45px;
                        line-height: 45px;
                        font-size: 20px;
                        background: #000;
                        border: 1px solid #535353;
                      }
                    }
                  }
                }
                .obtain {
                  width: 100%;
                  justify-content: space-between;
                  margin-right: 0;
                }
                .el-button {
                  margin: 0 auto;
                  width: 160px;
                  color: #000;
                  font-size: 18px;
                  font-weight: 600;
                  border: 0px;
                  background: linear-gradient(to right, #79da66, #ccfd97);
                }
                p {
                  color: #8d9092;
                  b {
                    display: inline-block;
                    color: #000;
                    width: 5px;
                    background: yellow;
                  }
                }
              }
              li:nth-child(1) {
                .quantity {
                  display: flex;
                }
                .max {
                  background: #535353;
                  padding: 5px 10px;
                  border-radius: 3px;
                  cursor: pointer;
                }
                .balance {
                }
              }
              li:nth-child(2) {
                justify-content: space-between;
              }
              .mobile-yes {
                display: none;
              }
            }
            .income {
              li {
                display: flex;
                .el-button {
                  margin: 0 auto;
                  width: 160px;
                  color: #000;
                  font-size: 18px;
                  font-weight: 600;
                  border: 0px;
                  background: linear-gradient(to right, #79da66, #ccfd97);
                }
              }
              li:nth-child(1) {
                margin-bottom: 50px;
              }
              li:nth-child(2) {
                justify-content: space-between;
                color: #acacb4;
                margin-bottom: 30px;
                .pledge-item-label {
                  font-size: 48px;
                }
                .pledge-item-select {
                  /deep/.el-input {
                    border-radius: 5px;
                    .el-input__inner {
                      width: 180px;
                      height: 45px;
                      line-height: 45px;
                      text-align: center;
                      font-size: 20px;
                      background: #000;
                      border: 1px solid #535353;
                    }
                  }
                }
              }
              li:nth-child(3) {
                justify-content: space-between;
                width: 100%;
                margin-bottom: 50px;
                div {
                  width: 20%;
                  height: 40px;
                  line-height: 40px;
                  text-align: center;
                  color: #acacb4;
                  border: 1px solid #535353;
                  border-radius: 5px;
                }
              }
            }
            .details {
              li {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 40px;
                .list-item {
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  div:nth-child(1) {
                    flex: 1;
                    font-size: 18px;
                    line-height: 2;
                  }
                  div:nth-child(2) {
                    font-size: 14px;
                    color: #acacb4;
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
          color: #8ee583;
          font-size: 24px;
        }
        .compounder-bottom-left-box {
          border: 1px solid #535353;
          border-radius: 8px 8px 0 0;
          padding: 20px 30px;
          .compounder-bottom-list {
            height: 500px;
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            li {
              display: flex;
              justify-content: space-between;
              margin-bottom: 20px;
              font-size: 18px;
              div {
                display: flex;
                div:nth-child(1) {
                  margin-right: 30px;
                }
              }
            }
            li:first-child {
              color: #a7a9ae;
              font-size: 20px;
            }
          }
        }
        .compounder-bottom-paging {
          height: 60px;
          border: 1px solid #535353;
          border-top: none;
          border-radius: 0 0 8px 8px;
          .paginate {
            width: 100%;
          }
        }
      }
      .compounder-bottom-right {
        width: 48%;
        .compounder-bottom-right-title {
          margin-bottom: 30px;
          /deep/.title {
            span {
              font-size: 24px;
            }
          }
        }
        .compounder-bottom-right-box {
          border: 1px solid #535353;
          border-radius: 8px 8px 0 0;
          padding: 20px 30px;
          .compounder-bottom-active {
            height: 500px;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            li {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 20px;
              height: 50px;
              .compounder-bottom-active-left {
                display: flex;
                justify-content: space-between;
                .active-icon {
                  margin-right: 30px;
                  height: 50px;
                  width: 50px;
                  border: 1px dashed #a7a9ae;
                  img {
                    width: 100%;
                    height: 100%;
                  }
                }
                .active-list {
                  display: flex;
                  justify-content: space-between;
                  flex-direction: column;
                  div:nth-child(1) {
                    font-size: 26px;
                  }
                  div:nth-child(2) {
                    font-size: 18px;
                    color: #a7a9ae;
                  }
                }
              }
              .compounder-bottom-active-right {
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                div:nth-child(1) {
                  font-size: 26px;
                }
                div:nth-child(2) {
                  font-size: 18px;
                  color: #a7a9ae;
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
          border: 1px solid #535353;
          border-top: none;
          border-radius: 0 0 8px 8px;
          .paginate {
            width: 100%;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1280px) {
  .compounder {
    padding-top: 1.2rem;
    padding-bottom: 1rem;
    .compounder-conent {
      width: 90%;
      margin: 0 auto;
      .compounder-top {
        display: block;
        margin: 1.5rem 0;
        div:first-child {
          font-size: 0.5rem;
          font-weight: 600;
        }
        div:last-child {
          div:first-child {
            width: 200px;
            height: 60px;
            line-height: 60px;
            color: #c7fa7e;
            font-size: 16px;
            font-weight: 400;
            border-top: 1px solid #c7fa7e;
            margin: 0 auto;
            margin-top: 0.4rem;
          }
          div:last-child {
            font-size: 24px;
            color: #acacb5;
          }
        }
      }
      .compounder-trend {
        display: block;
        .compounder-trend-left {
          width: 100%;
          margin-bottom: 1.4rem;
          .compounder-trend-left-chart {
            height: 100%;
            padding: 0.2rem;
            border-radius: 0.1rem;
            .echart1 {
            width: 6.9rem;
            height: 6rem;
          }
          }
        }
        .compounder-trend-right {
          width: 100%;
          .compounder-trend-right-chart {
            .chart-border {
              height: 6rem;
              padding: 0.2rem 0.3rem;
              .pledge {
                /deep/.el-select {
                  width: 2rem;
                }
              }
              .redemption {
                .mobile-none {
                  display: none;
                }
                .mobile-yes {
                  display: block;
                  margin-bottom: 20px;
                  .pledge-item-label {
                    margin-bottom: 20px;
                    font-size: 20px;
                    color: #a7a9ae;
                  }
                  .pledge-item-select {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 10px 5px;
                    border: 1px solid #232323;
                    border-radius: 5px;
                    .amount {
                      font-size: 48px;
                      color: #acacb5;
                    }
                    /deep/.el-select {
                      width: 2rem;
                      .el-input {
                        input {
                          background: #1e293b;
                          border: 0px;
                          color: #acacb5;
                        }
                        .el-select__caret {
                          color: #acacb5;
                        }
                      }
                    }
                  }
                }
              }
              .details {
                li {
                  .list-item {
                    div:nth-child(1) {
                      font-size: 0.25rem;
                    }
                    div:nth-child(2) {
                      font-size: 0.25rem;
                    }
                  }
                }
              }
            }
          }
        }
      }
      .compounder-bottom {
        display: block;
        .compounder-bottom-left {
          width: 100%;
          margin-bottom: 1.4rem;
          .compounder-bottom-left-box {
            .compounder-bottom-list {
              height: 100%;
              li {
                font-size: 0.3rem;
              }
              li:first-child {
                font-size: 0.35rem;
              }
            }
          }
          .compounder-bottom-paging {
            height: 0.8rem;
            padding: 0.2rem;
            /deep/.paginatine {
              div {
                margin: 0 .05rem;
              }
              font-size: 0.2rem;
              .pain-left {
                width: 0.3rem;
              }
            }
          }
        }
        .compounder-bottom-right {
          width: 100%;
          .compounder-bottom-right-box {
            padding: 0.3rem 0.2rem;
            .compounder-bottom-active {
              height: 100%;
              li {
                .compounder-bottom-active-left {
                  .active-icon {
                    width: 0.6rem;
                    height: 0.6rem;
                  }
                  .active-list {
                    div:nth-child(1) {
                      font-size: 0.3rem;
                    }
                    div:nth-child(2) {
                      font-size: 0.2rem;
                    }
                  }
                }
                .compounder-bottom-active-right {
                  div:nth-child(1) {
                    font-size: 0.3rem;
                  }
                  div:nth-child(2) {
                    font-size: 0.2rem;
                  }
                }
              }
            }
          }
          .compounder-bottom-paging {
            height: 0.8rem;
            padding: 0.2rem;
            /deep/.paginatine {
              div {
                margin: 0 .05rem;
              }
              font-size: 0.2rem;
              .pain-left {
                width: 0.3rem;
              }
            }
          }
        }
      }
    }
  }
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
