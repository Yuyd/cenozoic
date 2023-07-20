<template>
  <div class="header">
    <div class="header-content">
      <div class="header-left">
        <div class="left" @click="toHome">
          <div class="logo"><img src="./../../assets/logo.png" alt="" /></div>
          <!-- <div class="name">Cenozoic</div> -->
        </div>
        <!-- <div class="header-table">
          <div v-for="(item, index) in headerList" :key="index">
            <li
              v-if="index !== 3"
              @click="goNext(index)"
              :class="{ active: cur === index }"
            >
              {{ item }}
            </li>
            <li
              v-else
              @click="goNext(index)"
              class="moreHover"
              :class="{ active: cur === index }"
            >
              <div class="moreBox">
                <span>{{ item }}</span>
                <span class="hoverUp el-icon-arrow-up"></span
                ><span class="hoverDown el-icon-arrow-down"></span>
              </div>
              <div class="white">
                <div>
                  <a
                    href="https://superzoo-io.gitbook.io/superzoo-a-decentralized-virtual-pet-world-based-o/"
                    target="_blank"
                    >WhitePaper</a
                  >
                </div>
                <div @click="getting">Getting Started</div>
              </div>
            </li>
          </div>
        </div> -->
      </div>
      <div class="header-right">
        <div>
          <li v-show="tabShow" class="header-tab-list">
            <div v-for="(item, index) in tableList1" :key="index">
              <span
                @click="goNext(item, index)"
                :class="{ active: cur == index }"
              >
                {{ item }}
              </span>
            </div>
          </li>
          <li v-show="tabBlock" class="header-tab-list">
            <div v-for="(item, index) in tableList2" :key="index">
              <span
                @click="goNext1(item, index)"
                :class="{ active: cur1 == index }"
              >
                {{ item }}
              </span>
            </div>
          </li>
          <li v-show="tabBlock" class="mobile-list mobile-left-list">
            <div v-show="!isTabList" class="list-btn" @click="tabList">
              <img src="./../../assets/comment/pole.png" alt="" />
            </div>
            <div v-show="isTabList" class="list-btn" @click="isTabList = false">
              <!-- <img src="./../../assets/comment/point01.jpg" alt="" /> -->
              <i class="el-icon-close"></i>
            </div>
            <div v-show="isTabList" class="tab-list-item">
              <div v-for="(item, index) in tableList2" :key="index">
                <span
                  @click="goNext1(item, index)"
                  :class="{ active: cur == index }"
                >
                  {{ item }}
                </span>
              </div>
            </div>
          </li>
          <li>
            <div>
              <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                  {{ getLangFn(language) || 'EN' }}
                  <!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :disabled="language === 'en'" command="en">
                    EN
                  </el-dropdown-item>
                  <el-dropdown-item :disabled="language === 'zh'" command="zh">
                    CN
                  </el-dropdown-item>
                  <el-dropdown-item :disabled="language === 'da'" command="da">
                    DK
                  </el-dropdown-item>
                  <el-dropdown-item :disabled="language === 'es'" command="es">
                    ES
                  </el-dropdown-item>
                  <el-dropdown-item :disabled="language === 'ja'" command="ja">
                    JP
                  </el-dropdown-item>
                  <el-dropdown-item :disabled="language === 'ko'" command="ko">
                    KR
                  </el-dropdown-item>
                  <el-dropdown-item :disabled="language === 'pt'" command="pt">
                    PT
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </li>
          <li v-show="tabShow" class="connect-white">
            <div class="link-white">
              <div v-if="!myAddress" @click="whiteClick">
                {{ $t('header.connect') }}
              </div>
              <div v-else class="header-address" @click="toAccount">
                <span>
                  {{ myAddress.slice(0, 7) }}
                </span>
                <span>
                  {{ myAddress.slice(-4) }}
                </span>
              </div>
            </div>
            <div v-show="isShow" class="white-list">
              <li @click="toWhiteMetaMask">
                <div class="white-logo">
                  <img src="./../../assets/comment/6.png" alt="" />
                </div>
                <div class="white-name">
                  MetaMask
                </div>
              </li>
            </div>
            <!-- <span>{{ myAddress }}</span> -->
          </li>
          <li v-show="tabBlock" class="connect-white mobile-white">
            <div class="link-white">
              <div v-if="!myAddress" class="btnBg" @click="whiteClick">
                {{ $t('header.connect') }}
              </div>
              <div v-else class="header-address" @click="toAccount">
                <span>
                  {{ myAddress.slice(0, 7) }}
                </span>
                <span>
                  {{ myAddress.slice(-4) }}
                </span>
              </div>
            </div>
            <div v-show="isShow" class="white-list">
              <li @click="toWhiteMetaMask">
                <div class="white-logo">
                  <img src="./../../assets/comment/6.png" alt="" />
                </div>
                <div class="white-name">
                  MetaMask
                </div>
              </li>
            </div>
            <!-- <span>{{ myAddress }}</span> -->
          </li>
          <li v-show="tabShow" class="mobile-list">
            <div v-show="!isTabList" class="list-btn" @click="tabList">
              <img src="./../../assets/comment/pole.png" alt="" />
            </div>
            <div v-show="isTabList" class="list-btn" @click="isTabList = false">
              <!-- <img src="./../../assets/comment/point01.jpg" alt="" /> -->
              <i class="el-icon-close"></i>
            </div>
            <div v-show="isTabList" class="tab-list-item">
              <div v-for="(item, index) in tableList1" :key="index">
                <span
                  @click="goNext(item, index)"
                  :class="{ active: cur == index }"
                >
                  {{ item }}
                </span>
              </div>
            </div>
          </li>
          <!-- <li
            v-if="token == '' || token == null || token == undefined"
            @click="registerSumbitUniPass"
          >
            <span>SIGN UP</span>
          </li>
          <li
            v-if="token == '' || token == null || token == undefined"
            @click="registerSumbitUniPass"
          >
            <span>REGISTER</span>
          </li> -->
          <!-- <li
            class="portrait"
            v-if="token != '' && token != undefined && token != null"
          >
            <div class="head-portrait">
              <div class="user-top">
                <i class="el-icon-s-custom"></i>
              </div>
              <div class="user-btm">
                <div class="user-account">
                  @click="toUser"
                  <span @click="toUser">User Cewr</span>
                  <i class="el-icon-caret-right"></i>
                </div>
                <div class="logOut" @click="logOut">Log out</div>
              </div>
            </div>
          </li> -->
        </div>
      </div>
      <!-- <div class="box" @click="toBox">
        <img src="./../../assets/box/box.png" alt="" />
      </div> -->
    </div>
    <!-- <LoginDialog
      :loginDialogVisible="loginDialogVisible"
      :login="login"
      :user="user"
      :registerDialogVisible="registerDialogVisible"
      @logindialog="logindialog"
      @onToRegister="onToRegister"
      @ChangeLoginClick="ChangeLoginClick"
    /> -->
  </div>
