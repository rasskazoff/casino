import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Helmet} from 'react-helmet';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Helmet>
      <script src="https://telegram.org/js/telegram-web-app.js"></script>
      <script>
        let tg = window.Telegram.WebApp; //получаем объект webapp телеграма 
        tg.expand(); //расширяем на все окно
      </script>
    </Helmet>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
