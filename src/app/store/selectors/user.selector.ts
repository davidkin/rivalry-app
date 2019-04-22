import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IUserState } from '../state/user.state';

const selectUser = (state: IAppState) => state.user;

export const selectSelectedUser = createSelector (
    selectUser,
    (state: IUserState) => {
        return state
    }
);