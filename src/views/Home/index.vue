<template>
  <div class="home">
    <div class="home-subscribe" id="Home" ref="subHeight">
      <div class="home-conent">
        <div class="home-subscribe-left">
          <h1 data-aos="fade">{{ $t('home.homeTitle') }}</h1>
          <p data-aos="zoom-in">{{ $t('home.homeBanner1') }}</p>
          <p data-aos="zoom-in">{{ $t('home.homeBanner2') }}</p>
          <div class="home-line"></div>
          <div class="home-subscribe-outer">
            <div>
              <li
                v-for="(item, index) in outerChainList"
                :key="index"
                @click="goOuter(index)"
              >
                <div v-if="index == 1" class="noLink">
                  <img :src="item.imgSrc" alt="" />
                </div>
                <div v-else>
                  <img :src="item.imgSrc" alt="" />
                </div>
              </li>
            </div>
          </div>
          <div class="home-subscribe-left-btn">
            <!-- data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom" -->
            <div class="subscribeTo">
              {{ $t('home.homeSubscribeBtn') }}
            </div>
            <div class="home-subscribe-left-docs" @click="subscribeTo">
              <a>
                <span>
                  {{ $t('home.homeDocs') }}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="home-subscribe-outer">
        <div>
          <li
            v-for="(item, index) in outerChainList"
            :key="index"
            @click="goOuter(index)"
          >
            <img :src="item.imgSrc" alt="" />
          </li>
        </div>
      </div> -->
    </div>
    <!-- <el-button @click="aCurl">12345</el-button> -->
    <div class="home-collapse" id="Features">
      <div class="home-conent">
        <PublicTitle class="home-title" title="Cenozoic Features" />
        <!-- <div class="home-subscribe-swiper">
          <div class="seiper-container" ref="mySwiper5">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <el-collapse accordion>
                  <el-collapse-item :title="$t('home.homeSupporting')">
                    <div>
                      {{ $t('home.homeSupportingContent') }}
                    </div>
                  </el-collapse-item>
                </el-collapse>
              </div>
              <div class="swiper-slide">
                <el-collapse>
                  <el-collapse-item :title="$t('home.homeCoMpos')">
                    <div>{{ $t('home.homeCoMposContent') }}</div>
                  </el-collapse-item>
                </el-collapse>
              </div>
              <div class="swiper-slide">
                <el-collapse>
                  <el-collapse-item :title="$t('home.homeInteroper')">
                    <div>{{ $t('home.homeInteroperContent') }}</div>
                  </el-collapse-item>
                </el-collapse>
              </div>
              <div class="swiper-slide">
                <el-collapse>
                  <el-collapse-item
                    :title="$t('home.homeTranspraent')"
                    
                  >
                    <div>{{ $t('home.homeTranspraentContent') }}</div>
                  </el-collapse-item>
                </el-collapse>
              </div>
            </div>
          </div>
        </div> -->

        <el-collapse v-model="activeNames" accordion>
          <el-collapse-item :title="$t('home.homeSupporting')" name="1">
            <div>
              {{ $t('home.homeSupportingContent') }}
            </div>
          </el-collapse-item>
          <el-collapse-item :title="$t('home.homeCoMpos')" name="2">
            <div>{{ $t('home.homeCoMposContent') }}</div>
          </el-collapse-item>
          <el-collapse-item :title="$t('home.homeInteroper')" name="3">
            <div>{{ $t('home.homeInteroperContent') }}</div>
          </el-collapse-item>
          <el-collapse-item :title="$t('home.homeTranspraent')" name="4">
            <div>{{ $t('home.homeTranspraentContent') }}</div>
          </el-collapse-item>
        </el-collapse>
        <div class="home-btn" @click="goNow">Read More</div>
      </div>
    </div>
    <!-- <div class="home-introduce">
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
          <div
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
          </div>
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
            <div class="swiper-slide">
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
            </div>
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
    </div> -->

    <div class="home-content" id="Economics">
      <div class="home-conent">
        <PublicTitle
          data-aos="zoom-in-up"
          class="home-title"
          :title="$t('home.homeCenoTit')"
        />
        <ul>
          <li data-aos="zoom-out-up">
            <div class="home-content-top">
              <div class="home-common-icon">
                <img src="./../../assets/docs/15.png" alt="" />
              </div>
              <div class="home-common-title">
                {{ $t('home.homeGame') }}
                <br />
                {{ $t('home.homeGameContent1') }}
              </div>
            </div>
            <div class="home-common-content">
              {{ $t('home.homeGameContent2') }}
            </div>
          </li>
          <li data-aos="zoom-out-up">
            <div class="home-content-top">
              <div class="home-common-icon">
                <img src="./../../assets/docs/16.png" alt="" />
              </div>
              <div class="home-common-title">
                {{ $t('home.homeGovernance') }}
              </div>
            </div>
            <div class="home-common-content">
              {{ $t('home.homeGovernanceContent') }}
            </div>
          </li>
          <li data-aos="zoom-out-up">
            <div class="home-content-top">
              <div class="home-common-icon">
                <img src="./../../assets/docs/28.png" alt="" />
              </div>
              <div class="home-common-title">
                {{ $t('home.homeVeZOIC') }}
              </div>
            </div>
            <div class="home-common-content">
              {{ $t('home.homeVeZOICContent1') }}
            </div>
            <div class="home-common-content">
              {{ $t('home.homeVeZOICContent2') }}
            </div>
          </li>
        </ul>
        <div class="mobile">
          <div class="seiper-container" ref="mySwiper2">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <li data-aos="zoom-out-up">
                  <div class="home-content-top">
                    <div class="home-common-icon">
                      <img src="./../../assets/docs/15.png" alt="" />
                    </div>
                    <div class="home-common-title">
                      {{ $t('home.homeGame') }}
                      <br />
                      {{ $t('home.homeGameContent1') }}
                    </div>
                  </div>
                  <div class="home-common-content">
                    {{ $t('home.homeGameContent2') }}
                  </div>
                </li>
              </div>
              <div class="swiper-slide">
                <li data-aos="zoom-out-up">
                  <div class="home-content-top">
                    <div class="home-common-icon">
                      <img src="./../../assets/docs/16.png" alt="" />
                    </div>
                    <div class="home-common-title">
                      {{ $t('home.homeGovernance') }}
                    </div>
                  </div>
                  <div class="home-common-content">
                    {{ $t('home.homeGovernanceContent') }}
                  </div>
                </li>
              </div>
              <div class="swiper-slide">
                <li data-aos="zoom-out-up">
                  <div class="home-content-top">
                    <div class="home-common-icon">
                      <img src="./../../assets/docs/28.png" alt="" />
                    </div>
                    <div class="home-common-title">
                      {{ $t('home.homeVeZOIC') }}
                    </div>
                  </div>
                  <div class="home-common-content">
                    {{ $t('home.homeVeZOICContent1') }}
                  </div>
                  <div class="home-common-content">
                    {{ $t('home.homeVeZOICContent2') }}
                  </div>
                </li>
              </div>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
        </div>
        <div class="home-btn" @click="goModel">
          Read More
        </div>
      </div>
    </div>

    <div class="home-veZoic">
      <div class="home-conent">
        <li>
          <!-- data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500" -->
          <div class="home-veZoic-img">
            <img src="./../../assets/docs/17.png" alt="" />
          </div>
        </li>
        <li>
          <div class="home-veZoicTitle">
            {{ $t('home.homeHowTit') }}
          </div>
          <!-- <div class="home-veZoic-img">
            <img src="./../../assets/docs/17.png" alt="" />
          </div> -->
          <div class="home-veZoic-title">
            {{ $t('home.homeDepositsTit') }}
          </div>
          <div class="home-veZoic-content">
            <p>
              {{ $t('home.homeDepositsContent') }}
            </p>
          </div>
          <div class="home-veZoic-title">
            {{ $t('home.homeEarnTit') }}
          </div>
          <div class="home-veZoic-content">
            <p>
              {{ $t('home.homeEarnContent') }}
            </p>
          </div>
          <div class="home-veZoic-title">
            {{ $t('home.homeReceiveTit') }}
          </div>
          <div class="home-veZoic-content">
            <p>
              {{ $t('home.homeReceiveContent') }}
            </p>
          </div>
          <!-- <el-button >
            {{ $t('home.homeVeZOICBtn') }}
          </el-button> -->
          <div class="home-btn" @click="expect">
            {{ $t('home.homeVeZOICBtn') }}
          </div>
        </li>
      </div>
    </div>
    <div class="home-how" id="Community">
      <div class="home-conent">
        <PublicTitle
          data-aos="zoom-in-up"
          class="home-title"
          :title="$t('home.homeCommunity')"
        />
        <div class="home-how-line">
          <div></div>
        </div>
      </div>
      <div class="home-conent tow">
        <li
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div class="upward">
            <!-- <div class="home-common-icon">
              <img src="./../../assets/docs/19.png" alt="" />
            </div> -->
            <div class="home-common-title">
              {{ $t('home.homeCommunity1') }}
            </div>
            <!-- <div class="home-common-content">
              <p>{{ $t('home.homeDepositsContent') }}</p>
            </div> -->
            <div class="upward-btn" @click="goGle">
              <span>Contact With Us</span>
            </div>
          </div>
          <div class="round">
            <img src="./../../assets/docs/round.png" alt="" />
          </div>
        </li>
        <li
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div class="upward">
            <!-- <div class="home-common-icon">
              <img src="./../../assets/docs/20.png" alt="" />
            </div> -->
            <div class="home-common-title">{{ $t('home.homeCommunity2') }}</div>
            <!-- <div class="home-common-content">
              <p>{{ $t('home.homeEarnContent') }}</p>
            </div> -->
            <div class="upward-btn" @click="expect">
              <span>Comming Soon</span>
            </div>
          </div>
          <div class="round">
            <img src="./../../assets/docs/round.png" alt="" />
          </div>
        </li>
        <li
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div class="upward">
            <!-- <div class="home-common-icon">
              <img src="./../../assets/docs/21.png" alt="" />
            </div> -->
            <div class="home-common-title">{{ $t('home.homeCommunity3') }}</div>
            <div class="upward-list">
              <div class="noLink">
                <img src="./../../assets/comment/12.png" alt="" />
              </div>
              <div @click="goTwitter">
                <img src="./../../assets/comment/1.png" alt="" />
              </div>
            </div>
            <!-- <div class="home-common-content">
              <p>{{ $t('home.homeReceiveContent') }}</p>
            </div> -->
          </div>
          <div class="round">
            <img src="./../../assets/docs/round.png" alt="" />
          </div>
        </li>
      </div>
      <div class="mobile">
        <PublicTitle class="home-title" :title="$t('home.homeCommunity')" />
        <div class="seiper-container" ref="mySwiper3">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <li>
                <div class="upward">
                  <!-- <div class="home-common-icon">
              <img src="./../../assets/docs/19.png" alt="" />
            </div> -->
                  <div class="home-common-title">
                    {{ $t('home.homeCommunity1') }}
                  </div>
                  <!-- <div class="home-common-content">
              <p>{{ $t('home.homeDepositsContent') }}</p>
            </div> -->
                  <div class="upward-btn" @click="goGle">
                    <span>Contact With Us</span>
                  </div>
                </div>
                <div class="round">
                  <img src="./../../assets/docs/round.png" alt="" />
                </div>
              </li>
            </div>
            <div class="swiper-slide">
              <li>
                <div class="upward">
                  <!-- <div class="home-common-icon">
              <img src="./../../assets/docs/20.png" alt="" />
            </div> -->
                  <div class="home-common-title">
                    {{ $t('home.homeCommunity2') }}
                  </div>
                  <!-- <div class="home-common-content">
              <p>{{ $t('home.homeEarnContent') }}</p>
            </div> -->
                  <div class="upward-btn" @click="expect">
                    <span>Comming Soon</span>
                  </div>
                </div>
                <div class="round">
                  <img src="./../../assets/docs/round.png" alt="" />
                </div>
              </li>
            </div>
            <div class="swiper-slide">
              <li>
                <div class="upward">
                  <div class="home-common-title">
                    {{ $t('home.homeCommunity3') }}
                  </div>
                  <div class="upward-list">
                    <div class="noLink">
                      <img src="./../../assets/comment/12.png" alt="" />
                    </div>
                    <div @click="goTwitter">
                      <img src="./../../assets/comment/1.png" alt="" />
                    </div>
                  </div>
                </div>
                <div class="round">
                  <img src="./../../assets/docs/round.png" alt="" />
                </div>
              </li>
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
    </div>
    <!-- <div class="home-benefit">
      <PublicTitle
        data-aos="zoom-in-up"
        class="home-title"
        :title="$t('home.homeAdvantageTit')"
      />
      <div class="home-conent">
        <li data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
          <div class="borderRadius">
            <div class="home-tokens-logo">
              <img src="./../../assets/docs/22.png" alt="" />
            </div>
            <div class="home-tokens-title">游戏稳定币：CEON</div>
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
            <div class="home-tokens-logo">
              <img src="./../../assets/docs/22.png" alt="" />
            </div>
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
                  <div class="home-tokens-logo">
                    <img src="./../../assets/docs/22.png" alt="" />
                  </div>
                  <div class="home-tokens-title">游戏稳定币：CEON</div>
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
                  <div class="home-tokens-logo">
                    <img src="./../../assets/docs/22.png" alt="" />
                  </div>
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
import EventBus from '@/components/eventBus/index.js'
import PublicTitle from '@/components/publicTitle.vue'
// import Bottom from '@/components/bottom/index.vue'
import { getWalletAddress, isWalletConnected } from './../../white/index.js'
import { Swiper } from 'vue-awesome-swiper'
import axios from 'axios'

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
          imgSrc: require('./../../assets/comment/1.png'),
        },
        {
          imgSrc: require('./../../assets/comment/12.png'),
        },
        // {
        //   imgSrc: require('./../../assets/comment/3.png'),
        // },
        {
          imgSrc: require('./../../assets/comment/4.png'),
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
      // this.swiper5()
    })
    this.$bus.$on('anchorPoint', (val) => {
      this.anchorPoint1(val)
    })
  },
  methods: {
    // 发布更新官网用
    // async aCurl() {
    //   const response = await axios.post('http://107.23.80.88:8020', 'faban', {
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //   })
    //   console.log(response,'----')
    // },
    // 锚点
    anchorPoint1(e) {
      this.$router.push({ name: 'home' })
      window.location.hash = '#' + e
    },
    goOuter(index) {
      switch (index) {
        case 0:
          window.open('https://twitter.com/Cenozoic_xyz', '_blank')
          break
        case 1:
          break
        case 2:
          window.open('https://cenozoic-protocol.gitbook.io', '_blank')
          break
      }
    },
    goNow() {
      window.open(
        'https://cenozoic-protocol.gitbook.io/cenozoic-protocol-litepaper/key-features/universal-economic-layer',
      )
    },
    goModel() {
      window.open(
        'https://cenozoic-protocol.gitbook.io/cenozoic-protocol-litepaper/economic-model/stablecoin-usdceno',
      )
    },
    goGle() {
      window.open('https://forms.gle/FdWiDGXFGYLVdbqv7')
    },
    goTwitter() {
      window.open('https://twitter.com/Cenozoic_xyz')
    },
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
    // swiper5() {
    //   new Swiper(this.$refs.mySwiper5, {
    //     slidesPerView: 3,
    //     direction: 'vertical',
    //     effect: 'coverflow',
    //     centeredSlides: true,
    //     watchSlidesProgress: true,
    //     autoplay: true,
    //     // speed: 500,
    //     // delay: 1000,
    //     // delay: 35,
    //     // coverflow: {
    //     //   stretch: 10,
    //     //   depth: 0,
    //     // },
    //     slideShadows: false,
    //     slidesPerGroup: 1,
    //     loop: true,
    //     zoom: true,
    //     loopFillGroupWithBlank: true,
    //   })
    // },
  },
}
</script>

