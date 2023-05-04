<template>
  <div class="home">
    <div class="home-subscribe">
      <div class="home-conent">
        <div class="home-subscribe-left">
          <h1>{{ $t("home.homeTitle") }}</h1>
          <p>{{ $t("home.homeBanner") }}</p>
          <div class="home-subscribe-left-btn">
            <div @click="subscribeTo">{{ $t("home.homeSubscribeBtn") }}</div>
            <div class="home-subscribe-left-docs">
              <span>
                {{ $t("home.homeDocs") }}
              </span>
            </div>
          </div>
        </div>
        <!-- <div class="home-subscribe-right">
          <div class="rig-img">
            <img src="./../../assets/logo.png" alt="" />
          </div>
        </div> -->
      </div>
    </div>
    <div class="home-introduce">
      <div class="home-conent">
        <div class="home-introduce-left">
          <div class="home-introduce-left1">
            <div class="home-common-icon">
              <img src="./../../assets/logo.png" alt="" />
            </div>
            <div class="home-common-title">
              {{ $t("home.homeSupporting") }}
            </div>
            <div class="home-common-content">
              {{ $t("home.homeSupportingContent") }}
            </div>
          </div>
          <div class="home-introduce-left2">
            <div class="home-common-icon">
              <img src="./../../assets/logo.png" alt="" />
            </div>
            <div class="home-common-title">{{ $t("home.homeCoMpos") }}</div>
            <div class="home-common-content">
              {{ $t("home.homeCoMposContent") }}
            </div>
          </div>
          <div class="home-introduce-left3">
            <div class="home-common-icon">
              <img src="./../../assets/logo.png" alt="" />
            </div>
            <div class="home-common-title">
              {{ $t("home.homeBuilding") }}
            </div>
            <div class="home-common-content">
              {{ $t("home.homeBuildingContent") }}
            </div>
          </div>
        </div>
        <div class="home-introduce-right">
          <div class="home-introduce-right1">
            <div class="home-common-icon">
              <img src="./../../assets/logo.png" alt="" />
            </div>
            <div class="home-common-title">
              {{ $t("home.homeInteroper") }}
            </div>
            <div class="home-common-content">
              {{ $t("home.homeInteroperContent") }}
            </div>
          </div>
          <div class="home-introduce-right2">
            <div class="home-common-icon">
              <img src="./../../assets/logo.png" alt="" />
            </div>
            <div class="home-common-title">
              {{ $t("home.homeTranspraent") }}
            </div>
            <div class="home-common-content">
              {{ $t("home.homeTranspraentContent") }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home-content">
      <div class="home-conent">
        <PublicTitle class="home-title" :title="$t('home.homeCenoTit')" />
        <ul>
          <li>
            <div class="home-common-icon">
              <img src="./../../assets/logo.png" alt="" />
            </div>
            <div class="home-common-title">
              {{ $t("home.homeGame") }}
            </div>
            <div class="home-common-content">
              {{ $t("home.homeGameContent1") }}
            </div>
            <div class="home-common-content">
              {{ $t("home.homeGameContent2") }}
            </div>
          </li>
          <li>
            <div class="home-common-icon">
              <img src="./../../assets/logo.png" alt="" />
            </div>
            <div class="home-common-title">
              {{ $t("home.homeGovernance") }}
            </div>
            <div class="home-common-content">
              {{ $t("home.homeGovernanceContent") }}
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="home-veZoic">
      <div class="home-conent">
        <li>
          <div class="home-veZoicTitle">{{ $t("home.homeVeZOIC") }}</div>
          <div class="home-veZoic-title">{{ $t("home.homeVeZOICTit1") }}</div>
          <div class="home-veZoic-tit">{{ $t("home.homeVeZOICTit2") }}</div>
          <div class="home-veZoic-content">
            <p>
              {{ $t("home.homeVeZOICContent") }}
            </p>
          </div>
          <el-button @click="expect">{{ $t("home.homeVeZOICBtn") }}</el-button>
        </li>
        <li>
          <div class="home-veZoic-img">
            <img src="./../../assets/logo.png" alt="" />
          </div>
        </li>
      </div>
    </div>
    <div class="home-how">
      <PublicTitle class="home-title" :title="$t('home.homeHowTit')" />
      <div class="home-conent">
        <li>
          <div class="upward">
            <div class="home-common-icon">
              <img src="./../../assets/logo.png" alt="" />
            </div>
            <div class="home-common-title">
              {{ $t("home.homeDepositsTit") }}
            </div>
            <div class="home-common-content">
              <p>{{ $t("home.homeDepositsContent") }}</p>
            </div>
          </div>
        </li>
        <li>
          <div class="upward">
            <div class="home-common-icon">
              <img src="./../../assets/logo.png" alt="" />
            </div>
            <div class="home-common-title">{{ $t("home.homeEarnTit") }}</div>
            <div class="home-common-content">
              <p>{{ $t("home.homeEarnContent") }}</p>
            </div>
          </div>
        </li>
        <li>
          <div class="upward">
            <div class="home-common-icon">
              <img src="./../../assets/logo.png" alt="" />
            </div>
            <div class="home-common-title">{{ $t("home.homeReceiveTit") }}</div>
            <div class="home-common-content">
              <p>{{ $t("home.homeReceiveContent") }}</p>
            </div>
          </div>
        </li>
      </div>
    </div>
    <div class="home-benefit">
      <PublicTitle class="home-title" :title="$t('home.homeAdvantageTit')" />
      <div class="home-conent">
        <li>
          <div class="borderRadius">
            <div class="home-tokens-logo">{{ $t("home.homeAdvantageLift3") }}</div>
            <!-- <div class="home-tokens-title">游戏稳定币：CEON</div> -->
            <div class="home-tokens-content">
              <p>{{ $t("home.homeAdvantageLift1") }}</p>
              <p>{{ $t("home.homeAdvantageLift2") }}</p>
            </div>
          </div>
        </li>
        <li>
          <div class="borderRadius">
            <div class="home-tokens-logo">{{ $t("home.homeAdvantageRight2") }}</div>
            <div class="home-tokens-content">
              <p>{{ $t("home.homeAdvantageRight1") }}</p>
            </div>
          </div>
        </li>
      </div>
    </div>
    <div class="home-bottom">
      <div class="home-conent">
        <Bottom />
      </div>
    </div>

    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->

    <el-dialog
      title="Leave your email to know about our latest progress"
      :visible.sync="EmailDialogVisible"
      width="500px"
      :close-on-click-modal="false"
      :before-close="handleClose"
    >
      <div class="login-conent">
        <el-form :model="submitForm" ref="submitForm">
          <el-form-item
            prop="email"
            :rules="[
              { required: true, message: '请输入邮箱地址', trigger: 'blur' },
              {
                type: 'email',
                message: '请输入正确的邮箱地址',
                trigger: ['blur', 'change'],
              },
            ]"
          >
            <el-input placeholder="Enter E-mail" v-model="submitForm.email" />
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button class="determine" @click="clickSubmitForm('submitForm')"
          >确定</el-button
        >
        <!-- <el-button class="pc" @click="loginClick('loginForm')"
          >Sign inpc</el-button
        >
        <el-button class="mb" @click="toLogin">Sign inmb</el-button>
        <div class="Register" @click="toRegister">
          <p><span>Register</span></p>
        </div> -->
        <el-button class="cancel" @click="EmailDialogVisible = false"
          >取消</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
