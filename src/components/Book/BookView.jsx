import React, { useEffect, useState } from 'react';
import '../../App.css';
import { AuthorFakeInfo, GenreFakeInfo, findById } from '../FakeInfo';



const AuthorView = ({ info, history }) => {

  // fake info
  const getFakeAuthor = (id) => {
    return findById(AuthorFakeInfo,id);
  }


  //

  const getGenreById = (id) => {
    return findById(GenreFakeInfo, id);
  }


  const getAuthor = (id) => {
    return getFakeAuthor(id);
  }

  //<p>GENRE:{getGenreById(getAuthor(info.id).genrelist[0].id)}</p>

  return (
    <article>
      <p>VIEW:</p>
      <p>ID: {info.id}</p>
      <label class="App-view-item">FIRSTNAME: </label> {getAuthor(info.id).firstname} <p />
      <label class="App-view-item">SURNAME: </label> {getAuthor(info.id).surname} <p />
      <label class="App-view-item">LASTNAME: </label> {getAuthor(info.id).lastname} <p />
      <label class="App-view-item">GENRE: </label> {getGenreById(getAuthor(info.id).genrelist[0].id).name}
    </article>
  )
}

export default AuthorView;