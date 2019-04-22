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

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    user$: Observable<IUserState> = this._store.pipe(select(selectSelectedUser));
    user: IUser;
    repos: IRepos;

    constructor( 
        private route: ActivatedRoute, 
        private userService: UserService, 
        private router: Router,
        private _store: Store<IAppState>
    ) { }

    ngOnInit(): void { 
        console.log('--- UserComponent (user$)', this.user$);

        this.user$.subscribe(data => this.user = data.user);
        
        // this.user = this.route.snapshot.data.userData; 
        // this._store.dispatch(new GetUser(this.route.snapshot.data.userData))
    }

    getRepos(): void {
        this.userService.getUserRepos(this.user.login).subscribe(repos => {
            this.repos = repos;
            this.router.navigate([`user/${this.user.login}/repos`]);
        })
    }

    banUser():void {
        localStorage.setItem('login', this.user.login);
    }
}