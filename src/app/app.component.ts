import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { IAppState } from './store/state/app.state';
import { GetRepos } from './store/action/repos.action';
import { selectRepos } from './store/selectors/repos.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'rivalry-app';
  config$ = this._store.pipe(select(selectRepos));

  constructor(private _store: Store<IAppState>){}

  ngOnInit() {
    this._store.dispatch(new GetRepos());
  }
}
