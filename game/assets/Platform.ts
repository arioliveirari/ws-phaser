import Phaser from "phaser";


class Platform extends Phaser.Physics.Arcade.Sprite {
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame: number) {
        super(scene, x, y, texture, frame)
    
        
    
        this.setScale(0.5)
        // Agregar plataforma al mundo visual
        scene.add.existing(this)
        // Agregar plataforma al mundo fisico
        scene.physics.add.existing(this)
    
        this.setCollideWorldBounds(true)
        if(this.body) {
          const body = (this.body as Phaser.Physics.Arcade.Body)
          body.onWorldBounds = true
    
        this.body.setSize(60,150,true)
        }
        
      }
}