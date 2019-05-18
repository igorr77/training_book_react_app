import React, {useEffect, useState} from 'react';
import {AuthorFakeInfo, GenreFakeInfo} from '../FakeInfo';
import '../../App.css';


const BookAdd = ({history}) => {

    // list
    const [genres, setGenres] = useState([]);
    const [authors, setAuthors] = useState([]);

    // form
    const [title, setTitle] = useState(null);
    const [author, setAuthor] = useState(null);
    const [genre, setGenre] = useState(null);
    const [description, setDescription] = useState(null);
    //


    //
    const getGenres = () => {
        return GenreFakeInfo;
    }

    const getAuthors = () => {
        return AuthorFakeInfo;
    }

    useEffect(() => {
        setGenres(getGenres());
        setAuthors(getAuthors());
    })

    //
    const handleChangeTitle = e => {
        setTitle(e.target.value);
    }

    const handleChangeAuthor = e => {
        setAuthor(e.target.value);
    }

    const handleChangeGenre = e => {
        setGenre(e.target.value);
    }

    const handleChangeDescription = e => {
        setDescription(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        let url = 'http://localhost:8080/book/add';

        let data = "";
        data = data.concat('title=', title);
        data = data.concat('&author=', author);
        data = data.concat('&genre=', genre);
        data = data.concat('&description=', description);

        fetch(url, {
            method: 'post',
            headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
            body: data,
        })
            .then(res => res.json())
            .then(data => {
                //setItems(data);
            })
        history.push("/book");
    }

    const handleCancel = e => {
        history.push("/book");
    }

    return (
        <form id="add-book-form" method="post" onSubmit={handleSubmit}>
            <label class="App-view-item">TITLE: </label>
            <input type="text" name="title" onChange={handleChangeTitle}/>
            <p/>
            <label className="App-view-item">AUTHOR: </label>
            <select name="author" onChange={handleChangeAuthor}>
                {
                    authors.map(p => (
                        <option value={p.id}>{p.lastname + " " + p.firstname}</option>
                    ))
                }
            </select>
            <p/>
            <label className="App-view-item">GENRE: :</label>
            <select name="genre" onChange={handleChangeGenre}>
                {
                    genres.map(p => (
                        <option value={p.id}>{p.name}</option>
                    ))
                }
            </select>
            <p/>
            <label className="App-view-item">DESCRIPTION: :</label>
            <input type="text" name="genre" onChange={handleChangeDescription}/>
            <p/>
            <p>
                <input type="submit" value="Save"/> <input type="button" value="Cancel" onClick={handleCancel}/>
            </p>
        </form>

    )
}

export default BookAdd;