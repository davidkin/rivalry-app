import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URl } from 'src/app/shared/config';
import { IUser } from 'src/app/shared/interfaces/user';
import { Observable } from 'rxjs';
import { IRepos } from 'src/app/shared/interfaces/repos';
import { Router } from '@angular/router';

@Injectable ()
export class UserService {
    login: string;
    constructor(private http: HttpClient, private router: Router) {}

    getUserByLogin(login: string): Observable<IUser> {
        return this.http.get<IUser>(`${API_URl}/users/${login}`);
    }

    getUserRepos(login: string): Observable<IRepos> {
        return this.http.get<IRepos>(`${API_URl}/users/${login}/repos`);
    }
}