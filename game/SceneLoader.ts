import Phaser from "phaser"

export type SceneKeys = "Menu" | "GameOver" | "Won" | "Scene1" | "Scene2" | "Tutorial"
export type LoadTypes = "image" | "spritesheet" | "audio"

const loadAssets = {
    "Menu": {
        assets: [
            ["image", "background", "game/background.png"],
            ["image", "glass", "game/glass.png"],
            ["image", "cursor", "game/cursor.png"],
            ["spritesheet", "monchi", "game/character.png", { frameWidth: 220, frameHeight: 162 }],
        ]
    },
    "GameOver": {
        assets: [
            ["image", "background", "game/background.png"],
        ]
    },
    "Won": {
        assets: [
            ["image", "background", "game/background.png"],
        ]
    },
    "Scene1": {
        assets: [
            ["audio", "song", 'sounds/monchiSpace.mp3'],
            ["image", "background", "/game/background.png"],
            ["image", "plataformaA", "/game/platform1.png"],
            ["image", "plataformaB", "/game/platform1B.png"],
            ["image", "plataforma2", "/game/platform2.png"],
            ["image", "asteroid", "/game/asteroid.png"],
            ["image", "asteroid2", "/game/asteroid2.png"],
            ["image", "coin", "/game/coin.png"],
            ["image", "portal", "/game/portal.png"],
            ["image", "heart", "/game/heart.png"],
            ["image", "arrow", "/game/arrow.png"],
            ["spritesheet", "character", "/game/character.png", { frameWidth: 220, frameHeight: 162 }],
        ]
    },
    "Scene2": {
        assets: [
            ["audio", "song", 'sounds/monchiSpace.mp3'],
            ["image", "background", "/game/background.png"],
            ["image", "plataformaA", "/game/platform1.png"],
            ["image", "plataformaB", "/game/platform1B.png"],
            ["image", "plataforma2", "/game/platform2.png"],
            ["image", "asteroid", "/game/asteroid.png"],
            ["image", "asteroid2", "/game/asteroid2.png"],
            ["image", "coin", "/game/coin.png"],
            ["image", "portal", "/game/portal.png"],
            ["image", "heart", "/game/heart.png"],
            ["image", "arrow", "/game/arrow.png"],
            ["image", "fireball", "/game/fireball.png"],
            ["spritesheet", "character", "/game/character.png", { frameWidth: 220, frameHeight: 162 }],
        ]
    },
    "Tutorial": {
        assets: [
            ["audio", "song", 'sounds/monchiSpace.mp3'],
            ["image", "background", "/game/background.png"],
            ["image", "plataformaA", "/game/platform1.png"],
            ["image", "plataformaB", "/game/platform1B.png"],
            ["image", "plataforma2", "/game/platform2.png"],
            ["image", "asteroid", "/game/asteroid.png"],
            ["image", "asteroid2", "/game/asteroid2.png"],
            ["image", "coin", "/game/coin.png"],
            ["image", "portal", "/game/portal.png"],
            ["image", "heart", "/game/heart.png"],
            ["image", "arrow", "/game/arrow.png"],
            ["image", "fireball", "/game/fireball.png"],
            ["spritesheet", "character", "/game/character.png", { frameWidth: 220, frameHeight: 162 }],
        ]
    }
}



// Scene in class
class SceneLoader extends Phaser.Scene {
    constructor() {
        super({ key: 'SceneLoader' })
    }
    preload(this: Phaser.Scene) {
        
        var width = this.cameras.main.width;
        var height = this.cameras.main.height;
        var loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 50,
            text: 'Loading...',
            style: {
                font: '20px monospace',
                color: '#ffffff'
            }
        });
        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(width/2 - 160, height/2 +100, 320, 50);

        loadingText.setOrigin(0.5, 0.5);

        var percentText = this.make.text({
            x: width / 2,
            y: height / 2 - 5,
            text: '0%',
            style: {
                font: '18px monospace',
                color: '#ffffff'
            }
        });

        percentText.setOrigin(0.5, 0.5);

        var assetText = this.make.text({
            x: width / 2,
            y: height / 2 + 50,
            text: '',
            style: {
                font: '18px monospace',
                color: '#ffffff'
            }
        });

        assetText.setOrigin(0.5, 0.5);

        this.load.on('progress', function (value: number) {
            percentText.setText(Number(value * 100) + '%');
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(width/2 - 160, height/2 +100, 300 * value, 30);
        });

        this.load.on('fileprogress', function (file: any) {
            assetText.setText('Loading asset: ' + file.key);
        });

        this.load.on('complete', function () {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
            assetText.destroy();
        });
        const scenesTitles: Array<SceneKeys> = ["Menu", "Scene1", "Won", "GameOver", "Scene2", "Tutorial"]
        for (let i = 0; i < scenesTitles.length; i++) {
            loadAssets[scenesTitles[i]].assets.map((sceneAssetConfig) => {
                const type = sceneAssetConfig[0] as LoadTypes;
                const name = sceneAssetConfig[1] as string;
                const src = sceneAssetConfig[2] as string;
                const config = sceneAssetConfig[3] as any;
                // @ts-checkts-ignore
                if (config) {
                    this.load[type](name, src, config)
                }
                else {
                    this.load[type](name, src)
                }
            })
        }

    }

    create(this: SceneLoader, { level }: any) {
        //this.scene.start("Scene1", { "data": 1 })
        this.scene.start("Menu", { "data": 1 })
    }

    update(this: SceneLoader) {

    }
}

export default SceneLoader 