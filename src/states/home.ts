import * as Assets from '../assets';
var os = require('os');




export default class Home extends Phaser.State{

    private video1!: Phaser.Video;
    private video2!: Phaser.Video;
    private video3!: Phaser.Video;
    private texto1!: Phaser.Text;
    private backgroundTemplateSprite!: Phaser.Sprite;
    private background !: Phaser.Sprite;
    private var : any;

    private rightArrow !: Phaser.Sprite;

    

    

    public preload(): void {


        //require('assets/video/video_standBy_neon_HANDBRAKE.mp4')

        this.game.load.image('background', Assets.Images.ImagesBackground.getPNG());
        this.game.load.video('video1',  require('assets/video/vcm.mp4'));
        this.game.load.video('video2',  require('assets/video/video_standBy_neon_HANDBRAKE.mp4'));
        this.game.load.video('video3',  require('assets/video/video_standBy_neon.mp4'));

        
    }
    
    public create(): void{

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.game.stage.backgroundColor = "#FFFFFF";
        this.background = this.game.add.sprite(this.game.world.worldScale.x, this.game.world.worldScale.y, 'background');
        //this.background.scale.setTo(0.5);
        this.background.scale.x = 0.45;
        this.background.scale.y = 0.35;


        setInterval(() => {

            this.game.debug.text('Free Memory: ' + os.freemem(), 32, 32);
            this.game.debug.text('CPU: ' + os.cpus()[0], 32, 62);

          }, 500);
          
        

        //this.var = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'video1');

        //this.backgroundTemplateSprite = this.game.add.sprite(0, 0, 'video1');

        this.video1 = this.game.add.video('video1');



        
        
        this.video2 = this.game.add.video('video2');
        
        /*
        this.video3 = this.game.add.video('video3'); */

            this.video1.play(true);
            this.video1.addToWorld(850, 300,1, 1, 0.19, 0.19);
            console.log('Video 1');

            this.video2.play(true);
            this.video2.addToWorld(380, 300,1, 1, 0.19, 0.19);
            console.log('Video 1');

            /*
        setTimeout(() => {
            this.video1.play(true);
            this.video1.addToWorld(400, 300, 0.5, 0.5);
            console.log('Video 1');
        }, 100);


        //this.video1.stop();

        setTimeout(() => {
            this.video1.stop();
            this.video2.play(true);
            this.video2.addToWorld(400, 300, 0.5, 0.5);
            console.log('Video 2');
        }, 10400);

        
        setTimeout(() => {
            this.video2.stop();
            this.video3.play(true);
            this.video3.addToWorld(400, 300, 0.5, 0.5);
            console.log('Video 3');
        }, 20700)

         */
    } 
    
}