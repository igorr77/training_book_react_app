import React, {useEffect, useState} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Genres from './Genres';
import {GenreFakeInfo} from '../FakeInfo';

import '../../App.css';

// <!--Link to={'/genre/${p.id}'}>{p.name}</Link-->

const GenreList = () => {
  const [items, setItems] = useState([]);

  /*
  useEffect(() => {
    fetch('http://localhost:8080/genre/list')
      .then(res => res.json())
      .then(data => {
        setItems(data);
      })
  }, []);

   */

  const getGenreList = () => {
    return GenreFakeInfo;
  }

  useEffect( () => {
    setItems(getGenreList());
  })

  return (
    <div>
      <h2>Genres list</h2>
      <table>
        <thead>
        <th>ID</th>
        <th>NAME</th>
        <th>DESCRIPTION</th>
        </thead>
        <tbody>
        {
          items.map(p => (
            <tr>
              <td>{p.id}</td>
              <td>
                <Link to={`/genre/${p.id}`}>{p.name}</Link>
              </td>
              <td>{p.description}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
      <p>
        <Link to={'/genre/0'}>Add</Link>
      </p>
      <p>
        <Link to='/'>Back</Link>
      </p>
    </div>
  );
}

export default GenreList;