import React, { useEffect, useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import GenreAdd from './GenreAdd';
import GenreView from './GenreView';
import '../../App.css';


// <!--Link to={'/genre/${p.id}'}>{p.name}</Link-->

const Genre = ({history, match:{params}}) => {
  return (
    <article>
      {params.id === "0" && <GenreAdd history={history}/>}
      {params.id !== "0" && <GenreView info={params} history={history}/>}
    </article>
  )
}

export default Genre;