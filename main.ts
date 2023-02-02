basic.forever(function () {
    serial.writeValue("fire", pins.analogReadPin(AnalogPin.P2))
    serial.writeValue("gas", pins.analogReadPin(AnalogPin.P3))
    basic.showNumber(pins.analogReadPin(AnalogPin.P2))
    basic.showNumber(pins.analogReadPin(AnalogPin.P3))
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P2) == 1 && pins.analogReadPin(AnalogPin.P3) >= 40) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.showNumber(1)
        music.playMelody("G F E B D C C5 G ", 500)
        basic.pause(2000)
    }
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.showNumber(0)
})
