#Frogger - GA Project One
My first project using JavaScript and my first dev project for General Assembly's Software Engineering Immersive course.

<img width="686" alt="Project1-Screenshot" src="https://user-images.githubusercontent.com/71281526/112830089-fa592e80-9089-11eb-823d-d7b8a764e3f7.png">

##Deployment
The game has been deployed with GitHub Pages and is available [here](https://lechmere.github.io/Project-1/).

##Getting started
1. Access the source code via the 'Clone or download' button.
2. Open the index.html file in your browser of choice to start the game.

##Goal and timeframe:
To build a functioning browser game with pure JavaScript in 8 days.

##Technologies used:
- HTML5
- CSS3
- JavaScript
- GitHub

##Brief:
Frogger is a classic 80s Sega arcade game. The object of the game is to get the frog back to its home, whilst avoiding a plethera of hazards. The player can move the frog up,  left, down or right using the 'WASD' keys. First, the player must move the frog over the busy road, dodging the various cars which are moving at different speeds and alternating directions. Then the player must pass the river section. To do this, the frog must climb aboard logs and turtles (but beware of the turtles randomly sinking!). Lastly, the player must place the frog in to one of the five homies to complete the round.

My iteration pays homage to the original frogger, using all the original illustrations and concepts.

##Process
My development process started by listing all the different functionalities the game required, and then ranking these functionalities in order of importance. I then sketched a physical image within a grid, to picture the frogs movements and the games general lay out. I started by first tackling the basic CSS styling and then psuedocoded each function individually.

I created the game grid square by setting a value for width, using a for-loop to create a div element while the index value was less than width times width. I then pushed these divs to an empty array and appended them to the grid div in my HTML.
I made one div for player spaceship, and created keydown event listeners to allow the player to move and fire when the corresponding keys are pressed, with logic to refrain player from moving off the grid.
    // PLAYER SPACESHIP MOVEMENT ---------------------------------------------
```
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
```

I placed the invaders on the grid by creating an invaders array, which included the index values of the squares on the grid
Then I worked on the invader movement logic, which moves the invaders right, down, left and down following a lead invader. I created a timer to move the invader armada until the invaders reach the bottom row.
      // INVADER MOVEMENT LOGIC ------------------------------------------------

      if (leadInvader % width === 3 && direction === 1) {
        direction = width
      } else if (leadInvader % width === 3 && direction === width) {
        direction = -1
      } else if (leadInvader % width === 0 && direction === -1) {
        direction = width
      } else if (leadInvader % width === 0 && direction === width) {
        direction = 1
      }
      addInvaders()
      reachPlayer()
    }
When the invaders reach the bottom row or when the player is hit by invader fire, this calls a Game Over function which displays player's score and clears the grid and resets the game variables.
Then it was time to create some lasers. Laser movements across the grid are controlled timers. When player lasers hit the invader armada, the hit invader is spliced off the array, once all invaders are eliminated this calls a youWin() function. Invaders fire by setting a timer to select a random invader from the first row to fire every 2.5 seconds.
      // MAKE LASER ADVANCE ACROSS THE GRID ----------------------------------------------------

      function laserAdvance() {
        cells[laserIndex].classList.remove('laser') // remove laser class
        if (laserIndex > width - 1) {
          laserIndex = laserIndex - width // finding the cell directly above current laserindex
          cells[laserIndex].classList.add('laser') // add class to next cell
          if (laserIndex === width - width) { // stops at the grid
            // console.log('past grid!')
            clearInterval(laserTimerId)
            cells[laserIndex].classList.remove('laser')
          }
          
          // COLLISION DETECTION ---------------------------------------------------------------

          if (cells[laserIndex].classList.contains('invaders')) { // If laser 'hits' invader
            clearInterval(laserTimerId) //stop timer
            cells[laserIndex].classList.remove('invaders', 'laser') // clear cell from both classes
            const killedInvader = invaderArray.indexOf(laserIndex) // locates the index of hit invader
            invaderArray.splice(killedInvader, 1)
            score += 1000
            scoreTally.innerHTML = score
            enemyAudio.src = './assets/zap.wav'
            enemyAudio.play()
            if (invaderArray.length === 0) {
              youWin()
            }
          }
        }
      }
    }
##Known errors or bugs
Collision logic: occasionally Joe's tiger cubs get stuck on the grid before reaching their goal, or shoot right through the first row of Carols.
When user clicks 'Play Again', the invaders shoot two laser beams at the same time. This probably has to do with the timers not clearing properly

##Challenges
This was my first project using JavaScript so I faced many challenges, of which the biggest were:

Invader armada movement logic that should remain inaffected by changes to the invader array
Collision detection logic
Working with various set timers to create movement

##Wins
Gained experience in programmatical thinking, logical problem solving and different planning stages
A fun and topical design theme

##Future improvements
A few issues remain to be ironed out, and there are also a few features I would like to add going forward:
Add-ons and nice-to-haves to the game flow: spawning new invaders, adding the mothership, different hit scores for each invader row, level-up
High Score tally leveraging local storage
Start Game and Finish Game modules with using popup functionality
Adding responsive design
CSS animations to achieve a more impactful design

##Key learnings
Making my first static JS browser game from scratch was a great learning exercise and a fun way to consolidate my learnings. In particular, I learnt a lot about DOM manipulation, different use cases for different JS array methods, and working with timers.
