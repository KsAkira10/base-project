import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'ngx-via-cep',
        loadChildren: './ngx-via-cep/ngx-via-cep.module#NgxViaCepModule'
      },
      {
        path: 'capture-phonenumber',
        loadChildren: './capture-phonenumber/capture-phonenumber.module#CapturePhonenumberModule'
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'ngx-via-cep'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
