import { IUser } from '../../shared/interfaces/user';

export interface IUserState {
    user: IUser;
}

export const initialUserState: IUserState = {
    user: null
}