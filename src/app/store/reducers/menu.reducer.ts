import { MenuActionTypes, MenuActions } from '../actions';

export interface MenuState {
  open: boolean;
  closed: boolean;
}

const initialState: MenuState = {
  open: false,
  closed: true
};

export function menuReducer(
  state: MenuState = initialState,
  action: MenuActions
): MenuState {
  switch (action.type) {
    case MenuActionTypes.Open:
      return {
        ...state,
        open: true,
        closed: false
      };
    case MenuActionTypes.Close:
    default:
      return {
        ...state,
        open: false,
        closed: true
      };
  }
}
