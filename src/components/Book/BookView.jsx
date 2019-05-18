import React, {useEffect, useState} from 'react';
import '../../App.css';
import {AuthorFakeInfo, BookFakeInfo, findById, GenreFakeInfo} from '../FakeInfo';


const BookView = ({info, history}) => {

    const [book, setBook] = useState({});


    // fake info
    const getFakeBook = (id) => {
        return findById(BookFakeInfo, id);
    }


    //
    const getAuthor = (id) => {
        return findById(AuthorFakeInfo, id);
    }

    const getAuthorList = (book) => {

        if (book.authorList == null) {
            return;
        }

        let authorList = "";

        for (let i = 0; i < book.authorList.length; i++) {
            let author = getAuthor(book.authorList[i].id);
            if (authorList != "") authorList = authorList.concat(", ");
            authorList = authorList.concat(author.lastname, " ", author.firstname);
        }
        return authorList;
    }

    const getGenre = (id) => {
        return findById(GenreFakeInfo, id).name;
    }


    const getBook = (id) => {
        return getFakeBook(id);
    }


    const refGoBack = () => {
        history.goBack();
    }


    useEffect(() => {
        setBook(getBook(info.id));
    });


    return (
        <article>
            <p class="App-view-item">BOOK VIEW:</p>
            <label class="App-view-item">ID: </label> {book.id}<p/>
            <label class="App-view-item">TITLE: </label> {book.title} <p/>
            <label class="App-view-item">AUTHOR: </label> {getAuthorList(book)} <p/>
            <label class="App-view-item">GENRE: </label> {book.genre} <p/>
            <label class="App-view-item">DESCRIPTION: </label> {book.description} <p/>

            <p/>
            <a onClick={refGoBack}>Back</a>
        </article>
    )
}

export default BookView;