import React, { useEffect, useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import BookAdd from './BookAdd';
import BookView from './BookView';
import '../../App.css';

const Book = ({history, match:{params}}) => {
  return (
    <article>
      {params.id === "0" && <BookAdd history={history}/>}
      {params.id != "0" && <BookView info={params} history={history}/>}
      <p />
      <Link to='/book'>Back</Link>
    </article>
  )
}

export default Book;