import React from 'react';
// import ReactDOM from 'react-dom'; The new way to import createRoot:
import { createRoot } from "react-dom/client";
import './index.css';
import App from './containers/App';
import 'tachyons';
import { Provider } from 'react-redux';
import { configureStore, Tuple} from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk';
import { searchRobots,logger, requestRobots} from './reducers';


// import registerServiceWorker from './registerServiceWorker';

export const store = configureStore({
  reducer: {
    searchRobots,
    requestRobots,
    logger,
  },
  
  middleware: () => new Tuple(thunk,logger)
  })


const root = createRoot(document.getElementById('root'))
root.render(<Provider store ={store}>
              <App  />
            </Provider>
)


// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
