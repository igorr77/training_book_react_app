// дополнительно поставить пакет: npm install --save react-router-dom

import React, {useEffect, useState} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import './App.css';


const ItemsList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setItems(data);
            })
    }, []);

    return (
        <div>
            <ul>
                {
                    items.map(p => (
                        <li key={p.id}>
                            <Link to={`/first/${p.id}`}>{p.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

const Item = props => {
    // можно получить инфу по id - props.match.params.id
    const fakeInfo = {
        name: 'Test',
        username: 'test',
        description: 'Blah-blah-blah'
    };

    return (
        <article>
            <h1>{fakeInfo.name} ({fakeInfo.username})</h1>
            <h2>Some info: {fakeInfo.description}</h2>
            <Link to='/first'>Back</Link>
        </article>
    )
}


// Genre

const Genres = () => (
    <section>

        <Switch>
            <Route exact path='/genre' component={GenreList}/>
            <Route path='/genre/:id' component={Genre}/>
        </Switch>

    </section>
)

// <!--Link to={'/genre/${p.id}'}>{p.name}</Link-->

const GenreList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        //fetch('https://jsonplaceholder.typicode.com/users')
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
                <th>ID</th>
                <th>NAME</th>
                <th>DESCRIPTION</th>
                </thead>
                <tbody>
                {
                    items.map(p => (
                        <tr>
                            <td>{p.id}</td>
                            <td>{p.name}</td>
                            <td>{p.description}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <p>
                <Link to='/'>Back</Link>
            </p>
        </div>
    );
}

const Genre = props => {
    // можно получить инфу по id - props.match.params.id
    const fakeInfo = {
        name: 'Test',
        username: 'test',
        description: 'Blah-blah-blah'
    };

    return (
        <article>
            <h1>{fakeInfo.name} ({fakeInfo.username})</h1>
            <h2>Some info: {fakeInfo.description}</h2>
            <Link to='/genre'>Back</Link>
        </article>

    )
}


// Book

const Books = () => (
    <section>

        <Switch>
            <Route exact path='/book' component={BookList}/>
            <Route path='/book/:id' component={Book}/>
        </Switch>

    </section>
)


const BookList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setItems(data);
            })
    }, []);

    return (
        <div>
            <h2>Books list</h2>
            <ul>
                {
                    items.map(p => (
                        <li key={p.id}>
                            <Link to={`/book/${p.id}`}>{p.name}</Link>
                        </li>
                    ))
                }
            </ul>
            <Link to='/'>Back</Link>
        </div>
    );
}

const Book = props => {
    // можно получить инфу по id - props.match.params.id
    const fakeInfo = {
        name: 'Test',
        username: 'test',
        description: 'Blah-blah-blah'
    };

    return (
        <article>
            <h1>{fakeInfo.name} ({fakeInfo.username})</h1>
            <h2>Some info: {fakeInfo.description}</h2>
            <Link to='/book'>Back</Link>
        </article>

    )
}


// Author

const Authors = () => (
    <section>
        <Switch>
            <Route exact path='/author' component={AuthorList}/>
            <Route path='/author/:id' component={Author}/>
        </Switch>
    </section>
)

const AuthorList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setItems(data);
            })
    }, []);

    return (
        <div>
            <h2>Books list</h2>
            <ul>
                {
                    items.map(p => (
                        <li key={p.id}>
                            <Link to={`/author/${p.id}`}>{p.name}</Link>
                        </li>
                    ))
                }
            </ul>
            <Link to='/'>Back</Link>
        </div>
    );
}

const Author = props => {
    // можно получить инфу по id - props.match.params.id
    const fakeInfo = {
        name: 'Test',
        username: 'test',
        description: 'Blah-blah-blah'
    };

    return (
        <article>
            <h1>{fakeInfo.name} ({fakeInfo.username})</h1>
            <h2>Some info: {fakeInfo.description}</h2>
            <Link to='/author'>Back</Link>
        </article>

    )
}

//

const Home = () => (
    <section>
        <p>
            Today is: <span>5 Мая 2019</span>
        </p>

        <p>Please select an option</p>
        <ol>
            <li><Link to='/book'>Books list</Link></li>
            <li><Link to='/author'>Authors list</Link></li>
            <li><Link to='/genre'>Genres list+++</Link></li>
        </ol>


    </section>
)

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/book' component={Books}/>
            <Route path='/author' component={Authors}/>
            <Route path='/genre' component={Genres}/>
        </Switch>
    </main>
)

const Header = () => (
    <header>
        <h3>Header</h3>
    </header>
)

const Footer = () => (
    <footer>
        <h3>Footer</h3>
    </footer>
)

const App = () => (
    <div id="wrapper">
        <Header/>
        <Main/>
        <Footer/>
    </div>
)

export default App;