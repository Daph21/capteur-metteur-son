radio.setGroup(55)
basic.forever(function () {
    radio.sendValue("son", input.soundLevel())
})
