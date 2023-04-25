<template>
  <div class="home">
    <div class="home-conent">
      <div class="home-subscribe">
        <div class="home-subscribe-left">
          <h1>Unleashing True Web3Games!</h1>
          <p>skjdlksjgasjdlkgjlskdjgksjdgsdgsdgdsgsdfsdfhgfgegfdgdgf</p>
          <div class="subscribeToBtn" @click="subscribeTo">订阅</div>
        </div>
        <div class="home-subscribe-right">
          <div class="rig-img">
            <img src="./../../assets/logo.png" alt="" />
          </div>
        </div>
      </div>
      <!--  -->
      <PublicTitle class="home-title" title="Trusted By" />
      <div class="home-trusted"></div>
      <PublicTitle class="home-title" title="支持去中心化的Web3游戏" />
      <div class="home-content">
        <p>
          {{$t(`home.homeTitle`)}}
          Cenozoic是一个新的协议，旨在开放、透明、公平地支持Web3游戏的发展，
          让新时代的游戏实现完全地去中心化，没有上帝视角、没有中心化服务器控制。
        </p>
      </div>
      <PublicTitle class="home-title" title="建立Web3玩家的链上声誉" />
      <div class="home-content">
        <p>
          Cenozoic是一个新的协议，旨在开放、透明、公平地支持Web3游戏的发展，
          让新时代的游戏实现完全地去中心化，没有上帝视角、没有中心化服务器控制。
        </p>
      </div>
      <PublicTitle class="home-title" title="CENO&ZOIC" />
      <div class="home-tokens">
        <li>
          <div class="home-tokens-logo">
            <img src="./../../assets/logo.png" alt="" />
          </div>
          <div class="home-tokens-title">游戏稳定币：CEON</div>
          <div class="home-tokens-content">
            <p>100CENO≈1USDT</p>
            <p>
              CENO是一种资产担保型加密货币，被用于游戏内的资产定价、支付、结算。用户需要质押USDT或USDC来铸造对应1:100的CENO,质押是可赎回的。
            </p>
          </div>
        </li>
        <li>
          <div class="home-tokens-logo">
            <img src="./../../assets/logo.png" alt="" />
          </div>
          <div class="home-tokens-title">游戏稳定币：CEON</div>
          <div class="home-tokens-content">
            <p>100CENO≈1USDT</p>
            <p>
              CENO是一种资产担保型加密货币，被用于游戏内的资产定价、支付、结算。用户需要质押USDT或USDC来铸造对应1:100的CENO,质押是可赎回的。
            </p>
          </div>
        </li>
      </div>
      <PublicTitle class="home-title" title="veZOIC" />
      <div class="home-veZoic">
        <div class="home-veZoic-title">您将左右每一个决策</div>
        <div class="home-veZoic-tit">全方位的Vote-escrowed系统</div>
        <div class="home-veZoic-content">
          <p>
            Cenozoic的治理哟来于投票托管的ZOIC,也称为veZOIC,它可以实现更高程度的去中心化。
          </p>
        </div>
        <el-button @click="expect">敬请期待</el-button>
      </div>
      <PublicTitle class="home-title" title="How it Works" />
      <div class="home-how">
        <li>
          <div class="home-tokens-logo">
            <img src="./../../assets/logo.png" alt="" />
          </div>
          <div class="home-tokens-title">游戏稳定币：CEON</div>
          <div class="home-tokens-content">
            <p>100CENO≈1USDT</p>
            <p>
              CENO是一种资产担保型加密货币，被用于游戏内的资产定价、支付、结算。用户需要质押USDT或USDC来铸造对应1:100的CENO,质押是可赎回的。
            </p>
          </div>
        </li>
        <li>
          <div class="home-tokens-logo">
            <img src="./../../assets/logo.png" alt="" />
          </div>
          <div class="home-tokens-title">游戏稳定币：CEON</div>
          <div class="home-tokens-content">
            <p>100CENO≈1USDT</p>
            <p>
              CENO是一种资产担保型加密货币，被用于游戏内的资产定价、支付、结算。用户需要质押USDT或USDC来铸造对应1:100的CENO,质押是可赎回的。
            </p>
          </div>
        </li>
        <li>
          <div class="home-tokens-logo">
            <img src="./../../assets/logo.png" alt="" />
          </div>
          <div class="home-tokens-title">游戏稳定币：CEON</div>
          <div class="home-tokens-content">
            <p>100CENO≈1USDT</p>
            <p>
              CENO是一种资产担保型加密货币，被用于游戏内的资产定价、支付、结算。用户需要质押USDT或USDC来铸造对应1:100的CENO,质押是可赎回的。
            </p>
          </div>
        </li>
      </div>
      <PublicTitle class="home-title" title="好处" />
      <div class="home-benefit">
        <li>
          <div class="home-tokens-logo">玩家</div>
          <div class="home-tokens-title">游戏稳定币：CEON</div>
          <div class="home-tokens-content">
            <p>100CENO≈1USDT</p>
            <p>
              CENO是一种资产担保型加密货币，被用于游戏内的资产定价、支付、结算。用户需要质押USDT或USDC来铸造对应1:100的CENO,质押是可赎回的。
            </p>
          </div>
        </li>
        <li>
          <div class="home-tokens-logo">玩家</div>
          <div class="home-tokens-title">游戏稳定币：CEON</div>
          <div class="home-tokens-content">
            <p>100CENO≈1USDT</p>
            <p>
              CENO是一种资产担保型加密货币，被用于游戏内的资产定价、支付、结算。用户需要质押USDT或USDC来铸造对应1:100的CENO,质押是可赎回的。
            </p>
          </div>
        </li>
      </div>
      <Bottom />
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
            <el-input
              placeholder="Enter E-mail"
              v-model="submitForm.email"
            />
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
import {
  getWalletAddress,
  isWalletConnected,
} from "./../../white/index.js";

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
              this.EmailDialogVisible = false
              this.submitForm.email = ''
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
  background: #151d29;
  color: #fff;
  text-align: left;
  .home-conent {
    width: 1080px;
    margin: 0 auto;
    .home-subscribe {
      background: #232835;
      display: flex;
      justify-content: space-between;
      margin-bottom: 40px;
      .home-subscribe-left {
        display: flex;
        justify-content: inherit;
        flex-direction: column;
        height: 400px;
        padding: 20px;
        line-height: 1.5;
        h1 {
          font-size: 36px;
        }
        .subscribeToBtn {
          width: 100px;
          height: 35px;
          line-height: 35px;
          background: #dfff00;
          color: #000;
          border-radius: 5px;
          text-align: center;
        }
      }
      .home-subscribe-right {
        width: 30%;
        display: flex;
        justify-content: flex-end;
        .rig-img {
          width: 300px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .home-title {
      margin: 20px 0;
    }
    .home-trusted {
      height: 200px;
      background: #232835;
      margin: 40px 0;
    }
    .home-content {
      line-height: 1.5;
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
      text-align: center;
      line-height: 1.5;
      .home-veZoic-title {
        font-size: 36px;
      }
      .home-veZoic-tit {
        font-size: 24px;
      }
      .home-veZoic-content {
        font-size: 12px;
      }
      .el-button {
        margin: 20px 0;
        background: #232835;
        border: 1px solid #777777;
        color: #fff;
      }
    }
    .home-how {
      display: flex;
      justify-content: space-around;
      li {
        width: 30%;
        padding: 40px 20px;
        background: #232835;
        text-align: center;
        box-sizing: border-box;
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
    .home-benefit {
      display: flex;
      justify-content: space-between;
      li {
        width: 45%;
        padding: 40px;
        background: #232835;
        box-sizing: border-box;
        font-size: 14px;
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
