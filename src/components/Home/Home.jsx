import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => (
    <section>
        <p>
            Today is: <span>5 Мая 2019</span>
        </p>

        <p>Please select an option</p>
        <ol>
            <li><Link to='/book'>Books list</Link></li>
            <li><Link to='/author'>Authors list</Link></li>
            <li><Link to='/genre'>Genres list</Link></li>
        </ol>
    </section>
)

export default Home;