import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxViaCepModule as ViaCepModule } from '@ksakira10/ngx-via-cep';
import { NgxViaCepRoutingModule } from './ngx-via-cep-routing.module';
import { NgxViaCepComponent } from './ngx-via-cep.component';

@NgModule({
  declarations: [NgxViaCepComponent],
  imports: [
    CommonModule,
    NgxViaCepRoutingModule,
    ViaCepModule
  ]
})
export class NgxViaCepModule { }
