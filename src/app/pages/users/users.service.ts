import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URl } from 'src/app/shared/config';
import { IUser } from 'src/app/shared/interfaces/user';
import { Observable } from 'rxjs';

@Injectable ()
export class UserService {
    constructor(private http: HttpClient) {}

    loadUser(): Observable<IUser[]> {
        return this.http.get<IUser[]>(`${API_URl}/users/motifej`);
    }
}