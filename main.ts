scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.splash("completed level 1")
    game.splash(time_to_beat_level_1, "seconds ")
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnTile(mario, tiles.getTileLocation(3, 14))
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mario.vy == 0) {
        mario.vy = -150
        mario.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 2 . . d d d . 
            . . . . . 2 2 2 2 2 2 2 2 d d . 
            . . . . e e e d d f d . 2 2 2 . 
            . . . e d e d d d f d d d 2 2 . 
            . . . e d e e d d d f d d d 2 . 
            . . . e e d d d d f f f f 2 . . 
            . . . . . d d d d d d d 2 2 . . 
            . . 2 2 2 2 8 2 2 2 8 2 2 . . e 
            d d 2 2 2 2 2 8 2 2 2 8 . . e e 
            d d d 2 2 2 2 8 8 8 8 5 8 8 e e 
            . d . . 8 2 8 8 5 8 8 8 8 8 e e 
            . . e e e 8 8 8 8 8 8 8 8 8 e e 
            . e e e 8 8 8 8 8 8 . . . . . . 
            . e e . . . . . . . . . . . . . 
            `)
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.countdown() == 0) {
        if (monke.vx == 150) {
            controller.moveSprite(mario, 185, 0)
            pause(2000)
            pause(1000)
            controller.moveSprite(mario, 100, 0)
            info.startCountdown(3)
        }
        controller.moveSprite(mario, 135, 0)
        pause(2000)
        pause(1000)
        controller.moveSprite(mario, 100, 0)
        info.startCountdown(3)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player2) {
    if (fire_power == 1) {
        if (facing_right == 1) {
            projectile = sprites.createProjectileFromSprite(img`
                . . 2 2 2 2 . . 
                . 2 2 4 4 2 2 . 
                . 2 4 4 1 4 2 2 
                2 2 2 2 4 1 4 2 
                2 . . 2 4 4 4 2 
                . 2 . 2 2 4 2 2 
                2 . . . 2 2 2 . 
                . . 2 . . . . . 
                `, mario, 200, 0)
            animation.runImageAnimation(
            projectile,
            [img`
                . 2 . 2 2 . . . 
                . . 2 . 2 2 2 . 
                2 . . . 2 4 2 2 
                . . 2 2 2 4 4 2 
                . 2 2 4 4 1 4 2 
                . 2 4 4 1 4 2 2 
                . 2 2 4 4 2 2 . 
                . . 2 2 2 2 . . 
                `,img`
                . . . . . 2 . . 
                . 2 2 2 . . . 2 
                2 2 4 2 2 . 2 . 
                2 4 4 4 2 . . 2 
                2 4 1 4 2 2 2 2 
                2 2 4 1 4 4 2 . 
                . 2 2 4 4 2 2 . 
                . . 2 2 2 2 . . 
                `,img`
                . . 2 2 2 2 . . 
                . 2 2 4 4 2 2 . 
                2 2 4 1 4 4 2 . 
                2 4 1 4 4 2 2 . 
                2 4 4 2 2 2 . . 
                2 2 4 2 . . . 2 
                . 2 2 2 . 2 . . 
                . . . 2 2 . 2 . 
                `,img`
                . . 2 2 2 2 . . 
                . 2 2 4 4 2 2 . 
                . 2 4 4 1 4 2 2 
                2 2 2 2 4 1 4 2 
                2 . . 2 4 4 4 2 
                . 2 . 2 2 4 2 2 
                2 . . . 2 2 2 . 
                . . 2 . . . . . 
                `],
            75,
            true
            )
        } else {
            projectile = sprites.createProjectileFromSprite(img`
                . . 2 2 2 2 . . 
                . 2 2 4 4 2 2 . 
                . 2 4 4 1 4 2 2 
                2 2 2 2 4 1 4 2 
                2 . . 2 4 4 4 2 
                . 2 . 2 2 4 2 2 
                2 . . . 2 2 2 . 
                . . 2 . . . . . 
                `, mario, -200, 0)
            animation.runImageAnimation(
            projectile,
            [img`
                . 2 . 2 2 . . . 
                . . 2 . 2 2 2 . 
                2 . . . 2 4 2 2 
                . . 2 2 2 4 4 2 
                . 2 2 4 4 1 4 2 
                . 2 4 4 1 4 2 2 
                . 2 2 4 4 2 2 . 
                . . 2 2 2 2 . . 
                `,img`
                . . . . . 2 . . 
                . 2 2 2 . . . 2 
                2 2 4 2 2 . 2 . 
                2 4 4 4 2 . . 2 
                2 4 1 4 2 2 2 2 
                2 2 4 1 4 4 2 . 
                . 2 2 4 4 2 2 . 
                . . 2 2 2 2 . . 
                `,img`
                . . 2 2 2 2 . . 
                . 2 2 4 4 2 2 . 
                2 2 4 1 4 4 2 . 
                2 4 1 4 4 2 2 . 
                2 4 4 2 2 2 . . 
                2 2 4 2 . . . 2 
                . 2 2 2 . 2 . . 
                . . . 2 2 . 2 . 
                `,img`
                . . 2 2 2 2 . . 
                . 2 2 4 4 2 2 . 
                . 2 4 4 1 4 2 2 
                2 2 2 2 4 1 4 2 
                2 . . 2 4 4 4 2 
                . 2 . 2 2 4 2 2 
                2 . . . 2 2 2 . 
                . . 2 . . . . . 
                `],
            75,
            true
            )
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    doSomething()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    doSomething()
})
info.onCountdownEnd(function () {
    info.stopCountdown()
})
function doSomething () {
    if (LifeReducedAtPlusOneSecond < game.runtime()) {
        LifeReducedAtPlusOneSecond = game.runtime()
        LifeReducedAtPlusOneSecond += 1000
        tiles.placeOnTile(mario, tiles.getTileLocation(3, 10))
        info.changeLifeBy(-1)
        game.splash("lost one life")
        if (info.life() == 1) {
            game.splash("1 life left ")
            already_running = 0
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    mario.vx = 100
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    controller.moveSprite(mario, 150, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    doSomething()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    if (mario.vy == 0) {
        mario.vy = -200
        mario.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 2 . . d d d . 
            . . . . . 2 2 2 2 2 2 2 2 d d . 
            . . . . e e e d d f d . 2 2 2 . 
            . . . e d e d d d f d d d 2 2 . 
            . . . e d e e d d d f d d d 2 . 
            . . . e e d d d d f f f f 2 . . 
            . . . . . d d d d d d d 2 2 . . 
            . . 2 2 2 2 8 2 2 2 8 2 2 . . e 
            d d 2 2 2 2 2 8 2 2 2 8 . . e e 
            d d d 2 2 2 2 8 8 8 8 5 8 8 e e 
            . d . . 8 2 8 8 5 8 8 8 8 8 e e 
            . . e e e 8 8 8 8 8 8 8 8 8 e e 
            . e e e 8 8 8 8 8 8 . . . . . . 
            . e e . . . . . . . . . . . . . 
            `)
    }
})
mp.onControllerEvent(ControllerEvent.Connected, function (player2) {
	
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    info.changeScoreBy(1)
    pause(2000)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(21, 5), assets.tile`myTile6`)
    fire_power = 1
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    tiles.placeOnTile(mario, tiles.getTileLocation(6, 1))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    if (mario.y < otherSprite.y) {
        info.changeScoreBy(3)
    } else {
        info.changeLifeBy(-1)
        game.splash("lost one life")
        if (info.life() == 1) {
            game.splash("1 life left ")
            already_running = 0
        }
    }
})
let already_running = 0
let projectile: Sprite = null
let facing_right = 0
let fire_power = 0
let time_to_beat_level_1 = 0
let monke: Sprite = null
let mario: Sprite = null
let LifeReducedAtPlusOneSecond = 0
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
    . . . . 2 2 2 2 2 . . . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . f f f d d f d . . . . . . 
    . . f d f d d d f d d d . . . . 
    . . f d f f d d d f d d d . . . 
    . . f f d d d d f f f f . . . . 
    . . . . d d d d d d d . . . . . 
    . . . 8 8 2 8 8 8 . . . . . . . 
    . . 8 8 8 2 8 8 2 8 8 8 . . . . 
    . 8 8 8 8 2 8 8 2 8 8 8 8 . . . 
    . d d 8 8 2 2 2 2 8 8 d d . . . 
    . d d d 2 5 2 2 5 2 d d d . . . 
    . d d 2 2 2 2 2 2 2 2 d d . . . 
    . . . 2 2 2 . . 2 2 2 . . . . . 
    . . e e e . . . . e e e . . . . 
    . e e e e . . . . e e e e . . . 
    `, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
    . . . . 3 3 3 3 3 . . . . . . . 
    . . . 3 3 3 3 3 3 3 3 3 . . . . 
    . . . f f f d d f d . . . . . . 
    . . f d f d d d f d d d . . . . 
    . . f d f f d d d f d d d . . . 
    . . f f d d d d f f f f . . . . 
    . . . . d d d d d d d . . . . . 
    . . . 4 4 3 4 4 4 . . . . . . . 
    . . 4 4 4 3 4 4 3 4 4 4 . . . . 
    . 4 4 4 4 3 4 4 3 4 4 4 4 . . . 
    . d d 4 4 3 3 3 3 4 4 d d . . . 
    . d d d 3 5 3 3 5 3 d d d . . . 
    . d d 3 3 3 3 3 3 3 3 d d . . . 
    . . . 3 3 3 . . 3 3 3 . . . . . 
    . . e e e . . . . e e e . . . . 
    . e e e e . . . . e e e e . . . 
    `, SpriteKind.Player))
