import { Action } from '@ngrx/store';
import { IRepos } from 'src/app/shared/interfaces/repos';

export enum EReposAction {
    GetRepos = '[Repos] Get Repos',
    GetReposSucces = '[Repos] Get Repos Succes'
}

export class GetRepos implements Action {
    public readonly type = EReposAction.GetRepos;
    constructor(public payload: string) {}
}

export class GetReposSucces implements Action {
    public readonly type = EReposAction.GetReposSucces;
    constructor(public payload: IRepos) {}
}

export type ReposAction = GetRepos | GetReposSucces;