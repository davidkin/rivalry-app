import { Action } from '@ngrx/store';
import { IUser } from 'src/app/shared/interfaces/user';

export enum EUserActions {
    GetUser = '[User] Get User',
    GetUserSucces = '[User] Get User Succes'
}

export class GetUser implements Action {
    public readonly type = EUserActions.GetUser;
    constructor (public payload: string) {}
}

export class GetUserSuccess implements Action {
    public readonly type = EUserActions.GetUserSucces;
    constructor (public payload: IUser) {}
}

export type UserAction = GetUser | GetUserSuccess; 