<style lang="less" scoped>
@font-face {
  font-family: BRLNSDB;
  font-weight: 400;
  font-style: normal;
  src: url('./../../compon/BRLNSR.TTF') format('truetype');
}
.home {
  padding-top: 72px;
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
  .home-btn {
    width: 210px;
    // padding: 5px 30px;
    height: 67px;
    margin: 0 auto;
    margin-top: 40px;
    line-height: 67px;
    font-size: 24px;
    padding: 0 15px;
    font-weight: 700;
    color: #000000;
    text-align: center;
    border-radius: 5px;
    background: linear-gradient(to right, #70c95d, #c2ee8f);
    cursor: pointer;
  }
  .home-btn:hover {
    background: linear-gradient(to right, #c2ee8f, #70c95d);
  }
  .home-subscribe {
    background: #232835;
    background: url('./../../assets/docs/01.jpg') no-repeat;
    background-size: 100% 100%;
    box-sizing: border-box;
    .home-conent {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 100%;
      .home-subscribe-left {
        padding: 20px;
        line-height: 1.5;
        text-align: center;
        font-size: 14px;
        h1 {
          font-size: 100px;
          font-family: BRLNSDB;
          font-weight: bold;
          color: #ffffff;
          word-break: break-word !important;
        }
        p {
          width: 1155px;
          font-size: 24px;
          font-family: LigaMontserratSemiBold;
          font-weight: 600;
          color: #e8e8e8;
          margin: 20px auto;
          word-break: break-word !important;
        }
        .home-line {
          height: 1px;
          width: 100%;
          margin: 60px auto;
          background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0) (0%),
            #6a7b57(50%),
            rgba(0, 0, 0, 0) (100%)
          );
        }

        .home-subscribe-left-btn {
          margin: 40px auto;
          display: flex;
          justify-content: center;
          align-items: center;
          div {
            width: 230px;
            height: 75px;
            line-height: 75px;
            padding: 0px 15px;
            color: #000;
            font-weight: 700;
            border-radius: 5px;
            font-size: 24px;
          }
          .subscribeTo {
            color: #000000;
            text-align: center;
            background: linear-gradient(to right, #70c95d, #c2ee8f);
            cursor: pointer;
          }
          .subscribeTo:hover {
            // zoom: 1.1;
            background: linear-gradient(to right, #c2ee8f, #70c95d);
          }
          .home-subscribe-left-docs {
            margin-left: 20px;
            border-radius: 5px;
            border: 1px dashed #6bb673;
            // background: linear-gradient(to right, #3dfccb, #e1f86e);
            // -webkit-background-clip: text;
            // color: transparent;
            // overflow: hidden;
            cursor: pointer;
            a {
              // background: linear-gradient(to right, #3dfccb, #e1f86e);
              // -webkit-background-clip: text;
              // color: transparent;
              display: inline-block;
              width: 100%;
              height: 100%;
              color: #fff;
              span {
                display: inline-block;
                color: #9b9fa0;
                text-align: center;
              }
            }
          }
          .home-subscribe-left-docs:hover {
            border: 1px solid #6bb673;
          }
        }
      }
    }
    .home-subscribe-outer {
      // position: absolute;
      // left: 20px;
      // bottom: 5%;
      // display: flex;
      margin: 40px 0;
      margin-bottom: 80px;
      cursor: pointer;
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        li {
          margin: 0 10px;
          div {
            width: 30px;
            height: 30px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .noLink {
            width: 30px;
            height: 23px;
          }
        }
      }
    }
  }
  .home-collapse {
    background: url('./../../assets/docs/02.jpg') no-repeat;
    background-size: 100% 100%;
    .home-conent {
      margin: 0 auto;
      // padding-top: 50px;
      .home-title {
        margin: 0 auto;
        padding: 50px 0;
        text-align: center;
      }
      .home-subscribe-swiper {
        height: 320px;
        overflow: hidden;
        .seiper-container {
          .swiper-wrapper {
            width: 100%;
            .swiper-slide {
              height: 50px;
              width: 100%;
            }
          }
        }
      }
      /deep/.el-collapse {
        border: 0px;
        .el-collapse-item {
          background: rgba(0, 0, 0, 0.2);
          color: #fff;
          border: 1px solid #434343;
          border-radius: 8px;
          margin-bottom: 50px;
          padding: 0 30px;
          .el-collapse-item__header {
            background: rgba(0, 0, 0, 0);
            color: #fff;
            height: 76px;
            border: 0px;
            font-weight: 400;
            font-size: 24px;
          }
          .el-collapse-item__wrap {
            background: rgba(0, 0, 0, 0);
            border: 0px;
            .el-collapse-item__content {
              color: #a7a9ae;
              font-size: 16px;
              word-break: break-word !important;
            }
          }
        }
        .is-active {
          border: 1px solid #6bb95a;
          .el-collapse-item__header {
            color: #8ee583;
            transition: border-bottom-color 20s !important;
          }
          .el-collapse-item__arrow.is-active {
            border: 0px !important;
          }
        }
        .el-collapse-item:hover {
          border: 1px solid #6bb95a;
        }
      }
      .home-btn {
        margin-left: 0;
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
        background: rgba(129, 129, 129, 0.2);
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
        word-break: break-all !important;
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
        > div:hover {
          background: rgba(129, 129, 129, 0.5);
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
        > div:hover {
          background: rgba(129, 129, 129, 0.5);
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
    background: url('./../../assets/docs/03.jpg') no-repeat;
    background-size: 100% 100%;
    padding: 80px 0;
    .home-title {
      padding: 40px 0;
      text-align: center;
    }
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      li {
        width: 34%;
        height: 260px;
        color: #adadad;
        padding: 30px;
        font-size: 14px;
        box-sizing: border-box;
        border-radius: 5px;
        background: url('./../../assets/docs/29-1.png') no-repeat;
        background-size: 100% 100%;
        line-height: 1.5;
        word-break: break-word !important;
        .home-content-top {
          display: flex;
          padding: 0 10px;
          align-items: center;
          margin-bottom: 10px;
        }
        .home-common-icon {
          width: 68px;
          height: 68px;
          margin: 0;
        }
        .home-common-title {
          font-size: 24px;
          font-weight: 600;
          color: #fff;
          margin-left: 10px;
          // background: linear-gradient(to right, #2ffdd4, #e0f86f);
          // -webkit-background-clip: text;
          // color: transparent;
        }
        .home-common-content {
          padding: 0 10px;
        }
      }
      li:nth-child(2) {
        margin-top: 60px;
      }
      li:nth-child(3) {
        margin-top: 120px;
      }
      li:hover {
        background: url('./../../assets/docs/30-1.png') no-repeat;
        background-size: 100% 100%;
      }
    }
    .mobile {
      display: none;
    }
  }

  .home-veZoic {
    line-height: 1.5;
    padding: 40px 0;
    background: url('./../../assets/docs/04.jpg') no-repeat;
    background-size: 100% 100%;
    .home-conent {
      display: flex;
      justify-content: space-between;
      position: relative;
      padding: 80px 0;
      li {
        font-size: 14px;
        width: 48%;
        word-break: break-word !important;

        .home-veZoicTitle {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 30px;
        }
        .home-veZoic-img {
          // position: absolute;
          // left: -30%;
          width: 100%;
          margin: 0 auto;
          border-radius: 20px;
          box-shadow: 0px 0px 20px 0px #2ffdd4;
          img {
            width: 100%;
            height: 100%;
            border-radius: 20px;
          }
        }
      }
      li:nth-child(1) {
        .home-veZoic-img {
          // display: none;
        }
      }
    }
    .home-veZoic-title {
      font-size: 24px;
      margin-bottom: 10px;
    }
    .home-veZoic-tit {
      font-size: 18px;
    }
    .home-veZoic-content {
      color: #adadad;
      font-size: 14px;
      margin-bottom: 20px;
      line-height: 1.5;
    }
  }
  .home-how {
    background: url('./../../assets/docs/05.jpg') no-repeat;
    background-size: 100% 100%;
    padding: 40px 0;
    padding-top: 80px;
    .home-title {
      padding: 40px 0;
      text-align: center;
    }
    .tow {
      display: flex;
      justify-content: space-between;
    }
    .home-conent {
      .home-how-line {
        width: 100%;
        margin: 40px auto;
        margin-bottom: 20px;
        div {
          border: 1px solid #535353;
        }
      }
      li {
        margin-top: 20px;
        position: relative;
        width: 30%;
        height: 200px;
        padding: 30px;
        margin-top: 40px;
        border: 1px solid #383938;
        box-sizing: border-box;
        font-size: 14px;
        line-height: 1.5;
        border-radius: 5px;
        color: #adadad;
        .upward {
          .home-common-icon {
            width: 68px;
            height: 68px;
          }
          .home-common-title {
            font-size: 18px;
            font-weight: normal;
            color: #ffffff;
            // background: linear-gradient(to right, #3dfdcb, #def871);
            // -webkit-background-clip: text;
            // color: transparent;
          }
          .upward-btn {
            width: 130px;
            margin-left: 0;
            font-size: 12px;
            border-radius: 4px;
            overflow: hidden;
            cursor: pointer;
            margin-top: 40px;
            span {
              display: inline-block;
              text-align: center;
              width: 126px;
              height: 30px;
              line-height: 30px;
              border: 2px solid;
              border-image: linear-gradient(90deg, #77d965, #d1ff9a) 1;
              color: #72d161;
            }
          }
          .upward-list {
            display: flex;
            margin-top: 40px;
            div {
              width: 30px;
              height: 30px;
              border: 1px solid #fff;
              border-radius: 50%;
              cursor: pointer;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-right: 20px;
              img {
                width: 80%;
                height: 80%;
              }
            }
            .noLink {
              img {
                width: 80%;
                height: 60%;
              }
            }
          }
        }
        .round {
          display: none;
          position: absolute;
          top: -38px;
          left: 25px;
          width: 30px;
          height: 30px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      li:hover {
        height: 220px;
        margin: 0;
        border: 0px;
        background: url('./../../assets/docs/31.png') no-repeat;
        background-size: 100% 100%;
        .round {
          display: block;
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
      li:hover {
        // background: rgba(129, 129, 129, 0.2);
        zoom: 1.01;
      }
    }
    .mobile {
      display: none;
    }
  }
  /deep/.el-dialog__wrapper {
    color: #fff;
    .el-dialog {
      background: #0f1815;
      opacity: 0.95;
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
                    border: 1px solid #81fc5b;
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
        .el-button {
          border: 0px solid;
          color: #000;
        }
        .determine {
          background: linear-gradient(to right, #46d44a, #abf47c);
        }
        .cancel {
          background: none;
          border: 1px solid #81fc5b !important;
          color: #fff;
        }
      }
    }
  }
}
@media screen and (max-width: 1280px) {
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
      .home-btn {
        margin: 0 auto !important;
        width: 2rem;
        height: 0.8rem;
        line-height: 0.8rem;
        font-size: 0.3rem;
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
          .home-line {
            margin: 0.5rem auto;
          }
          .home-subscribe-outer {
            margin: 0.5rem auto;
            margin-bottom: 0.8rem;
            div {
              li {
                width: 0.45rem;
                height: 0.45rem;
                margin: 0 0.1rem;
              }
            }
          }
          .home-subscribe-left-btn {
            div {
              width: 2.2rem;
              height: 1rem;
              line-height: 1rem;
              padding: 0px 15px;
              color: #000;
              font-weight: 700;
              border-radius: 5px;
              font-size: 0.4rem;
            }
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
    .home-collapse {
      .home-conent {
        /deep/.el-collapse {
          .el-collapse-item {
            margin-bottom: 0.5rem;
            padding: 0 0.4rem;
            .el-collapse-item__header {
              font-size: 0.3rem;
            }
            .el-collapse-item__wrap {
              .el-collapse-item__content {
                font-size: 0.2rem;
              }
            }
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
          height: 4rem;
          .seiper-container {
            .swiper-wrapper {
              width: 100% !important;
              .swiper-slide {
                width: 100% !important;
                li {
                  width: 75%;
                  margin: 0 auto;
                  text-align: center;
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
                    font-size: 0.35rem;
                  }
                  .home-common-content {
                    line-height: 1.2;
                    font-size: 0.25rem;
                    color: #87868c;
                    word-break: break-word !important;
                  }
                }
              }
            }
            .swiper-button-prev,
            .swiper-button-next {
            }
          }
        }
      }
    }
    .home-veZoic {
      .home-conent {
        display: block;
        padding: 0;
        li:nth-child(1) {
          .home-veZoicTitle {
            width: 2.5rem;
            margin: 0 auto;
          }
          .home-veZoic-img {
            display: block;
            // position: inherit;
            width: 5rem;
            height: 4.5rem;
            margin: 0.4rem auto;
          }

          .home-veZoic-title {
            font-size: 0.4rem;
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
          .home-veZoicTitle {
            font-size: 0.5rem;
          }
          .home-veZoic-title {
            font-size: 0.35rem;
          }
          p {
            font-size: 0.25rem;
          }
        }
        li:nth-child(2) {
          // display: none;
        }
      }
    }
    .home-how {
      padding-top: 0.5rem;
      .home-conent {
        display: none !important;
      }
      .mobile {
        display: block;
        .seiper-container {
          position: relative;
          .swiper-wrapper {
            .swiper-slide {
              li {
                width: 75%;
                height: 2rem;
                margin: 0 auto;
                border: 0.06rem solid #383938;
                border-radius: 0.05rem;
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
                    font-size: 0.35rem;
                    margin: 0.2rem 0;
                    text-align: center;
                    line-height: 1.2;
                  }
                  .upward-btn {
                    width: 2.45rem;
                    height: 0.8rem;
                    line-height: 0.8rem;
                    margin: 0 auto;
                    margin-top: 0.2rem;
                    font-size: 0.25rem;
                    span {
                      display: inline-block;
                      text-align: center;
                      padding: 0 0.2rem;
                      border: 0.04rem solid;
                      border-image: linear-gradient(90deg, #77d965, #d1ff9a) 1;
                      color: #72d161;
                    }
                  }
                  .upward-list {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: 0.2rem;
                    div {
                      width: 0.8rem;
                      height: 0.8rem;
                      margin: 0 0.1rem;
                      border: 0.05rem solid #fff;
                      border-radius: 50%;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      img {
                        width: 80%;
                        height: 80%;
                      }
                    }
                    .noLink {
                      img {
                        width: 80%;
                        height: 60%;
                      }
                    }
                  }
                }
                .round {
                  display: none;
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
      // top: 33%;
    }
    /deep/.el-dialog__wrapper {
      .el-dialog {
        width: 80%;
      }
    }
  }
}
</style>
