radio.onReceivedString(function (receivedString) {
    w = receivedString
})
let w = ""
radio.setGroup(1)
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
let strip = neopixel.create(DigitalPin.P0, 2, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Red))
strip.show()
basic.forever(function () {
    if (w.compare("F") == 0) {
        RingbitCar.forward()
    } else if (w.compare("B") == 0) {
        RingbitCar.back()
    } else if (w.compare("L") == 0) {
        RingbitCar.turnleft()
    } else if (w.compare("R") == 0) {
        RingbitCar.turnright()
    } else {
        RingbitCar.brake()
    }
})
