import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import BottomBar from './Extras/BottomBar'
import './Styles/route.css'
import Home from './Pages/Home'
import AllNews from './Pages/AllNews'
import Status from './Pages/Status'
import Sources from './Pages/Source'
import Predications from './Pages/Predictions'
import Swiper from './Extras/Drawer'
import About from './Pages/AboutUs'
export default class Router extends Component {
    
    render() {
        return (
            <div >
                <div className="navbar" >

                    {window.innerWidth > 800 ? null : <Swiper />}
                    <h3 className={window.innerWidth > 800 ? "title" : ''} style={window.innerWidth < 800 ? {
                        marginLeft: window.innerWidth * .3,
                        fontSize: 25,
                        color: 'white',
                        position: 'absolute'
                    } : {}}>Covid-19 Updates</h3>
                    {
                        window.innerWidth > 800 ? <div className="navlink">
                            <Link className="navitem" to="/">HOME</Link>
                            <Link className="navitem" to="/news">UPDATES</Link>
                            <Link className="navitem" to="/predict">PROJECTION</Link>
                            <Link className="navitem" to="/status" >STATUS</Link>
                            <Link className="navitem" to="/source">SOURCES</Link>
                            <Link className="navitem" to="/about">ABOUT US</Link>
                        </div> : <div className="bottomBar">
                                <BottomBar />
                            </div>

                    }
                </div>
                <div>
                    <Switch>
                        <Route exact path="/"><Home /></Route>
                        <Route path="/news"><AllNews /></Route>
                        <Route path="/status"><Status /></Route>
                        <Route path="/predict"><Predications /></Route>
                        <Route path="/source"><Sources /></Route>
                        <Route path="/about"><About /></Route>
                    </Switch>
                </div>
            </div>
        )

    }
}