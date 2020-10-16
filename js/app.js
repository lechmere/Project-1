const grid = document.querySelector('.grid-container')
let frog = 126
const river = document.querySelector('.river')
const width = 11
const cells = document.querySelectorAll('.grid-item')
let car = [109, 107, 104, 101]
let racecar = [98, 94, 90, 89]
let van = [86, 81]
let traffic = 110
let log = [55, 56, 59, 60, 63, 64]
let turtle2 = [54, 52, 50, 48]
let turtleChanger1 = 30
let turtleChanger2 = 25
let turtle = [32, 27, 23]
let middle = [40, 35]
let front = [34, 39]
let back = [36, 41]
let score = 0
let life = 3
const modal = document.querySelector(".modal")
const closeButton = document.querySelector(".close-button")
const highScore = document.querySelector(".highscore")
const modalScore = document.querySelector(".score")
const lives = document.querySelector(".lives")
const modalOver = document.querySelector(".modal-over")
const closeButtonOver = document.querySelector(".close-button-over")

// restart
function restart() {
  if (life === 0) {
  cells[frog].classList.remove('frog-road')
  cells[frog].classList.remove('frog-river')
  frog = 126
  cells[frog].classList.add('frog-floor')
  life = 3
  lives.innerHTML = `Lives: ${life}`
  score = 0
  highScore.innerHTML = `Hi-Score: ${score}`
  toggleModalOver()
}
}
function toggleModalOver() {
  modalOver.classList.toggle("show-modal");
}
function windowOnClickOver(event) {
  if (event.target === modalOver) {
    toggleModalOver();
  }
}
closeButtonOver.addEventListener("click", toggleModalOver);
window.addEventListener("click", windowOnClickOver);

// level up
function toggleModal() {
  modalScore.innerHTML = `Your Score: ${score}`
  modal.classList.toggle("show-modal");
  winning()
  life = 3
}
function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

// sounds
function winning() {
  const myMusic = document.querySelector('.win')
  myMusic.play()
}
function hop() {
  const hopping = document.querySelector('.hop')
  hopping.play()
}
function sunk() {
  const sunk = document.querySelector('.sunk')
  sunk.play()
}
function squash() {
  const squashed = document.querySelector('.squash')
  squashed.play()
}

// to number the cells
// for (let i = 0; i < 132; i++) {
//   const div = cells[i]
//   div.innerHTML = i
// }

// road collision: replace frog, squash sound, remove life.
function roadGameOver() {
  if ((cells[frog].classList.contains('car')) || (cells[frog].classList.contains('racecar')) || (cells[frog].classList.contains('van')) || (cells[frog].classList.contains('traffic'))) {
    squash()
    life -= 1
    score -= 30
    lives.innerHTML = `Lives: ${life}`
    cells[frog].classList.remove('frog-road')
    frog = 126
    cells[frog].classList.add('frog-floor')
  }
}

// river death: replace frog, sunk sound, remove life.
function riverGameOver() {
  if (((cells[frog].classList.contains('frog-river')) && !(cells[frog].classList.contains('log')) && !(cells[frog].classList.contains('middle')) && !(cells[frog].classList.contains('back')) && !(cells[frog].classList.contains('front')) && !(cells[frog].classList.contains('turtle'))) || (cells[frog].classList.contains('sunk-turtle'))) {
    sunk()
    life -= 1
    score -= 30
    lives.innerHTML = `Lives: ${life}`
    cells[frog].classList.remove('frog-river')
    frog = 126
    cells[frog].classList.add('frog-floor')
  }
}

