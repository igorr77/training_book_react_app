import React, {useEffect, useState} from 'react';
import '../../App.css';
import {AuthorFakeInfo, findById} from '../FakeInfo';


const AuthorView = ({info, history}) => {

    // fake info
    const getFakeAuthor = (id) => {
        return findById(AuthorFakeInfo, id);
    }

    //
    const [author, setAuthor] = useState({});
    const [genre, setGenre] = useState({});

    const urlAuthor = 'http://localhost:8080/author/';
    const urlGenre = 'http://localhost:8080/genre/';
    useEffect(() => {
        fetch(urlAuthor + info.id)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAuthor(data);
                return data.genreList[0].id;
            })
            .then((id) => {
                console.log("genreId"+id);
                if (id !== null) {
                    fetch(urlGenre + id)
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            setGenre(data);
                        })
                }
            })

    }, []);


    const refBack = () => {
        history.goBack();
    }

    return (
        <article>
            <p className="App-view-item">AUTHOR VIEW:</p>
            <label className="App-view-item">ID: </label> {info.id} <p/>
            <label className="App-view-item">FIRSTNAME: </label> {author.firstName} <p/>
            <label className="App-view-item">SURNAME: </label> {author.surName} <p/>
            <label className="App-view-item">LASTNAME: </label> {author.lastName} <p/>
            <label classMName="App-view-item">GENRE: </label> {genre.name}
            <p/>
            <a className="App-a-click" onClick={refBack}>Back</a>
        </article>
    )
}

export default AuthorView;