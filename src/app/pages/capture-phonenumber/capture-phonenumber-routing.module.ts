import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CapturePhonenumberComponent } from './capture-phonenumber.component';

const routes: Routes = [
  {
    path: '',
    component: CapturePhonenumberComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CapturePhonenumberRoutingModule { }
