export interface ISingers  {

    id: string;
    isCurated: boolean;
    packageId: string;
    smallImage: string;
    title: string;
    type: string;
    language: string;
}

export interface IAlbums {
    id: string;
    language: string; 
    lastUpdated: number;
    score: number;
    title: string;
    smallImage: string;
    type: string;
}

export interface ISongs {
    title: string;
    language: string;
    previewUrl: string;
    id: string;
    smallImage: string;
}

export interface IMusicData {
    singers : ISingers[];
    albums: IAlbums[];
    songs: ISongs[];

}