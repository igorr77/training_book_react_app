import React, { useEffect, useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Books from './Books';
import { AuthorFakeInfo, BookFakeInfo, findById } from '../FakeInfo';

import '../../App.css';

const BookList = () => {
  const [items, setItems] = useState([]);


  const getRealData = () => {
    fetch('http://localhost:8080/book/list')
      .then(res => res.json())
      .then(data => {
        return data;
      })
  }


  //
  const getBookList = () => {
    return BookFakeInfo;
  }

  const getAuthorById = (id) => {
    let a = findById(AuthorFakeInfo, id);
    return a.lastname + " " + a.firstname.charAt(1) + " " + a.surname.charAt(1);
  }

  useEffect(() => {
    setItems(getBookList());
  })

  return (
    <div>
      <h2>Books list</h2>
      <table>
        <thead>
        <th>TITLE</th>
        <th>AUTHOR</th>
        <th>GENRE</th>
        <th>NOTES</th>
        </thead>
        <tbody>
        {
          items.map(p => (
            <tr>
              <td>
                <Link to={`/book/${p.id}`}>{p.title}</Link>
              </td>
              <td>
                <Link to={`/author/${p.authorList[0].id}`}>{getAuthorById(p.authorList[0].id)}</Link>
              </td>
              <td>{p.authorList.length}</td>
              <td>{p.noteList.length}</td>
            </tr>
          ))
        }

        </tbody>
      </table>
      <p>
        <Link to={'/book/0'}>Add</Link>
      </p>
      <p>
        <Link to='/'>Back</Link>
      </p>
    </div>
  );
}

export default BookList;