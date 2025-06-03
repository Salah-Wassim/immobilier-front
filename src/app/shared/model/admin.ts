export class Admin {
    name : string;
    email: number;
    password: string;
    role: string;

    constructor(admin?:any){
        this.name = admin.name || "";
        this.email = admin.email || "";
        this. password = admin.password || "";
        this.role = admin.role || '';
    }
}
