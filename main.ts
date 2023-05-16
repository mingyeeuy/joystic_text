radio.onReceivedString(function (receivedString) {
    w = receivedString
})
let w = ""
radio.setGroup(209)
RingbitCar.init_wheel(AnalogPin.P0, AnalogPin.P1)
servos.P2.setRange(0, 180)
basic.forever(function () {
    if (w.compare("F") == 0) {
        RingbitCar.forward()
    } else if (w.compare("B") == 0) {
        RingbitCar.back()
    } else if (w.compare("L") == 0) {
        RingbitCar.turnleft()
    } else if (w.compare("R") == 0) {
        RingbitCar.turnright()
    } else if (w.compare("A") == 0) {
        servos.P2.setAngle(44)
    } else if (w.compare("D") == 0) {
        servos.P2.setAngle(135)
    } else {
        RingbitCar.brake()
    }
})
control.inBackground(function () {
    while (true) {
        basic.showNumber(209)
    }
})
