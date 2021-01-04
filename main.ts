let gemi: game.LedSprite = null
let goktasi: game.LedSprite = null
let hiz = 0
input.onButtonPressed(Button.A, function () {
    gemi.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    gemi.change(LedSpriteProperty.X, 1)
})
basic.forever(function () {
    gemi = game.createSprite(2, 4)
    goktasi = game.createSprite(randint(0, 4), 0)
    hiz = 150
    while (true) {
        goktasi.change(LedSpriteProperty.Y, 1)
        basic.pause(900 - hiz)
        if (goktasi.isTouching(gemi)) {
            game.gameOver()
        }
        if (goktasi.get(LedSpriteProperty.Y) == 4) {
            goktasi.set(LedSpriteProperty.Y, 0)
            goktasi.set(LedSpriteProperty.X, randint(0, 4))
            game.setScore(game.score() + 1)
            game.addScore(1)
        }
        if (game.score() == 5) {
            hiz = 300
        } else if (game.score() == 15) {
            hiz = 500
        } else if (game.score() == 20) {
            hiz = 700
        }
    }
})
