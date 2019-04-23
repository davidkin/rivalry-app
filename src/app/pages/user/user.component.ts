import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/user';
import { IRepos } from 'src/app/shared/interfaces/repos';
import { selectSelectedUser } from 'src/app/store/selectors/user.selector';
import { IAppState } from 'src/app/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUserState } from 'src/app/store/state/user.state';
import { GetRepos } from 'src/app/store/action/repos.action';

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    public user$: Observable<IUserState> = this._store.pipe(select(selectSelectedUser));

    public user: IUser;
    public repos: IRepos;

    constructor(
        private _store: Store<IAppState>
    ) { }

    ngOnInit(): void { 
        this.user$.subscribe(data => this.user = data.user);
    }

    getRepos(): void {
        this._store.dispatch(new GetRepos(this.user.login));
    }

    banUser(): void {
        localStorage.setItem('login', this.user.login);
    }
}