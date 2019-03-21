import { Action } from '@ngrx/store';

export enum MenuActionTypes {
  Open = '[Menu] Open Menu',
  Close = '[Menu] Close Menu'
}

export class OpenMenuAction implements Action {
  readonly type = MenuActionTypes.Open;

  constructor() {}
}

export class CloseMenuAction implements Action {
  readonly type = MenuActionTypes.Close;

  constructor() {}
}

export type MenuActions = OpenMenuAction | CloseMenuAction;
