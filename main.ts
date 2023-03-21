namespace SpriteKind {
    export const p2 = SpriteKind.create()
    export const coim = SpriteKind.create()
    export const blok = SpriteKind.create()
    export const pipe_top = SpriteKind.create()
    export const pipe_botom = SpriteKind.create()
    export const big_block = SpriteKind.create()
    export const mushroom = SpriteKind.create()
    export const block_botto = SpriteKind.create()
    export const life = SpriteKind.create()
    export const stAR = SpriteKind.create()
    export const STAR_BLOCK = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.p2, assets.tile`myTile1`, function (sprite, location) {
    game.splash("player 2 wins")
    game.splash(time_to_beat_level_1, "seconds ")
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnTile(mario, tiles.getTileLocation(3, 14))
    tiles.placeOnTile(mario_2, tiles.getTileLocation(4, 14))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    level2 = 1
    sprites.destroyAllSpritesOfKind(SpriteKind.pipe_top)
    sprites.destroyAllSpritesOfKind(SpriteKind.pipe_botom)
    sprites.destroyAllSpritesOfKind(SpriteKind.big_block)
    sprites.destroyAllSpritesOfKind(SpriteKind.mushroom)
    sprites.destroyAllSpritesOfKind(SpriteKind.block_botto)
    sprites.destroyAllSpritesOfKind(SpriteKind.blok)
    sprites.destroyAllSpritesOfKind(SpriteKind.coim)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    game.splash("player 1 wins ")
    game.splash(time_to_beat_level_1, "seconds ")
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnTile(mario, tiles.getTileLocation(3, 14))
    tiles.placeOnTile(mario_2, tiles.getTileLocation(4, 14))
    for (let value of tiles.getTilesByType(assets.tile`myTile29`)) {
        star_blockkkk = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f f . 
            f e e e e e e e e e e e e e e f 
            f e f e e e e e e e e e e f e f 
            f e e e e 4 4 4 4 4 e e e e e f 
            f e e e 4 4 f f f 4 4 e e e e f 
            f e e e 4 4 f e e 4 4 f e e e f 
            f e e e 4 4 f e e 4 4 f e e e f 
            f e e e e f f e 4 4 4 f e e e f 
            f e e e e e e 4 4 f f f e e e f 
            f e e e e e e 4 4 f e e e e e f 
            f e e e e e e e f f e e e e e f 
            f e e e e e e 4 4 e e e e e e f 
            f e e e e e e 4 4 f e e e e e f 
            f e f e e e e e f f e e e f e f 
            f e e e e e e e e e e e e e e f 
            8 f f f f f f f f f f f f f f 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            `, SpriteKind.STAR_BLOCK)
        tiles.placeOnTile(star_blockkkk, value)
        animation.runImageAnimation(
        star_blockkkk,
        [img`
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f f . 
            f f e e e e e e e e e e e e f f 
            f e f e e e e e e e e e e f e f 
            f e e e e 4 4 4 4 4 e e e e e f 
            f e e e 4 4 f f f 4 4 e e e e f 
            f e e e 4 4 f e e 4 4 f e e e f 
            f e e e 4 4 f e e 4 4 f e e e f 
            f e e e e f f e 4 4 4 f e e e f 
            f e e e e e e 4 4 f f f e e e f 
            f e e e e e e 4 4 f e e e e e f 
            f e e e e e e e f f e e e e e f 
            f e e e e e e 4 4 e e e e e e f 
            f e e e e e e 4 4 f e e e e e f 
            f e f e e e e e f f e e e f e f 
            f f e e e e e e e e e e e e f f 
            . f f f f f f f f f f f f f f . 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            `,img`
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f f . 
            f f 4 4 4 4 4 4 4 4 4 4 4 4 f f 
            f 4 f 4 4 4 4 4 4 4 4 4 4 f 4 f 
            f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
            f 4 4 4 4 4 f f f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 f e e 4 4 f 4 4 4 f 
            f 4 4 4 4 4 f e e 4 4 f 4 4 4 f 
            f 4 4 4 4 f f e 4 4 4 f 4 4 4 f 
            f 4 4 4 4 4 4 4 4 f f f 4 4 4 f 
            f 4 4 4 4 4 4 4 4 f 4 4 4 4 4 f 
            f 4 4 4 4 4 4 4 f f 4 4 4 4 4 f 
            f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 4 4 f 4 4 4 4 4 f 
            f 4 f 4 4 4 4 4 f f 4 4 4 f 4 f 
            f f 4 4 4 4 4 4 4 4 4 4 4 4 f f 
            . f f f f f f f f f f f f f f . 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            `,img`
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f f . 
            f f 5 5 5 5 5 5 5 5 5 5 5 5 f f 
            f 5 f 5 5 5 5 5 5 5 5 5 5 f 5 f 
            f 5 5 5 5 4 4 4 4 4 5 5 5 5 5 f 
            f 5 5 5 4 4 f f f 4 4 5 5 5 5 f 
            f 5 5 5 4 4 f e e 4 4 f 5 5 5 f 
            f 5 5 5 4 4 f e e 4 4 f 5 5 5 f 
            f 5 5 5 5 f f e 4 4 4 f 5 5 5 f 
            f 5 5 5 5 5 5 4 4 f f f 5 5 5 f 
            f 5 5 5 5 5 5 4 4 f 5 5 5 5 5 f 
            f 5 5 5 5 5 5 5 f f 5 5 5 5 5 f 
            f 5 5 5 5 5 5 4 4 5 5 5 5 5 5 f 
            f 5 5 5 5 5 5 4 4 f 5 5 5 5 5 f 
            f 5 f 5 5 5 5 5 f f 5 5 5 f 5 f 
            f f 5 5 5 5 5 5 5 5 5 5 5 5 f f 
            . f f f f f f f f f f f f f f . 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            `],
        200,
        true
        )
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile14`)) {
        coin = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . 
            . . . f f f 5 5 5 5 5 f f f . . 
            . . f f 5 5 f f f f 5 5 5 f f . 
            . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
            . f f 5 5 5 5 5 5 5 5 5 5 5 f f 
            . f 5 5 f 5 5 5 5 5 5 5 5 5 5 f 
            . f 5 5 f 5 5 5 5 5 5 5 5 5 5 f 
            . f 5 5 f 5 5 5 5 5 5 5 5 5 5 f 
            . f 5 5 f 5 5 5 5 5 5 5 5 5 5 f 
            . f 5 5 f 5 5 5 5 5 5 5 5 5 5 f 
            . f f 5 f 5 5 5 5 5 5 5 5 5 f f 
            . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
            . . f f 5 5 5 5 5 5 5 5 5 f f . 
            . . . f f f 5 5 5 5 5 f f f . . 
            . . . . . f f f f f f f . . . . 
            `, SpriteKind.coim)
        tiles.placeOnTile(coin, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile18`)) {
        big_block = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f f . 
            f e e e e e e e e e e e e e e f 
            f e f e e e e e e e e e e f e f 
            f e e e e 4 4 4 4 4 e e e e e f 
            f e e e 4 4 f f f 4 4 e e e e f 
            f e e e 4 4 f e e 4 4 f e e e f 
            f e e e 4 4 f e e 4 4 f e e e f 
            f e e e e f f e 4 4 4 f e e e f 
            f e e e e e e 4 4 f f f e e e f 
            f e e e e e e 4 4 f e e e e e f 
            f e e e e e e e f f e e e e e f 
            f e e e e e e 4 4 e e e e e e f 
            f e e e e e e 4 4 f e e e e e f 
            f e f e e e e e f f e e e f e f 
            f e e e e e e e e e e e e e e f 
            . f f f f f f f f f f f f f f . 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            `, SpriteKind.blok)
        tiles.placeOnTile(big_block, value)
        animation.runImageAnimation(
        big_block,
        [img`
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f f . 
            f e e e e e e e e e e e e e e f 
            f e f e e e e e e e e e e f e f 
            f e e e e 4 4 4 4 4 e e e e e f 
            f e e e 4 4 f f f 4 4 e e e e f 
            f e e e 4 4 f e e 4 4 f e e e f 
            f e e e 4 4 f e e 4 4 f e e e f 
            f e e e e f f e 4 4 4 f e e e f 
            f e e e e e e 4 4 f f f e e e f 
            f e e e e e e 4 4 f e e e e e f 
            f e e e e e e e f f e e e e e f 
            f e e e e e e 4 4 e e e e e e f 
            f e e e e e e 4 4 f e e e e e f 
            f e f e e e e e f f e e e f e f 
            f e e e e e e e e e e e e e e f 
            . f f f f f f f f f f f f f f . 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            `,img`
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f f . 
            f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
            f 4 f 4 4 4 4 4 4 4 4 4 4 f 4 f 
            f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
            f 4 4 4 4 4 f f f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 f e e 4 4 f 4 4 4 f 
            f 4 4 4 4 4 f e e 4 4 f 4 4 4 f 
            f 4 4 4 4 f f e 4 4 4 f 4 4 4 f 
            f 4 4 4 4 4 4 4 4 f f f 4 4 4 f 
            f 4 4 4 4 4 4 4 4 f 4 4 4 4 4 f 
            f 4 4 4 4 4 4 4 f f 4 4 4 4 4 f 
            f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 4 4 f 4 4 4 4 4 f 
            f 4 f 4 4 4 4 4 f f 4 4 4 f 4 f 
            f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
            . f f f f f f f f f f f f f f . 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            `,img`
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f f . 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 f 5 5 5 5 5 5 5 5 5 5 f 5 f 
            f 5 5 5 5 4 4 4 4 4 5 5 5 5 5 f 
            f 5 5 5 4 4 f f f 4 4 5 5 5 5 f 
            f 5 5 5 4 4 f e e 4 4 f 5 5 5 f 
            f 5 5 5 4 4 f e e 4 4 f 5 5 5 f 
            f 5 5 5 5 f f e 4 4 4 f 5 5 5 f 
            f 5 5 5 5 5 5 4 4 f f f 5 5 5 f 
            f 5 5 5 5 5 5 4 4 f 5 5 5 5 5 f 
            f 5 5 5 5 5 5 5 f f 5 5 5 5 5 f 
            f 5 5 5 5 5 5 4 4 5 5 5 5 5 5 f 
            f 5 5 5 5 5 5 4 4 f 5 5 5 5 5 f 
            f 5 f 5 5 5 5 5 f f 5 5 5 f 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            . f f f f f f f f f f f f f f . 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            `],
        200,
        true
        )
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile26`)) {
        power_block = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f f . 
            f e e e e e e e e e e e e e e f 
            f e f e e e e e e e e e e f e f 
            f e e e e 4 4 4 4 4 e e e e e f 
            f e e e 4 4 f f f 4 4 e e e e f 
            f e e e 4 4 f e e 4 4 f e e e f 
            f e e e 4 4 f e e 4 4 f e e e f 
            f e e e e f f e 4 4 4 f e e e f 
            f e e e e e e 4 4 f f f e e e f 
            f e e e e e e 4 4 f e e e e e f 
            f e e e e e e e f f e e e e e f 
            f e e e e e e 4 4 e e e e e e f 
            f e e e e e e 4 4 f e e e e e f 
            f e f e e e e e f f e e e f e f 
            f e e e e e e e e e e e e e e f 
            . f f f f f f f f f f f f f f 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            `, SpriteKind.big_block)
        tiles.placeOnTile(power_block, value)
        animation.runImageAnimation(
        power_block,
        [img`
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f f . 
            f f e e e e e e e e e e e e f f 
            f e f e e e e e e e e e e f e f 
            f e e e e 4 4 4 4 4 e e e e e f 
            f e e e 4 4 f f f 4 4 e e e e f 
            f e e e 4 4 f e e 4 4 f e e e f 
            f e e e 4 4 f e e 4 4 f e e e f 
            f e e e e f f e 4 4 4 f e e e f 
            f e e e e e e 4 4 f f f e e e f 
            f e e e e e e 4 4 f e e e e e f 
            f e e e e e e e f f e e e e e f 
            f e e e e e e 4 4 e e e e e e f 
            f e e e e e e 4 4 f e e e e e f 
            f e f e e e e e f f e e e f e f 
            f f e e e e e e e e e e e e f f 
            8 f f f f f f f f f f f f f f 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            `,img`
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f f . 
            f f 4 4 4 4 4 4 4 4 4 4 4 4 f f 
            f 4 f 4 4 4 4 4 4 4 4 4 4 f 4 f 
            f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
            f 4 4 4 4 4 f f f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 f e e 4 4 f 4 4 4 f 
            f 4 4 4 4 4 f e e 4 4 f 4 4 4 f 
            f 4 4 4 4 f f e 4 4 4 f 4 4 4 f 
            f 4 4 4 4 4 4 4 4 f f f 4 4 4 f 
            f 4 4 4 4 4 4 4 4 f 4 4 4 4 4 f 
            f 4 4 4 4 4 4 4 f f 4 4 4 4 4 f 
            f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 4 4 f 4 4 4 4 4 f 
            f 4 f 4 4 4 4 4 f f 4 4 4 f 4 f 
            f f 4 4 4 4 4 4 4 4 4 4 4 4 f f 
            8 f f f f f f f f f f f f f f 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            `,img`
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f f . 
            f f 5 5 5 5 5 5 5 5 5 5 5 5 f f 
            f 5 f 5 5 5 5 5 5 5 5 5 5 f 5 f 
            f 5 5 5 5 4 4 4 4 4 5 5 5 5 5 f 
            f 5 5 5 4 4 f f f 4 4 5 5 5 5 f 
            f 5 5 5 4 4 f e e 4 4 f 5 5 5 f 
            f 5 5 5 4 4 f e e 4 4 f 5 5 5 f 
            f 5 5 5 5 f f e 4 4 4 f 5 5 5 f 
            f 5 5 5 5 5 5 4 4 f f f 5 5 5 f 
            f 5 5 5 5 5 5 4 4 f 5 5 5 5 5 f 
            f 5 5 5 5 5 5 5 f f 5 5 5 5 5 f 
            f 5 5 5 5 5 5 4 4 5 5 5 5 5 5 f 
            f 5 5 5 5 5 5 4 4 f 5 5 5 5 5 f 
            f 5 f 5 5 5 5 5 f f 5 5 5 f 5 f 
            f f 5 5 5 5 5 5 5 5 5 5 5 5 f f 
            8 f f f f f f f f f f f f f f 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            `],
        200,
        true
        )
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile21`)) {
        top_left_pipe = sprites.create(img`
            . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            . . f f f f f f f f f f f f f f 
            . . f 7 7 7 7 7 7 7 7 7 7 7 7 7 
            . . f 7 7 7 7 7 7 7 7 7 7 7 7 7 
            . . f 7 7 7 7 7 7 7 7 7 7 7 7 7 
            . . f 7 7 7 7 7 7 7 7 7 7 7 7 7 
            . . f 7 7 7 7 7 7 7 7 7 7 7 7 7 
            . . f 7 7 7 7 7 7 7 7 7 7 7 7 7 
            . . f 7 7 7 7 7 7 7 7 7 7 7 7 7 
            . . f 7 7 7 7 7 7 7 7 7 7 7 7 7 
            . . f 7 7 7 7 7 7 7 7 7 7 7 7 7 
            . . f f f f f f f f f f f f f f 
            . . . . . f 7 7 7 7 7 7 7 7 7 7 
            . . . . . f 7 7 7 7 7 7 7 7 7 7 
            . . . . . f 7 7 7 7 7 7 7 7 7 7 
            . . . . . f 7 7 7 7 7 7 7 7 7 7 
            . . . . . f 7 7 7 7 7 7 7 7 7 7 
            `, SpriteKind.pipe_top)
        tiles.placeOnTile(top_left_pipe, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile22`)) {
        top_right_pipe = sprites.create(img`
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            f f f f f f f f f f f f f f . . 
            7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
            7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
            7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
            7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
            7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
            7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
            7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
            7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
            7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
            f f f f f f f f f f f f f f . . 
            7 7 7 7 7 7 7 7 7 7 f . . . . . 
            7 7 7 7 7 7 7 7 7 7 f . . . . . 
            7 7 7 7 7 7 7 7 7 7 f . . . . . 
            7 7 7 7 7 7 7 7 7 7 f . . . . . 
            7 7 7 7 7 7 7 7 7 7 f . . . . . 
            `, SpriteKind.pipe_top)
        tiles.placeOnTile(top_right_pipe, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile23`)) {
        botom_left_pipe = sprites.create(img`
            7 7 7 7 7 7 7 7 7 7 f . . . . . 
            7 7 7 7 7 7 7 7 7 7 f . . . . . 
            7 7 7 7 7 7 7 7 7 7 f . . . . . 
            7 7 7 7 7 7 7 7 7 7 f . . . . . 
            7 7 7 7 7 7 7 7 7 7 f . . . . . 
            7 7 7 7 7 7 7 7 7 7 f . . . . . 
            7 7 7 7 7 7 7 7 7 7 f . . . . . 
            7 7 7 7 7 7 7 7 7 7 f . . . . . 
            7 7 7 7 7 7 7 7 7 7 f . . . . . 
            7 7 7 7 7 7 7 7 7 7 f . . . . . 
            7 7 7 7 7 7 7 7 7 7 f . . . . . 
            7 7 7 7 7 7 7 7 7 7 f . . . . . 
            7 7 7 7 7 7 7 7 7 7 f . . . . . 
            7 7 7 7 7 7 7 7 7 7 f . . . . . 
            7 7 7 7 7 7 7 7 7 7 f . . . . . 
            7 7 7 7 7 7 7 7 7 7 f . . . . . 
            `, SpriteKind.pipe_botom)
        tiles.placeOnTile(botom_left_pipe, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile20`)) {
        star_blockkkk = sprites.create(img`
            . . . . . f 7 7 7 7 7 7 7 7 7 7 
            . . . . . f 7 7 7 7 7 7 7 7 7 7 
            . . . . . f 7 7 7 7 7 7 7 7 7 7 
            . . . . . f 7 7 7 7 7 7 7 7 7 7 
            . . . . . f 7 7 7 7 7 7 7 7 7 7 
            . . . . . f 7 7 7 7 7 7 7 7 7 7 
            . . . . . f 7 7 7 7 7 7 7 7 7 7 
            . . . . . f 7 7 7 7 7 7 7 7 7 7 
            . . . . . f 7 7 7 7 7 7 7 7 7 7 
            . . . . . f 7 7 7 7 7 7 7 7 7 7 
            . . . . . f 7 7 7 7 7 7 7 7 7 7 
            . . . . . f 7 7 7 7 7 7 7 7 7 7 
            . . . . . f 7 7 7 7 7 7 7 7 7 7 
            . . . . . f 7 7 7 7 7 7 7 7 7 7 
            . . . . . f 7 7 7 7 7 7 7 7 7 7 
            . . . . . f 7 7 7 7 7 7 7 7 7 7 
            `, SpriteKind.pipe_botom)
        tiles.placeOnTile(star_blockkkk, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile19`)) {
        MONKEYYY = sprites.create(img`
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
            `, SpriteKind.pipe_botom)
        tiles.placeOnTile(MONKEYYY, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        animation.runImageAnimation(
        power_block,
        [img`
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f f . 
            f f e e e e e e e e e e e e f f 
            f e f e e e e e e e e e e f e f 
            f e e e e 4 4 4 4 4 e e e e e f 
            f e e e 4 4 f f f 4 4 e e e e f 
            f e e e 4 4 f e e 4 4 f e e e f 
            f e e e 4 4 f e e 4 4 f e e e f 
            f e e e e f f e 4 4 4 f e e e f 
            f e e e e e e 4 4 f f f e e e f 
            f e e e e e e 4 4 f e e e e e f 
            f e e e e e e e f f e e e e e f 
            f e e e e e e 4 4 e e e e e e f 
            f e e e e e e 4 4 f e e e e e f 
            f e f e e e e e f f e e e f e f 
            f f e e e e e e e e e e e e f f 
            8 f f f f f f f f f f f f f f 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            `,img`
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f f . 
            f f 4 4 4 4 4 4 4 4 4 4 4 4 f f 
            f 4 f 4 4 4 4 4 4 4 4 4 4 f 4 f 
            f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
            f 4 4 4 4 4 f f f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 f e e 4 4 f 4 4 4 f 
            f 4 4 4 4 4 f e e 4 4 f 4 4 4 f 
            f 4 4 4 4 f f e 4 4 4 f 4 4 4 f 
            f 4 4 4 4 4 4 4 4 f f f 4 4 4 f 
            f 4 4 4 4 4 4 4 4 f 4 4 4 4 4 f 
            f 4 4 4 4 4 4 4 f f 4 4 4 4 4 f 
            f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 4 4 f 4 4 4 4 4 f 
            f 4 f 4 4 4 4 4 f f 4 4 4 f 4 f 
            f f 4 4 4 4 4 4 4 4 4 4 4 4 f f 
            8 f f f f f f f f f f f f f f 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            `,img`
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f f . 
            f f 5 5 5 5 5 5 5 5 5 5 5 5 f f 
            f 5 f 5 5 5 5 5 5 5 5 5 5 f 5 f 
            f 5 5 5 5 4 4 4 4 4 5 5 5 5 5 f 
            f 5 5 5 4 4 f f f 4 4 5 5 5 5 f 
            f 5 5 5 4 4 f e e 4 4 f 5 5 5 f 
            f 5 5 5 4 4 f e e 4 4 f 5 5 5 f 
            f 5 5 5 5 f f e 4 4 4 f 5 5 5 f 
            f 5 5 5 5 5 5 4 4 f f f 5 5 5 f 
            f 5 5 5 5 5 5 4 4 f 5 5 5 5 5 f 
            f 5 5 5 5 5 5 5 f f 5 5 5 5 5 f 
            f 5 5 5 5 5 5 4 4 5 5 5 5 5 5 f 
            f 5 5 5 5 5 5 4 4 f 5 5 5 5 5 f 
            f 5 f 5 5 5 5 5 f f 5 5 5 f 5 f 
            f f 5 5 5 5 5 5 5 5 5 5 5 5 f f 
            8 f f f f f f f f f f f f f f 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            `],
        200,
        true
        )
    }
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
	
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
	
})
scene.onOverlapTile(SpriteKind.p2, assets.tile`myTile3`, function (sprite, location) {
    p2_death()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.pipe_top, function (sprite, otherSprite) {
    if (p1_crouch == 1) {
        tiles.placeOnTile(mario, tiles.getTileLocation(8, 19))
        p1_crouch = 0
    }
})
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
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
sprites.onOverlap(SpriteKind.p2, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    if (sprite.y < otherSprite.y) {
        info.player2.changeScoreBy(3)
    } else {
        info.player2.changeLifeBy(-1)
        game.splash("lost one life")
        if (info.life() == 1) {
            game.splash("1 life left ")
            already_running = 0
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.blok, function (sprite, otherSprite) {
    info.player1.changeScoreBy(2)
    sprites.destroy(otherSprite)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
})
function p1_death () {
    if (p1_lifereducedatplussonesecond < game.runtime()) {
        p1_lifereducedatplussonesecond = game.runtime()
        p1_lifereducedatplussonesecond += 1000
        tiles.placeOnTile(mario, tiles.getTileLocation(3, 10))
        info.player1.changeLifeBy(-1)
        if (info.player1.life() == 1) {
            already_running = 0
        }
    }
}
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (p2_fire_power == 1) {
        if (p2_facing_right == 1) {
            music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
            projectile = sprites.createProjectileFromSprite(img`
                . . 2 2 2 2 . . 
                . 2 2 4 4 2 2 . 
                . 2 4 4 1 4 2 2 
                2 2 2 2 4 1 4 2 
                2 . . 2 4 4 4 2 
                . 2 . 2 2 4 2 2 
                2 . . . 2 2 2 . 
                . . 2 . . . . . 
                `, mario_2, 200, 0)
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
            music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
            projectile = sprites.createProjectileFromSprite(img`
                . . 2 2 2 2 . . 
                . 2 2 4 4 2 2 . 
                . 2 4 4 1 4 2 2 
                2 2 2 2 4 1 4 2 
                2 . . 2 4 4 4 2 
                . 2 . 2 2 4 2 2 
                2 . . . 2 2 2 . 
                . . 2 . . . . . 
                `, mario_2, -200, 0)
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
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    p2crouch = 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    p1_death()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    p1_death()
})
sprites.onOverlap(SpriteKind.p2, SpriteKind.blok, function (sprite, otherSprite) {
    info.player2.changeScoreBy(2)
    sprites.destroy(otherSprite)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
})
info.onCountdownEnd(function () {
    info.stopCountdown()
})
scene.onOverlapTile(SpriteKind.p2, assets.tile`myTile10`, function (sprite, location) {
    if (sprite.vy == 0) {
        sprite.vy = -200
    }
})
sprites.onOverlap(SpriteKind.p2, SpriteKind.mushroom, function (sprite, otherSprite) {
    if (sprite.y < otherSprite.y) {
        sprites.destroy(mushroom)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coim, function (sprite, otherSprite) {
    info.player1.changeScoreBy(1)
    sprites.destroy(otherSprite)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.block_botto, function (sprite, otherSprite) {
	
})
scene.onOverlapTile(SpriteKind.p2, assets.tile`myTile4`, function (sprite, location) {
    p2_death()
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (mario_2.vy == 0) {
        mario_2.vy = -150
        mario_2.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 3 3 3 3 . . d d d . 
            . . . . . 3 3 3 3 3 3 3 3 d d . 
            . . . . e e e d d f d . 4 4 4 . 
            . . . e d e d d d f d d d 4 4 . 
            . . . e d e e d d d f d d d 4 . 
            . . . e e d d d d f f f f 4 . . 
            . . . . . d d d d d d d 4 4 . . 
            . . 4 4 4 4 3 4 4 4 3 4 4 . . e 
            d d 4 4 4 4 4 3 4 4 4 3 . . e e 
            d d d 4 4 4 4 3 3 3 3 5 3 3 e e 
            . d . . 3 4 3 3 5 3 3 3 3 3 e e 
            . . e e e 3 3 3 3 3 3 3 3 3 e e 
            . e e e 3 3 3 3 3 3 . . . . . . 
            . e e . . . . . . . . . . . . . 
            `)
    }
})
scene.onOverlapTile(SpriteKind.p2, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    tiles.placeOnTile(sprite, tiles.getTileLocation(6, 1))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.mushroom, function (sprite, otherSprite) {
    if (sprite.y < otherSprite.y) {
        sprites.destroy(mushroom)
    }
})
function p2_death () {
    control.enablePerfCounter()
if (p2_LifeReducedAtPlusOneSecond < game.runtime()) {
        p2_LifeReducedAtPlusOneSecond = game.runtime()
        p2_LifeReducedAtPlusOneSecond += 1000
        tiles.placeOnTile(mario_2, tiles.getTileLocation(3, 10))
        info.player2.changeLifeBy(-1)
        if (info.player2.life() == 1) {
            already_running = 0
        }
    }
}
scene.onOverlapTile(SpriteKind.p2, assets.tile`myTile11`, function (sprite, location) {
    if (p2_fire_power == 0) {
        tiles.setTileAt(location, assets.tile`myTile6`)
        p2_fire_power = 1
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    controller.moveSprite(sprite, 150, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    p1_death()
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (fire_power == 1) {
        if (facing_right == 1) {
            music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
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
            music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.big_block, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
    tiles.placeOnTile(mushroom, tiles.getTileLocation(22, 8))
    mushroom.setVelocity(50, 0)
    mushroom.ay = 500
    mushroom.setBounceOnWall(false)
    mushroom.setStayInScreen(false)
})
sprites.onOverlap(SpriteKind.p2, SpriteKind.coim, function (sprite, otherSprite) {
    info.player2.changeScoreBy(1)
    sprites.destroy(otherSprite)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
scene.onOverlapTile(SpriteKind.p2, assets.tile`myTile5`, function (sprite, location) {
    p2_death()
})
info.player1.onLifeZero(function () {
    mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.Two))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    if (sprite.vy == 0) {
        sprite.vy = -200
    }
})
info.player2.onLifeZero(function () {
    mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.One))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.stAR, function (sprite, otherSprite) {
    if (level2 == 1) {
        sprites.destroy(otherSprite)
        info.player1.setLife(1e+131)
        pause(5000)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.STAR_BLOCK, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
    tiles.placeOnTile(STARRR, tiles.getTileLocation(20, 11))
    STARRR.setVelocity(50, 0)
    STARRR.ay = 500
    STARRR.setBounceOnWall(false)
    STARRR.setStayInScreen(false)
    animation.runImageAnimation(
    STARRR,
    [img`
        . . . . . . . 4 . . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
        4 4 4 4 4 2 4 4 4 2 4 4 4 4 4 . 
        . 4 4 4 4 2 4 4 4 2 4 4 4 4 . . 
        . . 4 4 4 2 4 4 4 2 4 4 4 . . . 
        . . . 4 4 4 4 4 4 4 4 4 . . . . 
        . . . 4 4 4 4 4 4 4 4 4 . . . . 
        . . . 4 4 4 4 4 4 4 4 4 . . . . 
        . . 4 4 4 4 4 4 4 4 4 4 4 . . . 
        . . 4 4 4 4 . . . 4 4 4 4 . . . 
        . 4 4 4 . . . . . . . 4 4 4 . . 
        . 4 4 . . . . . . . . . 4 4 . . 
        `,img`
        . . . . . . . 4 . . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
        4 4 4 4 4 2 4 4 4 2 4 4 4 4 4 . 
        . 4 4 4 4 2 4 4 4 2 4 4 4 4 . . 
        . . 4 4 4 2 4 4 4 2 4 4 4 . . . 
        . . . 4 4 4 4 4 4 4 4 4 . . . . 
        . . . 4 4 4 4 4 4 4 4 4 . . . . 
        . . . 4 4 4 4 4 4 4 4 4 . . . . 
        . . 4 4 4 4 4 4 4 4 4 4 4 . . . 
        . . 4 4 4 4 . . . 4 4 4 4 . . . 
        . 4 4 4 . . . . . . . 4 4 4 . . 
        . 4 4 . . . . . . . . . 4 4 . . 
        `,img`
        . . . . . . . 5 . . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 2 5 5 5 2 5 5 5 5 5 . 
        . 5 5 5 5 2 5 5 5 2 5 5 5 5 . . 
        . . 5 5 5 2 5 5 5 2 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 . . . 5 5 5 5 . . . 
        . 5 5 5 . . . . . . . 5 5 5 . . 
        . 5 5 . . . . . . . . . 5 5 . . 
        `],
    100,
    true
    )
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
	
})
function start () {
    for (let value of tiles.getTilesByType(assets.tile`myTile14`)) {
        coin = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . 
            . . . f f f 5 5 5 5 5 f f f . . 
            . . f f 5 5 f f f f 5 5 5 f f . 
            . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
            . f f 5 5 5 5 5 5 5 5 5 5 5 f f 
            . f 5 5 f 5 5 5 5 5 5 5 5 5 5 f 
            . f 5 5 f 5 5 5 5 5 5 5 5 5 5 f 
            . f 5 5 f 5 5 5 5 5 5 5 5 5 5 f 
            . f 5 5 f 5 5 5 5 5 5 5 5 5 5 f 
            . f 5 5 f 5 5 5 5 5 5 5 5 5 5 f 
            . f f 5 f 5 5 5 5 5 5 5 5 5 f f 
            . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
            . . f f 5 5 5 5 5 5 5 5 5 f f . 
            . . . f f f 5 5 5 5 5 f f f . . 
            . . . . . f f f f f f f . . . . 
            `, SpriteKind.coim)
        tiles.placeOnTile(coin, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile18`)) {
        big_block = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f f . 
            f e e e e e e e e e e e e e e f 
            f e f e e e e e e e e e e f e f 
            f e e e e 4 4 4 4 4 e e e e e f 
            f e e e 4 4 f f f 4 4 e e e e f 
            f e e e 4 4 f e e 4 4 f e e e f 
            f e e e 4 4 f e e 4 4 f e e e f 
            f e e e e f f e 4 4 4 f e e e f 
            f e e e e e e 4 4 f f f e e e f 
            f e e e e e e 4 4 f e e e e e f 
            f e e e e e e e f f e e e e e f 
            f e e e e e e 4 4 e e e e e e f 
            f e e e e e e 4 4 f e e e e e f 
            f e f e e e e e f f e e e f e f 
            f e e e e e e e e e e e e e e f 
            . f f f f f f f f f f f f f f . 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            `, SpriteKind.blok)
        tiles.placeOnTile(big_block, value)
        animation.runImageAnimation(
        big_block,
        [img`
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f f . 
            f e e e e e e e e e e e e e e f 
            f e f e e e e e e e e e e f e f 
            f e e e e 4 4 4 4 4 e e e e e f 
            f e e e 4 4 f f f 4 4 e e e e f 
            f e e e 4 4 f e e 4 4 f e e e f 
            f e e e 4 4 f e e 4 4 f e e e f 
            f e e e e f f e 4 4 4 f e e e f 
            f e e e e e e 4 4 f f f e e e f 
            f e e e e e e 4 4 f e e e e e f 
            f e e e e e e e f f e e e e e f 
            f e e e e e e 4 4 e e e e e e f 
            f e e e e e e 4 4 f e e e e e f 
            f e f e e e e e f f e e e f e f 
            f e e e e e e e e e e e e e e f 
            . f f f f f f f f f f f f f f . 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            `,img`
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f f . 
            f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
            f 4 f 4 4 4 4 4 4 4 4 4 4 f 4 f 
            f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
            f 4 4 4 4 4 f f f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 f e e 4 4 f 4 4 4 f 
            f 4 4 4 4 4 f e e 4 4 f 4 4 4 f 
            f 4 4 4 4 f f e 4 4 4 f 4 4 4 f 
            f 4 4 4 4 4 4 4 4 f f f 4 4 4 f 
            f 4 4 4 4 4 4 4 4 f 4 4 4 4 4 f 
            f 4 4 4 4 4 4 4 f f 4 4 4 4 4 f 
            f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 4 4 f 4 4 4 4 4 f 
            f 4 f 4 4 4 4 4 f f 4 4 4 f 4 f 
            f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
            . f f f f f f f f f f f f f f . 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            `,img`
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f f . 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 f 5 5 5 5 5 5 5 5 5 5 f 5 f 
            f 5 5 5 5 4 4 4 4 4 5 5 5 5 5 f 
            f 5 5 5 4 4 f f f 4 4 5 5 5 5 f 
            f 5 5 5 4 4 f e e 4 4 f 5 5 5 f 
            f 5 5 5 4 4 f e e 4 4 f 5 5 5 f 
            f 5 5 5 5 f f e 4 4 4 f 5 5 5 f 
            f 5 5 5 5 5 5 4 4 f f f 5 5 5 f 
            f 5 5 5 5 5 5 4 4 f 5 5 5 5 5 f 
            f 5 5 5 5 5 5 5 f f 5 5 5 5 5 f 
            f 5 5 5 5 5 5 4 4 5 5 5 5 5 5 f 
            f 5 5 5 5 5 5 4 4 f 5 5 5 5 5 f 
            f 5 f 5 5 5 5 5 f f 5 5 5 f 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            . f f f f f f f f f f f f f f . 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            `],
        200,
        true
        )
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile26`)) {
        power_block = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f f . 
            f e e e e e e e e e e e e e e f 
            f e f e e e e e e e e e e f e f 
            f e e e e 4 4 4 4 4 e e e e e f 
            f e e e 4 4 f f f 4 4 e e e e f 
            f e e e 4 4 f e e 4 4 f e e e f 
            f e e e 4 4 f e e 4 4 f e e e f 
            f e e e e f f e 4 4 4 f e e e f 
            f e e e e e e 4 4 f f f e e e f 
            f e e e e e e 4 4 f e e e e e f 
            f e e e e e e e f f e e e e e f 
            f e e e e e e 4 4 e e e e e e f 
            f e e e e e e 4 4 f e e e e e f 
            f e f e e e e e f f e e e f e f 
            f e e e e e e e e e e e e e e f 
            . f f f f f f f f f f f f f f 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            `, SpriteKind.big_block)
        tiles.placeOnTile(power_block, value)
        animation.runImageAnimation(
        power_block,
        [img`
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f f . 
            f f e e e e e e e e e e e e f f 
            f e f e e e e e e e e e e f e f 
            f e e e e 4 4 4 4 4 e e e e e f 
            f e e e 4 4 f f f 4 4 e e e e f 
            f e e e 4 4 f e e 4 4 f e e e f 
            f e e e 4 4 f e e 4 4 f e e e f 
            f e e e e f f e 4 4 4 f e e e f 
            f e e e e e e 4 4 f f f e e e f 
            f e e e e e e 4 4 f e e e e e f 
            f e e e e e e e f f e e e e e f 
            f e e e e e e 4 4 e e e e e e f 
            f e e e e e e 4 4 f e e e e e f 
            f e f e e e e e f f e e e f e f 
            f f e e e e e e e e e e e e f f 
            8 f f f f f f f f f f f f f f 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            `,img`
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f f . 
            f f 4 4 4 4 4 4 4 4 4 4 4 4 f f 
            f 4 f 4 4 4 4 4 4 4 4 4 4 f 4 f 
            f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
            f 4 4 4 4 4 f f f 4 4 4 4 4 4 f 
            f 4 4 4 4 4 f e e 4 4 f 4 4 4 f 
            f 4 4 4 4 4 f e e 4 4 f 4 4 4 f 
            f 4 4 4 4 f f e 4 4 4 f 4 4 4 f 
            f 4 4 4 4 4 4 4 4 f f f 4 4 4 f 
            f 4 4 4 4 4 4 4 4 f 4 4 4 4 4 f 
            f 4 4 4 4 4 4 4 f f 4 4 4 4 4 f 
            f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
            f 4 4 4 4 4 4 4 4 f 4 4 4 4 4 f 
            f 4 f 4 4 4 4 4 f f 4 4 4 f 4 f 
            f f 4 4 4 4 4 4 4 4 4 4 4 4 f f 
            8 f f f f f f f f f f f f f f 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            `,img`
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f f . 
            f f 5 5 5 5 5 5 5 5 5 5 5 5 f f 
            f 5 f 5 5 5 5 5 5 5 5 5 5 f 5 f 
            f 5 5 5 5 4 4 4 4 4 5 5 5 5 5 f 
            f 5 5 5 4 4 f f f 4 4 5 5 5 5 f 
            f 5 5 5 4 4 f e e 4 4 f 5 5 5 f 
            f 5 5 5 4 4 f e e 4 4 f 5 5 5 f 
            f 5 5 5 5 f f e 4 4 4 f 5 5 5 f 
            f 5 5 5 5 5 5 4 4 f f f 5 5 5 f 
            f 5 5 5 5 5 5 4 4 f 5 5 5 5 5 f 
            f 5 5 5 5 5 5 5 f f 5 5 5 5 5 f 
            f 5 5 5 5 5 5 4 4 5 5 5 5 5 5 f 
            f 5 5 5 5 5 5 4 4 f 5 5 5 5 5 f 
            f 5 f 5 5 5 5 5 f f 5 5 5 f 5 f 
            f f 5 5 5 5 5 5 5 5 5 5 5 5 f f 
            8 f f f f f f f f f f f f f f 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            `],
        200,
        true
        )
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile21`)) {
        top_left_pipe = sprites.create(img`
            . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            . . f f f f f f f f f f f f f f 
            . . f 7 7 7 7 7 7 7 7 7 7 7 7 7 
            . . f 7 7 7 7 7 7 7 7 7 7 7 7 7 
            . . f 7 7 7 7 7 7 7 7 7 7 7 7 7 
            . . f 7 7 7 7 7 7 7 7 7 7 7 7 7 
            . . f 7 7 7 7 7 7 7 7 7 7 7 7 7 
            . . f 7 7 7 7 7 7 7 7 7 7 7 7 7 
            . . f 7 7 7 7 7 7 7 7 7 7 7 7 7 
            . . f 7 7 7 7 7 7 7 7 7 7 7 7 7 
            . . f 7 7 7 7 7 7 7 7 7 7 7 7 7 
            . . f f f f f f f f f f f f f f 
            . . . . . f 7 7 7 7 7 7 7 7 7 7 
            . . . . . f 7 7 7 7 7 7 7 7 7 7 
            . . . . . f 7 7 7 7 7 7 7 7 7 7 
            . . . . . f 7 7 7 7 7 7 7 7 7 7 
            . . . . . f 7 7 7 7 7 7 7 7 7 7 
            `, SpriteKind.pipe_top)
        tiles.placeOnTile(top_left_pipe, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile22`)) {
        top_right_pipe = sprites.create(img`
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            f f f f f f f f f f f f f f . . 
            7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
            7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
            7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
            7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
            7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
            7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
            7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
            7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
            7 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
            f f f f f f f f f f f f f f . . 
            7 7 7 7 7 7 7 7 7 7 f . . . . . 
            7 7 7 7 7 7 7 7 7 7 f . . . . . 
            7 7 7 7 7 7 7 7 7 7 f . . . . . 
            7 7 7 7 7 7 7 7 7 7 f . . . . . 
            7 7 7 7 7 7 7 7 7 7 f . . . . . 
            `, SpriteKind.pipe_top)
        tiles.placeOnTile(top_right_pipe, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile23`)) {
        botom_left_pipe = sprites.create(img`
            7 7 7 7 7 7 7 7 7 7 f . . . . . 
            7 7 7 7 7 7 7 7 7 7 f . . . . . 
            7 7 7 7 7 7 7 7 7 7 f . . . . . 
            7 7 7 7 7 7 7 7 7 7 f . . . . . 
            7 7 7 7 7 7 7 7 7 7 f . . . . . 
            7 7 7 7 7 7 7 7 7 7 f . . . . . 
            7 7 7 7 7 7 7 7 7 7 f . . . . . 
            7 7 7 7 7 7 7 7 7 7 f . . . . . 
            7 7 7 7 7 7 7 7 7 7 f . . . . . 
            7 7 7 7 7 7 7 7 7 7 f . . . . . 
            7 7 7 7 7 7 7 7 7 7 f . . . . . 
            7 7 7 7 7 7 7 7 7 7 f . . . . . 
            7 7 7 7 7 7 7 7 7 7 f . . . . . 
            7 7 7 7 7 7 7 7 7 7 f . . . . . 
            7 7 7 7 7 7 7 7 7 7 f . . . . . 
            7 7 7 7 7 7 7 7 7 7 f . . . . . 
            `, SpriteKind.pipe_botom)
        tiles.placeOnTile(botom_left_pipe, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile20`)) {
        star_blockkkk = sprites.create(img`
            . . . . . f 7 7 7 7 7 7 7 7 7 7 
            . . . . . f 7 7 7 7 7 7 7 7 7 7 
            . . . . . f 7 7 7 7 7 7 7 7 7 7 
            . . . . . f 7 7 7 7 7 7 7 7 7 7 
            . . . . . f 7 7 7 7 7 7 7 7 7 7 
            . . . . . f 7 7 7 7 7 7 7 7 7 7 
            . . . . . f 7 7 7 7 7 7 7 7 7 7 
            . . . . . f 7 7 7 7 7 7 7 7 7 7 
            . . . . . f 7 7 7 7 7 7 7 7 7 7 
            . . . . . f 7 7 7 7 7 7 7 7 7 7 
            . . . . . f 7 7 7 7 7 7 7 7 7 7 
            . . . . . f 7 7 7 7 7 7 7 7 7 7 
            . . . . . f 7 7 7 7 7 7 7 7 7 7 
            . . . . . f 7 7 7 7 7 7 7 7 7 7 
            . . . . . f 7 7 7 7 7 7 7 7 7 7 
            . . . . . f 7 7 7 7 7 7 7 7 7 7 
            `, SpriteKind.pipe_botom)
        tiles.placeOnTile(star_blockkkk, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    info.changeScoreBy(1)
    pause(2000)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    if (fire_power == 0) {
        tiles.setTileAt(location, assets.tile`myTile6`)
        fire_power = 1
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    tiles.placeOnTile(sprite, tiles.getTileLocation(6, 1))
})
sprites.onOverlap(SpriteKind.p2, SpriteKind.pipe_top, function (sprite, otherSprite) {
    if (p2crouch == 1) {
        tiles.placeOnTile(mario_2, tiles.getTileLocation(8, 19))
        p2crouch = 0
    }
})
controller.player1.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    p1_crouch = 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile28`, function (sprite, location) {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    if (sprite.y < otherSprite.y) {
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
let MONKEYYYY_RIGHT = 0
let facing_right = 0
let fire_power = 0
let p2crouch = 0
let projectile: Sprite = null
let p2_facing_right = 0
let p2_fire_power = 0
let already_running = 0
let p1_crouch = 0
let MONKEYYY: Sprite = null
let botom_left_pipe: Sprite = null
let top_right_pipe: Sprite = null
let top_left_pipe: Sprite = null
let power_block: Sprite = null
let big_block: Sprite = null
let coin: Sprite = null
let star_blockkkk: Sprite = null
let level2 = 0
let time_to_beat_level_1 = 0
let STARRR: Sprite = null
let mushroom: Sprite = null
let mario_2: Sprite = null
let mario: Sprite = null
let p2_LifeReducedAtPlusOneSecond = 0
let p1_lifereducedatplussonesecond = 0
game.splash("welcome to my game")
p1_lifereducedatplussonesecond = game.runtime()
p2_LifeReducedAtPlusOneSecond = game.runtime()
tiles.setCurrentTilemap(tilemap`level1`)
start()
mario = sprites.create(img`
    . . . . 2 2 2 2 2 . . . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . f f f d d f d . . . . . . 
    . . f d f d d d f d d d . . . . 
    . . f d f f d d d f d d d . . . 
    . . f f d d d d f f f f . . . . 
    . . . . d d d d d d d . . . . . 
    . . . 6 6 2 6 6 6 . . . . . . . 
    . . 6 6 6 2 6 6 2 6 6 6 . . . . 
    . 6 6 6 6 2 6 6 2 6 6 6 6 . . . 
    . d d 6 6 2 2 2 2 6 6 d d . . . 
    . d d d 2 5 2 2 5 2 d d d . . . 
    . d d 2 2 2 2 2 2 2 2 d d . . . 
    . . . 2 2 2 . . 2 2 2 . . . . . 
    . . e e e . . . . e e e . . . . 
    . e e e e . . . . e e e e . . . 
    `, SpriteKind.Player)
let monke = sprites.create(img`
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
mario_2 = sprites.create(img`
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
    `, SpriteKind.p2)
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
    `, SpriteKind.p2))
controller.player2.moveSprite(mario_2, 100, 0)
scene.cameraFollowSprite(mario)
tiles.placeOnTile(monke, tiles.getTileLocation(57, 11))
tiles.placeOnTile(mario, tiles.getTileLocation(3, 10))
tiles.placeOnTile(mario_2, tiles.getTileLocation(4, 11))
mario.ay = 300
mario_2.ay = 300
controller.moveSprite(mario, 100, 0)
monke.setBounceOnWall(true)
monke.setVelocity(70, 0)
info.player1.setLife(3)
info.player2.setLife(3)
splitScreen.splitScreenCameraFollow(mario)
splitScreen.splitScreenCameraFollow(mario_2)
mushroom = sprites.create(img`
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . . 4 4 4 4 2 2 . . . . . 
    . . . . 4 4 4 4 2 2 2 2 . . . . 
    . . . 4 4 4 4 4 2 2 2 2 2 . . . 
    . . 4 4 4 4 4 4 4 2 2 2 4 4 . . 
    . 4 4 2 2 2 4 4 4 4 4 4 4 4 4 . 
    . 4 2 2 2 2 2 4 4 4 4 4 4 4 4 . 
    4 4 2 2 2 2 2 4 4 4 4 4 2 2 4 4 
    4 4 2 2 2 2 2 4 4 4 4 4 2 2 2 4 
    4 4 4 2 2 2 4 4 4 4 4 4 4 2 2 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    . 4 2 2 2 1 1 1 1 1 1 2 2 2 4 . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . . . 1 1 1 1 1 1 . . . . . 
    `, SpriteKind.mushroom)
STARRR = sprites.create(img`
    . . . . . . . 4 . . . . . . . . 
    . . . . . . 4 4 4 . . . . . . . 
    . . . . . 4 4 4 4 4 . . . . . . 
    . . . . . 4 4 4 4 4 . . . . . . 
    . . . . 4 4 4 4 4 4 4 . . . . . 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
    4 4 4 4 4 2 4 4 4 2 4 4 4 4 4 . 
    . 4 4 4 4 2 4 4 4 2 4 4 4 4 . . 
    . . 4 4 4 2 4 4 4 2 4 4 4 . . . 
    . . . 4 4 4 4 4 4 4 4 4 . . . . 
    . . . 4 4 4 4 4 4 4 4 4 . . . . 
    . . . 4 4 4 4 4 4 4 4 4 . . . . 
    . . 4 4 4 4 4 4 4 4 4 4 4 . . . 
    . . 4 4 4 4 . . . 4 4 4 4 . . . 
    . 4 4 4 . . . . . . . 4 4 4 . . 
    . 4 4 . . . . . . . . . 4 4 . . 
    `, SpriteKind.stAR)
scene.setBackgroundColor(8)
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
        . . . 6 6 2 6 6 6 . . . . . . . 
        . . 6 6 6 2 6 6 2 6 6 6 . . . . 
        . 6 6 6 6 2 6 6 2 6 6 6 6 . . . 
        . d d 6 6 2 2 2 2 6 6 d d . . . 
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
            . . . . f f f d d f d . 6 6 6 . 
            . . . f d f d d d f d d d 6 6 . 
            . . . f d f f d d d f d d d 6 . 
            . . . f f d d d d f f f f 6 . . 
            . . . . . d d d d d d d 6 6 . . 
            . . 6 6 6 6 2 6 6 6 2 6 6 . . e 
            d d 6 6 6 6 6 2 6 6 6 2 . . e e 
            d d d 6 6 6 6 2 2 2 2 5 2 2 e e 
            . d . . 2 6 2 2 5 2 2 2 2 2 e e 
            . . e e e 2 2 2 2 2 2 2 2 2 e e 
            . e e e 2 2 2 2 2 2 . . . . . . 
            . e e . . . . . . . . . . . . . 
            `)
    } else if (mario.vy > 0) {
        mario.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 2 . . d d d . 
            . . . . . 2 2 2 2 2 2 2 2 d d . 
            . . . . f f f d d f d . 6 6 6 . 
            . . . f d f d d d f d d d 6 6 . 
            . . . f d f f d d d f d d d 6 . 
            . . . f f d d d d f f f f 6 . . 
            . . . . . d d d d d d d 6 6 . . 
            . . 6 6 6 6 2 6 6 6 2 6 6 . . e 
            d d 6 6 6 6 6 2 6 6 6 2 . . e e 
            d d d 6 6 6 6 2 2 2 2 5 2 2 e e 
            . d . . 2 6 2 2 5 2 2 2 2 2 e e 
            . . e e e 2 2 2 2 2 2 2 2 2 e e 
            . e e e 2 2 2 2 2 2 . . . . . . 
            . e e . . . . . . . . . . . . . 
            `)
    } else {
    	
    }
    if (mario.vx < 0) {
        facing_right = 0
        mario.image.flipX()
    }
})
game.onUpdate(function () {
    p2_facing_right = 1
    mario_2.setImage(img`
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
        `)
    if (mario_2.vy < 0) {
        mario_2.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 3 3 3 3 . . d d d . 
            . . . . . 3 3 3 3 3 3 3 3 d d . 
            . . . . e e e d d f d . 4 4 4 . 
            . . . e d e d d d f d d d 4 4 . 
            . . . e d e e d d d f d d d 4 . 
            . . . e e d d d d f f f f 4 . . 
            . . . . . d d d d d d d 4 4 . . 
            . . 4 4 4 4 3 4 4 4 3 4 4 . . e 
            d d 4 4 4 4 4 3 4 4 4 3 . . e e 
            d d d 4 4 4 4 3 3 3 3 5 3 3 e e 
            . d . . 3 4 3 3 5 3 3 3 3 3 e e 
            . . e e e 3 3 3 3 3 3 3 3 3 e e 
            . e e e 3 3 3 3 3 3 . . . . . . 
            . e e . . . . . . . . . . . . . 
            `)
    } else if (mario_2.vy > 0) {
        mario_2.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 3 3 3 3 . . d d d . 
            . . . . . 3 3 3 3 3 3 3 3 d d . 
            . . . . e e e d d f d . 4 4 4 . 
            . . . e d e d d d f d d d 4 4 . 
            . . . e d e e d d d f d d d 4 . 
            . . . e e d d d d f f f f 4 . . 
            . . . . . d d d d d d d 4 4 . . 
            . . 4 4 4 4 3 4 4 4 3 4 4 . . e 
            d d 4 4 4 4 4 3 4 4 4 3 . . e e 
            d d d 4 4 4 4 3 3 3 3 5 3 3 e e 
            . d . . 3 4 3 3 5 3 3 3 3 3 e e 
            . . e e e 3 3 3 3 3 3 3 3 3 e e 
            . e e e 3 3 3 3 3 3 . . . . . . 
            . e e . . . . . . . . . . . . . 
            `)
    } else {
    	
    }
    if (mario_2.vx < 0) {
        p2_facing_right = 0
        mario_2.image.flipX()
    }
})
game.onUpdate(function () {
    if (mushroom.vx == 0) {
        mushroom.vx = -50
    }
})
game.onUpdate(function () {
    if (STARRR.vx == 0) {
        STARRR.vx = -50
    }
})
game.onUpdate(function () {
    if (MONKEYYY.vx < 1) {
        MONKEYYYY_RIGHT = 1
    }
})
game.onUpdate(function () {
	
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
game.onUpdateInterval(200, function () {
    p1_crouch = 0
})
game.onUpdateInterval(200, function () {
    p2crouch = 0
})
