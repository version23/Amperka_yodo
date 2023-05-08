var led =require('@amperka/led') 
  .connect(P3)
  .turnOn();

var pot = require('@amperka/pot') // Potentiometer
  .connect(A2);

var sensor = require('@amperka/light-sensor')
  .connect(A0);

setInterval(function() {
  var lux = sensor.read('lx');
  var potLevel = pot.read();
  var level = 1 - lux / 100; // adjust light sensor for more sensivity (50..400 lx)
  led.brightness(level - potLevel); // brightness level depends on 2 sensors: light and potentiometer. Pot uses for fine tuning brightness.   
}, 10);
