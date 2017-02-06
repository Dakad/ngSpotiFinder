
export enum TypeAlbum {
    SINGLE, ALBUM, APPARITION, COMPILATION
}


export class Album {
    private _id: number;
    private _name: number;
    private _artwork: string;
    private _type: TypeAlbum|string;
    private _urlSpotify : string;
    private _explicit:boolean;


    constructor(id,name,art,type,explicit){
        this._id = id;
        this._name = name;
        this._artwork = art;
        this._type = type;
        this._explicit = explicit;
    }


    static extractFromRawData(raw): Album {
        let alb = new Album(raw.id, raw.name, raw.images[0].url, raw.album_type,raw.explicit);
        alb.urlSpotify = raw.uri;
        return alb;
    }

    get id(){
        return this._id;
    }

    set id(nId){
        this._id = nId
    }

    

    get name(){
        return this._name;
    }

    set name(nName){
        this._name = nName
    }



    get artwork(){
        return this._artwork;
    }

    set artwork(nArtwork){
        this._artwork = nArtwork
    }


    get type(){
        return this._type.toString();
    }
    set type(nType){
        switch (nType) {
            case 'album':
                this._type = TypeAlbum.ALBUM;
                break;
            case 'single':
                this._type = TypeAlbum.SINGLE;
                break  ;
            case 'compilation':
                this._type = TypeAlbum.COMPILATION;
                break;
            case 'appears_on':
                this._type = TypeAlbum.APPARITION;
            default:
                break;
        }  
    }

    get urlSpotify (){
        return this._urlSpotify;
    }

    set urlSpotify(url){
        this._urlSpotify = url;
    }


    get explicit ():boolean{
        return this._explicit;
    }

}