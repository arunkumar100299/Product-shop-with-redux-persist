import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "../ProductDetails"
import cartReducer from "../CartDetails"

const rootReducer = combineReducers({
    product : productReducer,
    cart : cartReducer
})

export default rootReducer;