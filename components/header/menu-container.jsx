/* eslint
    indent: [2, 2],
    semi: [2, "always"],
    react/jsx-indent: [2, 2],
    react/jsx-indent-props: [2, 2]
    max-nested-callbacks: [2, { "max": 4 }]
*/
import { useReducer } from "react";
import { flow } from "lodash/fp";
import Menu from "components/header/menu";
import Login from "components/header/login";
import Signup from "components/header/signup";
import Contact from "components/header/contact";
import {
  open,
  close,
  reducer,
  initialState,
} from "components/header/menu-reducer";

function MenuContainer() {
  const [state, dispatch] = useReducer(reducer, initialState());

  function openMenu({ currentTarget }) {
    return flow([open, dispatch])(currentTarget);
  }

  function closeMenu() {
    return dispatch(close());
  }

  return (
    <Menu state={state} actions={{ openMenu, closeMenu }}>
      <Contact />
      <Login />
      <Signup />
    </Menu>
  );
}

export default MenuContainer;
