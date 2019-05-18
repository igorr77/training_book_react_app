import React, {useEffect, useState} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Genre from './Genre';
import GenreList from './GenreList';
import '../../App.css';


const Genres = () => (
  <section>
    <Switch>
      <Route exact path='/genre' component={GenreList}/>
      <Route path='/genre/:id' component={Genre}/>
    </Switch>
  </section>
)

export default Genres;