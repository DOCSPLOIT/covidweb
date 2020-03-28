import React, { Component } from 'react'
import { LinearProgress } from '@material-ui/core'


export default class Loader extends Component{
    render(){
        return(
            <div style={{textAlign:"center",marginTop:window.innerHeight*.35}}>
               <p>Loading...</p>
             <center><LinearProgress style={{width:window.innerWidth>800?window.innerWidth*.5:window.innerWidth*.8}} /></center>  
            </div>
        )
    }
}