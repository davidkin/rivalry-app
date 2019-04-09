import { Action } from '@ngrx/store';

export enum EUserActions {
    GetUser = '[User] Get User',
}

export class GetUser implements Action {
    public readonly type = EUserActions.GetUser;
}

export type UserAction = GetUser; 