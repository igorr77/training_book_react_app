import React, {useEffect, useState} from 'react';
import '../../App.css';


const AuthorAdd = ({history}) => {

    // form
    const [firstname, setFirstName] = useState(null);
    const [surname, setSurName] = useState(null);
    const [lastname, setLastName] = useState(null);
    const [genre, setGenre] = useState([]);
    //
    const [genres, setGenres] = useState([]);

    //
    useEffect(() => {
        // fake
        //setGenres(GenreFakeInfo);
        // real
        fetch('http://localhost:8080/genre/list')
            .then(res => res.json())
            .then(data => {
                setGenres(data);
            })
    }, []);


    //
    const handleChangeFirstName = e => {
        setFirstName(e.target.value);
    }

    const handleChangeSurName = e => {
        setSurName(e.target.value);
    }

    const handleChangeLastName = e => {
        setLastName(e.target.value);
    }

    const handleChangeGenre = e => {
        console.log("!!!!!!!!!!!!!!!"+e.target.value);
        setGenre(e.target.value);
    }

    const handleCancel = e => {
        history.push("/author");
    }


    const handleSubmit = e => {

        e.preventDefault();

        const url = 'http://localhost:8080/author/add';

        let data = JSON.stringify({
            'firstName': firstname,
            'surName': surname,
            'lastName': lastname,
            'genreList': [{'id': genre}]
        });

        fetch(url, {
            method: 'post',
            headers: {"Content-type": "application/json"},
            body: data
        })
            .then(res => res.json())
            .then(data => {
                history.push("/author");
            })
            .catch(err => {
                console.log(">>>>>>>>> "+err);
            })

    }

    return (
        <form id="add-genre-form" method="post" onSubmit={handleSubmit}>
            <label>
                Firstame: <input type="text" name="firstname" onChange={handleChangeFirstName}/>
            </label>
            <p/>
            <label>
                Surname: <input type="text" name="surname" onChange={handleChangeSurName}/>
            </label>
            <p/>
            <label>
                Lastname: <input type="text" name="lastname" onChange={handleChangeLastName}/>
            </label>
            <p/>
            <p>
                <select multiple name="genre[]"  onChange={handleChangeGenre}>
                    {
                        genres.map(p => (
                            <option key={p.id} value={p.id}>{p.name}</option>
                        ))
                    }
                </select>
            </p>
            <p/>
            <p>
                <input type="submit" value="Save"/> <input type="button" value="Cancel" onClick={handleCancel}/>
            </p>
        </form>

    )
}

export default AuthorAdd;