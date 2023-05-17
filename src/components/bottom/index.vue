<template>
  <div class="bottom">
    <!-- <div class="bottom-left">{{ $t('bottom.btmFollow') }}</div> -->
    <div class="content">
      <div class="bottom-left">
        <div class="bottom-left-list">
          <!-- <li
            v-for="(item, index) in this.$t('bottom.sponsorList')"
            :key="index"
          >
              <router-link :to="item.src">{{ item.name }}</router-link>
          </li> -->
          @ 2023 Cenozoic. All Rights Reserved
        </div>
      </div>
      <div class="bottom-right">
        <!-- <li v-for="(item, index) in outerChainList" :key="index">
          <div class="outer-img">
            <img :src="item.imgSrc" alt="" />
          </div>
          <p>
            <a :href="item.blankSrc" target="_blank">{{ item.name }}</a>
          </p>
        </li> -->
        <router-link to="/privacy-policy">
          <span>Privacy Policy</span>
        </router-link>
        &nbsp;|
        <router-link to="/trademark">
          <span>Terms</span>
        </router-link>
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
        // {
        //   imgSrc: require('./../../assets/bottom/24.png'),
        // },
        // {
        //   imgSrc: require('./../../assets/bottom/25.png'),
        // },
        {
          imgSrc: require('./../../assets/bottom/26.png'),
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.bottom {
  background: #111314;
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
            margin-right: 10px;
            cursor: pointer;
          }
          a:hover {
            color: #b0b0b2;
          }
        }
      }
    }
    .bottom-right {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 100%;
      color: #fff;
      // li {
      //   color: #fff;
      //   display: flex;
      //   align-items: center;
      //   .outer-img {
      //     width: 40px;
      //     height: 40px;
      //     img {
      //       width: 100%;
      //       height: 100%;
      //     }
      //   }
      a {
        color: #fff;
        margin-left: 10px;
        text-decoration: underline;
      }
      // }
    }
  }
}
@media screen and (max-width: 1300px) {
  .bottom {
    .content {
      width: 100%;
      height: 1rem;
      font-size: 0.2rem;
      padding: 0 0.2rem;
      box-sizing: border-box;
      .bottom-left {
      }
      .bottom-right {
      }
    }
  }
}
</style>
