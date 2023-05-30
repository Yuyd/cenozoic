<template>
  <div class="bottom">
    <!-- <div class="bottom-left">{{ $t('bottom.btmFollow') }}</div> -->
    <div class="content">
      <div class="bottom-left">
        <div class="bottom-left-list">
          <li
            v-for="(item, index) in this.$t('bottom.sponsorList')"
            :key="index"
            @click="goNext(item.name, index)"
          >
            <!-- <router-link :to="item.src">{{ item.name }}</router-link> -->
            <a>
              <span>{{ item.name }}</span>
            </a>
          </li>
          <!-- @ 2023 Cenozoic. All Rights Reserved -->
        </div>
      </div>
      <div class="bottom-right">
        <li v-for="(item, index) in outerChainList" :key="index">
          <div
            v-if="index == 0 || index == 3"
            class="outer-img"
            @click="toOuter(index)"
          >
            <img :src="item.imgSrc" alt="" />
          </div>
          <div v-else>
            <img :src="item.imgSrc" alt="" />
          </div>
          <!-- <p>
            <a :href="item.blankSrc" target="_blank">{{ item.name }}</a>
          </p> -->
        </li>
        <!-- <router-link to="/privacy-policy">
          <span>Privacy Policy</span>
        </router-link>
        &nbsp;|
        <router-link to="/trademark">
          <span>Terms</span>
        </router-link> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sponsorList: [
        {
          // logoSrc: require('./../../assets/BNBchain.png'),
          name: 'BNBchain',
          // blankSrc: 'https://twitter.com/BNBCHAIN',
        },
        {
          // logoSrc: require('./../../assets/Metamask.jpg'),
          name: 'Metamask',
          // blankSrc: 'https://twitter.com/MetaMask',
        },
        {
          // logoSrc: require('./../../assets/BSCdaily.png'),
          name: 'BSCdaily',
          // blankSrc: 'https://twitter.com/bsc_daily',
        },
        {
          // logoSrc: require('./../../assets/PlayToEarnDaily.png'),
          name: 'PlayToEarnDaily',
          // blankSrc: 'https://twitter.com/PlayToEarnGames',
        },
        {
          // logoSrc: require('./../../assets/SPACE ID.png'),
          name: 'SPACE ID',
          // blankSrc: 'https://twitter.com/SpaceIDProtocol',
        },
        {
          // logoSrc: require('./../../assets/SendingMe_IM.png'),
          name: 'SendingMe_IM',
          // blankSrc: 'https://twitter.com/SendingMe_IM',
        },
        {
          // logoSrc: require('./../../assets/iPolloverse.png'),
          name: 'iPolloverse',
          // blankSrc: 'https://twitter.com/iPolloverse',
        },
        {
          // logoSrc: require('./../../assets/Element NFT Marketplace.png'),
          name: 'Element NFT Marketplace',
          // blankSrc: 'https://twitter.com/Element_Market',
        },
      ],
      outerChainList: [
        {
          imgSrc: require('./../../assets/comment/1.png'),
        },
        {
          imgSrc: require('./../../assets/comment/12.png'),
        },
        {
          imgSrc: require('./../../assets/comment/11.png'),
        },
        {
          imgSrc: require('./../../assets/comment/4.png'),
        },
      ],
    }
  },
  methods: {
    goNext(selector, index) {
      switch (index) {
        case 0:
          this.$bus.$emit('anchorPoint', selector)
          break
        case 1:
          this.$bus.$emit('anchorPoint', selector)
          break
        case 2:
          this.$bus.$emit('anchorPoint', selector)
          break
        case 3:
          this.$router.push({
            name: 'PrivacyPolicy',
          })
          // const routerUrl1 = this.$router.resolve({
          //   path: '/PrivacyPolicy',
          // })
          // window.open(routerUrl1.href,"_blank")
          break
        case 4:
          this.$router.push({
            name: 'Trademark',
          })
          break
      }
    },
    // 跳转
    toOuter(index) {
      switch (index) {
        case 0:
          break
        case 1:
          break
        case 2:
          window.open('https://twitter.com/Cenozoic_xyz', '_blank')
          break
        case 3:
          window.open('https://cenozoic-protocol.gitbook.io', '_blank')
          break
      }
    },
  },
}
</script>

<style lang="less" scoped>
.bottom {
  background: url('./../../assets/bottom/06.jpg') no-repeat;
  background-size: 100% 100%;
  .content {
    max-width: 1300px;
    height: 80px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .bottom-left {
      // font-size: 32px;
      // font-weight: 700;
      // background: linear-gradient(to right, #3cfdce, #e0f871);
      // -webkit-background-clip: text;
      // color: transparent;
      color: #fff;
      // text-decoration: underline;
      .bottom-left-list {
        display: flex;
        li {
          a {
            font-size: 14px;
            font-weight: 400;
            color: #fff;
            margin-right: 20px;
            cursor: pointer;
          }
          a:hover {
            color: #48d34c;
          }
        }
        // li:nth-child(5) {
        //   text-decoration: underline;
        // }
        // li:nth-child(6) {
        //   text-decoration: underline;
        // }
      }
    }
    .bottom-right {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 100%;
      color: #fff;
      li {
        color: #fff;
        display: flex;
        align-items: center;
        padding-right: 10px;
        div {
          width: 23px;
          height: 17px;
          cursor: pointer;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .outer-img {
          width: 30px;
          height: 30px;
        }
        // a {
        //   color: #fff;
        //   margin-left: 10px;
        //   text-decoration: underline;
        // }
      }
    }
  }
}
@media screen and (max-width: 1300px) {
  .bottom {
    .content {
      width: 100%;
      height: 100%;
      font-size: 0.2rem;
      padding: 0 0.2rem;
      box-sizing: border-box;
      display: block;
      .bottom-left {
        .bottom-left-list {
          text-align: left;
          display: block;
          padding-top: .1rem;
          li {
            height: .5rem;
          }
        }
      }
      .bottom-right {
        display: flex;
        justify-content: flex-start;
      }
    }
  }
}
</style>