// frogs movements and various styles
document.addEventListener('keypress', (event) => {
  const key = event.key
  // got to homey
  if (key === 'w' && ((frog === 23) || (frog === 25) || (frog === 27) || (frog === 29) || (frog === 31))) {
    cells[frog].classList.remove('frog-river')
    frog -= width
    cells[frog].classList.add('frog-river')
    hop()
    score += 50
    highScore.innerHTML = `Hi-Score: ${score}`
    console.log(`${score}`)
    cells[frog].classList.remove('frog-river')
    frog = 126
    cells[frog].classList.add('frog-floor')
    toggleModal()
  } else if (key === 'w' && (frog >= 121)) {
    cells[frog].classList.remove('frog-floor')
    frog -= width
    cells[frog].classList.add('frog-road')
    hop()
    score += 10
  } else if (key === 'w' && ((frog >= 88) && (frog <= 120))) {
    cells[frog].classList.remove('frog-road')
    frog -= width
    cells[frog].classList.add('frog-road')
    hop()
    score += 10
  } else if (key === 'w' && ((frog >= 77) && (frog <= 87))) {
    cells[frog].classList.remove('frog-road')
    frog -= width
    cells[frog].classList.add('frog-floor')
    hop()
    score += 10
  } else if (key === 'w' && ((frog >= 66) && (frog <= 76))) {
    cells[frog].classList.remove('frog-floor')
    frog -= width
    cells[frog].classList.add('frog-river')
    hop()
    score += 10
  } else if (key === 'w' && ((frog >= 33) && (frog <= 65))) {
    cells[frog].classList.remove('frog-river')
    frog -= width
    cells[frog].classList.add('frog-river')
    hop()
    score += 10
  } else if ((key === 'a') && !(frog % width === 0) && (((frog >= 122) && (frog <= 131)) || ((frog >= 67) && (frog <= 76)))) {
    cells[frog].classList.remove('frog-floor')
    frog -= 1
    cells[frog].classList.add('frog-floor')
    hop()
    score += 10
  } else if ((key === 'a') && !(frog % width === 0) && ((frog >= 78) && (frog <= 120))) {
    cells[frog].classList.remove('frog-road')
    frog -= 1
    cells[frog].classList.add('frog-road')
    hop()
    score += 10
  } else if ((key === 'a') && !(frog % width === 0) && ((frog >= 23) && (frog <= 65))) {
    cells[frog].classList.remove('frog-river')
    frog -= 1
    cells[frog].classList.add('frog-river')
    hop()
    score += 10
  } else if (key === 'd' && !(frog % width === width - 1) && (((frog >= 121) && (frog <= 130)) || ((frog >= 66) && (frog <= 75)))) {
    cells[frog].classList.remove('frog-floor')
    frog += 1
    cells[frog].classList.add('frog-floor')
    hop()
    score += 10
  } else if (key === 'd' && !(frog % width === width - 1) && ((frog >= 77) && (frog <= 119))) {
    cells[frog].classList.remove('frog-road')
    frog += 1
    cells[frog].classList.add('frog-road')
    hop()
    score += 10
  } else if (key === 'd' && !(frog % width === width - 1) && ((frog >= 22) && (frog <= 64))) {
    cells[frog].classList.remove('frog-river')
    frog += 1
    cells[frog].classList.add('frog-river')
    hop()
    score += 10
  } else if (key === 's' && (frog >= (110)) && ((frog <= 120))) {
    cells[frog].classList.remove('frog-road')
    frog += width
    cells[frog].classList.add('frog-floor')
    hop()
    score += 10
  } else if (key === 's' && ((frog >= 77) && (frog <= 109))) {
    cells[frog].classList.remove('frog-road')
    frog += width
    cells[frog].classList.add('frog-road')
    hop()
    score += 10
  } else if (key === 's' && ((frog >= 66) && (frog <= 76))) {
    cells[frog].classList.remove('frog-floor')
    frog += width
    cells[frog].classList.add('frog-road')
    hop()
    score += 10
  } else if (key === 's' && ((frog >= 55) && (frog <= 65))) {
    cells[frog].classList.remove('frog-river')
    frog += width
    cells[frog].classList.add('frog-floor')
    hop()
    score += 10
  } else if (key === 's' && (((frog >= 22) && (frog <= 65)) || (frog === 12) || (frog === 14) || (frog === 16) || (frog === 18) || (frog === 20))) {
    cells[frog].classList.remove('frog-river')
    frog += width
    cells[frog].classList.add('frog-river')
    hop()
    score += 10
  }
  roadGameOver()
  riverGameOver()
  restart()
})

// ROAD
// car movement
car.forEach(car => {
  cells[car].classList.add('car')
})
const carInterval = setInterval(() => {
  car.forEach((carNum, i) => {
    if (carNum === 99) {
      cells[carNum].classList.remove('car')
      car[i] = 109
      cells[carNum + 10].classList.add('car')
    } else {
      cells[carNum].classList.remove('car')
      car[i] -= 1
      cells[carNum - 1].classList.add('car')
    }
    roadGameOver()
  })
}, 1000)

