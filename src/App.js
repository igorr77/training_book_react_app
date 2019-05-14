// дополнительно поставить пакет: npm install --save react-router-dom

import React, { Component, useState, useEffect } from 'react';
import {Switch,Route, Link} from 'react-router-dom';
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
        <h2>Genres list</h2>
        <Switch>
            <Route exact path='/genre/list' component={GenreList}/>
            <Route path='/genre/:id' component={Item}/>
        </Switch>
        <Link to='/'>Back</Link>
    </section>
)


const GenreList = () => {
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
                            <Link to={`/genre/${p.id}`}>{p.name}</Link>
                        </li>
                    ))
                }
            </ul>
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
            <Link to='/genre/list'>Back</Link>
        </article>

    )
}


//
const Books = () => (
    <section>
      <h2>Books list</h2>
      <Switch>
        <Route exact path='/first' component={ItemsList}/>
        <Route path='/first/:id' component={Item}/>
      </Switch>
      <Link to='/'>Back</Link>
    </section>
)

const Authors = () => (
    <section>
      <h2>Authors list</h2>
      <Switch>
        <Route exact path='/first' component={ItemsList}/>
        <Route path='/first/:id' component={Item}/>
      </Switch>
      <Link to='/'>Back</Link>
    </section>
)


const Home = () =>(
    <section>
      <p>
        Today is: <span>5 Мая 2019</span>
      </p>

      <p>Please select an option</p>
      <ol>
        <li><Link to='/book/list'>Books list</Link></li>
        <li><Link to='/author/list'>Authors list</Link></li>
        <li><Link to='/genre/list'>Genres list+++</Link></li>
      </ol>


    </section>
)

const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/book/list' component={Books}/>
        <Route path='/author/list' component={Authors}/>
        <Route path='/genre/list' component={Genres}/>
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
      <Header />
      <Main />
      <Footer />
    </div>
)

export default App;