var led =require('@amperka/led')
  .connect(P3)
  .turnOn();

var pot = require('@amperka/pot')
  .connect(A2);

var sensor = require('@amperka/light-sensor')
  .connect(A0);

setInterval(function() {
  var lux = sensor.read('lx');
  var level = 1 - lux / 100;
  var potLevel = pot.read();
  led.brightness(level - potLevel); 
}, 10);