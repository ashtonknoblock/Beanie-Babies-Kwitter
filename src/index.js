import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducer.js'
import App from './App.js';


let store = createStore(reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();

// class App extends Component {
//     render() {
//       return (
//         <div className="App">
//           <header className="App-header">
            
//             <h1 className="App-title">Welcome to React</h1>
//           </header>
//           <p className="App-intro">
//             To get started, edit <code>src/App.js</code> and save to reload.
//           </p>
//         </div>
//       );
//     }
//   }

export default store;
