import { createContext, useReducer } from "react";

const ACTION = {
  SET_TOGGLE: "SET_TOGGLE",
  SET_TOGGLE_NAVBAR: "SET_TOGGLE_NAVBAR"
}

const initialValue = {
  toggle: true,
  toggleNavbar: true
};



export const Context = createContext();

const reducer = (state = initialValue, action) => {
  const { type, payload } = action;
  console.log('type', type)
  console.log('payload', payload)
  console.log('ACTION', ACTION)
  switch (type) {
    case ACTION.SET_TOGGLE:

      return { ...state, toggle: payload}
    case ACTION.SET_TOGGLE_NAVBAR:
      console.log('inside SET_TOGGLE_NAVBAR')
      return { ...state, toggleNavbar: payload}

    default:
      return { state };
  }
};


const Provider = ({ children }) => {
  const [ state, dispatch ] = useReducer(reducer, initialValue)

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  )
}

export default Provider