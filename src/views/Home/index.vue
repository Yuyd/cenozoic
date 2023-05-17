<template>
  <div class="home">
    <div class="home-subscribe" ref="subHeight">
      <div class="home-conent">
        <div class="home-subscribe-left">
          <h1 data-aos="fade">{{ $t('home.homeTitle') }}</h1>
          <p data-aos="zoom-in">{{ $t('home.homeBanner') }}</p>
          <div
            class="home-subscribe-left-btn"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <div class="subscribeTo" @click="subscribeTo">
              {{ $t('home.homeSubscribeBtn') }}
            </div>
            <!-- <div @click="obtain">获取</div>
            <div @click="subm">发邮件</div> -->
            <div class="home-subscribe-left-docs">
              <a
                href="https://cenozoic-protocol.gitbook.io/cenozoic-protocol-litepaper/key-features/universal-economic-layer"
                target="_blank"
              >
                <span>
                  {{ $t('home.homeDocs') }}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="home-subscribe-outer">
        <div>
          <li v-for="(item, index) in outerChainList" :key="index">
            <img :src="item.imgSrc" alt="" />
          </li>
        </div>
      </div>
    </div>
    <div class="home-collapse">
      <div class="home-conent">
        <el-collapse v-model="activeNames" accordion>
          <el-collapse-item title="一致性 Consistency" name="1">
            <div>
              与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
            </div>
            <!-- <div>
              在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
            </div> -->
          </el-collapse-item>
          <el-collapse-item title="反馈 Feedback" name="2">
            <div>
              控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
            </div>
            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
    <div class="home-introduce">
      <div class="home-conent">
        <div class="home-introduce-left">
          <div
            class="home-introduce-left1 home-introduce-bg"
            data-aos="fade-right"
          >
            <div class="home-common-icon">
              <img src="./../../assets/docs/10.png" alt="" />
            </div>
            <div class="home-common-title">
              {{ $t('home.homeSupporting') }}
            </div>
            <div class="home-common-content">
              {{ $t('home.homeSupportingContent') }}
            </div>
          </div>
          <div
            class="home-introduce-left2 home-introduce-bg"
            data-aos="fade-right"
          >
            <div class="home-common-icon">
              <img src="./../../assets/docs/12.png" alt="" />
            </div>
            <div class="home-common-title">{{ $t('home.homeCoMpos') }}</div>
            <div class="home-common-content">
              {{ $t('home.homeCoMposContent') }}
            </div>
          </div>
          <!-- <div
            class="home-introduce-left3 home-introduce-bg"
            data-aos="fade-right"
          >
            <div class="home-common-icon">
              <img src="./../../assets/docs/14.png" alt="" />
            </div>
            <div class="home-common-title">
              {{ $t('home.homeBuilding') }}
            </div>
            <div class="home-common-content">
              {{ $t('home.homeBuildingContent') }}
            </div>
          </div> -->
        </div>
        <div class="home-introduce-right">
          <div
            class="home-introduce-right1 home-introduce-bg"
            data-aos="fade-left"
          >
            <div class="home-common-icon">
              <img src="./../../assets/docs/11.png" alt="" />
            </div>
            <div class="home-common-title">
              {{ $t('home.homeInteroper') }}
            </div>
            <div class="home-common-content">
              {{ $t('home.homeInteroperContent') }}
            </div>
          </div>
          <div
            class="home-introduce-right2 home-introduce-bg"
            data-aos="fade-left"
          >
            <div class="home-common-icon">
              <img src="./../../assets/docs/13.png" alt="" />
            </div>
            <div class="home-common-title">
              {{ $t('home.homeTranspraent') }}
            </div>
            <div class="home-common-content">
              {{ $t('home.homeTranspraentContent') }}
            </div>
          </div>
        </div>
      </div>
      <div class="home-conent-swiper1">
        <div class="seiper-container" ref="mySwiper1">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="home-introduce-left home-introduce-bg">
                <div class="home-common-icon">
                  <img src="./../../assets/docs/10.png" alt="" />
                </div>
                <div class="home-common-title">
                  {{ $t('home.homeSupporting') }}
                </div>
                <div class="home-common-content">
                  {{ $t('home.homeSupportingContent') }}
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="home-introduce-left home-introduce-bg">
                <div class="home-common-icon">
                  <img src="./../../assets/docs/12.png" alt="" />
                </div>
                <div class="home-common-title">{{ $t('home.homeCoMpos') }}</div>
                <div class="home-common-content">
                  {{ $t('home.homeCoMposContent') }}
                </div>
              </div>
            </div>
            <!-- <div class="swiper-slide">
              <div class="home-introduce-left home-introduce-bg">
                <div class="home-common-icon">
                  <img src="./../../assets/docs/14.png" alt="" />
                </div>
                <div class="home-common-title">
                  {{ $t('home.homeBuilding') }}
                </div>
                <div class="home-common-content">
                  {{ $t('home.homeBuildingContent') }}
                </div>
              </div>
            </div> -->
            <div class="swiper-slide">
              <div class="home-introduce-left home-introduce-bg">
                <div class="home-common-icon">
                  <img src="./../../assets/docs/11.png" alt="" />
                </div>
                <div class="home-common-title">
                  {{ $t('home.homeInteroper') }}
                </div>
                <div class="home-common-content">
                  {{ $t('home.homeInteroperContent') }}
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="home-introduce-left home-introduce-bg">
                <div class="home-common-icon">
                  <img src="./../../assets/docs/13.png" alt="" />
                </div>
                <div class="home-common-title">
                  {{ $t('home.homeTranspraent') }}
                </div>
                <div class="home-common-content">
                  {{ $t('home.homeTranspraentContent') }}
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
    </div>

    <div class="home-content">
      <div class="home-conent">
        <PublicTitle
          data-aos="zoom-in-up"
          class="home-title"
          :title="$t('home.homeCenoTit')"
        />
        <ul>
          <li data-aos="zoom-out-up">
            <div class="home-common-icon">
              <img src="./../../assets/docs/15.png" alt="" />
            </div>
            <div class="home-common-title">
              {{ $t('home.homeGame') }}
            </div>
            <div class="home-common-content">
              {{ $t('home.homeGameContent1') }}
            </div>
            <div class="home-common-content">
              {{ $t('home.homeGameContent2') }}
            </div>
          </li>
          <li data-aos="zoom-out-up">
            <div class="home-common-icon">
              <img src="./../../assets/docs/16.png" alt="" />
            </div>
            <div class="home-common-title">
              {{ $t('home.homeGovernance') }}
            </div>
            <div class="home-common-content">
              {{ $t('home.homeGovernanceContent') }}
            </div>
          </li>
        </ul>
        <div class="mobile">
          <div class="seiper-container" ref="mySwiper2">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <li data-aos="zoom-out-up">
                  <div class="home-common-icon">
                    <img src="./../../assets/docs/15.png" alt="" />
                  </div>
                  <div class="home-common-title">
                    {{ $t('home.homeGame') }}
                  </div>
                  <div class="home-common-content">
                    {{ $t('home.homeGameContent1') }}
                  </div>
                  <div class="home-common-content">
                    {{ $t('home.homeGameContent2') }}
                  </div>
                </li>
              </div>
              <div class="swiper-slide">
                <li data-aos="zoom-out-up">
                  <div class="home-common-icon">
                    <img src="./../../assets/docs/16.png" alt="" />
                  </div>
                  <div class="home-common-title">
                    {{ $t('home.homeGovernance') }}
                  </div>
                  <div class="home-common-content">
                    {{ $t('home.homeGovernanceContent') }}
                  </div>
                </li>
              </div>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="home-veZoic">
      <div class="home-conent">
        <li>
          <div class="home-veZoicTitle" data-aos="zoom-in-up">
            {{ $t('home.homeVeZOIC') }}
          </div>
          <div class="home-veZoic-img">
            <img src="./../../assets/docs/17.png" alt="" />
          </div>
          <div class="home-veZoic-title">
            {{ $t('home.homeVeZOICTit1') }}
          </div>
          <!-- <div class="home-veZoic-tit">
            {{ $t('home.homeVeZOICTit2') }}
          </div> -->
          <div class="home-veZoic-content">
            <p>
              {{ $t('home.homeVeZOICContent') }}
            </p>
          </div>
          <el-button @click="expect">
            {{ $t('home.homeVeZOICBtn') }}
          </el-button>
        </li>
        <li
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <!-- <div class="home-veZoic-img">
            <img src="./../../assets/docs/17.png" alt="" />
          </div> -->
        </li>
      </div>
    </div>
    <div class="home-how">
      <PublicTitle
        data-aos="zoom-in-up"
        class="home-title"
        :title="$t('home.homeHowTit')"
      />
      <div class="home-conent">
        <li
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div class="upward">
            <div class="home-common-icon">
              <img src="./../../assets/docs/19.png" alt="" />
            </div>
            <div class="home-common-title">
              {{ $t('home.homeDepositsTit') }}
            </div>
            <div class="home-common-content">
              <p>{{ $t('home.homeDepositsContent') }}</p>
            </div>
          </div>
        </li>
        <li
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div class="upward">
            <div class="home-common-icon">
              <img src="./../../assets/docs/20.png" alt="" />
            </div>
            <div class="home-common-title">{{ $t('home.homeEarnTit') }}</div>
            <div class="home-common-content">
              <p>{{ $t('home.homeEarnContent') }}</p>
            </div>
          </div>
        </li>
        <li
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div class="upward">
            <div class="home-common-icon">
              <img src="./../../assets/docs/21.png" alt="" />
            </div>
            <div class="home-common-title">{{ $t('home.homeReceiveTit') }}</div>
            <div class="home-common-content">
              <p>{{ $t('home.homeReceiveContent') }}</p>
            </div>
          </div>
        </li>
      </div>
      <div class="mobile">
        <div class="seiper-container" ref="mySwiper3">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <li>
                <div class="upward">
                  <div class="home-common-icon">
                    <img src="./../../assets/docs/19.png" alt="" />
                  </div>
                  <div class="home-common-title">
                    {{ $t('home.homeDepositsTit') }}
                  </div>
                  <div class="home-common-content">
                    <p>{{ $t('home.homeDepositsContent') }}</p>
                  </div>
                </div>
              </li>
            </div>
            <div class="swiper-slide">
              <li>
                <div class="upward">
                  <div class="home-common-icon">
                    <img src="./../../assets/docs/20.png" alt="" />
                  </div>
                  <div class="home-common-title">
                    {{ $t('home.homeEarnTit') }}
                  </div>
                  <div class="home-common-content">
                    <p>{{ $t('home.homeEarnContent') }}</p>
                  </div>
                </div>
              </li>
            </div>
            <div class="swiper-slide">
              <li>
                <div class="upward">
                  <div class="home-common-icon">
                    <img src="./../../assets/docs/21.png" alt="" />
                  </div>
                  <div class="home-common-title">
                    {{ $t('home.homeReceiveTit') }}
                  </div>
                  <div class="home-common-content">
                    <p>{{ $t('home.homeReceiveContent') }}</p>
                  </div>
                </div>
              </li>
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
    </div>
    <div class="home-benefit">
      <PublicTitle
        data-aos="zoom-in-up"
        class="home-title"
        :title="$t('home.homeAdvantageTit')"
      />
      <div class="home-conent">
        <li data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
          <div class="borderRadius">
            <!-- <div class="home-tokens-logo">
              <img src="./../../assets/docs/22.png" alt="" />
            </div> -->
            <!-- <div class="home-tokens-title">游戏稳定币：CEON</div> -->
            <div class="home-tokens-title">
              {{ $t('home.homeAdvantageLift3') }}
            </div>
            <div class="home-tokens-content">
              <p>{{ $t('home.homeAdvantageLift1') }}</p>
              <p>{{ $t('home.homeAdvantageLift2') }}</p>
            </div>
          </div>
        </li>
        <li data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
          <div class="borderRadius">
            <!-- <div class="home-tokens-logo">
              <img src="./../../assets/docs/22.png" alt="" />
            </div> -->
            <div class="home-tokens-title">
              {{ $t('home.homeAdvantageRight2') }}
            </div>
            <div class="home-tokens-content">
              <p>{{ $t('home.homeAdvantageRight1') }}</p>
            </div>
          </div>
        </li>
      </div>
      <div class="mobile">
        <div class="seiper-container" ref="mySwiper4">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <li>
                <div class="borderRadius">
                  <!-- <div class="home-tokens-logo">
                    <img src="./../../assets/docs/22.png" alt="" />
                  </div> -->
                  <!-- <div class="home-tokens-title">游戏稳定币：CEON</div> -->
                  <div class="home-tokens-title">
                    {{ $t('home.homeAdvantageLift3') }}
                  </div>
                  <div class="home-tokens-content">
                    <p>{{ $t('home.homeAdvantageLift1') }}</p>
                    <p>{{ $t('home.homeAdvantageLift2') }}</p>
                  </div>
                </div>
              </li>
            </div>
            <div class="swiper-slide">
              <li data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                <div class="borderRadius">
                  <!-- <div class="home-tokens-logo">
                    <img src="./../../assets/docs/22.png" alt="" />
                  </div> -->
                  <div class="home-tokens-title">
                    {{ $t('home.homeAdvantageRight2') }}
                  </div>
                  <div class="home-tokens-content">
                    <p>{{ $t('home.homeAdvantageRight1') }}</p>
                  </div>
                </div>
              </li>
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
    </div>
    <!-- <div class="home-bottom">
      <div class="home-conent">
        <Bottom />
      </div>
    </div> -->
    <el-dialog
      :title="$t('homeDialog.dialogTitlte')"
      :visible.sync="EmailDialogVisible"
      :close-on-click-modal="false"
      :before-close="handleClose"
    >
      <div class="login-conent">
        <el-form :model="submitForm" ref="submitForm">
          <el-form-item
            prop="email"
            :rules="[
              {
                required: true,
                message: this.$t('homeDialog.dialogRules1'),
                trigger: 'blur',
              },
              {
                type: 'email',
                message: this.$t('homeDialog.dialogRules2'),
                trigger: ['blur', 'change'],
              },
            ]"
          >
            <el-input
              :placeholder="$t('homeDialog.dialogInput')"
              v-model="submitForm.email"
            />
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button class="determine" @click="clickSubmitForm('submitForm')">
          {{ $t('homeDialog.dialogConfirm') }}
        </el-button>
        <!-- <el-button class="pc" @click="loginClick('loginForm')"
          >Sign inpc</el-button
        >
        <el-button class="mb" @click="toLogin">Sign inmb</el-button>
        <div class="Register" @click="toRegister">
          <p><span>Register</span></p>
        </div> -->
        <el-button class="cancel" @click="EmailDialogVisible = false">
          {{ $t('homeDialog.dialogCancel') }}
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// @ is an alias to /src
import PublicTitle from '@/components/publicTitle.vue'
// import Bottom from '@/components/bottom/index.vue'
import { getWalletAddress, isWalletConnected } from './../../white/index.js'
import { Swiper } from 'vue-awesome-swiper'

