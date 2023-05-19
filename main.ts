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
    ezker = true
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
            ezker = false
            break;
        }
    }
})
input.onButtonPressed(Button.B, function () {
    eskuin = true
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
            eskuin = false
            break;
        }
    }
})
let eskuin = false
let ezker = false
let inklinazioa = 0
inklinazioa = 0
music.setVolume(127)
led.setBrightness(255)
basic.forever(function () {
    // 103º da maximoa eskuinetara. -103º maximoa ezkerretara.
    inklinazioa = Math.abs(input.rotation(Rotation.Roll))
    while (!(ezker) && !(eskuin)) {
        argiGorriaDirDir()
        // 103º da maximoa eskuinetara. -103º maximoa ezkerretara.
        inklinazioa = Math.abs(input.rotation(Rotation.Roll))
    }
})
