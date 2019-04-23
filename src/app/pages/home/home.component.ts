import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { IAppState } from 'src/app/store/state/app.state';
import { Store } from '@ngrx/store';
import { GetUser } from 'src/app/store/action/user.action';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  login: string;

  constructor(
    private router: Router,
    private _store: Store<IAppState>
    ){}
  
  openUser(login: string): void {
    this._store.dispatch(new GetUser(login));
  }
}