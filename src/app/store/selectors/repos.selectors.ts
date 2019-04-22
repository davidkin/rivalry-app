import { createSelector, select } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IReposState } from '../state/repos.state';

const reposState = (state: IAppState) => {
    console.log('--- ReposState (state.repos)', state.repos);
    
    return state.repos
};

export const selectRepos = createSelector(
    reposState,
    (state: IReposState) => state.repos
);