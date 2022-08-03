import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Context}  from "./context";

const root = ReactDOM.createRoot(document.getElementById('root'));

function MyApp() {

  const [gridData, setGridData] = React.useState([]);
  const [start, setStart] = React.useState(false);

  return (
    <Context.Provider value={{gridData, setGridData, start, setStart}}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Context.Provider>
  );
}


root.render(
  <MyApp />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
