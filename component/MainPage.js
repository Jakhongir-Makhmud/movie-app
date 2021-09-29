import React from 'react'
import KinoPoisk from './kinoPoisk/KinoPoisk'
import Navigation from './Navigation'
import "./style/style.css"
import MovieDetail from './kinoPoisk/MovieDetail'
import 'bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function MainPage() {
    return (
        <Router>
        <div className="mainContent">
    
        <div className='insideMainContent'>

            <Switch >

                <Route path='/' exact component={Navigation} />

                <Route path='/kinopoisk' exact component={KinoPoisk} />

                <Route path='/kinopoisk/moviedetail/:id' exact component={MovieDetail} />
            </Switch>

        </div>

        </div>

        </Router>
    )
}

export default MainPage
