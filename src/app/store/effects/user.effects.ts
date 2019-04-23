import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMap, map } from 'rxjs/operators';

import { IAppState } from '../state/app.state';
import { EUserActions, GetUserSuccess, GetUser} from '../action/user.action';
import { UserService } from '../../pages/user/user.service';
import { IUser } from 'src/app/shared/interfaces/user';
import { Router } from '@angular/router';

@Injectable()
export class UserEffects {
    constructor(
        private _userService: UserService,
        private _actions$: Actions,
        private _store: Store<IAppState>,
        private router: Router,
    ) {}

    @Effect()
    getUser$ = this._actions$.pipe(
        ofType<GetUser>(EUserActions.GetUser),
        map((action: GetUser) => action.payload),
        switchMap((user: string) =>  {
            this.router.navigate([`user/${user}`]);
            return this._userService.getUserByLogin(user)
        }),
        map((data: IUser) => new GetUserSuccess(data))
    )
}