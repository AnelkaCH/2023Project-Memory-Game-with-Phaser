import Phaser from 'phaser'
import GameOverScene from './scenes/GameOverScene'

import MemoryGameScene from './scenes/MemoryGameScene'
import WinnerScene from './scenes/WinnerScene'

const config = {
	type: Phaser.AUTO,
	width: 720,
	height: 680,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 }
		}
	},
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter:Phaser.Scale.CENTER_BOTH
	},
	scene: [MemoryGameScene, GameOverScene, WinnerScene]
}

export default new Phaser.Game(config)
