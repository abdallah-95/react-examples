import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Counters from '../counters';
import Calculator  from '../Calculator';
import TicTacToeGame from '../TicTacToe Game/TicTacToeGame';
import Dictionary from '../Dictionary';

import './elstyles.css';

class ELearningMain extends React.Component{

    constructor(props){
        super(props);
        this.ELMenuState = props.handleELMenuStateChange

        this.state = {
            menuOpened:false
        }
    }

    toggleMenu = () => {
        debugger;
        let currentMenuState = this.state.menuOpened;

        if(currentMenuState === false){
        document.getElementById("ELSideNav").style.width = "250px";
        document.getElementById("ELmain").style.marginLeft = "250px";
        
        this.setState({menuOpened:true});
        
        }
        else{        
            this.closeNav();
            this.setState({menuOpened:false});
        }
        this.ELMenuState(this.state.menuOpened);
    }
      
    closeNav() {
        document.getElementById("ELSideNav").style.width = "0";
        document.getElementById("ELmain").style.marginLeft= "0";
    }

    Index() {
        return null;
    }


    render(){
        return(
            <Router>
                <div>
                    <div id="ELSideNav" className="elsidenav">
                        <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>                      
                        <Link to="/">Home</Link>                        
                        <Link to="/Calculator">Calculator</Link>
                        <Link to="/Counters">Counters</Link>
                        <Link to="/TicTacToe">Tic-Tac-Toe</Link>
                        <Link to="/GoogleDictionary">Google Dictionary</Link>
                        </div>

                        <div id="ELmain">
                        <h2>E-Learning</h2>
                        <span style={{fontSize:"30px",cursor:"pointer"}} onClick={this.toggleMenu}>&#9776; open</span>
                        <div id="content">
                            <Route path="/"  component={this.Index} />
                            <Route path="/Calculator" component={Calculator} />
                            <Route path="/Counters" component={Counters} />
                            <Route path="/TicTacToe" component={TicTacToeGame} />
                            {/* <Route path="/GoogleDictionary" component={Dictionary} /> */}
                            <Route path="/GoogleDictionary" component={() => <Dictionary menuState={this.state.menuOpened}/>} />
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default ELearningMain