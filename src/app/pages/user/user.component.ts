import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/shared/interfaces/user';
import { UserService } from './user.service';
import { IRepos } from 'src/app/shared/interfaces/repos';
@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    user: IUser;
    repos: IRepos;
    constructor( private route: ActivatedRoute, private userService: UserService, private router: Router) { }

    ngOnInit(): void { 
        this.user = this.route.snapshot.data.userData; 
    }

    getRepos(): void{
        this.userService.getUserRepos(this.user.login).subscribe(repos => {
            this.repos = repos;
            this.router.navigate([`user/${this.user.login}/repos`]);
        })
    }

    banUser():void {
        localStorage.setItem('login', this.user.login);
    }
}