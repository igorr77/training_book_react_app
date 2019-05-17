import React, { useEffect, useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import '../../App.css';


const GenreView = ({ info, history }) => {

  const fakeGenre = [
    { "id": "id1", "name": "GenreName1", "description": "Description1" },
    { "id": "id2", "name": "GenreName2", "description": "Description2" }];

  const getFakeGenre = (id) => {
    let n;
    if (id === "id1") {
      n = 0;
    } else {
      n = 1;
    }
    return fakeGenre[n];
  }

  const getGenre = (id) => {
    return getFakeGenre(id);
  }

  return (
    <article>
      <p>VIEW:</p>
      <p>ID:{info.id}</p>
      <p>NAME:{getGenre(info.id).name}</p>
      <p>DESCRIPTION:{getGenre(info.id).description}</p>
    </article>
  )
}


export default GenreView;