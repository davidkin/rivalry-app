import { Component, OnInit } from '@angular/core';
import { IRepos } from 'src/app/shared/interfaces/repos';
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
        private _store: Store<IAppState>
    ) {}

    ngOnInit(): void {
        this.repos$ = this._store.pipe(select(selectRepos));

        this.repos$.subscribe(data => this.repos = data.repos);
    }
}
