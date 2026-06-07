import Phaser from 'phaser'

export default class WinnerScene extends Phaser.Scene {
    constructor() {
        super('winner-scene')
    }
    init() {
        this.halfWidth = this.scale.width / 2
        this.halfHeight = this.scale.height / 2
    }
    preload() {
        this.load.image('bg2', 'images/bg3.jpg')
        this.load.image('yay', 'images/yay.png')
    }
    create() {
        this.add.image(this.halfWidth, this.halfHeight, 'bg2').setScale(4)
        this.add.image(this.halfWidth, this.halfHeight + 100, 'yay').setScale(1.5)

        this.add.text(this.halfWidth, 250, 'BIG BRAIN MOMENT!', { fontSize: 60, fontFamily: 'Jazz LET, fantasy', fill: '#372B44' })
            .setOrigin(0.5)
    }
}