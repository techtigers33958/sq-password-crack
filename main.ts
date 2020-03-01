function release_ball () {
    pins.servoWritePin(AnalogPin.P4, 45)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P4, 100)
}
input.onButtonPressed(Button.B, function () {
    reset()
})
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber != Target_Number) {
        radio.sendString("NO")
        basic.showIcon(IconNames.SmallSquare)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        radio.sendString("YES")
        basic.showIcon(IconNames.Yes)
        release_ball()
        reset()
    }
})
function reset () {
    Target_Number = Math.randomRange(1, 999)
    basic.showIcon(IconNames.Diamond)
}
input.onButtonPressed(Button.A, function () {
    release_ball()
})
let Target_Number = 0
radio.setGroup(40)
reset()
