import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IUserState } from '../state/user.state';

const selectUser = (state: IAppState) => {
    console.log('--- UserSelector (state)', state);
    
    return state.user
};

export const selectSelectedUser = createSelector (
    selectUser,
    (state: IUserState) => {
        console.log('--- selectSelectedUser (state)', state);
        return state
    }
);