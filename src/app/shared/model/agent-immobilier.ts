export class AgentImmobilier {
    name: string;
    age: number;
    email: string;
    password: string;
    picture: string;
    phoneNumber: number;
    roleAdmin: boolean;

    constructor(agentImmobilier?:any){
        this.name = agentImmobilier.name || '';
        this.age = agentImmobilier.age || 0;
        this.email = agentImmobilier.email || '';
        this.password = agentImmobilier.password || '';
        this.picture = agentImmobilier.picture || '';
        this.phoneNumber = agentImmobilier.phoneNumber || 0
        this.roleAdmin = agentImmobilier.roleAdmin || false;
    }
}
