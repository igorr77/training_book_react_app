import React, { useEffect, useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import '../../App.css';


const GenreAdd = ({ history }) => {

  const [description, setDescription] = useState(null);
  const [name, setName] = useState(null);

  const fakeGenre = { "name": "GenreName", "description": "Description" };

  const handleChangeName = e => {
    setName(e.target.value);
  }
  const handleChangeDescription = e => {
    setDescription(e.target.value);
  }

  const handleSubmit = e => {
    alert(name+"&"+description);
    e.preventDefault();
    console.log("qqqqqqqqqqqqqqqqqqqq");

    let url = 'http://localhost:8080/genre/add';

    // var data = new FormData();
    // data.append('foo', 'Foo');
    // data.append('bar', 'Bar');
    let data = "";
    data = data.concat('name=',name);
    data = data.concat('&description=', description);

    alert(data);

    fetch(url, {
      method: 'post',
      headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" },
      //body: 'foo=foo&bar=bar',
      //headers: { "Content-type": "application/json" },
      //body: JSON.stringify({ foo: 'Foo', bar: 'Bar' })
      body: data
    })
      .then(res => res.json())
      .then(data => {
        //setItems(data);
      })
    history.push("/genre");
  }

  return (
    <form id="add-genre-form" method="post" onSubmit={handleSubmit}>
      <label>
        Name: <input type="text" name="name" onChange={handleChangeName}/>
      </label>
      <p />
      <label>
        Description: <input type="text" name="description" onChange={handleChangeDescription} />
      </label>
      <p><input type="submit" value="Save" /></p>
    </form>

  )
}

export default GenreAdd;