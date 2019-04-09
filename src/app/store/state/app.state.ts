import { RouterReducerState } from '@ngrx/router-store';
import { IUserState, initialUserState } from './user.state';
import { initialReposState, IReposState } from './repos.state';

export interface IAppState {
    router?: RouterReducerState;
    user: IUserState;
    repos: IReposState;
}

export const initialAppState: IAppState = {
    user: initialUserState,
    repos: initialReposState,
}

export function getInitState(): IAppState {
    return initialAppState;
}