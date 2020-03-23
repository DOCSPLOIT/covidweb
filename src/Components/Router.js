import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import BottomBar from './Extras/BottomBar'
import './Styles/route.css'
import Home from './Pages/Home'
import News from './Pages/News'
import Status from './Pages/Status'
import GlobalHistory from './Graphs/GlobalHistory'
export default class Router extends Component{
   render(){
   return(
       <div >
           <Switch>
          
           </Switch>
        <div className="navbar" >
       
            <h3 className="title">Covid Updates</h3>
            {
                window.innerWidth>800?<div className="navlink">
                <Link className="home" to="/">HOME</Link>
                <Link className="news" to="/news">NEWS</Link>
                <Link className="status" to="/status">STATUS</Link>
                
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
               
            </Switch>
        </div>
        </div>
   )

}
}