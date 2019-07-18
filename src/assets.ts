/* AUTO GENERATED FILE. DO NOT MODIFY. YOU WILL LOSE YOUR CHANGES ON BUILD. */

export namespace Images {
    export class ImagesBackgroundTemplate {
        static getName(): string { return 'background_template'; }

        static getPNG(): string { return require('assets/images/background_template.png'); }
    }
    export class ImagesBackground {
        static getName(): string { return 'background'; }

        static getJPG(): string { return require('assets/images/background.jpg'); }
        static getPNG(): string { return require('assets/images/background.png'); }
    }
    export class ImagesBoton1 {
        static getName(): string { return 'boton1'; }

        static getPNG(): string { return require('assets/images/boton1.png'); }
    }
    export class ImagesBoton2 {
        static getName(): string { return 'boton2'; }

        static getPNG(): string { return require('assets/images/boton2.png'); }
    }
    export class ImagesBoton3 {
        static getName(): string { return 'boton3'; }

        static getPNG(): string { return require('assets/images/boton3.png'); }
    }
    export class ImagesBoton4 {
        static getName(): string { return 'boton4'; }

        static getPNG(): string { return require('assets/images/boton4.png'); }
    }
    export class ImagesBoton5 {
        static getName(): string { return 'boton5'; }

        static getPNG(): string { return require('assets/images/boton5.png'); }
    }
    export class ImagesButtonSpriteSheet {
        static getName(): string { return 'button_sprite_sheet'; }

        static getPNG(): string { return require('assets/images/button_sprite_sheet.png'); }
    }
    export class ImagesFooter {
        static getName(): string { return 'footer'; }

        static getJPG(): string { return require('assets/images/footer.jpg'); }
        static getPNG(): string { return require('assets/images/footer.PNG'); }
    }
    export class ImagesLogin {
        static getName(): string { return 'login'; }

        static getPNG(): string { return require('assets/images/login.png'); }
    }
    export class ImagesPlay {
        static getName(): string { return 'Play'; }

        static getPNG(): string { return require('assets/images/Play.png'); }
    }
}

export namespace Spritesheets {
    export class SpritesheetsMetalslugMummy374518 {
        static getName(): string { return 'metalslug_mummy.[37,45,18,0,0]'; }

        static getPNG(): string { return require('assets/spritesheets/metalslug_mummy.[37,45,18,0,0].png'); }
        static getFrameWidth(): number { return 37; }
        static getFrameHeight(): number { return 45; }
        static getFrameMax(): number { return 18; }
        static getMargin(): number { return 0; }
        static getSpacing(): number { return 0; }
    }
}

export namespace Atlases {
    export class AtlasesPreloadSpritesArray {
        static getName(): string { return 'preload_sprites_array'; }

        static getJSONArray(): string { return require('assets/atlases/preload_sprites_array.json'); }

        static getPNG(): string { return require('assets/atlases/preload_sprites_array.png'); }
    }
    export namespace AtlasesPreloadSpritesArray {
        export enum Frames {
            PreloadBar = 'preload_bar.png',
            PreloadFrame = 'preload_frame.png',
        }
    }
    export class AtlasesPreloadSpritesHash {
        static getName(): string { return 'preload_sprites_hash'; }

        static getJSONHash(): string { return require('assets/atlases/preload_sprites_hash.json'); }

        static getPNG(): string { return require('assets/atlases/preload_sprites_hash.png'); }
    }
    export namespace AtlasesPreloadSpritesHash {
        export enum Frames {
            PreloadBar = 'preload_bar.png',
            PreloadFrame = 'preload_frame.png',
        }
    }
    export class AtlasesPreloadSpritesXml {
        static getName(): string { return 'preload_sprites_xml'; }

        static getPNG(): string { return require('assets/atlases/preload_sprites_xml.png'); }

        static getXML(): string { return require('assets/atlases/preload_sprites_xml.xml'); }
    }
    export namespace AtlasesPreloadSpritesXml {
        export enum Frames {
            PreloadBar = 'preload_bar.png',
            PreloadFrame = 'preload_frame.png',
        }
    }
}

export namespace Audio {
    export class AudioMusic {
        static getName(): string { return 'music'; }

        static getAC3(): string { return require('assets/audio/music.ac3'); }
        static getM4A(): string { return require('assets/audio/music.m4a'); }
        static getMP3(): string { return require('assets/audio/music.mp3'); }
        static getOGG(): string { return require('assets/audio/music.ogg'); }
    }
}

