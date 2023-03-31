import './style.css'

// other themes to add ?
// bigger memory?
const URL = `https://wd-baas.vercel.app`

function postData(url = '', data = {}) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .catch(error => { throw error });
}
function sendRequest(method, url, data, callback) {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url, true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        callback(null, JSON.parse(xhr.responseText));
      } else {
        callback(new Error(`Request failed with status ${xhr.status}`));
      }
    }
  };

  if (data && (method === 'POST' || method === 'PUT')) {
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
  } else {
    xhr.send();
  }
}


var library = {
  pokemon: [
    'https://res.cloudinary.com/beumsk/image/upload/v1547980025/memory/Pokemon/Bulbasaur.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980083/memory/Pokemon/Charmander.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980101/memory/Pokemon/Squirtle.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980116/memory/Pokemon/Pikachu.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980129/memory/Pokemon/Mewtwo.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980142/memory/Pokemon/Mew.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980154/memory/Pokemon/Articuno.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980164/memory/Pokemon/Zapdos.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980175/memory/Pokemon/Moltres.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980186/memory/Pokemon/Eevee.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980025/memory/Pokemon/Bulbasaur.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980083/memory/Pokemon/Charmander.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980101/memory/Pokemon/Squirtle.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980116/memory/Pokemon/Pikachu.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980129/memory/Pokemon/Mewtwo.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980142/memory/Pokemon/Mew.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980154/memory/Pokemon/Articuno.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980164/memory/Pokemon/Zapdos.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980175/memory/Pokemon/Moltres.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980186/memory/Pokemon/Eevee.png'
  ],
  starwars: [
    'https://res.cloudinary.com/beumsk/image/upload/v1547980981/memory/starwars/anakin%20skywalker.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981009/memory/starwars/luke%20skywalker.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981022/memory/starwars/Obi%20wann.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981054/memory/starwars/Han%20solo.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981074/memory/starwars/chewbacca.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981095/memory/starwars/yoda.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981117/memory/starwars/dark%20sidious.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981141/memory/starwars/dark%20vador.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981165/memory/starwars/padme.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981190/memory/starwars/leia.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980981/memory/starwars/anakin%20skywalker.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981009/memory/starwars/luke%20skywalker.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981022/memory/starwars/Obi%20wann.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981054/memory/starwars/Han%20solo.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981074/memory/starwars/chewbacca.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981095/memory/starwars/yoda.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981117/memory/starwars/dark%20sidious.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981141/memory/starwars/dark%20vador.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981165/memory/starwars/padme.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981190/memory/starwars/leia.jpg'
  ],
  lotr: [
    'https://res.cloudinary.com/beumsk/image/upload/v1547981408/memory/lotr/gandalf.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981438/memory/lotr/sauron.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981469/memory/lotr/Aragorn.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981501/memory/lotr/legolas.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981535/memory/lotr/Gimli.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981603/memory/lotr/golum.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981645/memory/lotr/sam.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981686/memory/lotr/saroumane.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981738/memory/lotr/bilbo.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981802/memory/lotr/frodo.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981408/memory/lotr/gandalf.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981438/memory/lotr/sauron.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981469/memory/lotr/Aragorn.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981501/memory/lotr/legolas.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981535/memory/lotr/Gimli.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981603/memory/lotr/golum.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981645/memory/lotr/sam.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981686/memory/lotr/saroumane.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981738/memory/lotr/bilbo.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547981802/memory/lotr/frodo.jpg'
  ],
  disney: [
    'https://res.cloudinary.com/beumsk/image/upload/v1547982044/memory/disney/mickey.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547982088/memory/disney/mowgli.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547982610/memory/disney/tarzan.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547982620/memory/disney/simba.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547982628/memory/disney/aladin.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547982636/memory/disney/blanche%20neige.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547982644/memory/disney/alice.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547982653/memory/disney/peter%20pan.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547982663/memory/disney/pinocchio.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547982738/memory/disney/raiponce.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547982044/memory/disney/mickey.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547982088/memory/disney/mowgli.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547982610/memory/disney/tarzan.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547982620/memory/disney/simba.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547982628/memory/disney/aladin.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547982636/memory/disney/blanche%20neige.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547982644/memory/disney/alice.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547982653/memory/disney/peter%20pan.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547982663/memory/disney/pinocchio.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547982738/memory/disney/raiponce.jpg'
  ],
  pixar: [
    'https://res.cloudinary.com/beumsk/image/upload/v1547982971/memory/pixar/up.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547982987/memory/pixar/buzz.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547983000/memory/pixar/woody.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547983016/memory/pixar/Remy.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547983032/memory/pixar/Mike.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547983077/memory/pixar/Nemo.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547983114/memory/pixar/wall-e.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547983169/memory/pixar/Mr-Incredible.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547983381/memory/pixar/sully.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547983403/memory/pixar/flash%20mcqueen.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547982971/memory/pixar/up.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547982987/memory/pixar/buzz.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547983000/memory/pixar/woody.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547983016/memory/pixar/Remy.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547983032/memory/pixar/Mike.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547983077/memory/pixar/Nemo.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547983114/memory/pixar/wall-e.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547983169/memory/pixar/Mr-Incredible.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547983381/memory/pixar/sully.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547983403/memory/pixar/flash%20mcqueen.jpg'
  ],
  harrypotter: [
    'https://res.cloudinary.com/beumsk/image/upload/v1547998926/memory/harrypotter/harry.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547998958/memory/harrypotter/ron.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547998992/memory/harrypotter/hermione.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547999106/memory/harrypotter/dumbledore.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547999032/memory/harrypotter/malfoy.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547999143/memory/harrypotter/voldemort.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547999401/memory/harrypotter/rogue.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547999196/memory/harrypotter/hagrid.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547999271/memory/harrypotter/sirius.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547999577/memory/harrypotter/neville.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547998926/memory/harrypotter/harry.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547998958/memory/harrypotter/ron.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547998992/memory/harrypotter/hermione.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547999106/memory/harrypotter/dumbledore.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547999032/memory/harrypotter/malfoy.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547999143/memory/harrypotter/voldemort.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547999401/memory/harrypotter/rogue.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547999196/memory/harrypotter/hagrid.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547999271/memory/harrypotter/sirius.jpg',
    'https://res.cloudinary.com/beumsk/image/upload/v1547999577/memory/harrypotter/neville.jpg'
  ]
}

