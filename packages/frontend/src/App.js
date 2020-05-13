import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AyahList } from './components/AyahList';
import { SurahList } from './components/SurahList';
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

    <BrowserRouter>
        <main>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/surah">Surah</a></li>
            </ul>
          </nav>

          <Route path="/" render={() => <h1>Welcome!</h1>} />
          <Route path="/surah" component={SurahList} />
          <Route path="/ayah/:surahNumber" component={AyahList} />
        </main>
    </BrowserRouter>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
