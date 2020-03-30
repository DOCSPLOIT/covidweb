import React, { Component } from 'react'
import Predict from '../Graphs/Predict'
import PredictText from '../Graphs/PredictText';
import '../Styles/home.css'
import logosm from '../Media/logosm.png'
import iedclog from '../Media/iedcw.png'
import { url } from '../Configure';
import Loader from '../Extras/Loader';

export default class Predications extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false
        }
    }
    componentDidMount() {
        fetch(`${url}/predictionPage`).then(r => r.json())
            .then(res => {
                this.setState({ isLoading: true })
            })
    }
    render() {
        const para = (
            <p style={{
                fontFamily: 'Lato',
                color: 'gray',
                width: window.innerWidth > 800 ? "60%" : ''
            }}>
                The system is equipped with latest tools and techniques in Artificial
                intelligence to predict future cases of positive confirmation of covid-19
                by automatically learning the case histories, pattern of various cases and trends.
                The algorithm shall predict daily probabilities by updating with Worldometer, WHO,
                Ministry of Health and Family Welfare.
            </p>
        )

        return (
            <>
                {this.state.isLoading === true ? <div>
                    <div style={{ marginTop: window.innerHeight * .2 }}>
                        
                        <center>
                        <h1>Statistical Projection</h1>
                            {window.innerWidth < 800 ? para : null}
                            <br />
                            <PredictText />
                            <Predict />

                            <br />
                            {window.innerWidth > 800 ? para : null}
                        </center>

                        <br /><br /><br />
                        {
                            window.innerWidth > 800 ?
                                <footer>
                                    <div className="footer">
                                        <br />
                                        <a href='http://sscollege.ac.in'>  <img alt='logosm' src={logosm} style={{
                                            width: '75px',
                                            height: '75px',
                                            position: 'absolute',
                                            marginLeft: "20px"
                                        }} /></a>
                                        <center><a href='http://sscollege.ac.in' style={{ textDecoration: 'none' }}><p style={{ color: "white" }}><b style={{ fontSize: 20 }}>Sullamussalam Science College |</b><l style={{ fontSize: 14 }}>Powered By IEDC </l></p></a></center>
                                        <a href='http://iedc.sscollege.ac.in'>  <img alt='logsm' src={iedclog} style={{
                                            width: '100px',
                                            height: '100px',
                                            position: 'absolute',
                                            marginLeft: window.innerWidth * .9,
                                            marginTop: -75
                                        }} /></a>
                                    </div>
                                </footer>
                                :
                                <>
                                    <br /><br />
                                </>
                        }

                    </div>
                </div> : <Loader />}
            </>
        )
    }
}