var images = [];
var tempElt1 = "";
var tempElt2 = "";
var click = -1;
var win = 0;
var score = 0;
var time = 0;

var preElt = document.querySelector("#pre");
var themesElt = document.querySelector("#themes");
var boxElts = document.getElementsByClassName("box");
var mainElt = document.querySelector(".main");
var timeElt = document.querySelector("#time");
var scoreElt = document.querySelector("#score");
var postElt = document.querySelector("#post");
var finalElt = document.querySelector("#final");
var againElt = document.querySelector("#again");
const scoreCountEltElt = document.querySelector("#scoreCount");

let eKey = ''


// initiate the game with chosen theme
themesElt.addEventListener("click", function (e) {
  if (e.target.classList.contains("themes")) {
    activateTheme(e.target.id);
    preElt.classList.add("hidden");
  }
});


function updateScore() {
  const score = localStorage.getItem('score') || 0;
  scoreCountEltElt.innerHTML = score;
}
updateScore()

function activateTheme(theme) {
  // insert theme in images array
  for (let i = 0; i < 20; i++) { images.push(library[theme][i]); }
  // insert images in memory game
  for (let i = 0; i < 20; i++) {
    var rand = Math.floor(Math.random() * (images.length - 1));
    boxElts[i].innerHTML = "<img src='" + images[rand] + "' alt='image' class='hidden'>";
    images.splice(rand, 1);
  }
}


