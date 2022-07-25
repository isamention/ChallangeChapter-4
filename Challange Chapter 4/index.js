//Masih banyak yang harus saya pelajari mas, selama seminggu ini akan saya update lagi code javascriptnya. terimakasih

function getPilihanComp() {
  var pilihanComp = ['batu', 'gunting', 'kertas']
  var comp = Math.floor(Math.random() * 3)
  return pilihanComp[comp]
}

function getHasil(pilihanComp, pilihanPlayer1) {
  var elemCom = document.getElementById('text-versus')
  elemCom.classList.add('div-vs')
  if (pilihanComp == pilihanPlayer1) {
    elemCom.innerHTML = '<h1 class="text-vs-draw">DRAW!</h1>'
  } else {
    if (pilihanComp == 'gunting')
      if (pilihanPlayer1 == 'batu player-tool-batu') {
        elemCom.innerHTML = '<h1 class="text-vs-lose">You Lose!</h1>'
      } else {
        elemCom.innerHTML = '<h1 class="text-vs-win">Player 1 Win!</h1>'
      }
    else {
      if (pilihanComp == 'batu')
        if (pilihanPlayer1 == 'kertas player-tool-kertas') {
          elemCom.innerHTML = '<h1 class="text-vs-lose">You Lose</h1>'
        } else {
          elemCom.innerHTML = '<h1 class="text-vs-win">Player 1 Win!</h1>'
        }
      else {
        if (pilihanComp == 'kertas')
          if (pilihanPlayer1 == 'gunting player-tool-gunting') {
            elemCom.innerHTML = '<h1 class="text-vs-lose">You Lose</h1>'
          } else {
            elemCom.innerHTML = '<h1 class="text-vs-win">Player 1 Win!</h1>'
          }
      }
    }
  }
}

var playerBatu = document.querySelector('.player-tool-batu')
playerBatu.addEventListener('click', function () {
  playerBatu.style.backgroundColor = 'grey'
  playerBatu.style.borderRadius = '10%'
  var pilihanComp = getPilihanComp()
  var pilihanPlayer1 = playerBatu.className
  hasil = getHasil(pilihanComp, pilihanPlayer1)
  var imgComputer = document.querySelector(
    '.comp-tool-gunting',
    +'.comp-tool-batu',
    +'.comp-tool-kertas',
  )
  imgComputer.style.backgroundColor = 'grey'
  imgComputer.style.borderRadius = '10%'
  console.log('pilihan player1: ' + pilihanPlayer1)
  console.log('pilihan comp: ' + pilihanComp)
})

var playerKertas = document.querySelector('.player-tool-kertas')
playerKertas.addEventListener('click', function () {
  playerKertas.style.backgroundColor = 'grey'
  playerKertas.style.borderRadius = '10%'
  var pilihanComp = getPilihanComp()
  var pilihanPlayer1 = playerKertas.className
  hasil = getHasil(pilihanComp, pilihanPlayer1)
  var imgComputer = document.querySelector(
    '.comp-tool-batu',
    +'.comp-tool-gunting',
    +'.comp-tool-kertas',
  )
  imgComputer.style.backgroundColor = 'grey'
  imgComputer.style.borderRadius = '10%'
})

var playerGunting = document.querySelector('.player-tool-gunting')
playerGunting.addEventListener('click', function () {
  playerGunting.style.backgroundColor = 'grey'
  playerGunting.style.borderRadius = '10%'
  var pilihanComp = getPilihanComp()
  var pilihanPlayer1 = playerGunting.className
  hasil = getHasil(pilihanComp, pilihanPlayer1)
  var imgComputer = document.querySelector(
    '.comp-tool-batu',
    +'.comp-tool-gunting',
    +'.comp-tool-kertas',
  )
  imgComputer.style.backgroundColor = 'grey'
  imgComputer.style.borderRadius = '10%'
  console.log('pilihan player1: ' + pilihanPlayer1)
  console.log('pilihan comp: ' + pilihanComp)
})
