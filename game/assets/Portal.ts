
import Phaser from "phaser";


export type PortalConfig = {
  texture: string | Phaser.Textures.Texture
  width?: number,
  height?: number,
  fix?: number,
  pos: {
    x: number,
    y: number
  },
  scale? : {
    width: number,
    height: number,
  },
}
// Scene in class
class Portal extends Phaser.Physics.Arcade.Sprite {
  isJumping = false;
  scene: Phaser.Scene;
  group: Phaser.Physics.Arcade.Group;
  constructor(scene: Phaser.Scene, config: PortalConfig, group: Phaser.Physics.Arcade.Group,  frame?: string | number | undefined) {
    super(scene,config.pos.x,config.pos.y,config.texture)
    this.scene = scene;
    this.group = group;
    const width = config.width ?? 210
    const height = config.height ?? 40;
    const fix = config.fix ?? 20
    if(config.scale) {
      this.setScale(config.scale.width, config.scale.height)
    }
    /* Piso add to physic world */
    scene.physics.add.existing(this);
    
    /* Piso add to scene */
    scene.add.existing(this);
    
    
    this.setSize(width,height).setOffset(fix,0)
    
    this.group.add(this)

    this.setImmovable(true)

    
  }

}

export default Portal