export namespace Audiosprites {
    export class AudiospritesSfx {
        static getName(): string { return 'sfx'; }

        static getAC3(): string { return require('assets/audiosprites/sfx.ac3'); }
        static getJSON(): string { return require('assets/audiosprites/sfx.json'); }
        static getM4A(): string { return require('assets/audiosprites/sfx.m4a'); }
        static getMP3(): string { return require('assets/audiosprites/sfx.mp3'); }
        static getOGG(): string { return require('assets/audiosprites/sfx.ogg'); }
    }
    export namespace AudiospritesSfx {
        export enum Sprites {
            Laser1 = 'laser1',
            Laser2 = 'laser2',
            Laser3 = 'laser3',
            Laser4 = 'laser4',
            Laser5 = 'laser5',
            Laser6 = 'laser6',
            Laser7 = 'laser7',
            Laser8 = 'laser8',
            Laser9 = 'laser9',
        }
    }
}

export namespace GoogleWebFonts {
    export const Barrio: string = 'Barrio';
}

export namespace CustomWebFonts {
    export class Fonts2DumbWebfont {
        static getName(): string { return '2Dumb-webfont'; }

        static getFamily(): string { return '2dumbregular'; }

        static getCSS(): string { return require('!file-loader?name=assets/fonts/[name].[ext]!assets/fonts/2Dumb-webfont.css'); }
        static getEOT(): string { return require('!file-loader?name=assets/fonts/[name].[ext]!assets/fonts/2Dumb-webfont.eot'); }
        static getSVG(): string { return require('!file-loader?name=assets/fonts/[name].[ext]!assets/fonts/2Dumb-webfont.svg'); }
        static getTTF(): string { return require('!file-loader?name=assets/fonts/[name].[ext]!assets/fonts/2Dumb-webfont.ttf'); }
        static getWOFF(): string { return require('!file-loader?name=assets/fonts/[name].[ext]!assets/fonts/2Dumb-webfont.woff'); }
    }
}

export namespace BitmapFonts {
    export class FontsFontFnt {
        static getName(): string { return 'font_fnt'; }

        static getFNT(): string { return require('assets/fonts/font_fnt.fnt'); }
        static getPNG(): string { return require('assets/fonts/font_fnt.png'); }
    }
    export class FontsFontXml {
        static getName(): string { return 'font_xml'; }

        static getPNG(): string { return require('assets/fonts/font_xml.png'); }
        static getXML(): string { return require('assets/fonts/font_xml.xml'); }
    }
}

export namespace JSON {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}

export namespace TilemapJSON {
    export class TilemapsTilemap {
        static getName(): string { return 'tilemap'; }

        static getJSON(): string { return require('assets/tilemaps/tilemap.json'); }
    }
}

export namespace XML {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}

export namespace Text {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}

export namespace Scripts {
    export class ScriptsBlurX {
        static getName(): string { return 'BlurX'; }

        static getJS(): string { return require('assets/scripts/BlurX.js'); }
    }
    export class ScriptsBlurY {
        static getName(): string { return 'BlurY'; }

        static getJS(): string { return require('assets/scripts/BlurY.js'); }
    }
}
export namespace Shaders {
    export class ShadersPixelate {
        static getName(): string { return 'pixelate'; }

        static getFRAG(): string { return require('assets/shaders/pixelate.frag'); }
    }
}
export namespace Misc {
    export class ImagesScore {
        static getName(): string { return 'score'; }

        static getFile(): string { return require('assets/images/score.PNG'); }
    }
    export class VideoBigBuckBunnyTrailer {
        static getName(): string { return 'big-buck-bunny_trailer'; }

        static getFile(): string { return require('assets/video/big-buck-bunny_trailer.webm'); }
    }
    export class VideoElephantsDream {
        static getName(): string { return 'elephants-dream'; }

        static getFile(): string { return require('assets/video/elephants-dream.webm'); }
    }
    export class VideoVcm {
        static getName(): string { return 'vcm'; }

        static getFile(): string { return require('assets/video/vcm.mp4'); }
    }
    export class VideoVideoStandByNeonHANDBRAKE {
        static getName(): string { return 'video_standBy_neon_HANDBRAKE'; }

        static getFile(): string { return require('assets/video/video_standBy_neon_HANDBRAKE.mp4'); }
    }
    export class VideoVideoStandByNeon {
        static getName(): string { return 'video_standBy_neon'; }

        static getFile(): string { return require('assets/video/video_standBy_neon.mp4'); }
    }
}
