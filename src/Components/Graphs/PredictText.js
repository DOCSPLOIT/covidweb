import React, { Component } from "react";
import * as MaterialUI from '@material-ui/core'


export default class PredictText extends Component {

    constructor(props) {
        super(props);
        this.state = {
            timestamp: this.props.timestamp,
            days: this.props.days,
            indiaData: [],
            GlobalData: [],
            total: []
        }
    }

    componentDidMount() {
        fetch(`https://covid19regression.herokuapp.com/predict/${this.state.timestamp}/${this.state.days}`)
            .then(response => response.json())
            .then(res => {

                let idata = res.india.map(d => [d.timestamp, d.prediction]);
                let gdata = res.global.map(d => [d.timestamp, d.prediction]);

                this.setState({
                    indiaData: idata,
                    GlobalData: gdata,
                })
                const len = this.state.indiaData.length;

                let arr = [];
                for (let i = 0; i < len; i++) {
                    let date = new Date(this.state.indiaData[i][0]);
                    let dd = date.getDate();
                    let mm = date.getMonth()+1;
                    let yy = date.getFullYear();
                    date = dd + '/' + mm + '/' + yy;
                    let item = [date, this.state.indiaData[i][1], this.state.GlobalData[i][1]]
                    arr.push(item)
                }
                this.setState({ total: arr })
            })
    }

    render() {
        
        return (
            
            <MaterialUI.TableContainer style={window.innerWidth>800?{
                width:window.innerWidth*.5,alignSelf:"center"
        }:{width:window.innerWidth}} component={MaterialUI.Paper} elevation={10}>
            <h2>Prediction Table [Confrimation Cases]</h2>
                <MaterialUI.Table style={window.innerWidth>800?{
                        
                        minWidth:650,
                }:{width:window.innerWidth}}>
                   <MaterialUI.TableHead> <MaterialUI.TableRow style={{marginLeft:200,backgroundColor:'#66b0ff'}}><MaterialUI.TableCell style={{fontWeight:"bold",color:'#25266d'}}  align="center">Date</MaterialUI.TableCell><MaterialUI.TableCell style={{fontWeight:"bold",color:'#25266d'}} align="center">India</MaterialUI.TableCell><MaterialUI.TableCell style={{fontWeight:"bold",color:'#25266d'}} align="center">World</MaterialUI.TableCell></MaterialUI.TableRow></MaterialUI.TableHead>
                   <MaterialUI.TableBody>
                    {this.state.total.map((item,index) => (<MaterialUI.TableRow key={item[0]} style={{backgroundColor:index%2==0?'white':'#66b0ff'}}><MaterialUI.TableCell style={{fontWeight:"bold",color:'#25266d'}} align="center">{item[0]}</MaterialUI.TableCell ><MaterialUI.TableCell style={{fontWeight:"bold",color:'#25266d'}} align="center">{item[1]}</MaterialUI.TableCell><MaterialUI.TableCell style={{fontWeight:"bold",color:'#25266d'}} align="center">{item[2]}</MaterialUI.TableCell></MaterialUI.TableRow>))}
                    </MaterialUI.TableBody>
                    
                </MaterialUI.Table>
            </MaterialUI.TableContainer>
            

        );
    }

}

