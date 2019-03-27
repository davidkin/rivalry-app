import {Injectable} from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/shared/interfaces/user';
import { UserService } from './user.service';

@Injectable()
export class UserResolveService implements Resolve<IUser>{
    constructor(private userService: UserService){ }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> {
        return this.userService.getUserByLogin(route.params.login);
    }
}