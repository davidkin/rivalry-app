import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

import { UserComponent } from './user.component';

import { UserService } from './user.service';
import { UserResolveService } from './user-resolve.service';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';
import { UserReposComponent } from './userRepos/userRepos.component';


@NgModule({
    declarations: [UserComponent, UserReposComponent],
    imports: [ 
        CommonModule,
        MatTableModule,
        MatCardModule,
        MatButtonModule,
        AppRoutingModule,
        RouterModule,
        MatListModule
    ],
    exports: [UserComponent, UserReposComponent],
    providers: [UserService, UserResolveService]
})

export class UserModule {}