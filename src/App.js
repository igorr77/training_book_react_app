// дополнительно поставить пакет: npm install --save react-router-dom

import React, { useEffect, useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Authors from './components/Author/Authors';
import Genres from './components/Genre/Genres';
import Books from './components/Book/Books';
import Home from './components/Home/Home';
import './App.css';


//
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/book' component={Books} />
      <Route path='/author' component={Authors} />
      <Route path='/genre' component={Genres} />
    </Switch>
  </main>
)

const Header = () => (
  <header class="App-header-page">
    Header
  </header>
)

const Footer = () => (
  <footer class="App-footer-page">
      &copy; 2019 Otus SpringFramework
  </footer>
)

const App = () => (
  <div id="wrapper">
    <Header />
    <Main />
    <Footer />
  </div>
)

export default App;