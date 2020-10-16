# Project-1

I had a restart function which, restarted the game when all three lives were lost. This replaced the frog in its original home position, and forced a modal to pop up and announce that the game was over. Finally, it updates lives to 3 and score to 0.
- ModalOver is the modal that appears in this case.

All the modals can be closed by either clicking the cross or the rest of the screen. 

I added sound effect functions that were used when the frog was squashed, sunk, moving or when you leveled up.
The hop/ frog moving function is used within my keypress event listener function. This function includes many if functions as it is also used to rewrite the style so the frog seemlessly blends with wherever it ends up. For example, if it moves one up, by pressing 'w', from its starting position, the frog no longer has a floor background but a road background. This function includes the hop sound effect and a 10 point score increase for every movement. It also, in its first if premise, holds the consequence of completing the game; if you get the frog in a homey position, you gain 50 points and another modal pops up. This modal lets you know that you have leveled up and records your score.

The keypress event listener function also takes in to account the gameOver functions. There are two gameOver functions; roadGameOver and riverGameOver. These stipulate, respectively, that if any of the road class elements over lap with the frog class, there will be a squash sound effect, a loss of life, a 30 point loss and the frog will return to its starting position. This is the same for the riverGameOver function but instead of road class elements causing these consequences, it is both the overlap of the river class and frog class and the lack of overlap of the frog, log, long log parts and turtle class or it is the overlap of a sunken turtle and the frog. This function also results in the sunk sound effect rather than the squash sound.

Each road elements, par the first element 'traffic', moves within an interval and under a forEach function as they are written in an array, meaning there are multiple elements in a line. The road elements move at perspective speeds and in different directions. Each function includes an if function ensuring that if the element reaches the end of its line it returns to the beginning of its line and the interval starts again. 

This also happens with the river elements, however, the long log is split in to three arrays; middle, back and front, to give the perspective of a bigger element. 

The turtle function also has the added complication of randomly changing to a sunk-turtle. There are two turtle elements outside of the turtle array which randomly change to a sunken turtle and then continue to move in a loop unitl they randomly change back. 