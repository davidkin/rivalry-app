import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { IAppState } from '../state/app.state';
import { EUserActions, GetUserSuccess, GetUser} from '../action/user.action';
import { UserService } from '../../pages/user/user.service';
import { IUser } from 'src/app/shared/interfaces/user';

@Injectable()
export class UserEffects {
    constructor(
        private _userService: UserService,
        private _actions$: Actions,
        private _store: Store<IAppState>
    ) {}

    @Effect()
    getUser$ = this._actions$.pipe(
        ofType<GetUser>(EUserActions.GetUser),
        map((action: GetUser) => {
            console.log('--- UserEffect (action)', action);
            
            action.payload
        }),
        // switchMap((user: string) => {
        //     console.log(user);
            
        //     return this._userService.getUserByLogin(user);
        // }),
        // map((data: IUser) => new GetUserSuccess(data))
    )
}