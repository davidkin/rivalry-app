import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users.component';
import { UserComponent } from './user/user.component';

import { UserService } from './users.service';

@NgModule({
    declarations: [UsersComponent, UserComponent],
    imports: [ 
        CommonModule 
    ],
    exports: [UsersComponent, UserComponent],
    providers: [UserService]
})

export class UserModule {}