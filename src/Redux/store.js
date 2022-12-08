import { applyMiddleware, combineReducers, legacy_createStore, compose } from "redux";
import thunk from "redux-thunk";
import { reducer as AppRedux } from "./AppRedux/reducer";
import { reducer as AuthRedux }  from "./AuthRedux/reducer"
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({ AppRedux, AuthRedux })

const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose);

const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export {store}