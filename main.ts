let arwu = 0
let 暇人 = 0
let 脳クチュ = 0
basic.forever(function () {
    if (arwu == 1) {
        GigoFuture.digitalWrite(GigoLED.B, false)
    }
    if (arwu == 0) {
        GigoFuture.digitalWrite(GigoLED.D, false)
        GigoFuture.digitalWrite(GigoLED.E, false)
    }
    if (arwu == 2) {
        GigoFuture.digitalWrite(GigoLED.B, false)
        GigoFuture.digitalWrite(GigoLED.E, false)
    }
    if (arwu == 3) {
        GigoFuture.digitalWrite(GigoLED.B, false)
        GigoFuture.digitalWrite(GigoLED.D, false)
    }
})
basic.forever(function () {
    暇人 = 0
    arwu = 0
    GigoFuture.digitalWrite(GigoLED.E, false)
    GigoFuture.digitalWrite(GigoLED.B, true)
    if (GigoFuture.analogRead(PinAnalog.P1) <= 500) {
        GigoFuture.wait(10)
    } else {
        GigoFuture.wait(20)
    }
    music.stopAllSounds()
    GigoFuture.digitalWrite(GigoLED.E, false)
    GigoFuture.digitalWrite(GigoLED.B, false)
    暇人 = 2
    arwu = 2
    GigoFuture.digitalWrite(GigoLED.D, true)
    GigoFuture.wait(2)
    music.stopAllSounds()
    GigoFuture.digitalWrite(GigoLED.D, false)
    GigoFuture.digitalWrite(GigoLED.E, true)
    arwu = 1
    暇人 = 1
    GigoFuture.wait(12)
    music.stopAllSounds()
})
basic.forever(function () {
    if (input.logoIsPressed()) {
        if (arwu == 1) {
            music.play(music.tonePlayable(277, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            GigoFuture.wait(0.1)
        } else {
            music.play(music.tonePlayable(277, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            GigoFuture.wait(0.1)
        }
        for (let index = 0; index < 10; index++) {
            music.play(music.tonePlayable(277, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            GigoFuture.wait(0.1)
        }
    }
})
basic.forever(function () {
    if (input.logoIsPressed()) {
        脳クチュ = 1
        if (arwu == 1) {
            GigoFuture.digitalWrite(GigoLED.E, false)
            GigoFuture.digitalWrite(GigoLED.B, false)
            for (let index = 0; index < 12; index++) {
                GigoFuture.digitalWrite(GigoLED.D, true)
                GigoFuture.wait(0.5)
                GigoFuture.digitalWrite(GigoLED.D, false)
                GigoFuture.wait(0.5)
            }
            GigoFuture.digitalWrite(GigoLED.D, false)
        } else {
            GigoFuture.digitalWrite(GigoLED.B, false)
            GigoFuture.digitalWrite(GigoLED.D, false)
            for (let index = 0; index < 500; index++) {
                arwu = 3
                GigoFuture.digitalWrite(GigoLED.E, true)
            }
            arwu = 3
        }
    } else {
        脳クチュ = 0
    }
})
basic.forever(function () {
    basic.showNumber(arwu)
})
basic.forever(function () {
    if (input.logoIsPressed()) {
        if (arwu == 1) {
            GigoFuture.digitalWrite(GigoLED.D, false)
            GigoFuture.digitalWrite(GigoLED.B, false)
        }
    }
})
