import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { IAppState } from '../state/app.state';
import { UserService } from '../../pages/user/user.service';
import { EReposAction, GetRepos, GetReposSucces } from '../action/repos.action';
import { IRepos } from 'src/app/shared/interfaces/repos';
import { Router } from '@angular/router';

@Injectable()
export class ReposEffects {
    constructor(
        private _userService: UserService,
        private _actions$: Actions,
        private router: Router,
    ) {}
    // { dispatch: false }
    @Effect()
    getUser$ = this._actions$.pipe(
        ofType<GetRepos>(EReposAction.GetRepos),
        map((action: GetRepos) => {
            console.log('--- ReposEffect (action.payload)', action.payload);

            return action.payload;
        }),
        switchMap((user: string) => {
            console.log('--- ReposEffect (repos)', user);

            this.router.navigate([`user/${user}/repos`]);
            return this._userService.getUserRepos(user);
        }),
        map((data: IRepos) => {
            console.log('--- ReposEffect (inst)', data);
            
            return new GetReposSucces(data);
        })
    )
}