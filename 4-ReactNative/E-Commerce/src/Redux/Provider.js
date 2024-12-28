import React from "react";
import {Provider} from "react-redux";
import {legacy_createStore as createStore} from "redux";
import Reducer from "./Reducer";
import InitialState from "./Store";

const UserProduct = ({children}) =>{
  const store = createStore(Reducer,InitialState);
    return <Provider store={store}>{children}</Provider>
}
export default UserProduct;