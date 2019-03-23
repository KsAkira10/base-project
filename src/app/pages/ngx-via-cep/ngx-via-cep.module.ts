import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxViaCepModule as ViaCepModule } from '@ksakira10/ngx-via-cep';
import { NgxViaCepRoutingModule } from './ngx-via-cep-routing.module';
import { NgxViaCepComponent } from './ngx-via-cep.component';

@NgModule({
  declarations: [NgxViaCepComponent],
  imports: [
    CommonModule,
    NgxViaCepRoutingModule,
    HttpClientModule,
    ViaCepModule.forRoot(null),
    ReactiveFormsModule
  ]
})
export class NgxViaCepModule {}
