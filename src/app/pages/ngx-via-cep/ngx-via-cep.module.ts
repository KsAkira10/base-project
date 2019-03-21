import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NgxViaCepModule as ViaCepModule,
  NgxViaCepConfiguration
} from '@ksakira10/ngx-via-cep';
import { NgxViaCepRoutingModule } from './ngx-via-cep-routing.module';
import { NgxViaCepComponent } from './ngx-via-cep.component';

@NgModule({
  declarations: [NgxViaCepComponent],
  imports: [
    CommonModule,
    NgxViaCepRoutingModule,
    HttpClientModule,
    ViaCepModule.forRoot(
      () => new NgxViaCepConfiguration({ basePath: 'https://viacep.com.br/ws' })
    ),
    ReactiveFormsModule
  ]
})
export class NgxViaCepModule {}
