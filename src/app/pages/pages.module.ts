import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule, StoreFeatureModule } from '@ngrx/store';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { menuReducer } from '../store/reducers';

@NgModule({
  declarations: [PagesComponent],
  imports: [CommonModule, PagesRoutingModule, StoreModule.forFeature('menuReducer', menuReducer)]
})
export class PagesModule {}