// racecar movement
racecar.forEach(racecar => {
  cells[racecar].classList.add('racecar')
})
const racecarInterval = setInterval(() => {
  racecar.forEach((racecarNum, i) => {
    if (racecarNum === 98) {
      cells[racecarNum].classList.remove('racecar')
      racecar[i] = 88
      cells[racecarNum - 10].classList.add('racecar')
    } else {
      cells[racecarNum].classList.remove('racecar')
      racecar[i] += 1
      cells[racecarNum + 1].classList.add('racecar')
    }
  })
}, 400)


//van movement
van.forEach(van => {
  cells[van].classList.add('van')
})
const vanInterval = setInterval(() => {
  van.forEach((vanNum, i) => {
    if (vanNum === 77) {
      cells[vanNum].classList.remove('van')
      van[i] = 87
      cells[vanNum + 10].classList.add('van')
    } else {
      cells[vanNum].classList.remove('van')
      van[i] -= 1
      cells[vanNum - 1].classList.add('van')
    }
  })
}, 1500)


//traffic movement
setInterval(() => {
  if (traffic === 120) {
    cells[traffic].classList.remove('traffic')
    traffic = 110
    cells[traffic].classList.add('traffic')
  } else {
    cells[traffic].classList.remove('traffic')
    traffic += 1
    cells[traffic].classList.add('traffic')
  }
}, 150)

// RIVER
//log movement
log.forEach(log => {
  cells[log].classList.add('log')
})
const logInterval = setInterval(() => {
  log.forEach((logNum, i) => {
    if (logNum === 55) {
    cells[logNum].classList.remove('log')
    log[i] = 65
    cells[logNum + 10].classList.add('log')
    } else {
    cells[logNum].classList.remove('log')
    log[i] -= 1
    cells[logNum - 1].classList.add('log')
    }
  })
}, 1000)



// const logInterval = setInterval(() => {
//   log.forEach((logNum, i) => {
//     if ((cells[logNum].classList.contains('log')) && (cells[frog].classList.contains('log'))) {
//       cells[logNum].classList.remove('log')
//       cells[logNum].classList.add('logfrog')
//     } else if ((cells[logNum].classList.contains('log')) && !(cells[frog].classList.contains('log'))) {
//       cells[logNum].classList.remove('logfrog')
//       cells[logNum].classList.add('log')
//     } else if ((logNum === 55) && (cells[logNum].classList.contains('log'))) {
//       cells[logNum].classList.remove('log')
//       cells[logNum].classList.remove('frog')
//       log[i] = 65
//       cells[logNum + 10].classList.add('log')
//       cells[logNum + 10].classList.add('frog')
//     } else if ((logNum === 55) && (cells[logNum].classList.contains('logfrog'))) {
//       cells[logNum].classList.remove('logfrog')
//       cells[logNum].classList.remove('frog')
//       log[i] = 65
//       cells[logNum + 10].classList.add('logfrog')
//       cells[logNum + 10].classList.add('frog')
//     } else if (cells[logNum].classList.contains('log')) {
//       cells[logNum].classList.remove('log')
//       cells[logNum].classList.remove('frog')
//       log[i] -= 1
//       cells[logNum - 1].classList.add('log')
//       cells[logNum - 1].classList.add('frog')
//     } else {
//       cells[logNum].classList.remove('logfrog')
//       cells[logNum].classList.remove('frog')
//       log[i] -= 1
//       cells[logNum - 1].classList.add('logfrog')
//       cells[logNum - 1].classList.add('frog')
//     }
//   })
// }, 1000)


//long log movement
front.forEach(front => {
  cells[front].classList.add('front')
})
const frontInterval = setInterval(() => {
  front.forEach((frontNum, i) => {
    if (frontNum === 43) {
      cells[frontNum].classList.remove('front')
      front[i] = 33
      cells[frontNum - 10].classList.add('front')
    } else {
      cells[frontNum].classList.remove('front')
      front[i] += 1
      cells[frontNum + 1].classList.add('front')
    }
  })
}, 1000)
middle.forEach(middle => {
  cells[middle].classList.add('middle')
})
const middleInterval = setInterval(() => {
  middle.forEach((middleNum, i) => {
    if (middleNum === 43) {
      cells[middleNum].classList.remove('middle')
      middle[i] = 33
      cells[middleNum - 10].classList.add('middle')
    } else {
      cells[middleNum].classList.remove('middle')
      middle[i] += 1
      cells[middleNum + 1].classList.add('middle')
    }
  })
}, 1000)
back.forEach(back => {
  cells[back].classList.add('back')
})
const backInterval = setInterval(() => {
  back.forEach((backNum, i) => {
    if (backNum === 43) {
      cells[backNum].classList.remove('back')
      back[i] = 33
      cells[backNum - 10].classList.add('back')
    } else {
      cells[backNum].classList.remove('back')
      back[i] += 1
      cells[backNum + 1].classList.add('back')
    }
  })
}, 1000)

