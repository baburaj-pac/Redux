import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
//import ResultReducer from './Reducers/ResultReducer';
//import CounterReducer from './Reducers/CounterReducer';
import EmployeeState from './Reducers/EmployeeState';
import DeptState from './Reducers/DepartmentState';

/*const reducers = combineReducers({
  cntrReducer: CounterReducer,
  resReducer: ResultReducer
})*/


const reducers = combineReducers({
  empReducer: EmployeeState,
  deptReducer:DeptState
  
})

const store = createStore(reducers);
store.subscribe(()=>console.log("testing"));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
