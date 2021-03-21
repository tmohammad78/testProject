import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';
import App from './App';
import './styles/main.scss';
import AppProviders from './context/appProviders'
ReactDOM.render(
  <StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
