import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    MatToolbarModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class MaterialModule { }