// @ is an alias to /src
import PublicTitle from "@/components/publicTitle.vue";
import Bottom from "@/components/bottom/index.vue";
import { getWalletAddress, isWalletConnected } from "./../../white/index.js";

export default {
  name: "Home",
  components: {
    PublicTitle,
    Bottom,
  },

  data() {
    return {
      EmailDialogVisible: false,
      submitForm: {
        email: "",
      },
    };
  },
  methods: {
    subscribeTo() {
      this.EmailDialogVisible = true;
      console.log("弹窗");
    },
    handleClose() {
      this.EmailDialogVisible = false;
    },
    // 确认提交
    clickSubmitForm(submitForm) {
      this.$refs[submitForm].validate(async (valid) => {
        // 1.邮箱是否正确
        if (valid) {
          let binance = window.ethereum;
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
              const mailchimpClient =
                require("@mailchimp/mailchimp_transactional")(
                  "md-zMAjDVGmRLYoDko8zza6HQ"
                );
              const run = async () => {
                const response = await mailchimpClient.allowlists.add({
                  email: this.submitForm.email,
                });
              };
              run();
              this.EmailDialogVisible = false;
              this.submitForm.email = "";
            } else {
              alert("请先链接钱包");
              ethereum.request({ method: "eth_requestAccounts" });
            }
          } else {
            alert("请先安装钱包");
          }
          return;
          // let isWhite = await ethereum.request({ method: "eth_requestAccounts" });
          // console.log(isWhite,'23456')
          //   alert("submit!");
          // } else {
          //   console.log("error submit!!");
          //   return false;
        }
      });
    },
    // 敬请期待
    expect() {
      alert("敬请期待");
    },
  },
};
</script>