// turtle
turtle.forEach(turtle => {
  cells[turtle].classList.add('turtle')
})
const turtleInterval = setInterval(() => {
  turtle.forEach((turtleNum, i) => {
    if (turtleNum === 22) {
      cells[turtleNum].classList.remove('turtle')
      turtle[i] = 32
      cells[turtleNum + 10].classList.add('turtle')
    } else {
      cells[turtleNum].classList.remove('turtle')
      turtle[i] -= 1
      cells[turtleNum - 1].classList.add('turtle')
    }
  })
}, 1000)

setInterval(() => {
  if (turtleChanger1 === 22) {
    cells[turtleChanger1].classList.remove('turtle')
    cells[turtleChanger1].classList.remove('sunk-turtle')
    turtleChanger1 = 32
    cells[turtleChanger1].classList.add('turtle')
    cells[turtleChanger1].classList.add('sunk-turtle')
  } else {
    cells[turtleChanger1].classList.remove('turtle')
    cells[turtleChanger1].classList.remove('sunk-turtle')
    turtleChanger1 -= 1
    cells[turtleChanger1].classList.add('turtle')
    cells[turtleChanger1].classList.add('sunk-turtle')
  }
}, 1000)

setInterval(() => {
  if (turtleChanger2 === 22) {
    cells[turtleChanger2].classList.remove('turtle')
    cells[turtleChanger2].classList.remove('sunk-turtle')
    turtleChanger2 = 32
    cells[turtleChanger2].classList.add('turtle')
    cells[turtleChanger2].classList.add('sunk-turtle')
  } else {
    cells[turtleChanger2].classList.remove('turtle')
    cells[turtleChanger2].classList.remove('sunk-turtle')
    turtleChanger2 -= 1
    cells[turtleChanger2].classList.add('turtle')
    cells[turtleChanger2].classList.add('sunk-turtle')
  }
}, 1000)


turtle2.forEach(turtle2 => {
  cells[turtle2].classList.add('turtle')
})
const turtle2Interval = setInterval(() => {
  turtle2.forEach((turtleNum2, i) => {
    if (turtleNum2 === 44) {
      cells[turtleNum2].classList.remove('turtle')
      turtle2[i] = 54
      cells[turtleNum2 + 10].classList.add('turtle')
    } else {
      cells[turtleNum2].classList.remove('turtle')
      turtle2[i] -= 1
      cells[turtleNum2 - 1].classList.add('turtle')
    }
  })
}, 600)


// sinking turtle
function changeTurtle1() {
    cells[turtleChanger1].classList.remove('turtle')
    cells[turtleChanger1].classList.add('sunk-turtle')
}
function changeTurtle2() {
  cells[turtleChanger2].classList.remove('turtle')
  cells[turtleChanger2].classList.add('sunk-turtle')
}
(function loop1() {
  var rand = Math.round(Math.random() * (7000 - 500)) + 500;
  setTimeout(function () {
    changeTurtle1();
    loop1();
  }, rand);
}());
(function loop2() {
  var rand = Math.round(Math.random() * (6000 - 500)) + 500;
  setTimeout(function () {
    changeTurtle2();
    loop2();
  }, rand);
}());

function changeTurtle1Back() {
    cells[turtleChanger1].classList.remove('sunk-turtle')
    cells[turtleChanger1].classList.add('turtle')
}
function changeTurtle2Back() {
  cells[turtleChanger2].classList.remove('sunk-turtle')
  cells[turtleChanger2].classList.add('turtle')
}
(function backLoop1() {
  var rand = Math.round(Math.random() * (7000 - 500)) + 500;
  setTimeout(function () {
    changeTurtle1Back();
    backLoop1();
  }, rand);
}());

(function backLoop2() {
  var rand = Math.round(Math.random() * (9000 - 500)) + 500;
  setTimeout(function () {
    changeTurtle2Back();
    backLoop2();
  }, rand);
}());

