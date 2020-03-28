import React, { Component } from 'react'
import * as MaterialUI from '@material-ui/core'

export default class About extends Component{
    constructor(props)
    {
        super(props)
    }
    render(){
        return(
           <>
           <h1 style={{
               fontFamily:'arch',
               marginTop:window.innerHeight*.1
           }}>The Team</h1>
           </>
          
        )
    }
}