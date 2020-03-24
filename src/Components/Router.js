import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import BottomBar from './Extras/BottomBar'
import './Styles/route.css'
import Home from './Pages/Home'
import News from './Pages/News'
import Status from './Pages/Status'
import Sources from './Pages/Source'
export default class Router extends Component{
   render(){
   return(
       <div >
        <div className="navbar" >
       
            <h3 className="title">Covid Updates</h3>
            {
                window.innerWidth>800?<div className="navlink">
                <Link className="home" to="/" style={{left:window.innerWidth*.50}}>HOME</Link>
                <Link className="news" to="/news" style={{left:window.innerWidth*.60}}>NEWS</Link>
                <Link className="status" to="/status" style={{left:window.innerWidth*.70}}>STATUS</Link>
                <Link className="status" style={{left:window.innerWidth*.80}} to="/source">SOURCES</Link>
                </div>:<div>
               <BottomBar/>
                    </div>
                
            }
        </div>
        <div>
            <Switch>
                <Route exact path="/"><Home/></Route>
                <Route path="/news"><News/></Route>
                <Route path="/status"><Status/></Route>
                <Route path="/source"><Sources/></Route>
            </Switch>
        </div>
        </div>
   )

}
}