</template>

<script>
import axios from 'axios'
import EventBus from '@/components/eventBus/index.js'
import getLang from './../../lang/language.json'
import { getWalletAddress, isWalletConnected } from './../../white/index.js'
// import upWallet from "./../../util/unipasswallet/unipasswallet.js";
// import LoginDialog from "./../login/index.vue";
export default {
  components: {
    // LoginDialog,
  },
  props: {
    tabShow: Boolean,
    tabBlock: Boolean,
  },
  data() {
    return {
      tableList1: ['Features', 'Economics', 'Community'],
      tableList2: ['主页', '兑换', '游戏', '活动'],
      cur: 0,
      cur1: 0,
      myAddress: '',
      loginDialogVisible: false,
      login: false,
      user: false,
      registerForm: {
        email: '',
        walletAddress: '',
        promotionCode: '',
      },
      rulesRegister: {},
      registerDialogVisible: false,
      isToken: false,
      token: '',
      // languageList: ["中文", "en", "cn"],
      language: sessionStorage.getItem('lang'),
      isShow: false,
      isTabList: false,
    }
  },
  watch: {
    // language(newVaalue, old) {
    //   if(newVaalue != old) {
    //     this.handleCommand(newVaalue)
    //     // console.log(newVaalue, old,'173---------------')
    //     // this.language = newVaalue
    //     // getLang(newVaalue)
    //     sessionStorage.setItem("lang", newVaalue);
    //   }
    // }
  },
  created() {},
  mounted() {
    // this.tabShow = window.location.href.split('H')

    this.isTokenTable()
    this.$nextTick(() => {})
    document.addEventListener('mousedown', (e) => {
      //获取弹窗对象
      const userCon = document.querySelector('.white-list')
      if (userCon && !userCon.contains(e.target)) {
        //如果包含则跳转回之前的页面
        // this.isPulldown = false;
        this.isShow = false
      }
    })
    document.addEventListener('mousedown', (e) => {
      //获取弹窗对象
      const userCon = document.querySelector('.tab-list-item')
      if (userCon && !userCon.contains(e.target)) {
        //如果包含则跳转回之前的页面
        // this.isPulldown = false;
        this.isTabList = false
      }
    })
  },
  methods: {
    // 多语言切换
    handleCommand(value) {
      this.language = value
      this.$i18n.locale = value
      sessionStorage.setItem('lang', value)
      location.reload()
      // this.$emit('handleCommand',value)
    },
    // 语言选择
    getLangFn(language) {
      return getLang[language]
    },
    async getWalletAddress1() {
      this.myAddress = await getWalletAddress()
      localStorage.setItem('address', this.myAddress)
    },
    goNext(selector, index) {
      this.cur = index
      this.isTabList = false
      this.$bus.$emit('anchorPoint', selector)
      // this.$el.querySelector(selector).scrollIntoView()
      // switch (index) {
      //   case 0:
      //     this.$router.push({
      //       name: 'home',
      //     })
      //     break
      //   case 1:
      //     this.$router.push({
      //       name: 'games',
      //     })
      //     break
      //   case 2:
      //     this.$router.push({
      //       name: 'about',
      //     })
      //     break
      // }
    },
    goNext1(selector, index) {
      this.cur1 = index
      // this.isTabList = false
      // this.$bus.$emit('anchorPoint', selector)
      switch (index) {
        case 0:
          this.$router.push({
            name: 'home',
          })
          break
        case 1:
          this.$router.push({
            name: 'compounder',
          })
          break
        case 2:
          this.$router.push({
            name: 'games',
          })
          break
        case 3:
          this.$router.push({
            name: 'integral',
          })
          break
      }
    },
    getting() {
      this.$router.push({ name: 'welcome' })
    },

    whiteClick() {
      this.isShow = true
    },
    // 链接钱包
    toWhiteMetaMask() {
      let ethereum = window.ethereum
      if (ethereum) {
        ethereum.request({ method: 'eth_requestAccounts' })
        setTimeout(() => {
          this.getWalletAddress1()
          this.isShow = false
        }, 1000)
      } else {
        this.$message.info('Please install the MetaMask plugin')
      }
    },
    // 检查钱包是否链接
    async getIsWalletConnected() {
      try {
        let a = isWalletConnected()
        return await isWalletConnected()
      } catch (e) {
        console.info(e)
      }
    },
    tabList() {
      this.isTabList = true
    },
    // 回顶部
    toHome() {
      this.$router.push({ name: 'home' })
      let top = document.documentElement.scrollTop || document.body.scrollTop
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50
        if (top <= 0) {
          clearInterval(timeTop)
        }
      }, 20)
    },
    toLogin() {
      this.loginDialogVisible = true
    },
    toRegister() {
      this.registerDialogVisible = true
    },
    // 去个人中心
    toAccount() {
      this.$router.push('/account')
    },
    logindialog() {
      this.loginDialogVisible = false
    },
    // verificationCode() {},
    toSignIn() {
      this.loginDialogVisible = true
      this.registerDialogVisible = false
    },
    onToRegister() {
      this.loginDialogVisible = false
      this.registerDialogVisible = true
    },
    toBox() {
      this.$router.push({
        name: 'box',
      })
    },
    // 注册
    async registerSumbit(email, walletAddress, promotionCode) {
      // this.$refs[registerForm].validate(async (valid) => {
      //   if (valid) {
      let res = await axios.post('/api/app/official/register', {
        email: email,
        walletAddress: walletAddress,
        promotionCode: promotionCode,
      })
      if (res.data.code == 0) {
        // this.registerForm.email = "";
        // this.registerForm.walletAddress = "";
        // this.registerForm.promotionCode = "";
        // this.loginDialogVisible = true;
        // this.registerDialogVisible = false;
        this.$message.success(res.data.msg)
      } else {
        if (res.data.msg == 'Email has been registered') {
          this.loginSumbit(email, walletAddress)
        } else {
          this.$message.error(res.data.msg)
        }
      }
      //   }
      // });
    },
    // 登录
    async loginSumbit(email, walletAddress) {
      const query = {
        email: email,
        walletAddress: walletAddress,
      }
      let res = await axios.post('/api/app/official/login', query)
      console.log(res)
      if (res.data.code == 0) {
        this.token = res.data.data.token
        localStorage.setItem('token', this.token)
        localStorage.setItem('user_info', JSON.stringify(res.data.data))
        this.$message.success(res.data.msg)
        this.$router.push({
          name: 'account',
        })
        setTimeout(() => {
          this.getWalletAddress1()
        }, 500)
      } else {
        this.$message.error(res.data.msg)
      }
    },
    // unipass注册登录
    async registerSumbitUniPass() {
      // try {
      //   const account = await upWallet.login({
      //     email: true,
      //     eventListener: (event) => {
      //       console.log("event", event);
      //       const { type, body } = event;
      //       if (type === "email") {
      //         console.log("account", body);
      //         this.$message.success("a user register");
      //       }
      //     },
      //     // connectType: "both",
      //   });
      //   localStorage.setItem('address', account.address)
      //   if(account.newborn == false) {
      //     this.loginSumbit(account.email, account.address)
      //   } else {
      //     this.registerSumbit(account.email, account.address)
      //   }
      // } catch (e) {
      //   this.$message.error(e);
      // }
    },
    ChangeLoginClick(val) {
      this.loginDialogVisible = false
      this.token = val
      this.isTokenTable()
    },
    // 判断是否有token
    isTokenTable() {
      this.token = localStorage.getItem('token')
      if (this.token == '' || this.token == null) {
        this.isToken = false
      } else {
        this.isToken = true
      }
      setTimeout(() => {
        this.getWalletAddress1()
      }, 500)
    },
    // 用户中心
    toUser() {
      this.isTokenTable()
      this.$router.push({
        name: 'account',
      })
    },
    // 退出登录
    async logOut() {
      // await upWallet.logout();
      localStorage.clear()
      this.token = ''
      this.isTokenTable()
      this.$router.push({
        name: 'home',
      })
    },
  },
}
</script>

