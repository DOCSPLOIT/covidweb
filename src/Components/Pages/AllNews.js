import React, { Component } from 'react'
import News from './News'

export default class AllNews extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gok: [],
            who: []
        };
    }
    componentDidMount() {
        fetch('http://covid19newsapi.herokuapp.com/news')
            .then(response => response.json())
            .then(res => {
                this.setState({
                    gok: res.gok,
                    who: res.who
                })
            })

    }
    render() {
        let time=new Date();
        
        return (
            <div>
                <h1>All News</h1>
                {this.state.gok.map(news => <News key={this.state.gok.indexOf(news)} title={news.title} content={news.description} url={news.url} time={time.toLocaleString(news.pubdate)} />)}
                {this.state.who.map(news => <News key={this.state.who.indexOf(news)} title={news.title} content={news.description} url={news.url} time={time.toLocaleString(news.pubdate)} />)}
            </div>
        )
    }
}

//  http://covid19newsapi.herokuapp.com/news