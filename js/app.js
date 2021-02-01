const grid = document.querySelector('.grid-container')
let frog = 126
const river = document.querySelector('.river')
const width = 11
const cells = document.querySelectorAll('.grid-item')
const MOVE_LEFT = 1
const MOVE_UP = 11
const MOVE_DOWN = -11
const MOVE_RIGHT = -1
let car = [109, 107, 104, 101]
let racecar = [98, 94, 90, 89]
let van = [86, 81]
let traffic = [110]
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

function riverGameOver() {
  if (((cells[frog].classList.contains('frog-river')) && !(cells[frog].classList.contains('log')) && !(cells[frog].classList.contains('middle')) && !(cells[frog].classList.contains('back')) && !(cells[frog].classList.contains('front')) && !(cells[frog].classList.contains('turtle'))) || (cells[frog].classList.contains('sunk-turtle'))) {
    drowning('frog-river')
  }
}

function drowning(className) {
  sunk()
  life -= 1
  score -= 30
  lives.innerHTML = `Lives: ${life}`
  cells[frog].classList.remove(className)
  frog = 126
  cells[frog].classList.add('frog-floor')
}

document.addEventListener('keypress', (event) => {
  const key = event.key
  if (key === 'w' && ((frog === 23) || (frog === 25) || (frog === 27) || (frog === 29) || (frog === 31))) {
    moveFrog(MOVE_UP, 50, 'turtlefrog', 'frog-river')
    highScore.innerHTML = `Hi-Score: ${score}`
    cells[frog].classList.remove('frog-river')
    frog = 126
    cells[frog].classList.add('frog-floor')
    toggleModal()
  } else if (key === 'w' && (frog >= 121)) {
    moveFrog(MOVE_UP, 10, 'frog-floor', 'frog-road')
  } else if (key === 'w' && ((frog >= 88) && (frog <= 120))) {
    moveFrog(MOVE_UP, 10, 'frog-road', 'frog-road')
  } else if (key === 'w' && ((frog >= 77) && (frog <= 87))) {
    moveFrog(MOVE_UP, 10, 'frog-road', 'frog-floor')
  } else if (key === 'w' && ((frog >= 66) && (frog <= 76))) {
    moveFrog(MOVE_UP, 10, 'frog-floor', 'frog-river')
  } else if (key === 'w' && ((frog >= 33) && (frog <= 65))) {
    moveFrog(MOVE_UP, 10, 'frog-river', 'frog-river')

  } else if ((key === 'a') && !(frog % width === 0) && (((frog >= 122) && (frog <= 131)) || ((frog >= 67) && (frog <= 76)))) {
    moveFrog(MOVE_LEFT, 10, 'frog-floor', 'frog-floor')
  } else if ((key === 'a') && !(frog % width === 0) && ((frog >= 78) && (frog <= 120))) {
    moveFrog(MOVE_LEFT, 10, 'frog-road', 'frog-road')
  } else if ((key === 'a') && !(frog % width === 0) && ((frog >= 23) && (frog <= 65))) {
    moveFrog(MOVE_LEFT, 10, 'frog-river', 'frog-river')

  } else if (key === 'd' && !(frog % width === width - 1) && (((frog >= 121) && (frog <= 130)) || ((frog >= 66) && (frog <= 75)))) {
    moveFrog(MOVE_RIGHT, 10, 'frog-floor', 'frog-floor')
  } else if (key === 'd' && !(frog % width === width - 1) && ((frog >= 77) && (frog <= 119))) {
    moveFrog(MOVE_RIGHT, 10, 'frog-road', 'frog-road')
  } else if (key === 'd' && !(frog % width === width - 1) && ((frog >= 22) && (frog <= 64))) {
    moveFrog(MOVE_RIGHT, 10, 'frog-river', 'frog-river')

  } else if (key === 's' && (frog >= (110)) && ((frog <= 120))) {
    moveFrog(MOVE_DOWN, 10, 'frog-road', 'frog-floor')
  } else if (key === 's' && ((frog >= 77) && (frog <= 109))) {
    moveFrog(MOVE_DOWN, 10, 'frog-road', 'frog-road')
  } else if (key === 's' && ((frog >= 66) && (frog <= 76))) {
    moveFrog(MOVE_DOWN, 10, 'frog-floor', 'frog-road')
  } else if (key === 's' && ((frog >= 55) && (frog <= 65))) {
    moveFrog(MOVE_DOWN, 10, 'frog-river', 'frog-floor')
  } else if (key === 's' && (((frog >= 22) && (frog <= 65)) || (frog === 12) || (frog === 14) || (frog === 16) || (frog === 18) || (frog === 20))) {
    moveFrog(MOVE_DOWN, 10, 'frog-river', 'frog-river')
  }
  roadGameOver()
  riverGameOver()
  restart()
})

