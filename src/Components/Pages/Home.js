import React, { Component } from 'react'
import GlobalStatus from '../Graphs/GlobalStatus'
import Reports from '../Graphs/Reports(1)'
import GlobalHistory from '../Graphs/GlobalHistory'
import { useHistory } from 'react-router-dom';
import IndiaHistory from '../Graphs/IndiaHistory';
import IndiaStatus from '../Graphs/IndiaStatus';

export default class News extends Component{

    constructor(props){
        super(props);
    this.state={
        path:''
    }    
    }
    
    componentDidMount() { 
     this.setState({path:'/globalhistory'})
 }
 
    render(){
        
        return(
            <>
            <div style={{marginTop:100,width:"100%"}} >
            <h2 style={{marginLeft:20}}>India</h2>
            <IndiaStatus/>
                <h2 style={{marginLeft:20}}>World </h2>
                <GlobalStatus/>
             <IndiaHistory/>
            </div>
            </>
        )
    }
}