// Handle the play
mainElt.addEventListener("click", gameLogic);
let timer = null
function gameLogic(e) {
  // make sure the box is playable
  if (e.target.classList.contains("play")) {
    e.target.firstChild.classList.remove("hidden");
    // first of two click
    if (click < 1) {
      tempElt1 = e.target;
      // timer
      if (click === -1) {
        timer = setInterval(function () {
          time++;
          timeElt.innerHTML = time;
        }, 1000);
      }
      click = 1;
    }

    // second click
    else if (e.target !== tempElt1) {
      tempElt2 = e.target;

      // different images
      if (tempElt1.firstChild.src !== tempElt2.firstChild.src) {
        mainElt.removeEventListener("click", gameLogic);
        setTimeout(function () {
          tempElt1.firstChild.classList.add("hidden");
          tempElt2.firstChild.classList.add("hidden");
          mainElt.addEventListener("click", gameLogic);
        }, 400);
        if (score > 0) {
          score -= 2;
        }
        scoreElt.innerHTML = score;
      }

      // same images
      else {
        score += 10;
        win += 2;
        tempElt1.firstChild.classList.add("outlined");
        tempElt2.firstChild.classList.add("outlined");
        tempElt1.classList.remove("play");
        tempElt2.classList.remove("play");
        scoreElt.innerHTML = score;

        // game won
        if (win === 20) {
          clearInterval(timer);
          finalElt.innerHTML = "You won " + score + " points <br> in " + time + " seconds";
          setLocalStorage(score)
          updateScore()
          postElt.classList.remove("hidden");
        }
      }
      click = 0;
    }
  }
}

againElt.addEventListener("click", resetGame);

function resetGame() {
  // reset game
  tempElt1 = "";
  tempElt2 = "";
  click = -1;
  win = 0;
  score = 0;
  time = 0;
  postElt.classList.add("hidden");
  preElt.classList.remove("hidden");
  for (let i = 0; i < 20; i++) {
    boxElts[i].classList.add("play");
    boxElts[i].firstChild.classList.add("hidden");
  }
  timeElt.textContent = time;
  scoreElt.textContent = score;
}

// handle focus of the page
// function checkPageFocus() {
//   if (document.hasFocus()) {
//     preElt.classList.remove("hidden");
//   }
//   else {
//     preElt.classList.add("hidden");
//   }
// }
// var checkPageInterval = setInterval(checkPageFocus, 300);

// set local storage
function setLocalStorage(num) {
  const score = localStorage.getItem("score") || 0;
  const total = Number(num) + Number(score)
  localStorage.setItem("score", total);
}

document.querySelector('#connect').addEventListener('click', function () {
  // 连接钱包
  // 暂时不跳转，用来看是否能接受消息
  const walletUrl = `${URL}/account`;
  const walletWindow = window.open(walletUrl, "_blank");

  const getScore = { type: "getScore" };
  const postMessage = () => {
    setTimeout(() => {
      walletWindow.postMessage(getScore, walletUrl);
      const isConnect = document.querySelector('#address').innerHTML
      if (!isConnect) {
        postMessage()
      }
    }, 600);
  }
  postMessage()
});

function setScore(score) {
  const scoreDOM = document.querySelector('#scoreCount')
  scoreDOM.innerHTML = score
}


function receiveMessage(event) {
  // if (event.origin !== "https://your-wallet-page-domain.com") return;
  const data = event.data;
  if (data.type === "score") {
    console.log("Received score:", data);
    const connectBtn = document.querySelector('#connect')
    connectBtn.remove()
    document.querySelector('#address').innerText = data.address
    eKey = data.eKey
  }
}

document.querySelector('#address').addEventListener('click', () => {
  window.open(`${URL}/account?id=${eKey}`, "_blank");
})

window.addEventListener("message", receiveMessage, false);

document.querySelector('#checkout').addEventListener('click', async function () {
  try {
    // 1.检查是否连接了钱包
    // 2.发送请求，写入积分
    const isConnect = document.querySelector('#address').innerHTML
    if (!isConnect) {
      alert('请先连接钱包')
      return;
    }
    const totalCount = localStorage.getItem('score')
    // disable button
    document.querySelector('#checkout').disabled = true
    document.querySelector('#checkout').innerHTML = '兑换中...'
    // const { resp } = await postData(`${URL}/api`, { type: 'score', val1: eKey })
    const { resp } = await postData(`${URL}/api`, { type: 'addScore', val1: eKey, val2: Number(totalCount) })
    updateScore()
    alert(resp)
    localStorage.setItem("score", 0);
  } finally {
    // enable button
    document.querySelector('#checkout').disabled = false
    document.querySelector('#checkout').innerHTML = '结算积分'
  }
})
