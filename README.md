# Experiment using the Leap Motion to control the robotic Sphero ball.

#### To run these apps, follow these steps:

1. Clone this repo.
2. Install node on your computer if you haven't already http://nodejs.org (v0.12.x didn´t work for me, downgraded to 0.10.38).
3. Run 'npm install' in your terminal to install the dependencies needed.
4. To find the reference of the Sphero on your computer, run 'ls /dev/tty.Sphero*' in your Terminal and copy the path returned.
5. Paste this path in the index.js files within the my_modules folder when the 'device' variable is declared.
6. Enable the bluetooth connection on your computer.
7. Run 'node gesture.js' or 'node handfollow.js' in your terminal.

And you're done! You should see the Sphero connected in your terminal.

I started working on this code by cloning this repo: https://github.com/alchemycs/spheron-leap so you can see the result in action here: 

https://www.youtube.com/watch?v=3ratT1yCnow&feature=share&list=UUKZdVrHYWr7rVNKbs9_fXnw


Have fun and let me know if you have any issues or questions!

## Gesture App - gesture.js
### Current controls:

* Move your fingers/hand UP to make the ball stop & turn blue.
* Move your fingers/hand DOWN to turn the ball stop & turn white.
* Push forward to make Sphero go straight ahead (heading of 0°)
* Pull backward to make Sphero go backward (heading of 180°)
* Swipe left to make Sphero go left (heading of 270°)
* Swipe right to make Sphero go right (heading of 90°)

## Handfollowing App - handfollow.js
### Current controls:

* Sphero will follow your hand - move it to the right, sphero will move to the right; move it in a circle, sphero will move in a circle; etc. pp