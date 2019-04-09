import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';

import { CoreModule } from './core/core.module';

import { UserModule } from './pages/user/user.module';
import { HomeModule } from './pages/home/home.module';
import { AllowedGuard } from './core/allowed.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    UserModule,
    HomeModule,
    StoreModule
  ],
  providers: [AllowedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
