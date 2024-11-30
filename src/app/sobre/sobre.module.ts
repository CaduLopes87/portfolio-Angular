import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreComponent } from './sobre.component';
import { RouterModule } from '@angular/router';
import { HomeModule } from '../home/home.module';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    SobreComponent,
  ],
  imports: [
    CommonModule,
    HomeModule,
    RouterModule,

    //Bibliotecas externas
    MatButtonModule,
    MatCardModule,
    MatExpansionModule
  ],
})
export class SobreModule { }
