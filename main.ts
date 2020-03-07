// The challenges gives user the ball by moving the
// motor slightly
function release_ball () {
    pins.servoWritePin(AnalogPin.P4, 45)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P4, 100)
}
// Manually reset if challenge is disrupted
input.onButtonPressed(Button.B, function () {
    reset()
})
// When random number received
//
// 1. Check if received number is the passcode
//
//
// 2. If it is no, No is sent
//
//
// 3. If it is, Yes is send and the ball is released.
// Also, challenge is reset
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber != passcode) {
        radio.sendString("NO")
    } else {
        radio.sendString("YES")
        basic.showIcon(IconNames.Yes)
        release_ball()
        reset()
    }
})
// Define reset; different password is set each time
function reset () {
    passcode = Math.randomRange(1, 999)
    basic.showIcon(IconNames.Diamond)
}
// Manually release ball if it gets stuck
input.onButtonPressed(Button.A, function () {
    release_ball()
})
let passcode = 0
radio.setGroup(40)
reset()
