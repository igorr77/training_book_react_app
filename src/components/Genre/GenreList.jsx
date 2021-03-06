import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import '../../App.css';

// <!--Link to={'/genre/${p.id}'}>{p.name}</Link-->

const GenreList = () => {
    const [items, setItems] = useState([]);


    useEffect(() => {
        // fake
        //setItems(GenreFakeInfo);
        // real
        fetch('http://localhost:8080/genre/list')
            .then(res => res.json())
            .then(data => {
                setItems(data);
            })
    }, []);

    return (
        <div>
            <h2>Genres list</h2>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>DESCRIPTION</th>
                </tr>
                </thead>
                <tbody>
                {
                    items.map(p => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>
                                <Link to={`/genre/${p.id}`}>{p.name}</Link>
                            </td>
                            <td>{p.description}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <p>
                <Link to={'/genre/0'}>Add</Link>
            </p>
            <p>
                <Link to='/'>Back</Link>
            </p>
        </div>
    );
}

export default GenreList;