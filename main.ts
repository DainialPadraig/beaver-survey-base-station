function plotCount (deviceNum: number, count: number) {
    for (let index = 0; index <= 4; index++) {
        led.unplot(deviceNum, index)
    }
    for (let index = 0; index <= count; index++) {
        led.plot(deviceNum, 5 - index)
    }
}
radio.onReceivedValue(function (name, value) {
    if (name == "A") {
        plotCount(0, value)
    } else if (name == "B") {
        plotCount(1, value)
    } else if (name == "C") {
        plotCount(2, value)
    } else if (name == "D") {
        plotCount(3, value)
    } else {
        plotCount(4, value)
    }
})
radio.setGroup(42)
basic.clearScreen()
