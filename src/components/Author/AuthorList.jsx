import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthorFakeInfo} from "../FakeInfo";
import '../../App.css';

const AuthorList = () => {
    const [items, setItems] = useState([]);


    const url = 'http://localhost:8080/author/list';
    useEffect(() => {
        // fake
        //setItems(AuthorFakeInfo);
        // real
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItems(data);
            })
    }, []);

    return (
        <div>
            <h2>Authors list</h2>
            <table>
                <thead>
                <tr>
                    <th>NAME</th>
                    <th>GENRES</th>
                    <th>BOOKS</th>
                </tr>
                </thead>
                <tbody>
                {
                    items.map(p => (
                        <tr key={p.id}>
                            <td>
                                <Link to={`/author/${p.id}`}>{p.lastName + ' ' + p.firstName + ' ' + p.surName}</Link>
                            </td>
                            <td>{p.genreList.length}</td>
                            <td>{p.bookList.length}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <p>
                <Link to={'/author/0'}>Add</Link>
            </p>
            <p>
                <Link to='/'>Back</Link>
            </p>
        </div>
    );
}

export default AuthorList;