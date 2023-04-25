/* eslint-disable */

// 检查是否链接钱包
export async function isWalletConnected() {
  const ethereum = window.ethereum
  const addressArray = await ethereum.request({
    method: 'eth_accounts'
  })
  console.log(addressArray[0])
  if (typeof addressArray[0] == 'undefined' || addressArray[0] == '') {
    return false
  } else {
    return true
  }
}


//获取当前钱包地址
export async function getWalletAddress() {
  const web3js = window.ethereum
  const web3 = await web3js.request({
    method: 'eth_accounts'
  })
  if(web3 !== 'undefined') {
    if(web3[0] == '') {
      return false
    } else {
      return await web3[0]
    }
  }
}
