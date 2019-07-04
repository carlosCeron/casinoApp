import * as Assets from '../assets';

export default class Video2 extends Phaser.State{

    private video2!: Phaser.Video;
    private texto1!: Phaser.Text;
    private backgroundTemplateSprite!: Phaser.Sprite;
    

    public preload(): void {

        this.game.load.video('video3',  require('assets/video/video_standBy_neon_HANDBRAKE.mp4'));
        this.game.load.video('video2',  require('assets/video/video_standBy_neon.mp4'));
    }
    
    public create(): void{

        this.video2 = this.game.add.video('video2');
        this.video2.play(true);
        this.video2.addToWorld(400, 300, 0.5, 0.5);

        /*
        this.video3 = this.game.add.video('video3');
        this.video3.play(true);
        this.video3.addToWorld(400, 300, 0.5, 0.5);

        */

    } 
    
}