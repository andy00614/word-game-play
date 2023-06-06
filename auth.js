import CryptoJS from 'crypto-js'

const key = 'andytest123456auth'

const URL = `http://8.219.157.52:5005`
// const URL = `http://localhost:3000`

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
  const url = URL + '/authorization&type=iframe'
  const jumpURL = new window.URL(url);
  jumpURL.searchParams.append('redirect_uri', location.origin)
  jumpURL.searchParams.append('game_name', 'Memory')
  jumpURL.searchParams.append('type', 'url')
  window.open(jumpURL, '_self')
}

const genIframe = () => {
  if (document.getElementById('info-iframe')) {
    return;
  }
  // 创建新的 iframe 元素
  // 创建包含 div
  // 创建包含 div
  let container = document.createElement('div');
  container.id = 'info-iframe'
  container.style.position = 'fixed';
  container.style.top = '50%';
  container.style.left = '50%';
  container.style.transform = 'translate(-50%, -50%)';
  container.style.width = '90%';
  container.style.height = '60%';
  container.style.border = '2px solid #000';
  container.style.overflow = 'hidden';
  container.style.background = '#fff';
  container.style.boxShadow = '0px 5px 15px rgba(0,0,0,0.1)';

  // 创建新的 iframe 元素
  let iframe = document.createElement('iframe');

  // 为 iframe 元素设置属性
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = 'none';
  iframe.src = `${URL}/authorization?type=iframe`;

  // 创建关闭按钮
  let closeButton = document.createElement('button');
  closeButton.innerText = 'X';
  closeButton.style.position = 'absolute';
  closeButton.style.right = '10px';
  closeButton.style.top = '10px';
  closeButton.style.padding = '5px 10px';
  closeButton.style.border = 'none';
  closeButton.style.background = '#f00';
  closeButton.style.color = '#fff';
  closeButton.style.cursor = 'pointer';
  closeButton.style.zIndex = '10';

  // 为关闭按钮添加点击事件处理器
  closeButton.addEventListener('click', function () {
    document.body.removeChild(container);
  });

  // 把 iframe 和关闭按钮添加到包含 div 中
  container.appendChild(iframe);
  container.appendChild(closeButton);

  // 将包含 div 插入到 body 中
  document.body.appendChild(container);

}



// export const updateWalletStatusForIframe = () => {
//   const urlParams = new URLSearchParams(window.location.search);
//   const publicKey = urlParams.get('publicKey');
//   const token = urlParams.get('eKey');
//   if (publicKey && token) {
//     const tokenDecrypted = deCrypto(token);
//     const publicKeyDecrypted = deCrypto(publicKey)
//     if (!tokenDecrypted || !publicKeyDecrypted) {
//       return;
//     }
//     const connectBtn = document.querySelector('#connect')
//     connectBtn.remove()
//     document.querySelector('#address').innerText = publicKeyDecrypted
//     window.eKey = tokenDecrypted
//     window.publicKey = publicKeyDecrypted
//   }
// }

const listenWallet = () => {
  window.addEventListener('message', function (event) {
    if (event.origin !== URL) return;
    // 关闭iframe
    const iframeContainer = document.getElementById('info-iframe');
    document.body.removeChild(iframeContainer);
    const authInfo = event.data;
    const { publicKey, eKey } = authInfo;
    const connectBtn = document.querySelector('#connect')
    connectBtn.remove()
    document.querySelector('#address').innerText = deCrypto(publicKey)
    window.eKey = deCrypto(eKey)
    window.publicKey = deCrypto(publicKey)
  })
}

const openIframe = () => {
  const iframe = document.getElementById('info-iframe');
  iframe.style.display = 'block';
  iframe.style.width = '90%';
  iframe.style.height = '50%';
  iframe.style.position = 'fixed';
  iframe.style.top = '40%';
}

export const connectWalletForIframe = () => {
  genIframe();
  // 打开这个iframe
  listenWallet();
  openIframe();
}
