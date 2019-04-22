import { createSelector, select } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IReposState } from '../state/repos.state';

const reposState = (state: IAppState) => state.repos;

export const selectRepos = createSelector(
    reposState,
    (state: IReposState) => {
        console.log('--- ReposSelector (state)', state);
        
        return state
    }
);