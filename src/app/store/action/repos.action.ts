import { Action } from '@ngrx/store';

export enum EReposAction {
    GetRepos = '[Repos] Get Repos'
}

export class GetRepos implements Action {
    public readonly type = EReposAction.GetRepos;
}

export type ReposAction = GetRepos;