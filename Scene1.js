class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload(){
        this.load.image("background", "background.png");
        this.load.spritesheet("ship", "ship.png", { frameWidth: 16, frameHeight: 16 });
        this.load.spritesheet("ship2", "ship2.png", { frameWidth: 32, frameHeight: 16 });
        this.load.spritesheet("ship3", "ship3.png", { frameWidth: 32, frameHeight: 32 });
        this.load.spritesheet("explosion", "explosion.png", { frameWidth: 16, frameHeight: 16 });
        this.load.spritesheet("power-up", "power-up.png", { frameWidth: 16, frameHeight: 16 });
    }

    create() {
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");
    }
}
