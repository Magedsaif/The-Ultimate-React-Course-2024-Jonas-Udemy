import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk"; // Correctly import the named export 'thunk'
import accountReducer from "./features/account/accountSlice";
import customerReducer from "./features/customers/customerSlice";



const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
