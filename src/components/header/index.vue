<template>
  <div class="header">
    <div class="header-content">
      <div class="header-left">
        <div class="left">
          <div class="logo"><img src="./../../assets/logo.png" alt="" /></div>
          <div class="name">Cenozoic</div>
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
          <li>
            <div>
              <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                  {{ getLang(language) || "English"
                  }}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :disabled="language === 'en'" command="en">
                    English
                  </el-dropdown-item>
                  <el-dropdown-item :disabled="language === 'zh'" command="zh">
                    简体中文
                  </el-dropdown-item>
                  <el-dropdown-item :disabled="language === 'da'" command="da">
                    Dansk
                  </el-dropdown-item>
                  <el-dropdown-item :disabled="language === 'es'" command="es">
                    Español
                  </el-dropdown-item>
                  <el-dropdown-item :disabled="language === 'ja'" command="ja">
                    日本語
                  </el-dropdown-item>
                  <el-dropdown-item :disabled="language === 'ko'" command="ko">
                    한국어
                  </el-dropdown-item>
                  <el-dropdown-item :disabled="language === 'pt'" command="pt">
                    Português
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </li>
          <li class="connect-white">
            <div
              v-if="myAddress == '' || myAddress == 'undefined'"
              @click="toWhite"
            >
              {{ $t("header.connect") }}
            </div>
            <div v-else class="header-address">
              <span>{{ myAddress.slice(0, 9) }}</span>
              <span>{{ myAddress.slice(-6) }}</span>
            </div>
            <!-- <span>{{ myAddress }}</span> -->
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
import axios from "axios";
import getLang from "./../../lang/language.json";
import { getWalletAddress } from "./../../white/index.js";
// import upWallet from "./../../util/unipasswallet/unipasswallet.js";
// import LoginDialog from "./../login/index.vue";
export default {
  components: {
    // LoginDialog,
  },
  data() {
    return {
      headerList: ["Docs", "Games", "About"],
      cur: 0,
      myAddress: "",
      loginDialogVisible: false,
      login: false,
      user: false,
      registerForm: {
        email: "",
        walletAddress: "",
        promotionCode: "",
      },
      rulesRegister: {},
      registerDialogVisible: false,
      isToken: false,
      token: "",
      // languageList: ["中文", "en", "cn"],
      language: sessionStorage.getItem("lang"),
    };
  },
  watch: {},
  created() {},
  mounted() {
    this.isTokenTable();
    this.$nextTick(() => {});
  },
  methods: {
    // 多语言切换
    handleCommand(value) {
      this.language = value;
      this.$i18n.locale = value;
      window.sessionStorage.setItem("lang", this.language);
    },
    // 语言选择
    getLang(language) {
      return getLang[language];
    },
    async getWalletAddress1() {
      this.myAddress = await getWalletAddress();
      localStorage.setItem("address", this.myAddress);
    },
    goNext(index) {
      this.cur = index;
      switch (index) {
        case 0:
          this.$router.push({
            name: "home",
          });
          break;
        case 1:
          this.$router.push({
            name: "games",
          });
          break;
        case 2:
          this.$router.push({
            name: "about",
          });
          break;
        // case 3:
        // 	window.open("https://email.163.com/");
        // break;
        // case 4:
        // 	window.open("https://email.163.com/");
        // break;
      }
    },
    getting() {
      this.$router.push({ name: "welcome" });
    },
    // 链接钱包
    toWhite() {
      const ethereum = window.ethereum;
      ethereum.request({ method: "eth_requestAccounts" });
      setTimeout(() => {
        this.getWalletAddress1();
      }, 2000);
    },
    toLogin() {
      this.loginDialogVisible = true;
    },
    toRegister() {
      this.registerDialogVisible = true;
    },
    logindialog() {
      this.loginDialogVisible = false;
    },
    // verificationCode() {},
    toSignIn() {
      this.loginDialogVisible = true;
      this.registerDialogVisible = false;
    },
    onToRegister() {
      this.loginDialogVisible = false;
      this.registerDialogVisible = true;
    },
    toBox() {
      this.$router.push({
        name: "box",
      });
    },
    // 注册
    async registerSumbit(email, walletAddress, promotionCode) {
      // this.$refs[registerForm].validate(async (valid) => {
      //   if (valid) {
      let res = await axios.post("/api/app/official/register", {
        email: email,
        walletAddress: walletAddress,
        promotionCode: promotionCode,
      });
      if (res.data.code == 0) {
        // this.registerForm.email = "";
        // this.registerForm.walletAddress = "";
        // this.registerForm.promotionCode = "";
        // this.loginDialogVisible = true;
        // this.registerDialogVisible = false;
        this.$message.success(res.data.msg);
      } else {
        if (res.data.msg == "Email has been registered") {
          this.loginSumbit(email, walletAddress);
        } else {
          this.$message.error(res.data.msg);
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
      };
      let res = await axios.post("/api/app/official/login", query);
      console.log(res);
      if (res.data.code == 0) {
        this.token = res.data.data.token;
        localStorage.setItem("token", this.token);
        localStorage.setItem("user_info", JSON.stringify(res.data.data));
        this.$message.success(res.data.msg);
        this.$router.push({
          name: "account",
        });
        setTimeout(() => {
          this.getWalletAddress1();
        }, 500);
      } else {
        this.$message.error(res.data.msg);
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
      this.loginDialogVisible = false;
      this.token = val;
      this.isTokenTable();
    },
    // 判断是否有token
    isTokenTable() {
      this.token = localStorage.getItem("token");
      if (this.token == "" || this.token == null) {
        this.isToken = false;
      } else {
        this.isToken = true;
      }
      setTimeout(() => {
        this.getWalletAddress1();
      }, 500);
    },
    // 用户中心
    toUser() {
      this.isTokenTable();
      this.$router.push({
        name: "account",
      });
    },
    // 退出登录
    async logOut() {
      // await upWallet.logout();
      localStorage.clear();
      this.token = "";
      this.isTokenTable();
      this.$router.push({
        name: "home",
      });
    },
  },
};
</script>

<style scoped lang="less">
.header {
  width: 100%;
  background: #01090b;
  color: #fff;
  position: fixed;
  z-index: 999;

  .header-content {
    // width: 1080px;
    height: 60px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header-left {
      display: flex;
      align-items: center;
      height: 100%;
      .left {
        display: flex;
        align-items: center;
        font-weight: 700;
        .logo {
          width: 40px;
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
      div {
        display: flex;
        li {
          margin: 0 10px;
          height: 25px;
          line-height: 25px;
          padding: 0 10px;
          // width: 100px;
          border-radius: 5px;

          font-size: 14px;
          cursor: pointer;
          .el-dropdown {
            color: #fff;
          }
          .header-address {
            width: 100px;
            span {
              display: inline-block;
              width: 50%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }
        .connect-white {
          color: #a3b88c;
          border: 1px solid #a3b88c;
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
</style>
