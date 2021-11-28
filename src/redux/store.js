import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers/index";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas/index";
import { persistStore } from "redux-persist";
// import logger from "redux-logger"

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

// if(process.env.NODE_ENV === "development") {
//   middleware.push(logger)
// }

export const store = compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore)(reducers);

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default { store, persistor };
