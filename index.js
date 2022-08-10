let scoreHome = 0
let scoreGuest = 0

function incHome(inc) {
  let homeSc = document.getElementById("home-sc")
  scoreHome += inc
  homeSc.textContent = scoreHome
  markLeader()
  console.log(homeSc)
}

function incGuest(inc) {
  let guestSc = document.getElementById("guest-sc")
  scoreGuest += inc
  guestSc.textContent = scoreGuest
  markLeader()
  console.log(guestSc)
}

let interval = 0

function newGame() {
  scoreHome = 0
  scoreGuest = 0
  document.getElementById("home-sc").textContent = scoreHome
  document.getElementById("guest-sc").textContent = scoreGuest
  markLeader()
  clearInterval(interval)
  interval = setInterval(sec, 1000)
  seconds = 0
}

function markLeader() {
  if (scoreHome > scoreGuest) {
    document.getElementById("home-name").classList.add("leader")
    document.getElementById("guest-name").classList.remove("leader")
    return
  }

  if (scoreGuest > scoreHome) {
    document.getElementById("guest-name").classList.add("leader")
    document.getElementById("home-name").classList.remove("leader")
    return
  }

  if (scoreHome === scoreGuest) {
    document.getElementById("home-name").classList.remove("leader")
    document.getElementById("guest-name").classList.remove("leader")
    return
  }
}

let seconds = 0

function sec() {
  seconds += 1
  document.getElementById("seconds").innerText = seconds%60
  document.getElementById("minutes").innerText = Math.floor(seconds/60)
  console.log(seconds)
}