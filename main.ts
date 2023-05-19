function argiGorriaDirDir () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
}
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    music.playMelody("C C5 C C5 C C5 C C5 ", 120)
    basic.pause(1000)
    while (true) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        music.playMelody("C C5 C C5 C C5 C C5 ", 120)
        if (inklinazioa < 30) {
            break;
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    music.playMelody("C C5 C C5 C C5 C C5 ", 120)
    basic.pause(1000)
    while (true) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        music.playMelody("C C5 C C5 C C5 C C5 ", 120)
        if (inklinazioa > -30) {
            break;
        }
    }
})
let inklinazioa = 0
inklinazioa = 0
music.setVolume(127)
led.setBrightness(255)
basic.forever(function () {
    // 103º da maximoa eskuinetara. -103º maximoa ezkerretara.
    inklinazioa = Math.abs(input.rotation(Rotation.Roll))
    while (inklinazioa >= -30 && inklinazioa <= 30) {
        argiGorriaDirDir()
        // 103º da maximoa eskuinetara. -103º maximoa ezkerretara.
        inklinazioa = Math.abs(input.rotation(Rotation.Roll))
    }
})
