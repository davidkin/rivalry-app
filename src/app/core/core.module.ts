
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { appReducer } from '../store/reducers/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from '../store/effects/user.effects';
import { ReposEffects } from '../store/effects/repos.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from 'src/environments/environment';

@NgModule({
    declarations: [],
    imports: [ 
        CommonModule,
        HttpClientModule,
        BrowserAnimationsModule,
        StoreModule.forRoot(appReducer),
        EffectsModule.forRoot([ UserEffects,ReposEffects ]),
        StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    ],
})
export class CoreModule {}