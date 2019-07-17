import * as Assets from '../assets';
const os = require('os');




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
    private rectangulo : Phaser.Graphics;
    private rectanguloFoot : Phaser.Graphics;
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

        this.game.load.spritesheet('boton', Assets.Images.ImagesBoton5.getPNG() , 600, 20);
        this.contador = 0;
        
        
    }
    
    public create(): void{


        this.rectangulo = this.game.add.graphics();
        this.rectangulo.beginFill(0x0d47a1, 1);
        this.rectangulo.drawRect(0, 340, 1000, 80);


        this.rectanguloFoot = this.game.add.graphics();
        this.rectangulo.beginFill(0x37474f, 1);
        this.rectangulo.drawRect(0, 420, 1000, 80);

        this.valor = 501360;
        this.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.game.stage.setBackgroundColor(0xc2185b);
        this.texto1 = this.game.add.text(750, 385, this.valor + " €");
        this.texto1.fill = "#ffff00";
        this.texto1.fontSize = 40;
        this.texto1.stroke = "#ff9800";
        this.texto1.strokeThickness = 6;
        this.texto1.anchor.set(0.5);

        /*this.totalMount = this.game.add.sprite(10, 320,'score');
        this.totalMount.scale.x = 1.315;
        this.totalMount.scale.y = 0.70; */


        /*this.footer = this.game.add.sprite(10, 425,'footer');
        this.footer.scale.x = 0.953;
        this.footer.scale.y = 1;  */
        
        this.boton = this.game.add.button(20, 405, 'boton', this.actionClick);
        this.boton.scale.x = 0.2;
        this.boton.scale.y = 0.2;
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

          this.texto1.bringToTop();
                
    } 


    actionClick = (): void => {

        this.video1 = this.game.add.video('video1');
        this.video2 = this.game.add.video('video2');
        this.video1.play(true);
        this.video2.play(true);
        this.video1.addToWorld(725, 220,0.7, 0.7, 0.215, 0.28);
        this.video2.addToWorld(300, 220,0.7, 0.7, 0.215, 0.28);
        
        if((this.contador % 2) == 0){

            this.video1.changeSource(Assets.Misc.VideoVcm.getFile());
            this.video2.changeSource(Assets.Misc.VideoVideoStandByNeonHANDBRAKE.getFile());
        }else{
            this.video1.changeSource(Assets.Misc.VideoBigBuckBunnyTrailer.getFile());
            this.video2.changeSource(Assets.Misc.VideoElephantsDream.getFile());
        }
        this.contador = this.contador + 1;
        console.log("Contador esta en " + this.contador);
    }

    changeSource = () : void => {
            this.video1.changeSource(Assets.Misc.VideoBigBuckBunnyTrailer.getFile());
            this.video2.changeSource(Assets.Misc.VideoElephantsDream.getFile());
    }

    render = () => {
        /*this.game.debug.geom(this.rectangulo, '#0d47a1');
        this.game.debug.geom(this.rectanguloFoot, '#37474f'); */
    }
    
}