<style scoped lang="less">
@font-face {
  font-family: Montserrat;
  font-weight: 400;
  font-style: normal;
  src: url('./../../compon/Montserrat-SemiBold.ttf') format('truetype');
}
.header {
  width: 100%;
  background: url('./../../assets/docs/01.jpg') no-repeat;
  background-size: 100%;
  opacity: 0.8;
  // background: #fff;
  color: #fff;
  position: fixed;
  z-index: 999;

  .header-content {
    height: 72px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header-left {
      display: flex;
      align-items: center;
      margin-left: 50px;
      height: 100%;
      .left {
        display: flex;
        align-items: center;
        font-weight: 700;
        cursor: pointer;
        .logo {
          width: 140px;
          height: 40px;
          padding-left: 10px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .name {
          font-size: 18px;
          background: linear-gradient(to right, #41fcca, #e2f96d);
          -webkit-background-clip: text;
          color: transparent;
        }
      }
      div {
        // padding: 0 20px;
      }
      .header-logo {
      }
      .header-table {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        font-size: 14px;
        > div {
          height: 100%;
          line-height: 60px;
          padding: 0 20px;
          cursor: pointer;
          .moreHover {
            position: relative;
            .moreBox {
              display: flex;
              align-items: center;
              .hoverUp {
                display: none;
              }
            }
            .white {
              position: relative;
              left: -25%;
              bottom: 0;
              display: none;
              color: #fff;
              background: #000;
              a {
                color: #fff;
              }
              a:hover {
                color: #ffd155;
              }
              p:hover {
                color: #ffd155;
              }
            }
          }
          .moreHover:hover {
            // background: pink;
            .hoverDown {
              display: none;
            }
            .hoverUp {
              // display: block !important;
            }
            .white {
              // display: block !important;
            }
          }
        }
        div:hover {
          color: #ffd155;
        }
        .active {
          color: #ffd155;
        }
      }
    }
    .header-right {
      margin-right: 50px;
      height: 100%;
      div {
        display: flex;
        align-items: center;
        height: 100%;
        font-size: 18px;
        li {
          margin: 0 10px;
          // height: 25px;
          // line-height: 25px;
          padding: 0 10px;
          // width: 100px;
          border-radius: 5px;
          font-weight: 600;
          // font-size: 24px;
          cursor: pointer;
          .el-dropdown {
            color: #fff;
          }
          .header-address {
            width: 105px;
            span {
              display: inline-block;
              width: 50%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
          /deep/.el-dropdown {
            .el-dropdown-link {
              height: 28px;
              line-height: 28px;
              font-family: Avenir;
              font-weight: normal;
              color: #81fc5b;
              border: 1px solid #81fc5b;
              padding: 0px 12px;
              border-radius: 3px;
              font-size: 18px;
            }
          }
        }
        .header-tab-list {
          display: flex;
          div {
            padding: 0 10px;
            span {
              display: inline-block;
              // font-family: Montserrat;
              font-weight: 400;
              width: 100%;
              height: 100%;
            }
            span:hover {
              color: #48d34c;
            }
            .active {
              color: #48d34c;
            }
          }
        }
        .connect-white {
          color: #000;
          // background: #abf47c;
          background: linear-gradient(to right, #46d44a, #abf47c);
          // display: block;
          .link-white {
            width: 120px;
            height: 40px;
            font-size: 24px;
            font-family: Avenir-Roman;
            font-weight: 500;
            text-align: center;
            position: relative;
            div {
              margin: 0 auto;
            }
          }
          .white-list {
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 240px;
            height: 120px;
            background: url('./../../assets/comment/5.png') no-repeat;
            background-size: 100% 100%;
            padding: 27px 30px;
            padding-top: 25px;
            padding-bottom: 10px;
            position: absolute;
            top: 95%;
            right: 2%;
            li {
              // width: 130px;
              height: 60px;
              display: flex;
              align-items: center;
              margin: 0;
              padding: 0;
              div {
                margin: 0;
              }
              .white-logo {
                width: 45px;
                height: 45px;
                background: #ffffff;
                border-radius: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                img {
                  width: 70%;
                  height: 70%;
                }
              }
              .white-name {
                padding-left: 10px;
                font-size: 24px;
                font-weight: 600;
                color: #fff;
              }
            }
          }
        }
        .mobile-list {
          display: none;
        }
        .portrait {
          width: 15px;
          .head-portrait {
            position: relative;
            .user-top {
              i {
                line-height: 25px;
              }
            }
            .user-btm {
              display: none;
              position: absolute;
              top: 25px;
              left: 50%;
              transform: translateX(-50%);
              width: 120px;
              text-align: center;
              padding: 10px 0 20px 0;
              background: #0f131b;
              font-size: 14px;
              div {
                // height: 40px;
                // line-height: 40px;
                margin: 10px 0;
                align-items: center;
                justify-content: center;
              }
              .user-account:hover {
                // background: #2a2359;
              }
              .logOut {
                width: 80px;
                height: 30px;
                line-height: 30px;
                margin: 0 auto;
                background: #5040c4;
                border-radius: 20px;
              }
            }
          }
        }
        .portrait:hover {
          .head-portrait {
            .user-top {
              // display: none !important;
            }
            .user-btm {
              display: block !important;
            }
          }
        }
      }
    }
  }
  .box {
    width: 120px;
    height: 120px;
    position: fixed;
    bottom: 100px;
    right: 80px;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .el-dialog__wrapper {
    // top: 50%;
    // transform: translateY(-50%);
    z-index: 9999 !important;
    /deep/ .el-dialog {
      // margin-top: 0 !important;
      background: #1e1f23;
      .el-dialog__header {
        text-align: center;
        height: 40px;
        line-height: 40px;
        background: #16171b;
        .el-dialog__title {
          color: #fff;
          font-size: 26px;
          font-weight: 500;
        }
        .el-dialog__headerbtn {
          width: 30px;
          height: 30px;
          border-radius: 30px;
          font-weight: 700;

          color: #000;
          background: #f1f1f1;
        }
      }
      .el-dialog__body {
        .login-conent {
          .login-type {
            display: flex;
            justify-content: space-between;
            div {
              width: 120px;
              height: 30px;
              line-height: 30px;
              background: #452cd2;
              color: #fff;
              border-radius: 15px;
              text-align: center;
              cursor: pointer;
            }
            div:last-child {
              background: none;
              border: 1px solid #452cd2;
            }
          }
        }
        .el-form {
          // z-index: 99;
          .el-form-item {
            margin-bottom: 0;
            p {
              color: #fff;
              font-weight: 500;
              margin-top: 10px;
              text-align: left;
            }
            .el-form-item__content {
              .el-input {
                .el-input__inner {
                  background: #161719;
                  border: 0px;
                }
              }
              .el-checkbox {
                .el-checkbox__label {
                  color: #fff;
                }
              }
              .el-button {
                background: #2c1a91;
                border: 0px;
                color: #fff;
              }
              .el-select {
                width: 100%;
                border: 2px solid #452cd2;
                border-radius: 8px;
                overflow: hidden;
                .el-input {
                }
              }
            }
          }
        }
      }
      .el-dialog__footer {
        text-align: center;
        .dialog-footer {
          .mb {
            display: none;
          }
          .el-button {
            background: #452cd2;
            border: 0px;
            color: #fff;
            font-weight: 600;
            width: 100%;
            border-radius: 15px;
          }
          .Register {
            margin-top: 20px;
            margin-bottom: 20px;
            text-align: left;
            p {
              color: #fff;
              span {
                color: #24c125;
                text-decoration: underline;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1280px) {
  .header {
    opacity: 1;
    .header-content {
      width: 100%;
      height: 1.2rem;
      .header-left {
        margin-left: 0.1rem;
        .left {
          .logo {
            width: 2rem;
            height: 0.6rem;
            padding-left: 0.1rem;
          }
        }
      }
      .header-right {
        margin-right: 0.1rem;
        div {
          justify-content: center;
          li {
            padding: 0;
            .el-dropdown {
              .el-dropdown-link {
                height: 0.58rem;
                width: 0.6rem;
                line-height: 0.58rem;
                font-size: 0.3rem;
              }
            }
          }
          .header-tab-list {
            display: none;
          }
          .mobile-list {
            display: block;
            position: relative;
            .list-btn {
              width: 0.5rem;
              height: 0.5rem;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .tab-list-item {
              position: absolute;
              right: -0.3rem;
              top: 0.89rem;
              width: 6.5rem;
              height: 100vh;
              display: block;
              padding: 0.5rem;
              background: rgba(0, 0, 0, 1);
              font-size: 0.4rem;
              font-weight: 500;
              div {
                height: 0.8rem;
                line-height: 0.4rem;
              }
            }
          }
          .mobile-left-list {
            .tab-list-item {
              left: -3.1rem;
              width: 100vw;
              padding: 0;
              div {
                justify-content: center;
              }
            }
          }
          .mobile-white {
            color: #fff;
            background: none;
            .btnBg {
              width: 100%;
              color: #000;
              // background: #abf47c;
              background: linear-gradient(to right, #46d44a, #abf47c);
            }
          }
          .connect-white {
            .link-white {
              width: 1.8rem;
              height: 0.6rem;
              font-size: 0.3rem;
              font-weight: normal;
            }
          }
        }
      }
    }
  }
}
</style>
<style lang="less">
.el-dropdown-menu.el-popper {
  background: #08080a !important;
  border: 1px solid #81fc5b;
  .el-dropdown-menu__item {
    background-color: #08080a !important;
    color: #fff;
  }
  .el-dropdown-menu__item:hover {
    color: #81fc5b;
  }
  .is-disabled {
    color: #81fc5b;
  }
  .popper__arrow {
    border-bottom-color: #81fc5b !important;
  }
  .popper__arrow::after {
    border-bottom-color: #81fc5b !important;
  }
}
@media screen and (max-width: 1300px) {
}
</style>
