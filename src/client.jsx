import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import generateStore from "./store";
import React from "react";
import ReactDOM from "react-dom";
import routes from "./routes";
import { ConnectedRouter } from 'connected-react-router';
import {Frontload} from "react-frontload";

const {store, history} = generateStore(window.__INITIAL_DATA__);

window.store = store;
delete window.__INITIAL_DATA__;

const component = (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Frontload>
                {renderRoutes(routes)}
            </Frontload>
        </ConnectedRouter>
    </Provider>
);

ReactDOM.hydrate(component, document.getElementById("main"));
