
import {Role} from "./role"
export class User {
    id: number;
    username: string;
    email: string;
    role: Role;
    permissions: string[];

    constructor(id = 0, username = '',  email = '', role = new Role(), permissions: string[] = []) {
        this.id = id;
        this.username = username;
       
        this.email = email;
        this.role = role;
        this.permissions = permissions;
    }

    get name() {
        return this.username
    }

    canView(page: string) {
       
        return this.permissions.some(p => p === `view_${page}`);
    }

    canEdit(page: string) {
        return this.permissions.some(p => p === `edit_${page}`);
    }
}