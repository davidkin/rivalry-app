import { ActionReducerMap, ActionReducer } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';

import { IAppState } from '../state/app.state';

import { reposReducer } from '../reducers/repos.reducer';
import { userReducer } from '../reducers/user.reducer';

export const appReducer: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    user: userReducer,
    repos: reposReducer
}