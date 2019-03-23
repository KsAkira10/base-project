import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CapturePhonenumberRoutingModule } from './capture-phonenumber-routing.module';
import { CapturePhonenumberComponent } from './capture-phonenumber.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CapturePhonenumberComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CapturePhonenumberRoutingModule
  ]
})
export class CapturePhonenumberModule { }
