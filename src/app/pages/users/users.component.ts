import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/user';
import { UserService } from './users.service';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  list: IUser[];
  constructor(private userService: UserService) {}
  
  ngOnInit() {
    this.userService.loadUser().subscribe(data => {
      this.list = data
    })
  }
}