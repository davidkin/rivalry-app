import {Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  login: string;

  constructor(private router: Router){}
  
  openUser(login){
    this.router.navigate([`user/${login}`]);
  }
}