import React, {useEffect, useState} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Book from './Book';
import BookList from './BookList';
import '../../App.css';


const Books = () => (
  <section>
    <Switch>
      <Route exact path='/book' component={BookList}/>
      <Route path='/book/:id' component={Book}/>
    </Switch>
  </section>
)

// <!--Link to={'/genre/${p.id}'}>{p.name}</Link-->

export default Books;