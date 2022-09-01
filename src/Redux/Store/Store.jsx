import { createStore } from "redux";
import { combineReducers } from "redux";
import ReduxThunk from "redux-thunk";
import { applyMiddleware } from "redux";
import { Gymreducer } from "../Reducer/Gymreducer";

const allReducers = combineReducers(
    {
        Gymreducer,
    }
)

export const Store = createStore(allReducers, applyMiddleware(ReduxThunk))