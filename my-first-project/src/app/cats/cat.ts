export class Cat {
    id: string;
    url: string;
    width: bigint;
    height: bigint;

    constructor(id: string, url: string, width: bigint, height: bigint){
        this.id = id;
        this.url = url;
        this.width = width;
        this.height = height;
    }
}