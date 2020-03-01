function chooseTarget () {
    Target_Number = Math.randomRange(1, 999)
    basic.showNumber(Target_Number)
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber != Target_Number) {
        radio.sendString("NO")
    } else {
        radio.sendString("YES")
        chooseTarget()
    }
})
let Target_Number = 0
radio.setGroup(1)
chooseTarget()
