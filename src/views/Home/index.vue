<template>
  <div class="home">
    <div class="home-subscribe">
      <div class="home-conent">
        <div class="home-subscribe-left">
          <h1 data-aos="fade">{{ $t("home.homeTitle") }}</h1>
          <p data-aos="zoom-in">{{ $t("home.homeBanner") }}</p>
          <div
            class="home-subscribe-left-btn"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <div class="subscribeTo" @click="subscribeTo">
              {{ $t("home.homeSubscribeBtn") }}
            </div>
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
          <div
            class="home-introduce-left1 home-introduce-bg"
            data-aos="fade-right"
          >
            <div class="home-common-icon">
              <img src="./../../assets/docs/10.png" alt="" />
            </div>
            <div class="home-common-title">
              {{ $t("home.homeSupporting") }}
            </div>
            <div class="home-common-content">
              {{ $t("home.homeSupportingContent") }}
            </div>
          </div>
          <div
            class="home-introduce-left2 home-introduce-bg"
            data-aos="fade-right"
          >
            <div class="home-common-icon">
              <img src="./../../assets/docs/12.png" alt="" />
            </div>
            <div class="home-common-title">{{ $t("home.homeCoMpos") }}</div>
            <div class="home-common-content">
              {{ $t("home.homeCoMposContent") }}
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
              {{ $t("home.homeBuilding") }}
            </div>
            <div class="home-common-content">
              {{ $t("home.homeBuildingContent") }}
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
              {{ $t("home.homeInteroper") }}
            </div>
            <div class="home-common-content">
              {{ $t("home.homeInteroperContent") }}
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
              {{ $t("home.homeGame") }}
            </div>
            <div class="home-common-content">
              {{ $t("home.homeGameContent1") }}
            </div>
            <div class="home-common-content">
              {{ $t("home.homeGameContent2") }}
            </div>
          </li>
          <li data-aos="zoom-out-up">
            <div class="home-common-icon">
              <img src="./../../assets/docs/16.png" alt="" />
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
          <div class="home-veZoicTitle" data-aos="zoom-in-up">
            {{ $t("home.homeVeZOIC") }}
          </div>
          <div class="home-veZoic-title" data-aos="zoom-in">
            {{ $t("home.homeVeZOICTit1") }}
          </div>
          <div class="home-veZoic-tit" data-aos="zoom-in">
            {{ $t("home.homeVeZOICTit2") }}
          </div>
          <div class="home-veZoic-content">
            <p>
              {{ $t("home.homeVeZOICContent") }}
            </p>
          </div>
          <el-button
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            @click="expect"
            >{{ $t("home.homeVeZOICBtn") }}</el-button
          >
        </li>
        <li
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div class="home-veZoic-img">
            <img src="./../../assets/docs/17.png" alt="" />
          </div>
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
              {{ $t("home.homeDepositsTit") }}
            </div>
            <div class="home-common-content">
              <p>{{ $t("home.homeDepositsContent") }}</p>
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
            <div class="home-common-title">{{ $t("home.homeEarnTit") }}</div>
            <div class="home-common-content">
              <p>{{ $t("home.homeEarnContent") }}</p>
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
            <div class="home-common-title">{{ $t("home.homeReceiveTit") }}</div>
            <div class="home-common-content">
              <p>{{ $t("home.homeReceiveContent") }}</p>
            </div>
          </div>
        </li>
      </div>
    </div>
    <div class="home-benefit">
      <PublicTitle
        data-aos="zoom-in-up"
        class="home-title"
        :title="$t('home.homeAdvantageTit')"
      />
      <div class="home-conent">
        <li data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
          <div class="borderRadius">
            <div class="home-tokens-logo">
              {{ $t("home.homeAdvantageLift3") }}
            </div>
            <!-- <div class="home-tokens-title">游戏稳定币：CEON</div> -->
            <div class="home-tokens-content">
              <p>{{ $t("home.homeAdvantageLift1") }}</p>
              <p>{{ $t("home.homeAdvantageLift2") }}</p>
            </div>
          </div>
        </li>
        <li data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
          <div class="borderRadius">
            <div class="home-tokens-logo">
              {{ $t("home.homeAdvantageRight2") }}
            </div>
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
    <el-dialog
      :title="$t('homeDialog.dialogTitlte')"
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
              { required: true, message: this.$t('homeDialog.dialogRules1'), trigger: 'blur' },
              {
                type: 'email',
                message: this.$t('homeDialog.dialogRules2'),
                trigger: ['blur', 'change'],
              },
            ]"
          >
            <el-input :placeholder="$t('homeDialog.dialogInput')" v-model="submitForm.email" />
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button class="determine" @click="clickSubmitForm('submitForm')"
          >{{ $t('homeDialog.dialogConfirm') }}</el-button
        >
        <!-- <el-button class="pc" @click="loginClick('loginForm')"
          >Sign inpc</el-button
        >
        <el-button class="mb" @click="toLogin">Sign inmb</el-button>
        <div class="Register" @click="toRegister">
          <p><span>Register</span></p>
        </div> -->
        <el-button class="cancel" @click="EmailDialogVisible = false"
          >{{ $t('homeDialog.dialogCancel') }}</el-button
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
  watch: {
    diaMessage1(val) {
      console.log(val)
    }
  },
  methods: {
    subscribeTo() {
      this.EmailDialogVisible = true;
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
      alert(this.$t('home.homeVeZOICBtn'));
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
    background: url("./../../assets/docs/03.jpg") no-repeat;
    background-size: 100% 100%;
    padding-top: 40px;
    .home-conent {
      display: flex;
      justify-content: space-around;
      .home-subscribe-left {
        // display: flex;
        // justify-content: inherit;
        // flex-direction: column;
        margin-top: 60px;
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
          .subscribeTo {
            cursor: pointer;
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
    background: url("./../../assets/docs/05.jpg") no-repeat;
    background-size: 100% 100%;
    height: 100%;
    padding: 40px 0;
    .home-conent {
      display: flex;
      justify-content: space-around;
      text-align: center;
      .home-introduce-bg {
        background: rgba(255, 255, 255, 0.075);
        border-radius: 8px;
        border: 1px solid rgba(255, 255, 255, 0.5);
        line-height: 1.2;
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
          height: 200px;
          width: 80%;
          margin: 30px 0 30px 15%;
        }
        .home-introduce-left3 {
          height: 200px;
          width: 100%;
        }
      }
      .home-introduce-right {
        width: 35%;
        > div {
          padding: 20px;
          margin-top: 40px;
        }
        .home-introduce-right1 {
          width: 90%;
          height: 240px;
        }
        .home-introduce-right2 {
          width: 90%;
          height: 240px;
          margin-left: 10%;
        }
      }
    }
  }
  .home-trusted {
    height: 120px;
    color: #838788;
    // background: url('./../../assets/docs/06.jpg') no-repeat;
    // background-size: 100%;
    padding-top: 20px;
    text-align: center;
  }
  .home-content {
    background: url("./../../assets/docs/06.jpg") no-repeat;
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
    padding: 40px 0;
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
    padding: 40px 0;
    background: url("./../../assets/docs/07.jpg") no-repeat;
    background-size: 100% 100%;
    .home-conent {
      display: flex;
      justify-content: space-between;
      li {
        font-size: 14px;
        width: 48%;
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
          margin: 0 auto;
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
    background: url("./../../assets/docs/08.jpg") no-repeat;
    background-size: 100% 100%;
    .home-title {
      padding: 40px 0;
      text-align: center;
    }
    .home-conent {
      display: flex;
      justify-content: space-around;
      li {
        margin-top: 20px;
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
          top: -34px;
          left: 50%;
          transform: translateX(-50%);
          width: 80%;
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
  }
  .home-benefit {
    height: 100%;
    padding: 40px 0;
    background: url("./../../assets/docs/09.jpg") no-repeat;
    background-size: 100% 100%;
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
        background: url("./../../assets/docs/27.png") no-repeat;
        background-size: 100% 100%;
        .borderRadius {
          height: 100%;
          padding: 40px;
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
    background: #111314;
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
