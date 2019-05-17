import React, { useEffect, useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { GenreFakeInfo } from '../FakeInfo';
import '../../App.css';


const AuthorAdd = ({ history }) => {

  // form
  const [firstname, setFirstName] = useState(null);
  const [surname, setSurName] = useState(null);
  const [lastname, setLastName] = useState(null);
  const [genre, setGenre] = useState(null);
  //
  const [genres, setGenres] = useState([]);

  //
  const getGenres = () => {
    return GenreFakeInfo;
  }

  useEffect(() => {
    setGenres(getGenres());
  })

  //
  const handleChangeFirstName = e => {
    setFirstName(e.target.value);
  }

  const handleChangeSurName = e => {
    setSurName(e.target.value);
  }

  const handleChangeLastName = e => {
    setLastName(e.target.value);
  }

  const handleChangeGenre = e => {
    setGenre(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();

    let url = 'http://localhost:8080/author/add';

    let data = "";
    data = data.concat('firstname=', firstname);
    data = data.concat('&surname=', surname);
    data = data.concat('&lastname=', lastname);
    data = data.concat('&genre=', genre);

    fetch(url, {
      method: 'post',
      headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" },
      body: data,
    })
      .then(res => res.json())
      .then(data => {
        //setItems(data);
      })
    history.push("/author");
  }

  return (
    <form id="add-genre-form" method="post" onSubmit={handleSubmit}>
      <label>
        Firstame: <input type="text" name="firstname" onChange={handleChangeFirstName} />
      </label>
      <p />
      <label>
        Surname: <input type="text" name="surname" onChange={handleChangeSurName} />
      </label>
      <p />
      <label>
        Lastame: <input type="text" name="lastname" onChange={handleChangeLastName} />
      </label>
      <p />
      <p>
        <select name="genre" onChange={handleChangeGenre}>
          {
            genres.map(p => (
              <option value={p.id}>{p.name}</option>
            ))
          }
        </select>
      </p>
      <p />
      <p><input type="submit" value="Save" /></p>
    </form>

  )
}

export default AuthorAdd;