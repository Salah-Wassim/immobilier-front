export class Bien {
    name: string;

    constructor(bien?:any){
        this.name = bien.name || '';
    }
}
