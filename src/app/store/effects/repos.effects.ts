import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { IAppState } from '../state/app.state';
import { UserService } from '../../pages/user/user.service';
import { EReposAction, GetRepos } from '../action/repos.action';
import { IRepos } from 'src/app/shared/interfaces/repos';

@Injectable()
export class ReposEffects {
    constructor(
        private _userService: UserService,
        private _actions$: Actions
    ) {}

    @Effect()
    getUser$ = this._actions$.pipe(
        ofType<GetRepos>(EReposAction.GetRepos),
        map((action: GetRepos) => {
            console.log('--- ReposEffect (action)', action);
        }),
        switchMap((repos: any) => {
            console.log('--- ReposEffect (repos)', repos);
            
            return repos;
            // return this._userService.getUserByLogin(user);
        }),
        // map((data: IUser) => new GetUserSuccess(data))
    )
}