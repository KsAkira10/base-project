import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MenuState } from './store/reducers';
import { Observable } from 'rxjs';
import { OpenMenuAction, CloseMenuAction } from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent implements OnInit {
  title = 'Base Project';
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

  private openMenu() {
    this.store.dispatch<OpenMenuAction>(new OpenMenuAction());
  }

  private closeMenu() {
    this.store.dispatch<CloseMenuAction>(new CloseMenuAction());
  }

  handleOnClick() {
    if (this.menu.closed) {
      this.openMenu();
    } else {
      this.closeMenu();
    }
  }
}
