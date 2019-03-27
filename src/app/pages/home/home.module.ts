import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule }from '@angular/forms';

import { HomeComponent } from './home.component';
import { HomeService } from './home.service';

@NgModule ({
    declarations:[HomeComponent],
    imports: [
        CommonModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        FormsModule
    ],
    exports:[HomeComponent],
    providers:[HomeService],
})

export class HomeModule {}
