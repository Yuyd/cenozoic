<template>
  <div class="bottom">
    <div class="bottom-left">关于我们</div>
    <div class="bottom-right">
      <li v-for="(item, index) in outerChainList" :key="index">
        <div class="outer-img">
          <img :src="item.imgSrc" alt="" />
        </div>
        <p>
          <a :href="item.blankSrc" target="_blank">{{ item.name }}</a>
        </p>
      </li>
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
          name: "BNBchain",
          // blankSrc: 'https://twitter.com/BNBCHAIN',
        },
        {
          // logoSrc: require('./../../assets/Metamask.jpg'),
          name: "Metamask",
          // blankSrc: 'https://twitter.com/MetaMask',
        },
        {
          // logoSrc: require('./../../assets/BSCdaily.png'),
          name: "BSCdaily",
          // blankSrc: 'https://twitter.com/bsc_daily',
        },
        {
          // logoSrc: require('./../../assets/PlayToEarnDaily.png'),
          name: "PlayToEarnDaily",
          // blankSrc: 'https://twitter.com/PlayToEarnGames',
        },
        {
          // logoSrc: require('./../../assets/SPACE ID.png'),
          name: "SPACE ID",
          // blankSrc: 'https://twitter.com/SpaceIDProtocol',
        },
        {
          // logoSrc: require('./../../assets/SendingMe_IM.png'),
          name: "SendingMe_IM",
          // blankSrc: 'https://twitter.com/SendingMe_IM',
        },
        {
          // logoSrc: require('./../../assets/iPolloverse.png'),
          name: "iPolloverse",
          // blankSrc: 'https://twitter.com/iPolloverse',
        },
        {
          // logoSrc: require('./../../assets/Element NFT Marketplace.png'),
          name: "Element NFT Marketplace",
          // blankSrc: 'https://twitter.com/Element_Market',
        },
      ],
      outerChainList: [
        {
          imgSrc: require('./../../assets/bottom/Twitter.png'),
        },
        {
          imgSrc: require('./../../assets/bottom/Discord.png'),
        },
        {
          imgSrc: require('./../../assets/bottom/Instagram.png'),
        },
        {
          imgSrc: require('./../../assets/bottom/23.png'),
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.bottom {
  display: flex;
  justify-content: space-between;
  height: 120px;
  line-height: 120px;
  .bottom-left {
  }
  .bottom-right {
    display: flex;
      justify-content: space-around;
      align-items: center;
      height: 100%;
      li {
        color: #fff;
        display: flex;
        align-items: center;
        .outer-img {
          width: 40px;
          height: 40px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        a {
          color: #fff;
          margin-left: 10px;
        }
      }
  }
}
</style>