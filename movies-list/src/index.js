import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/* redux store to make it available to our React components by putting 
a React-Redux <Provider> around our application*/
import { Provider } from 'react-redux';  
import { reduxStore } from './features/store'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>
);


