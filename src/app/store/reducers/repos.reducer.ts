import { initialReposState, IReposState } from '../state/repos.state';
import { ReposAction, EReposAction } from '../action/repos.action';

export const reposReducer = (
    state = initialReposState,
    action: ReposAction
): IReposState => {
    switch (action.type) {
        case EReposAction.GetReposSucces: {
            return {
                ...state,
                repos: action.payload
            }
        }
    }
}