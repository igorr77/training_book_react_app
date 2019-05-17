import React, {useEffect, useState} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Author from './Author';
import AuthorList from './AuthorList';
import '../../App.css';


const Authors = () => (
  <section>
    <Switch>
      <Route exact path='/author' component={AuthorList}/>
      <Route path='/author/:id' component={Author}/>
    </Switch>
  </section>
)

// <!--Link to={'/genre/${p.id}'}>{p.name}</Link-->

export default Authors;