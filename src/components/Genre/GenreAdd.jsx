import React, {useState} from 'react';
import '../../App.css';


const GenreAdd = ({history}) => {

    const [description, setDescription] = useState(null);
    const [name, setName] = useState(null);
    const [responce, setResponce] = useState(null);

    const handleChangeName = e => {
        setName(e.target.value);
    }
    const handleChangeDescription = e => {
        setDescription(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        let url = 'http://localhost:8080/genre/add';
        let data = JSON.stringify({'name': name, 'description': description});

        fetch(url, {
            method: 'post',
            headers: {"Content-type": "application/json"},
            body: data
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setResponce(data);
            })
            .then(() => {
                history.push("/genre");
            })


    }

    const handleCancel = e => {
        history.push("/genre");
    }

    return (
        <form id="add-genre-form" method="post" onSubmit={handleSubmit}>
            <label className="App-view-item"> NAME: </label>
            <input type="text" name="name" onChange={handleChangeName}/>
            <p/>
            <label className="App-view-item">DESCRIPTION: </label>
            <input type="text" name="description" onChange={handleChangeDescription}/>
            <p/>
            <p>
                <input type="submit" value="Save"/> <input type="button" value="Cancel" onClick={handleCancel}/>
            </p>

        </form>

    )
}

export default GenreAdd;