import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/shared/interfaces/user';
import { UserService } from './user.service';
import { IRepos } from 'src/app/shared/interfaces/repos';
import { selectSelectedUser } from 'src/app/store/selectors/user.selector';
import { IAppState } from 'src/app/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { GetUser } from 'src/app/store/action/user.action';
import { Observable } from 'rxjs';
import { IUserState } from 'src/app/store/state/user.state';
import { GetRepos } from 'src/app/store/action/repos.action';
import { selectRepos } from 'src/app/store/selectors/repos.selectors';
import { IReposState } from 'src/app/store/state/repos.state';

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    public user$: Observable<IUserState> = this._store.pipe(select(selectSelectedUser));
    // public config$: Observable<IReposState> = this._store.pipe(select(selectRepos));
    
    public user: IUser;
    public repos: IRepos;

    constructor(
        private userService: UserService, 
        private router: Router,
        private _store: Store<IAppState>
    ) { }

    ngOnInit(): void { 
        this.user$.subscribe(data => this.user = data.user);
    }

    getRepos(): void {
        this._store.dispatch(new GetRepos(this.user.login));
        // this.config$ = this._store.pipe(select(selectRepos));

        // console.log('--- UserComponent (config$)', this.config$);
        


        // this.config$.subscribe(repos => {
        //     console.log('--- UserComponent (repos)', repos);
            
        //     this.repos = repos[0];
        // });
        
        // this.userService.getUserRepos(this.user.login).subscribe(repos => {
        //     this.repos = repos;
        //     this.router.navigate([`user/${this.user.login}/repos`]);
        // })
    }

    banUser():void {
        localStorage.setItem('login', this.user.login);
    }
}