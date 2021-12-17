export class Annonce {
    title: string;
    price: number;
    secteur: string;
    nbRoom: number;
    description: string;
    keyWord: string;
    picture: string;
    agentImmobilier: string;
    biens: string;
    avantage: string;

    constructor(annonce?:any){
        this.title = annonce.title || " ";
        this.price = annonce.price || 0;
        this.secteur = annonce.secteur || " ";
        this.nbRoom = annonce.nbRoom || " ";
        this.description = annonce.description || " ";
        this.keyWord = annonce.keyWord || " ";
        this.picture = annonce.picture || " ";
        this.agentImmobilier = annonce.agentImmobilier || " ";
        this.biens = annonce.biens || " ";
        this.avantage = annonce.avantage || " ";
    }
}