export default {
  name: 'Home',
  components: {
    PublicTitle,
    // Bottom,
  },

  data() {
    return {
      EmailDialogVisible: false,
      submitForm: {
        email: '',
      },
      getInnerWidth: 0,
      outerChainList: [
        {
          imgSrc: require('./../../assets/bottom/24.png'),
        },
        {
          imgSrc: require('./../../assets/bottom/25.png'),
        },
        {
          imgSrc: require('./../../assets/bottom/26.png'),
        },
      ],
      activeNames: '1',
    }
  },
  watch: {
    diaMessage1(val) {
      console.log(val)
    },
  },
  created() {},
  mounted() {
    // 设置首屏高度
    this.getInnerWidth = window.innerHeight
    let headerHeight = document.querySelector('.header').scrollHeight
    this.$refs.subHeight.style.height = this.getInnerWidth - headerHeight + 'px'
    this.$nextTick(() => {
      this.swiper1()
      this.swiper2()
      this.swiper3()
      this.swiper4()
    })
  },
  methods: {
    subscribeTo() {
      this.EmailDialogVisible = true
    },
    handleClose() {
      this.EmailDialogVisible = false
    },
    // 确认提交
    clickSubmitForm(submitForm) {
      this.$refs[submitForm].validate(async (valid) => {
        // 1.邮箱是否正确
        if (valid) {
          let binance = window.ethereum
          // 是否安装了钱包
          if (binance) {
            // 是否链接了钱包
            if (await isWalletConnected()) {
              // const ethereum = window.ethereum
              // if(await getWalletAddress()) {
              //   // ethereum.request({ method: "eth_requestAccounts" });
              //   console.log(await getWalletAddress(),'-------')

              // } else {
              //   // ethereum.request({ method: "eth_requestAccounts" });
              //   console.log(await getWalletAddress(),'22222-------')
              // }
              // alert('链接钱包')
              // 订阅邮件
              const mailchimpClient = require('@mailchimp/mailchimp_transactional')(
                'md-zMAjDVGmRLYoDko8zza6HQ',
              )
              const run = async () => {
                const response = await mailchimpClient.allowlists.add({
                  email: this.submitForm.email,
                })
                console.log(response, '----')
              }
              run()
              this.EmailDialogVisible = false
              this.submitForm.email = ''
            } else {
              alert('请先链接钱包')
              ethereum.request({ method: 'eth_requestAccounts' })
            }
          } else {
            alert('请先安装钱包')
          }
          return
          // let isWhite = await ethereum.request({ method: "eth_requestAccounts" });
          // console.log(isWhite,'23456')
          //   alert("submit!");
          // } else {
          //   console.log("error submit!!");
          //   return false;
        }
      })
    },
    // 获取添加白名单列表
    obtain() {
      const mailchimpClient = require('@mailchimp/mailchimp_transactional')(
        'md-zMAjDVGmRLYoDko8zza6HQ',
      )

      const run = async () => {
        const response = await mailchimpClient.allowlists.list()
        console.log(response)
      }

      run()

      // const client = require("@mailchimp/mailchimp_marketing");
      // client.setConfig({
      //   apiKey: "YOUR_API_KEY",
      //   server: "YOUR_SERVER_PREFIX",
      // });

      // const run = async () => {
      //   const response = await client.automations.getWorkflowEmailSubscriber(
      //     "workflow_id",
      //     "Asha_Barton@yahoo.com",
      //     "subscriber_hash"
      //   );
      //   console.log(response);
      // };

      // run();
    },
    // 发送邮件
    subm() {
      const mailchimpClient = require('@mailchimp/mailchimp_transactional')(
        'md-zMAjDVGmRLYoDko8zza6HQ',
      )

      const run = async () => {
        const response = await mailchimpClient.messages.send({
          message: { text: 'ghhj' },
        })
        console.log(response)
      }

      run()
    },
    // 折叠面板
    // handleChange(val) {
    //   console.log(val);
    // },
    // 敬请期待
    expect() {
      alert(this.$t('home.homeVeZOICBtn'))
    },
    // 轮播图
    swiper1() {
      new Swiper(this.$refs.mySwiper1, {
        slidesPerView: 'auto',
        // autoplay: true,
        // speed: 500,
        // delay: 1000,
        // delay: 35,
        // slidesPerGroup: 1,
        loop: true,
        zoom: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
    },
    swiper2() {
      new Swiper(this.$refs.mySwiper2, {
        slidesPerView: 'auto',
        // autoplay: true,
        // speed: 500,
        // delay: 1000,
        // delay: 35,
        slidesPerGroup: 1,
        loop: true,
        zoom: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
    },
    swiper3() {
      new Swiper(this.$refs.mySwiper3, {
        slidesPerView: 'auto',
        // autoplay: true,
        // speed: 500,
        // delay: 1000,
        // delay: 35,
        slidesPerGroup: 1,
        loop: true,
        zoom: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
    },
    swiper4() {
      new Swiper(this.$refs.mySwiper4, {
        slidesPerView: 'auto',
        // autoplay: true,
        // speed: 500,
        // delay: 1000,
        // delay: 35,
        slidesPerGroup: 1,
        loop: true,
        zoom: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
    },
  },
}
</script>

<style lang="less" scoped>
.home {
  padding-top: 60px;
  background: #070707;
  color: #fff;
  text-align: left;
  overflow: hidden;
  .home-conent {
    max-width: 1300px;
    margin: 0 auto;
    word-break: break-all;
    word-wrap: break-word;
    .home-common-icon {
      width: 57px;
      height: 42px;
      margin: 0 auto;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .home-common-title {
      margin: 10px 0;
    }
  }
  .home-subscribe {
    background: #232835;
    // justify-content: center;
    background: url('./../../assets/docs/03.jpg') no-repeat;
    background-size: 100% 100%;
    height: 600px;
    box-sizing: border-box;
    padding-top: 40px;
    .home-conent {
      display: flex;
      justify-content: space-around;
      position: relative;
      .home-subscribe-left {
        // display: flex;
        // justify-content: inherit;
        // flex-direction: column;
        margin-top: 60px;
        height: 400px;
        padding: 20px;
        line-height: 1.5;
        text-align: center;
        // width: 60%;
        font-size: 14px;
        h1 {
          font-size: 72px;
        }
        p {
          width: 842px;
          font-size: 26px;
          color: #87868c;
          margin: 20px auto;
        }
        .home-subscribe-left-btn {
          margin: 0 auto;
          display: flex;
          justify-content: center;
          div {
            width: 100px;
            height: 35px;
            line-height: 35px;
            background: linear-gradient(to right, #3dfccb, #e1f86e);
            color: #000;
            border-radius: 5px;
          }
          .subscribeTo {
            cursor: pointer;
          }
          .subscribeTo:hover {
            // zoom: 1.1;
            // box-shadow: 0px 0px 28px 4px rgba(33, 22, 19, 0.21);
          }
          .home-subscribe-left-docs {
            margin-left: 20px;
            border-radius: 5px;
            background: linear-gradient(to right, #3dfccb, #e1f86e);
            -webkit-background-clip: text;
            color: transparent;
            overflow: hidden;
            cursor: pointer;
            a {
              background: linear-gradient(to right, #3dfccb, #e1f86e);
              -webkit-background-clip: text;
              color: transparent;
              span {
                display: inline-block;
                font-weight: 500;
                width: 96px;
                height: 31px;
                line-height: 31px;
                border: 2px solid black;
                border-image: linear-gradient(to right, #3dfccb, #e1f86e) 2;
              }
            }
          }
        }
      }
    }
    .home-subscribe-outer {
      position: absolute;
      left: 20px;
      bottom: 5%;
      cursor: pointer;
      div {
        display: flex;
        li {
          margin: 0 10px;
          img {
            width: 100%;
          }
        }
      }
    }
  }
  .home-collapse {
    .home-conent {
      /deep/.el-collapse {
        border: 0px;
        .el-collapse-item {
          background: #0d0d0d;
          color: #fff;
          border: 1px solid #202020;
          border-radius: 4px;
          margin-bottom: 10px;
          padding-left: 10px;
          .el-collapse-item__header {
            background: #0d0d0d;
            color: #fff;
            border: 0px;
            font-weight: 700;
            font-size: 14px;
          }
          .el-collapse-item__wrap {
            background: #0d0d0d;
            border: 0px;
            .el-collapse-item__content {
              color: #cdcdcd;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
  .home-introduce {
    background: url('./../../assets/docs/05.jpg') no-repeat;
    background-size: 100% 100%;
    height: 100%;
    padding: 40px 0;
    .home-conent {
      display: flex;
      justify-content: space-between;
      text-align: center;
      .home-introduce-bg {
        background: rgba(129, 129, 129, 0.5);
        border-radius: 16px;

        // border: 1px solid rgba(129, 129, 129, 0.8);

        box-shadow: 0px 0px 28px 4px rgba(33, 22, 19, 0.21);
        line-height: 1.2;
      }
      .home-common-title {
        font-size: 24px;
      }
      .home-common-content {
        font-size: 14px;
        color: #87868c;
      }
      .home-introduce-left {
        width: 55%;
        > div {
          padding: 20px;
        }
        .home-introduce-left1 {
          height: 180px;
          width: 80%;
          // background: url('./../../assets/docs/27.png') no-repeat;
          // background-size: 100%;
        }
        .home-introduce-left2 {
          min-height: 200px;
          width: 80%;
          margin: 30px 0 30px 15%;
        }
        .home-introduce-left3 {
          height: 200px;
          width: 100%;
        }
      }
      .home-introduce-right {
        width: 40%;
        > div {
          padding: 20px;
          margin-top: 40px;
        }
        .home-introduce-right1 {
          width: 91%;
          min-height: 240px;
        }
        .home-introduce-right2 {
          width: 91%;
          min-height: 240px;
          margin-left: 10%;
        }
      }
    }
    .home-conent-swiper1 {
      display: none;
    }
  }
  .home-content {
    background: url('./../../assets/docs/06.jpg') no-repeat;
    background-size: 100% 100%;
    padding: 40px 0;
    .home-title {
      padding: 40px 0;
      text-align: center;
    }
    ul {
      display: flex;
      justify-content: space-between;
      text-align: center;
      li {
        width: 48%;
        border: 1px solid #dfff00;
        color: #adadad;
        padding: 30px;
        font-size: 14px;
        box-sizing: border-box;
        border-radius: 5px;
        background: rgba(0, 0, 0, 0.4);
        box-shadow: 0px 0px 10px 0px #e0f86f;
        line-height: 1.5;
        .home-common-icon {
          width: 68px;
          height: 68px;
        }
        .home-common-title {
          font-size: 24px;
          font-weight: 600;
          background: linear-gradient(to right, #2ffdd4, #e0f86f);
          -webkit-background-clip: text;
          color: transparent;
        }
      }
      li:last-child {
        border-color: #2ffdd4;
        box-shadow: 0px 0px 10px 0px #2ffdd4;
      }
    }
    .mobile {
      display: none;
    }
  }

  .home-veZoic {
    line-height: 1.5;
    padding: 40px 0;
    background: url('./../../assets/docs/07.jpg') no-repeat;
    background-size: 100% 100%;
    .home-conent {
      display: flex;
      justify-content: space-between;
      li {
        font-size: 14px;
        width: 48%;
        .home-veZoicTitle {
          width: 131px;
          font-size: 36px;
          font-weight: 700;
          background: linear-gradient(to right, #3dfdcb, #def871);
          -webkit-background-clip: text;
          color: transparent;
        }
        .home-veZoic-img {
          width: 400px;
          margin: 0 auto;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      li:nth-child(1) {
        .home-veZoic-img {
          display: none;
        }
      }
    }
    .home-veZoic-title {
      font-size: 24px;
    }
    .home-veZoic-tit {
      font-size: 18px;
    }
    .home-veZoic-content {
      color: #adadad;
      font-size: 14px;
    }
    .el-button {
      margin-top: 40px;
      background: linear-gradient(to right, #2ffdd4, #e0f86f);
      border: 0px;
      color: #000;
    }
  }
  .home-how {
    background: url('./../../assets/docs/08.jpg') no-repeat;
    background-size: 100% 100%;
    padding: 40px 0;
    .home-title {
      padding: 40px 0;
      text-align: center;
    }
    .home-conent {
      display: flex;
      justify-content: space-between;
      li {
        margin-top: 20px;
        position: relative;
        width: 30%;
        height: 300px;
        padding: 40px 30px;
        background: rgba(0, 0, 0, 0.5);
        border: 1px solid #e0f86f;
        box-shadow: 0px 0px 10px 0px #e0f86f;
        border: 1px solid;
        text-align: center;
        box-sizing: border-box;
        font-size: 14px;
        line-height: 1.5;
        border-radius: 5px;
        color: #adadad;
        .upward {
          position: absolute;
          top: -34px;
          left: 50%;
          transform: translateX(-50%);
          width: 80%;
          height: 100%;
          .home-common-icon {
            width: 68px;
            height: 68px;
          }
          .home-common-title {
            font-size: 18px;
            font-weight: 700;
            background: linear-gradient(to right, #3dfdcb, #def871);
            -webkit-background-clip: text;
            color: transparent;
          }
        }
      }
    }
    .mobile {
      display: none;
    }
  }
  .home-benefit {
    height: 100%;
    background: url('./../../assets/docs/09.jpg') no-repeat;
    background-size: 100% 100%;
    padding: 40px 0;
    .home-title {
      margin: 40px auto;
      text-align: center;
    }
    .home-conent {
      display: flex;
      justify-content: space-between;
      li {
        width: 45%;
        height: 260px;
        border-radius: 10px;
        font-size: 14px;
        background: url('./../../assets/docs/27.png') no-repeat;
        background-size: 100% 100%;
        .borderRadius {
          height: 100%;
          padding: 30px;
          box-sizing: border-box;

          // background: #232835;
          // border: 1px solid #2ffdd4;
          // border-image: linear-gradient(
          //     to right bottom,
          //     #2ffdd4,
          //     rgba(0, 0, 0, 0),
          //     #d2f97a
          //   )
          //   8 10;
        }
        .home-tokens-logo {
          font-size: 18px;
        }
        .home-tokens-title {
          font-size: 24px;
          margin: 10px 0;
        }
        .home-tokens-content {
          line-height: 1.5;
          text-align: left;
          color: #adadad;
        }
      }
    }
    .mobile {
      display: none;
    }
  }
  .home-bottom {
    background: #111314;
  }
  /deep/.el-dialog__wrapper {
    color: #fff;
    .el-dialog {
      background: #353945;
      color: #fff;
      padding: 0 20px;
      width: 50%;
      .el-dialog__header {
        .el-dialog__title {
          color: #fff;
        }
      }
      .el-dialog__body {
        .login-conent {
          .el-form {
            .el-form-item {
              .el-form-item__content {
                .el-input {
                  .el-input__inner {
                    background: none;
                    color: #fff;
                  }
                }
              }
            }
          }
        }
      }
      .el-dialog__footer {
        .determine {
          background: #dfff00;
        }
        .cancel {
          background: #808080;
        }
        .el-button {
          border: 0px solid;
          color: #000;
        }
      }
    }
  }
}
@media screen and (max-width: 1300px) {
  .home {
    .home-conent {
      width: 90%;
      margin: 0 auto;
      .home-common-icon {
        width: 57px;
        height: 42px;
        margin: 0 auto;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .home-common-title {
        margin: 10px 0;
      }
    }
    .home-subscribe {
      padding-top: 0rem;
      max-height: 12.3rem !important;
      .home-conent {
        .home-subscribe-left {
          width: 100%;
          padding: 0;
          margin-top: 0.5rem;
          h1 {
            font-size: 0.8rem;
          }
          p {
            width: 80%;
            margin: 0.1rem auto;
          }
        }
      }
      .home-subscribe-outer {
        left: 0.4rem;
        div {
          li {
            width: 0.45rem;
            height: 0.45rem;
            margin: 0 0.1rem;
          }
        }
      }
    }
    .home-introduce {
      padding: 0.5rem 0;
      .home-conent {
        display: none;
      }
      .home-conent-swiper1 {
        display: block;
        min-height: 5rem;
        width: 100%;
        margin: 0 auto;
        position: relative;
        .seiper-container {
          .swiper-wrapper {
            width: 100% !important;
            margin: 0 auto;
            .swiper-slide {
              width: 100% !important;
              .home-introduce-left {
                width: 75% !important;
                margin: 0 auto;
                text-align: center;
                .home-common-icon {
                  width: 1.5rem;
                  height: 1.2rem;
                  margin: 0 auto;
                  img {
                    width: 100%;
                    height: 100%;
                  }
                }
                .home-common-title {
                  font-size: 0.45rem;
                  margin-bottom: 0.2rem;
                }
                .home-common-content {
                  color: #87868c;
                }
              }
            }
          }
          .swiper-button-next {
            // top: 0;
          }
          .swiper-button-prev {
            // top: 0;
          }
        }
      }
    }
    .home-content {
      .home-conent {
        width: 100%;
        ul {
          display: none;
        }
        .mobile {
          display: block;
          position: relative;
          height: 6rem;
          .seiper-container {
            .swiper-wrapper {
              width: 100% !important;
              .swiper-slide {
                width: 100% !important;
                li {
                  width: 75%;
                  margin: 0 auto;
                  // text-align: center;
                  .home-common-icon {
                    width: 1rem;
                    height: 1rem;
                    margin: 0 auto;
                    img {
                      width: 100%;
                      height: 100%;
                    }
                  }
                  .home-common-title {
                    font-size: 0.6rem;
                  }
                  .home-common-content {
                    line-height: 1.2;
                    font-size: 0.25rem;
                    color: #87868c;
                  }
                }
              }
            }
          }
        }
      }
    }
    .home-veZoic {
      .home-conent {
        display: block;
        li:nth-child(1) {
          .home-veZoicTitle {
            width: 2.5rem;
            margin: 0 auto;
          }
          .home-veZoic-img {
            display: block !important;
            width: 4rem;
            height: 3.5rem;
            margin: 0.4rem auto;
          }
          .home-veZoic-title {
            font-size: 0.6rem;
          }
          .home-veZoic-tit {
            font-size: 0.4rem;
          }
          .home-veZoic-content {
            font-size: 0.25rem;
            color: #87868c;
          }
        }
        li {
          width: 100%;
        }
        li:nth-child(2) {
          display: none;
        }
      }
    }
    .home-how {
      .home-conent {
        display: none;
      }
      .mobile {
        display: block;
        .seiper-container {
          position: relative;
          .swiper-wrapper {
            .swiper-slide {
              li {
                width: 80%;
                margin: 0 auto;
                .upward {
                  .home-common-icon {
                    width: 1.2rem;
                    height: 1.2rem;
                    margin: 0 auto;
                    img {
                      width: 100%;
                      height: 100%;
                    }
                  }
                  .home-common-title {
                    font-size: 0.6rem;
                    margin: 0.2rem 0;
                  }
                  .home-common-content {
                    font-size: 0.25rem;
                    color: #87868c;
                  }
                }
              }
            }
          }
        }
      }
    }
    .home-benefit {
      .home-conent {
        display: none;
      }
      .mobile {
        display: block;

        padding-bottom: 0.5rem;
        .seiper-container {
          position: relative;
          .swiper-wrapper {
            .swiper-slide {
              li {
                width: 80%;
                margin: 0 auto;
                background: url('./../../assets/docs/27.png') no-repeat;
                background-size: 100% 100%;
                padding: 0.5rem;
                box-sizing: border-box;
                .home-tokens-title {
                  font-size: 0.4rem;
                  margin: 0.2rem auto;
                }
                .home-common-content {
                  color: #87868c;
                }
              }
            }
          }
        }
      }
    }
    .swiper-button-prev,
    .swiper-button-next {
      background: linear-gradient(to right, #2ffdd4, #e0f86f);
      -webkit-background-clip: text;
      color: transparent;
    }
    /deep/.el-dialog__wrapper {
      .el-dialog {
        width: 80%;
      }
    }
  }
}
</style>
