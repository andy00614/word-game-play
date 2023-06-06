import CryptoJS from 'crypto-js'

const key = 'andytest123456auth'

// const URL = `http://8.219.157.52:5005`
const URL = `http://localhost:3000`

function deCrypto(encryptedMessage) {
  const bytes = CryptoJS.AES.decrypt(encryptedMessage, key);
  const decryptedMessage = bytes.toString(CryptoJS.enc.Utf8);
  return decryptedMessage
}

export const updateWalletStatusForURL = () => {
  // 检查url上search参数是否有publicKey,如果有则说明钱包已经链接
  const urlParams = new URLSearchParams(window.location.search);
  const publicKey = urlParams.get('publicKey');
  const token = urlParams.get('eKey');
  if (publicKey && token) {
    const tokenDecrypted = deCrypto(token);
    const publicKeyDecrypted = deCrypto(publicKey)
    if (!tokenDecrypted || !publicKeyDecrypted) {
      return;
    }
    const connectBtn = document.querySelector('#connect')
    connectBtn.remove()
    document.querySelector('#address').innerText = publicKeyDecrypted
    window.eKey = tokenDecrypted
  }
}

export const connectWalletForURL = () => {
  const url = URL + '/authorization'
  const jumpURL = new window.URL(url);
  jumpURL.searchParams.append('redirect_uri', location.origin)
  jumpURL.searchParams.append('game_name', 'Memory')
  jumpURL.searchParams.append('type', 'url')
  window.open(jumpURL, '_self')
}
