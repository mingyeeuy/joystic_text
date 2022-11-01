radio.onReceivedString(function (receivedString) {
    w = receivedString
})
let w = ""
radio.setGroup(1)
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
