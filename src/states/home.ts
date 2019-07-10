import * as Assets from '../assets';
const os = require('os');
/*const process = require('process');
const jm = require('js-meter');


console.log(process.memoryUsage()); */


/*const isPrint = true
const isKb = true       // or Mb
const m = new jm({isPrint, isKb})
*/



export default class Home extends Phaser.State{

    private video1!: Phaser.Video;
    private video2!: Phaser.Video;
    private video3!: Phaser.Video;
    private texto1!: Phaser.Text;
    private background !: Phaser.Sprite;
    private totalMount !: Phaser.Sprite;
    private footer !: Phaser.Sprite;
    private valor : number;
    private boton : Phaser.Button;
    contador : number = 0;


    public preload(): void {

        

        this.game.load.image('background', Assets.Images.ImagesBackground.getJPG());
        this.game.load.image('score', Assets.Misc.ImagesScore.getFile());
        this.game.load.image('footer', Assets.Images.ImagesFooter.getPNG());
        this.game.load.video('video1',  Assets.Misc.VideoVcm.getFile());
        this.game.load.video('video2',  Assets.Misc.VideoVideoStandByNeonHANDBRAKE.getFile());
        this.game.load.video('video3', Assets.Misc.VideoBigBuckBunnyTrailer.getFile());
        this.game.load.video('video4', Assets.Misc.VideoElephantsDream.getFile());
        //this.game.load.video('video3',  require('assets/video/video_standBy_neon.mp4'));

        this.game.load.spritesheet('boton', Assets.Images.ImagesButtonSpriteSheet.getPNG(), 193, 71);
        this.contador = 0;
        
        
    }
    
    public create(): void{

        //his.game.time.events.add(10000, this.changeSource);
        this.valor = 501360;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.background = this.game.add.sprite(this.game.world.worldScale.x, this.game.world.worldScale.y, 'background');
        //this.background.scale.setTo(0.5);
        this.background.scale.x = 0.839;
        this.background.scale.y = 0.73;
        this.texto1 = this.game.add.text(555, 330, this.valor + " €");
        this.texto1.fill = "#ffeb3b";
        this.texto1.fontSize = 60;
        this.texto1.stroke = "#212121";
        this.texto1.strokeThickness = 6;

        this.totalMount = this.game.add.sprite(10, 320,'score');
        this.totalMount.scale.x = 1.315;
        this.totalMount.scale.y = 0.70;

        this.texto1.bringToTop();

        this.footer = this.game.add.sprite(10, 425,'footer');
        this.footer.scale.x = 0.953;
        this.footer.scale.y = 1; 
        //this.footer.bringToTop();
        
        
        


                
                console.log('Video 1');
                console.log('Video 1');

                this.boton = this.game.add.button(50, 425, 'boton', this.actionClick);
                this.boton.bringToTop();

        setInterval(() => {

            const freeMem = os.freemem();
            this.game.debug.text('Free Memory: ' + freeMem + " RAM", 450, 450);
            this.game.debug.text('CPU: ' + os.cpus()[0], 450, 470);



            const numero = Math.floor(Math.random() * (100 - 1) + 100); 
            const aux = (Math.floor(Math.random() * (100 - 1) + 100)) % 2;

            if(aux == 0){

                const operacion = (this.valor - numero);

                this.texto1.setText(operacion + " €");
            }else{
                const operacion = (this.valor + numero);

                this.texto1.setText(operacion + " €");
            }

            console.log(Math.floor(Math.random() * (100 - 1) + 100));

          }, 2000);

                
    } 


    actionClick = (): void => {

        this.video1 = this.game.add.video('video1');
        this.video2 = this.game.add.video('video2');
        this.video1.play(true);
        this.video2.play(true);
        this.video1.addToWorld(725, 220,0.7, 0.7, 0.215, 0.28);
        this.video2.addToWorld(300, 220,0.7, 0.7, 0.215, 0.28);

        console.log((this.contador % 2) == 0);
        
        if((this.contador % 2) == 0){

            this.video1.changeSource(Assets.Misc.VideoVcm.getFile());
            this.video2.changeSource(Assets.Misc.VideoVideoStandByNeonHANDBRAKE.getFile());

                /*this.video1 = this.game.add.video('video1');
                this.video2 = this.game.add.video('video2'); 
                this.video1.play(true);
                this.video2.play(true);
                this.video1.addToWorld(725, 220,0.7, 0.7, 0.215, 0.28);
                this.video2.addToWorld(300, 220,0.7, 0.7, 0.215, 0.28);
                console.log("Boton presionado");*/
        }else{
            this.video1.changeSource(Assets.Misc.VideoBigBuckBunnyTrailer.getFile());
            this.video2.changeSource(Assets.Misc.VideoElephantsDream.getFile());
        }
        this.contador = this.contador + 1;
        console.log("Contador esta en " + this.contador);
    }

    changeSource = () : void => {
            console.log("ingreso aqui");
            this.video1.changeSource(Assets.Misc.VideoBigBuckBunnyTrailer.getFile());
            this.video2.changeSource(Assets.Misc.VideoElephantsDream.getFile());
    }
    
}