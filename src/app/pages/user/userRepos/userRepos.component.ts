import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { IRepos } from 'src/app/shared/interfaces/repos';
import { UserComponent } from '../user.component';

@Component({
    selector: 'userRepos',
    templateUrl: './userRepos.component.html',
    styleUrls: ['./userRepos.component.scss']
})

export class UserReposComponent implements OnInit{
    repos: IRepos;

    constructor (private router: Router, private userService: UserService, private userComp: UserComponent) {}

    ngOnInit(): void {
        this.repos = this.userComp.repos;
    }
}
