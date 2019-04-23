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
    
    @Effect()
    getUser$ = this._actions$.pipe(
        ofType<GetRepos>(EReposAction.GetRepos),
        map((action: GetRepos) => action.payload),
        switchMap((user: string) => {
            this.router.navigate([`user/${user}/repos`]);
            return this._userService.getUserRepos(user);
        }),
        map((data: IRepos) => new GetReposSucces(data))
    )
}