function moveFrog(distance, points, startClass, endClass) {
  cells[frog].classList.remove(startClass)
  frog -= distance;
  cells[frog].classList.add(endClass)
  hop();
  score += points;
}

function objectMovement(object, start, end, interval, objectName, moveLeft, frogWithObject, frogWithObjectClass, frogWithObjectClassesRemove = []) {
  setInterval(() => {
    object.forEach((objNum, i) => {
      if (objNum === start) {
        cells[objNum].classList.remove(objectName)
        object[i] = end
        let resetPositionStart = moveLeft ? objNum + 10 : objNum - 10;
        cells[resetPositionStart].classList.add(objectName)
        if (frogWithObject && frog === objNum) {
          frogWithObjectClassesRemove.forEach((c) => cells[objNum].classList.remove(c))
          drowning(frogWithObjectClass)
        }
      } else {
        cells[objNum].classList.remove(frogWithObjectClass)
        cells[objNum].classList.remove(objectName)
        moveLeft ? object[i] -= 1 : object[i] += 1;
        let resetPositionEnd = moveLeft ? objNum - 1 : objNum + 1;
        cells[resetPositionEnd].classList.add(objectName)

        if (frogWithObject && frog === objNum) {
          console.log(frogWithObjectClass);
          frogWithObjectClassesRemove.forEach((c) => cells[objNum].classList.remove(c))

          frog = resetPositionEnd;
          cells[frog].classList.add(frogWithObjectClass)
        }
      }
      roadGameOver()
      riverGameOver()
      restart()
    })
  }, interval)
}
objectMovement(car, 99, 109, 1000, 'car', true)
objectMovement(racecar, 98, 88, 400, 'racecar', false)
objectMovement(van, 77, 87, 1500, 'van', true)
objectMovement(traffic, 120, 110, 150, 'traffic', false)
objectMovement(log, 55, 65, 1000, 'log', true, true, 'logfrog', ['log', 'frog-river'])
objectMovement(front, 33, 43, 1000, 'front', true,  true, 'frontfrog', ['front', 'frog-river', 'middlefrog', 'backfrog', 'frog-river',])
objectMovement(middle, 33, 43, 1000, 'middle', true,  true, 'middlefrog', ['middle', 'frog-river', 'frontfrog', 'backfrog', 'frog-river',])
objectMovement(back, 33, 43, 1000, 'back', true,  true, 'backfrog', ['back', 'frog-river', 'frontfrog', 'middlefrog', 'frog-river',])
objectMovement(turtle, 32, 22, 1000, 'turtle', false, true, 'turtlefrog', ['turtle', 'frog-river'])
objectMovement(turtle2,54, 44, 600, 'turtle', false, true, 'turtlefrog', ['turtle', 'frog-river'])

setInterval(() => {
  if (turtleChanger1 === 32) {
    cells[turtleChanger1].classList.remove('turtle')
    cells[turtleChanger1].classList.remove('sunk-turtle')
    turtleChanger1 = 22
    cells[turtleChanger1].classList.add('turtle')
    cells[turtleChanger1].classList.add('sunk-turtle')
  } else {
    cells[turtleChanger1].classList.remove('turtle')
    cells[turtleChanger1].classList.remove('sunk-turtle')
    turtleChanger1 += 1
    cells[turtleChanger1].classList.add('turtle')
    cells[turtleChanger1].classList.add('sunk-turtle')
  }
}, 1000)

setInterval(() => {
  if (turtleChanger2 === 32) {
    cells[turtleChanger2].classList.remove('turtle')
    cells[turtleChanger2].classList.remove('sunk-turtle')
    turtleChanger2 = 22
    cells[turtleChanger2].classList.add('turtle')
    cells[turtleChanger2].classList.add('sunk-turtle')
  } else {
    cells[turtleChanger2].classList.remove('turtle')
    cells[turtleChanger2].classList.remove('sunk-turtle')
    turtleChanger2 += 1
    cells[turtleChanger2].classList.add('turtle')
    cells[turtleChanger2].classList.add('sunk-turtle')
  }
}, 1000)

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

