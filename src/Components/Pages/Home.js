import React, { Component } from 'react'
import GlobalStatus from '../Graphs/GlobalStatus'

export default class News extends Component{
    render(){
        return(
            <>
            <div style={{marginTop:200}}>
                <GlobalStatus/>
            </div>
            </>
        )
    }
}