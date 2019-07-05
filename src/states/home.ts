import * as Assets from '../assets';
import { timingSafeEqual } from 'crypto';
var os = require('os');




export default class Home extends Phaser.State{

    private video1!: Phaser.Video;
    private video2!: Phaser.Video;
    private video3!: Phaser.Video;
    private texto1!: Phaser.Text;
    private backgroundTemplateSprite!: Phaser.Sprite;
    private background !: Phaser.Sprite;
    private totalMount !: Phaser.Sprite;
    private footer !: Phaser.Sprite;
    private valor : number;
    private graphics : Phaser.Graphics;

    

    public preload(): void {

        this.game.load.image('background', Assets.Images.ImagesBackground.getJPG());
        this.game.load.image('score', Assets.Misc.ImagesScore.getFile());
        this.game.load.image('footer', Assets.Images.ImagesFooter.getPNG());
        this.game.load.video('video1',  require('assets/video/vcm.mp4'));
        this.game.load.video('video2',  require('assets/video/video_standBy_neon_HANDBRAKE.mp4'));
        this.game.load.video('video3',  require('assets/video/video_standBy_neon.mp4'));
    }
    
    public create(): void{

        this.valor = 501360;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.game.stage.backgroundColor = "#FFFFFF";
        this.background = this.game.add.sprite(this.game.world.worldScale.x, this.game.world.worldScale.y, 'background');
        //this.background.scale.setTo(0.5);
        this.background.scale.x = 0.839;
        this.background.scale.y = 0.73;
        this.texto1 = this.game.add.text(555, 330, this.valor + " €");
        this.texto1.fill = "#ffeb3b";
        this.texto1.fontSize = 60;
        this.texto1.stroke = "#212121";
        this.texto1.strokeThickness = 6;
        this.texto1.font = 'Lato';

        this.totalMount = this.game.add.sprite(10, 320,'score');
        this.totalMount.scale.x = 1.315;
        this.totalMount.scale.y = 0.70;

        this.texto1.bringToTop();

        this.footer = this.game.add.sprite(10, 425,'footer');
        this.footer.scale.x = 0.953;
        this.footer.scale.y = 1;
        this.footer.bringToTop();

        setInterval(() => {

            const freeMem = Math.round(parseFloat(os.freemem()));
            this.game.debug.text('Free Memory: ' + freeMem + " RAM", 450, 450);
            this.game.debug.text('CPU: ' + os.cpus()[0], 450, 470);



            const numero = Math.floor(Math.random() * (100 - 1) + 100); 
            const aux = (Math.floor(Math.random() * (100 - 1) + 100)) % 2;

            if(aux == 0){

                const operacion = (this.valor - numero);

                this.texto1.setText(operacion + " €")
            }else{
                const operacion = (this.valor + numero);

                this.texto1.setText(operacion + " €")
            }

            console.log(Math.floor(Math.random() * (100 - 1) + 100));

          }, 2000);
          
        

        //this.var = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'video1');

        //this.backgroundTemplateSprite = this.game.add.sprite(0, 0, 'video1');

        this.video1 = this.game.add.video('video1');



        
        
        this.video2 = this.game.add.video('video2');
        
        /*
        this.video3 = this.game.add.video('video3'); */

            this.video1.play(true);
            this.video1.addToWorld(725, 220,0.7, 0.7, 0.215, 0.28);
            console.log('Video 1');

            this.video2.play(true);
            this.video2.addToWorld(300, 220,0.7, 0.7, 0.215, 0.28);
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