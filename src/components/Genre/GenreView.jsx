import React, {useEffect, useState} from 'react';
import '../../App.css';
//import {findById, GenreFakeInfo} from "../FakeInfo";


const GenreView = ({ info, history }) => {

  const [genre, setGenre] = useState({});

  const url = 'http://localhost:8080/genre/';
  useEffect(() => {
    fetch(url + info.id)
        .then(res => res.json())
        .then(data => {
          setGenre(data);
        })
  }, []);


  const getGenre = (id) => {
    //return findById(GenreFakeInfo, id);
    if(genre == null ) return;
    return genre;
  }

  const refGoBack = () => {
    history.goBack();
  }

  return (
    <article>
      <p className="App-view-item">GENRE VIEW:</p>
      <label className="App-view-item">ID: </label>{info.id}<p/>
      <label className="App-view-item">NAME: </label> {getGenre(info.id).name} <p/>
      <label className="App-view-item">DESCRIPTION: </label> {getGenre(info.id).description}
      <p/>
      <a onClick={refGoBack}>Back</a>

    </article>
  )
}

export default GenreView;