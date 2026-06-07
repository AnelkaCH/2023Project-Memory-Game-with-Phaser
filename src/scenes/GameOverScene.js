import Phaser from 'phaser'

export default class GameOverScene extends Phaser.Scene {
    constructor() {
        super('game-over-scene')
    }
    init() {
        this.halfWidth = this.scale.width / 2
        this.halfHeight = this.scale.height / 2
    }
    preload() {
        this.load.image('no', 'images/no.png')
        this.load.image('bg3', 'images/bg3.jpg')
        this.load.image('gm', 'images/gm.png')
    }
    create() {
        this.add.image(this.halfWidth, this.halfHeight, 'bg3').setScale(4)//.setRotation(-180)
        this.add.image(this.halfWidth, this.halfHeight + 100, 'no').setScale(1.5)

        //this.add.image(this.halfWidth, 250, 'gm').setScale(0.75)
        this.add.text(this.halfWidth, 200, 'Too Slow LOL!', { fontSize: 60, fontFamily: 'Jazz LET, fantasy', fill: '#372B44' })
            .setOrigin(0.5)
    }
}