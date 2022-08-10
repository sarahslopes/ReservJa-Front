import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApartamentsRoutingModule } from './apartaments-routing.module';
import { ApartamentsComponent } from './apartaments/apartaments.component';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    ApartamentsComponent
  ],
  imports: [
    CommonModule,
    ApartamentsRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule

  ]
})
export class ApartamentsModule { }
