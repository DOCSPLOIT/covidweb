import React, { Component } from 'react'
import '../Styles/news.css'
import * as MaterialUI from '@material-ui/core'
import {Animated} from 'react-animated-css'
export default class News extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showContent: false
        }
    }
    render() {
        if (this.state.showContent) {
            return (
                <center>
                    <Animated animationIn="fadeIn" animationInDuration={1500}>
                <MaterialUI.Paper onClick={this.changeShowContent} elevation={5} style={{width:window.innerWidth>800?window.innerWidth*.6:window.innerWidth}} >
                    <br/><br/>
                    <h4  style={{
                        cursor: "pointer",
                        textAlign:"center",
                        fontSize:window.innerWidth>800?25:20
                    }}>
                        {this.props.title}
                    </h4>
                    <p style={{
                        
                        width:"90%",
                        fontSize:20
                    }}>
                        {this.props.content}
                    </p>
                    <MaterialUI.Button color="primary"  href={this.props.url}>More Details</MaterialUI.Button>
                    <br/>
                   Published On : <div>{this.props.time}</div>
                    <br/><br/>
                </MaterialUI.Paper>
                </Animated>
                </center>
            )
        } else {
            return (
                <center>
                <MaterialUI.Paper onClick={this.changeShowContent} elevation={5} style={{
                    width:window.innerWidth>800?window.innerWidth*.6:window.innerWidth,
                    marginTop:'10px',
                    
                    transition:'duration 200ms'
                    }} >
                <br/>
                    <h4  style={{
                        cursor: "pointer",
                        textAlign:"center",
                        fontSize:window.innerWidth>800?25:20
                    }}>
                        {this.props.title}
                    </h4>
                    Published On :
                    <div>{this.props.time}</div>
                    <br/>
                    </MaterialUI.Paper>
                    </center>
            )
        }
    }

    changeShowContent = () => {
        this.setState({
            showContent: !this.state.showContent
        })
    }
}