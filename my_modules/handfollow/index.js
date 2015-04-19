module.exports = function () {

    var Leap = require('leapjs');
    var spheron = require('spheron');

    // Set this to the device Sphero connects as on your computer.
    var device = '/dev/tty.Sphero-BBG-AMP-SPP';

    var previousX;
    var previousZ;

    var controlSphero = function (sphero) {
        var controller = new Leap.Controller({frameEventName: 'deviceFrame', enableGestures: true});

        controller.on('connect', function () {
            console.log('Connected to Leap Motion');
        });

        controller.on('ready', function () {
            console.log('Ready');
        });

        controller.on('focus', function () {
            console.log('Focus?');
        });

        controller.on('deviceStreaming', function () {
            console.log('Device connected');
        });

        controller.on('deviceStopped', function () {
            console.log('Device disconnected');
        });

        controller.on('frame', function (frame) {
            if (frame.hands.length) {
                var hand = frame.hands[0];

                if(previousX && previousZ) {
                    var X = previousX - currentX();
                    var Z = previousZ - currentZ();

                    if(X < -10 || X > 10 || Z < -10 || Z > 10) {
                        var brng = Math.atan2(X - previousX, Z - previousZ);
                        brng = brng * (180 / Math.PI);
                        brng = (brng + 360) % 360;
                        brng = 360 - brng;

                        sphero.roll(50, parseInt(brng), 1);

                        previousX = currentX();
                        previousZ = currentZ();
                    }
                } else {
                    previousX = currentX();
                    previousZ = currentZ();
                }

                function currentX() {
                    return hand.palmPosition[0];
                }

                function currentZ() {
                    return hand.palmPosition[2];
                }
            }
        });

        controller.connect();
        console.log('Waiting for Leap Motion connection...');
    };

    var ball = spheron.sphero().resetTimeout(true);
    ball.open(device);

    console.log("Waiting for Sphero connection...");

    ball.on('open', function () {
        console.log('Connected to Sphero');
        ball.setRGB(spheron.toolbelt.COLORS.PURPLE).setBackLED(100);
        controlSphero(ball);
    });
};