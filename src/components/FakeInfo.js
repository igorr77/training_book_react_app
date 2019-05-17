import React from 'react';

export const AuthorFakeInfo = [
  { "id": "A1", "firstname": "Firstname1", "surname": "Surname1", "lastname": "Lastname1", "genrelist": [{"id":"G2"}], "booklist": [{"id":"B1"}] },
  { "id": "A2", "firstname": "Firstname2", "surname": "Surname2", "lastname": "Lastname2", "genrelist": [{"id":"G3"},{"id":"G1"}], "booklist": [] },
  { "id": "A3", "firstname": "Firstname3", "surname": "Surname3", "lastname": "Lastname3", "genrelist": [{"id":"G1"}], "booklist": [] }
]

export const GenreFakeInfo = [
  {"id":"G1", "name":"GenreName1", "description":"GenreDescription1"},
  {"id":"G2", "name":"GenreName2", "description":"GenreDescription2"},
  {"id":"G3", "name":"GenreName3", "description":"GenreDescription3"}
]

export const BookFakeInfo = [
  {"id":"B1", "title":"BookTitle1", "genre":"G1", "authorList":[{"id":"A1"}, {"id":"A2"}], "noteList":[{"id":"B1N1","text":"NoteText1"},{"id":"B1N2","text":"NoteText2"}], "description":"BookDescription1"},
  {"id":"B2", "title":"BookTitle2", "genre":"G2", "authorList":[{"id":"A2"}, {"id":"A3"}], "noteList":[{"id":"B2N1","text":"NoteText1"},{"id":"B2N2","text":"NoteText2"}], "description":"BookDescription2"},
  {"id":"B2", "title":"BookTitle2", "genre":"G3", "authorList":[{"id":"A3"}, {"id":"A1"}], "noteList":[{"id":"B3N1","text":"NoteText1"},{"id":"B3N2","text":"NoteText2"}], "description":"BookDescription3"}
]

// f()
export const findById = (arr, id) => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].id === id) {
      return arr[i];
    }
  }
  return;
}


