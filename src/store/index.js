// Import hàm khởi tạo store redux
import { createStore, combineReducers } from "redux";
import gameOanTuTiReducer from "./reducers/gameOanTuTiReducer";

// Khởi tạo root reducer (quản lý các reducer)
// key: value
const rootReducer = combineReducers({
    gameOanTuTiReducer, // shoeShopReducer: shoeShopReducer
    // gameXucXacReducer,
});

// Khởi tạo store (quản lý root reducer)
const store = createStore(
  rootReducer,
  // setup redux devtools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
