import React, { useEffect, useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import AuthorAdd from './AuthorAdd';
import AuthorView from './AuthorView';
import '../../App.css';

const Author = ({history, match:{params}}) => {
  return (
    <article>
      {params.id === "0" && <AuthorAdd history={history}/>}
      {params.id !== "0" && <AuthorView info={params} history={history}/>}
      <p />

    </article>
  )
}

//<Link to='/author'>Back</Link>

export default Author;