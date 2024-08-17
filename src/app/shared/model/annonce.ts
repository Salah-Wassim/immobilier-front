export class Annonce {
    title: string;
    price: number;
    secteur: string;
    nbRoom: number;
    description: string;
    keyWordIds: number[];
    picture: string;
    AgentImmobilierId: number;
    BienId: number;
    avantage: string;

    constructor(annonce?:any){
        this.title = annonce.title || " ";
        this.price = annonce.price || 0;
        this.secteur = annonce.secteur || " ";
        this.nbRoom = annonce.nbRoom || 0;
        this.description = annonce.description || " ";
        this.keyWordIds = annonce.keyWordIds || [];
        this.picture = annonce.picture || " ";
        this.AgentImmobilierId = annonce.AgentImmobilierId || 0;
        this.BienId = annonce.BienId || 0;
        this.avantage = annonce.avantage || " ";
    }
}
