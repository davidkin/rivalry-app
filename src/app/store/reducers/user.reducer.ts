import { initialUserState, IUserState } from '../state/user.state';
import { UserAction, EUserActions } from '../action/user.action';

export const userReducer = (
    state = initialUserState,
    action: UserAction
): IUserState => {
    switch (action.type) {
        case EUserActions.GetUserSucces: {
            return {
                ...state,
                user: action.payload
            }
        }

        default: 
            return state;
    }
};