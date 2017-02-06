import { Album } from './album';
import { Track } from './track';

export class Artist {
    private _id: number;
    private _name: string;
    private _genres: string[];
    private _image: string;
    private _albums: Album[]
    private _topTracks: Track[];

    constructor(id: number, name: string, img?: string) {
        this._id = id;
        this._name = name;
        this._image = img;
        this._albums = [];
        this._genres = [];
        this._topTracks = [];
    }

    static extractFromRawData(raw: any): Artist {
        const at = new Artist(raw.id, raw.name);
        // raw.albums.forEach((alb, i) => at.addAlbum(Album.extractFromRawData(alb)));
        if (raw.genres) {
            raw.genres.forEach((genre, i) => at.addGenre(genre));
        }
        if (raw.images) {
            at.image = raw.images[1].url; // The medium image
        }
        
        return at;
    }

    get id() {
        return this._id;
    }

    get name(): string {
        return this._name;
    }


    get genres(): string[] {
        return this._genres;
    }
    addGenre(genre: string) {
        this._genres.push(genre);
    }


    get albums(): Album[] {
        return this._albums;
    }
    addAlbum(alb: Album) {
        this._albums.push(alb);
    }

    get image(): string {
        return this._image;
    }

    set image(img: string) {
        this._image = img;
    }

    get topTracks(): Track[] {
        return this._topTracks;
    }
    addTopTrack(track: Track) {
        this._topTracks.push(track);
    }



}