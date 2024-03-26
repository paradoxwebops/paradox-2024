import { UserModel } from "./User"

export interface AuthStateModel {
    access_token: string;
    refresh_token: string;
    user: UserModel | Object | any;
}