<style lang="less" scoped>
.home {
  padding-top: 60px;
  background: #070707;
  color: #fff;
  text-align: left;
  overflow: hidden;
  .home-conent {
    width: 1080px;
    margin: 0 auto;
    .home-common-icon {
      width: 50px;
      height: 50px;
      margin: 0 auto;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .home-common-title {
      margin: 20px 0;
    }
  }

  .home-subscribe {
    background: #232835;

    // justify-content: center;
    margin-bottom: 40px;
    .home-conent {
      display: flex;
      justify-content: space-around;
      .home-subscribe-left {
        // display: flex;
        // justify-content: inherit;
        // flex-direction: column;
        height: 400px;
        padding: 20px;
        line-height: 1.5;
        text-align: center;
        width: 50%;
        h1 {
          font-size: 36px;
        }
        p {
          color: #a6a6a6;
          margin: 20px 0;
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
          .home-subscribe-left-docs {
            margin-left: 20px;
            border-radius: 5px;
            background: linear-gradient(to right, #3dfccb, #e1f86e);
            -webkit-background-clip: text;
            color: transparent;
            overflow: hidden;
            span {
              display: inline-block;
              font-weight: 500;
              width: 96px;
              height: 31px;
              border: 2px solid black;
              border-image: linear-gradient(to right, #3dfccb, #e1f86e) 2;
            }
          }
        }
      }
      // .home-subscribe-right {
      //   width: 30%;
      //   display: flex;
      //   justify-content: flex-end;
      //   .rig-img {
      //     width: 300px;
      //     img {
      //       width: 100%;
      //       height: 100%;
      //     }
      //   }
      // }
    }
  }
  .home-introduce {
    .home-conent {
      display: flex;
      justify-content: space-around;
      text-align: center;

      .home-introduce-left {
        width: 60%;
        > div {
          padding: 20px;
        }
        .home-introduce-left1 {
          height: 180px;
          width: 80%;
          background: pink;
        }
        .home-introduce-left2 {
          height: 200px;
          width: 80%;
          background: #3dfccb;
          margin: 30px 0 30px 15%;
        }
        .home-introduce-left3 {
          height: 200px;
          width: 100%;
          background: #dfff00;
        }
      }
      .home-introduce-right {
        width: 35%;
        > div {
          padding: 20px;
        }
        .home-introduce-right1 {
          width: 90%;
          height: 260px;
          background: #3dfccb;
        }
        .home-introduce-right2 {
          width: 90%;
          height: 260px;
          margin-left: 10%;
          background: #dfff00;
        }
      }
    }
  }
  .home-trusted {
    height: 120px;
    color: #838788;
    background: #121315;
    padding-top: 20px;
    text-align: center;
  }
  .home-title {
    margin: 20px 0;
  }
  .home-content {
    .home-title {
      margin: 40px auto;
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
        background: rgba(0, 0, 0, 0.5);
        box-shadow: 0px 0px 10px 0px #e0f86f;
        line-height: 1.5;
        .home-common-title {
          font-size: 18px;
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
  }
  .home-tokens {
    display: flex;
    justify-content: space-around;
    li {
      width: 40%;
      padding: 40px;
      background: #232835;
      text-align: center;
      .home-tokens-logo {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        margin: 0 auto;
        background: #777777;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .home-tokens-title {
        margin: 20px 0;
      }
      .home-tokens-content {
        line-height: 1.5;
        text-align: left;
      }
    }
  }
  .home-veZoic {
    line-height: 1.5;
    padding: 40px;
    .home-conent {
      display: flex;
      li {
        font-size: 14px;
        .home-veZoicTitle {
          width: 125px;
          font-size: 36px;
          font-weight: 700;
          background: linear-gradient(to right, #3dfdcb, #def871);
          -webkit-background-clip: text;
          color: transparent;
        }
        .home-veZoic-img {
          width: 400px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .home-veZoic-title {
      font-size: 24px;
    }
    .home-veZoic-tit {
    }
    .home-veZoic-content {
      color: #adadad;
    }
    .el-button {
      margin-top: 40px;
      background: linear-gradient(to right, #2ffdd4, #e0f86f);
      border: 0px;
      color: #000;
    }
  }
  .home-how {
    .home-title {
      text-align: center;
    }
    .home-conent {
      display: flex;
      justify-content: space-around;
      li {
        position: relative;
        width: 30%;
        height: 360px;
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
        .upward {
          position: absolute;
          top: -25px;
          left: 50%;
          transform: translateX(-50%);
          width: 80%;
          .home-common-icon {
            // z-index: 9999;
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
  }
  .home-benefit {
    height: 100%;
    margin-bottom: 50px;
    .home-title {
      text-align: center;
      margin: 50px 0;
    }
    .home-conent {
      display: flex;
      justify-content: space-between;
      li {
        width: 45%;
        height: 260px;
        border-radius: 10px;
        font-size: 14px;
        .borderRadius {
          height: 100%;
          padding: 40px;
        box-sizing: border-box;

          background: #232835;
          border: 1px solid #2ffdd4;
          border-image: linear-gradient(
              to right bottom,
              #2ffdd4,
              rgba(0, 0, 0, 0),
              #d2f97a
            )
            8 10;
        }
        .home-tokens-logo {
          font-size: 18px;
        }
        .home-tokens-title {
          margin: 20px 0;
        }
        .home-tokens-content {
          line-height: 1.5;
          text-align: left;
        }
      }
    }
  }
  .home-bottom {
    background: #121315;
  }
  /deep/.el-dialog__wrapper {
    color: #fff;
    .el-dialog {
      background: #353945;
      color: #fff;
      padding: 0 20px;
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
</style>
