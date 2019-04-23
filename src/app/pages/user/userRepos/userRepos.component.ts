import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { IRepos } from 'src/app/shared/interfaces/repos';
import { UserComponent } from '../user.component';
import { Observable } from 'rxjs';
import { IReposState } from 'src/app/store/state/repos.state';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { selectRepos } from 'src/app/store/selectors/repos.selectors';

@Component({
    selector: 'userRepos',
    templateUrl: './userRepos.component.html',
    styleUrls: ['./userRepos.component.scss']
})

export class UserReposComponent implements OnInit{
    public repos: IRepos;
    public repos$: Observable<IReposState>;

    constructor (
        private userComp: UserComponent,
        private _store: Store<IAppState>
    ) {}

    ngOnInit(): void {
        // this.repos = this.userComp.repos;
        this.repos$ = this._store.pipe(select(selectRepos));
        console.log('--- UserReposComponent (repos$)', this.repos$);

        this.repos$.subscribe(data => {
            console.log('--- UserReposComponent (data)', data)
            this.repos = data.repos;
        });
    }
}