game.splash("welcome to my game")
LifeReducedAtPlusOneSecond = game.runtime()
tiles.setCurrentTilemap(tilemap`level1`)
mario = sprites.create(img`
    . . . . 2 2 2 2 2 . . . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . f f f d d f d . . . . . . 
    . . f d f d d d f d d d . . . . 
    . . f d f f d d d f d d d . . . 
    . . f f d d d d f f f f . . . . 
    . . . . d d d d d d d . . . . . 
    . . . 8 8 2 8 8 8 . . . . . . . 
    . . 8 8 8 2 8 8 2 8 8 8 . . . . 
    . 8 8 8 8 2 8 8 2 8 8 8 8 . . . 
    . d d 8 8 2 2 2 2 8 8 d d . . . 
    . d d d 2 5 2 2 5 2 d d d . . . 
    . d d 2 2 2 2 2 2 2 2 d d . . . 
    . . . 2 2 2 . . 2 2 2 . . . . . 
    . . e e e . . . . e e e . . . . 
    . e e e e . . . . e e e e . . . 
    `, SpriteKind.Player)
monke = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . . . 
    c c c c c d d e e e f c . . . . 
    . f d d d d e e e f f . . . . . 
    . . f f f f f e e e e f . . . . 
    . . . . f f e e e e e e f . f f 
    . . . f e e f e e f e e f . e f 
    . . f e e f e e f e e e f . e f 
    . f b d f d b f b b f e f f e f 
    . f d d f d d f d d b e f f f f 
    . . f f f f f f f f f f f f f . 
    `, SpriteKind.Enemy)
let mario_2 = mp.playerSelector(mp.PlayerNumber.Two)
scene.cameraFollowSprite(mario)
tiles.placeOnTile(monke, tiles.getTileLocation(57, 11))
tiles.placeOnTile(mario, tiles.getTileLocation(3, 10))
mario.ay = 300
controller.moveSprite(mario, 100, 0)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 100, 0)
monke.setBounceOnWall(true)
monke.setVelocity(70, 0)
info.setLife(3)
if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two))) {
	
}
game.onUpdate(function () {
    facing_right = 1
    mario.setImage(img`
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 . . . . 
        . . . f f f d d f d . . . . . . 
        . . f d f d d d f d d d . . . . 
        . . f d f f d d d f d d d . . . 
        . . f f d d d d f f f f . . . . 
        . . . . d d d d d d d . . . . . 
        . . . 8 8 2 8 8 8 . . . . . . . 
        . . 8 8 8 2 8 8 2 8 8 8 . . . . 
        . 8 8 8 8 2 8 8 2 8 8 8 8 . . . 
        . d d 8 8 2 2 2 2 8 8 d d . . . 
        . d d d 2 5 2 2 5 2 d d d . . . 
        . d d 2 2 2 2 2 2 2 2 d d . . . 
        . . . 2 2 2 . . 2 2 2 . . . . . 
        . . e e e . . . . e e e . . . . 
        . e e e e . . . . e e e e . . . 
        `)
    if (mario.vy < 0) {
        mario.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 2 . . d d d . 
            . . . . . 2 2 2 2 2 2 2 2 d d . 
            . . . . e e e d d f d . 2 2 2 . 
            . . . e d e d d d f d d d 2 2 . 
            . . . e d e e d d d f d d d 2 . 
            . . . e e d d d d f f f f 2 . . 
            . . . . . d d d d d d d 2 2 . . 
            . . 2 2 2 2 8 2 2 2 8 2 2 . . e 
            d d 2 2 2 2 2 8 2 2 2 8 . . e e 
            d d d 2 2 2 2 8 8 8 8 5 8 8 e e 
            . d . . 8 2 8 8 5 8 8 8 8 8 e e 
            . . e e e 8 8 8 8 8 8 8 8 8 e e 
            . e e e 8 8 8 8 8 8 . . . . . . 
            . e e . . . . . . . . . . . . . 
            `)
    } else if (mario.vy > 0) {
        mario.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 2 . . d d d . 
            . . . . . 2 2 2 2 2 2 2 2 d d . 
            . . . . e e e d d f d . 2 2 2 . 
            . . . e d e d d d f d d d 2 2 . 
            . . . e d e e d d d f d d d 2 . 
            . . . e e d d d d f f f f 2 . . 
            . . . . . d d d d d d d 2 2 . . 
            . . 2 2 2 2 8 2 2 2 8 2 2 . . e 
            d d 2 2 2 2 2 8 2 2 2 8 . . e e 
            d d d 2 2 2 2 8 8 8 8 5 8 8 e e 
            . d . . 8 2 8 8 5 8 8 8 8 8 e e 
            . . e e e 8 8 8 8 8 8 8 8 8 e e 
            . e e e 8 8 8 8 8 8 . . . . . . 
            . e e . . . . . . . . . . . . . 
            `)
    } else {
    	
    }
    if (mario.vx < 0) {
        facing_right = 0
        mario.image.flipX()
    }
})
game.onUpdateInterval(1000, function () {
    time_to_beat_level_1 += 1
})
game.onUpdateInterval(100, function () {
    if (monke.vx == -70) {
        monke.setImage(img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            . c d f d d f d e e d d f . . . 
            c d e e d d d d e e b d c . . . 
            c d d d d c d d e e b d c . . . 
            c c c c c d d e e e f c . . . . 
            . f d d d d e e e f f . . . . . 
            . . f f f f f e e e e f . . . . 
            . . . . f f e e e e e e f . f f 
            . . . f e e f e e f e e f . e f 
            . . f e e f e e f e e e f . e f 
            . f b d f d b f b b f e f f e f 
            . f d d f d d f d d b e f f f f 
            . . f f f f f f f f f f f f f . 
            `)
        animation.runImageAnimation(
        monke,
        [img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            . c d f d d f d e e d d f . . . 
            c d e e d d d d e e b d c . . . 
            c d d d d c d d e e b d c . f f 
            c c c c c d d d e e f c . f e f 
            . f d d d d d e e f f . . f e f 
            . . f f f f f e e e e f . f e f 
            . . . . f e e e e e e e f f e f 
            . . . f e f f e f e e e e f f . 
            . . . f e f f e f e e e e f . . 
            . . . f d b f d b f f e f . . . 
            . . . f d d c d d b b d f . . . 
            . . . . f f f f f f f f f . . . 
            `,img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . c d f d d f d e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            c d e e d d d d e e d d f . . . 
            c d d d d c d d e e b d c . . . 
            c c c c c d d e e e b d c . f f 
            . f d d d d e e e f f c . f e f 
            . f f f f f f e e e e f . f e f 
            . f f f f e e e e e e e f f e f 
            f d d f d d f e f e e e e f f . 
            f d b f d b f e f e e e e f . . 
            f f f f f f f f f f f f e f . . 
            . . . . . . . . . f c d d f . . 
            . . . . . . . . . . f f f f . . 
            `,img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f f . . . . 
            . c d d d d d d e e d d f . . . 
            . c d f d d f d e e b d c . . . 
            c d d f d d f d e e b d c . f f 
            c d e e d d d d e e f c . f e f 
            c d d d d c d e e e f . . f e f 
            . f c c c d e e e f f . . f e f 
            . . f f f f f e e e e f . f e f 
            . . . . f e e e e e e e f f f . 
            . . f f e f e e f e e e e f . . 
            . f e f f e e f f f e e e f . . 
            f d d b d d c f f f f f f b f . 
            f d d c d d d f . . f c d d f . 
            . f f f f f f f . . . f f f . . 
            `,img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f f f . . . . 
            . . f d d d e e e e d d f . . . 
            . c d d d d d e e e b d c . . . 
            . c d d d d d d e e b d c . . . 
            c d d f d d f d e e f c . f f . 
            c d d f d d f d e e f . . f e f 
            c d e e d d d d e e f . . f e f 
            . f d d d c d e e f f . . f e f 
            . . f f f d e e e e e f . f e f 
            . . . . f e e e e e e e f f f . 
            . . . . f f e e e e e b f f . . 
            . . . f e f f e e c d d f f . . 
            . . f d d b d d c f f f . . . . 
            . . f d d c d d d f f . . . . . 
            . . . f f f f f f f . . . . . . 
            `,img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            . c d f d d f d e e d d f . . . 
            c d e e d d d d e e b d c . . . 
            c d d d d c d d e e b d c . . . 
            c c c c c d d e e e f c . . . . 
            . f d d d d e e e f f . . . . . 
            . . f f f f f e e e e f . . . . 
            . . . . f f e e e e e e f . f f 
            . . . f e e f e e f e e f . e f 
            . . f e e f e e f e e e f . e f 
            . f b d f d b f b b f e f f e f 
            . f d d f d d f d d b e f f f f 
            . . f f f f f f f f f f f f f . 
            `],
        200,
        false
        )
    }
})
game.onUpdateInterval(100, function () {
    if (monke.vx == 70) {
        monke.setImage(img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e d d d d f . . 
            . . . . f f e e d f d d f d c . 
            . . . f d d e e d f d d f d c . 
            . . . c d b e e d d d d e e d c 
            . . . c d b e e d d c d d d d c 
            . . . . c f e e e d d c c c c c 
            . . . . . f f e e e d d d d f . 
            . . . . f e e e e f f f f f . . 
            f f . f e e e e e e f f . . . . 
            f e . f e e f e e f e e f . . . 
            f e . f e e e f e e f e e f . . 
            f e f f e f b b f b d f d b f . 
            f f f f e b d d f d d f d d f . 
            . f f f f f f f f f f f f f . . 
            `)
        animation.runImageAnimation(
        monke,
        [img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e d d d d f . . 
            . . . . f f e e d f d d f d c . 
            . . . f d d e e d f d d f d c . 
            . . . c d b e e d d d d e e d c 
            f f . c d b e e d d c d d d d c 
            f e f . c f e e d d d c c c c c 
            f e f . . f f e e d d d d d f . 
            f e f . f e e e e f f f f f . . 
            f e f f e e e e e e e f . . . . 
            . f f e e e e f e f f e f . . . 
            . . f e e e e f e f f e f . . . 
            . . . f e f f b d f b d f . . . 
            . . . f d b b d d c d d f . . . 
            . . . f f f f f f f f f . . . . 
            `,img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e d d d d f . . 
            . . . . . f e e d f d d f d c . 
            . . . . f f e e d f d d f d c . 
            . . . f d d e e d d d d e e d c 
            . . . c d b e e d d c d d d d c 
            f f . c d b e e e d d c c c c c 
            f e f . c f f e e e d d d d f . 
            f e f . f e e e e f f f f f f . 
            f e f f e e e e e e e f f f f . 
            . f f e e e e f e f d d f d d f 
            . . f e e e e f e f b d f b d f 
            . . f e f f f f f f f f f f f f 
            . . f d d c f . . . . . . . . . 
            . . f f f f . . . . . . . . . . 
            `,img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . f f e e e d d d d f . . 
            . . . f d d e e d d d d d d c . 
            . . . c d b e e d f d d f d c . 
            f f . c d b e e d f d d f d d c 
            f e f . c f e e d d d d e e d c 
            f e f . . f e e e d c d d d d c 
            f e f . . f f e e e d c c c f . 
            f e f . f e e e e f f f f f . . 
            . f f f e e e e e e e f . . . . 
            . . f e e e e f e e f e f f . . 
            . . f e e e f f f e e f f e f . 
            . f b f f f f f f c d d b d d f 
            . f d d c f . . f d d d c d d f 
            . . f f f . . . f f f f f f f . 
            `,img`
            . . . . . . . f f f f f . . . . 
            . . . . f f f e e e e e f . . . 
            . . . f d d e e e e d d d f . . 
            . . . c d b e e e d d d d d c . 
            . . . c d b e e d d d d d d c . 
            . f f . c f e e d f d d f d d c 
            f e f . . f e e d f d d f d d c 
            f e f . . f e e d d d d e e d c 
            f e f . . f f e e d c d d d f . 
            f e f . f e e e e e d f f f . . 
            . f f f e e e e e e e f . . . . 
            . . f f b e e e e e f f . . . . 
            . . f f d d c e e f f e f . . . 
            . . . . f f f c d d b d d f . . 
            . . . . . f f d d d c d d f . . 
            . . . . . . f f f f f f f . . . 
            `,img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e d d d d f . . 
            . . . . f f e e d f d d f d c . 
            . . . f d d e e d f d d f d c . 
            . . . c d b e e d d d d e e d c 
            . . . c d b e e d d c d d d d c 
            . . . . c f e e e d d c c c c c 
            . . . . . f f e e e d d d d f . 
            . . . . f e e e e f f f f f . . 
            f f . f e e e e e e f f . . . . 
            f e . f e e f e e f e e f . . . 
            f e . f e e e f e e f e e f . . 
            f e f f e f b b f b d f d b f . 
            f f f f e b d d f d d f d d f . 
            . f f f f f f f f f f f f f . . 
            `],
        200,
        false
        )
    }
})
