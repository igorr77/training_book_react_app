import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthorFakeInfo, findById, GenreFakeInfo} from '../FakeInfo';

import '../../App.css';

const BookList = () => {
    const [items, setItems] = useState([]);
    const [authors, setAuthors] = useState([]);

    const url = 'http://localhost:8080/book/list';
    const urlAuthor = 'http://localhost:8080/author';
    const urlGenre = 'http://localhost:8080/genre';

    useEffect(() => {
        // fake
        //setItems(BookFakeInfo);
        // real
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItems(data);
            })
    }, []);


    const getAuthor = (list) => {
        let s = list.reduce((l1,l2) => l1.lastName+", "+l2.lastName);
        return s.toString();
    }

    return (
        <div>
            <h2>Books list</h2>
            <table>
                <thead>
                <tr>
                    <th>TITLE</th>
                    <th>AUTHOR</th>
                    <th>GENRE</th>
                    <th>NOTES</th>
                </tr>
                </thead>
                <tbody>
                {
                    items.map(p => (
                        <tr key={p.id}>
                            <td>
                                <Link to={`/book/${p.id}`}>{p.title}</Link>
                            </td>
                            <td>
                                {getAuthor(p.authorList)}
                            </td>
                            <td>{p.genre.name}</td>
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