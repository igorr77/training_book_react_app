import React, { useEffect, useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Authors from './Authors';
import {AuthorFakeInfo} from '../FakeInfo';

import '../../App.css';

const AuthorList = () => {
  const [items, setItems] = useState([]);



  const getRealData = () => {
    fetch('http://localhost:8080/genre/list')
      .then(res => res.json())
      .then(data => {
        return data;
      })
  }


  //
  const getAuthorList = () => {
    return AuthorFakeInfo;
  }

  useEffect(() => {
    setItems(getAuthorList());
  })

  return (
    <div>
      <h2>Authors list</h2>
      <table>
        <thead>
        <th>NAME</th>
        <th>GENRES</th>
        <th>BOOKS</th>
        </thead>
        <tbody>
        {
          items.map(p => (
            <tr>
              <td>
                <Link to={`/author/${p.id}`}>{p.lastname + ' ' + p.firstname + ' '+p.surname}</Link>
              </td>
              <td>{p.genrelist.length}</td>
              <td>{p.booklist.length}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
      <p>
        <Link to={'/author/0'}>Add</Link>
      </p>
      <p>
        <Link to='/'>Back</Link>
      </p>
    </div>
  );
}

export default AuthorList;