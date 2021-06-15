import './App.css';
import { loadMicroApp } from 'qiankun';

function goChildren(path) {
  window.location.href = path;
}

function loadVue() {
  loadMicroApp({
    name: 'vueApp',
    entry: '//localhost:8080',
    container: '#container',
  });
}

function App() {
  return (
    <div className="App">
      <div>
        <div className="title">主应用</div>
        <div className="menu">
          <button onClick={()=> goChildren("/app-react")}>react子应用</button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={loadVue}>vue子应用</button>
        </div>
      </div>
      <div id="container"></div>
    </div>
  );
}

export default App;
