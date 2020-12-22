export class User {
    id: number
    username: string
    email: string
    role: any

    constructor(id = 0, username="", email="", role=""){
        this.id = id;
        this.username = username
        this.email = email
        this.role = role
    }
}