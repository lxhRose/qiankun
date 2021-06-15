import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { registerMicroApps, start } from 'qiankun';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

registerMicroApps([
  {
    name: 'reactApp',
    entry: '//localhost:8081',
    container: '#container',
    activeRule: '/app-react',
  },
  // {
  //   name: 'vueApp',
  //   entry: '//localhost:8080',
  //   container: '#container',
  //   activeRule: '/app-vue',
  // },
]);
// 启动 qiankun
start();
