import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <React.Fragment>
            <header>
                <h2>
                    Just simple MOVIE App
                </h2>
            </header>

        <main>

        <div>
            <h3>Kinopoisk</h3>

            <Link to="/kinopoisk">kinoPoisk</Link>
        </div>
        <div>
            <h3>OMDB</h3>

            <Link to="/omdb">omdb</Link>
        </div>
        <div>
            <h3>TMDB</h3>

            <Link to="/tmdb">tmdb</Link>
        </div>

    </main>

    </React.Fragment>

    )
}

export default Navigation
