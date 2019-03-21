import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuState } from '../store/reducers';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  menu$: Observable<MenuState>;
  menu: MenuState;

  constructor(private store: Store<{ menuReducer: MenuState }>) {
    this.menu$ = this.store.pipe(select('menuReducer'));
  }

  ngOnInit() {
    this.registerMenu$();
  }

  private registerMenu$() {
    this.menu$.subscribe((menu: MenuState) => {
      this.menu = menu;
    });
  }

}
