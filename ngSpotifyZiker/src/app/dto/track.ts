import { Album } from './album';
import { Artist } from './artist';

export class Track {
    private _id: string;
    private _num: number;
    private _name: string;
    private _src: string;
    private _duration: number; // in ms
    private _album: Album;
    private _disc: number;
    private _artists: Artist[];


    constructor(id: string, num: number, name: string, src: string) {
        this._id = id;
        this._num = num;
        this._name = name;
        this._src = src;
        this._artists = [];
    }

    static extractFromRawData(raw: any) {
        const t = new Track(raw.id, raw.track_number, raw.name, raw.preview_url);
        t.duration = raw.duration;
        t.num = raw.track_number;
        t.disc = raw.disc_number;

        if (raw.album) {
            t.album = Album.extractFromRawData(raw.album);
        }

        raw.artists.forEach((val) => t.addArtist(Artist.extractFromRawData(val)));

        return t;
    }

    set album(nAlbum: Album | any) {
        this._album = nAlbum;
    }

    get album() {
        return this._album;
    }

    set duration(nDuree: number | any) {
        this._duration = nDuree;
    }

    get id(): string {
        return this._id;
    }

    get num() {
        return this._num;
    }

    set num(num: number) {
        this._num = num;
    }


    get name() {
        return this._name;
    }

    get src() {
        return this._src;
    }

    get disc() {
        return this._disc;
    }

    set disc(disc: number) {
        this._disc = disc;
    }

    get artists(): Artist[] {
        return this._artists;
    }
    addArtist(art: Artist) {
        this._artists.push(art);
    }


}