import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxViaCepComponent } from './ngx-via-cep.component';

const routes: Routes = [
  {
    path: '',
    component: NgxViaCepComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgxViaCepRoutingModule { }
