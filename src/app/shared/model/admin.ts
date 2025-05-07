export class Admin {
    name : string;
    email: number;
    password: string;
    roleAdmin: boolean;

    constructor(admin?:any){
        this.name = admin.name || "";
        this.email = admin.email || "";
        this. password = admin.password || "";
        this.roleAdmin = admin.roleAdmin || false;
    }
}
