import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../css/styles.css';


import Counters from './counters';
import Calculator  from './Calculator';
import TicTacToeGame from './TicTacToe Game/TicTacToeGame';
import Dictionary from './Dictionary';
import ELearningMain from './ELearning/ELearningMain';

class Menu extends React.Component{

    state = {
        menuOpened:false,
    }
    toggleMenu = () => {
        let currentMenuState = this.state.menuOpened;

        if(currentMenuState === false){
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        
        this.setState({menuOpened:true});
        }
        else{        
            this.closeNav();
            this.setState({menuOpened:false});
        }
      }
      
    closeNav() {
        debugger;
        document.getElementById("mySidenav").style.width = "0";

        
        document.getElementById("main").style.marginLeft = !this.state.IsELMenuOpened ? "0" : "250px";
    }

    Index() {
        return null;
    }

    render(){
        return(
            <Router>
                <div>
                    <div id="mySidenav" className="sidenav">
                        <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>                      
                        <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>                        
                        <Link to={process.env.PUBLIC_URL + "/Calculator"}>Calculator</Link>
                        <Link to={process.env.PUBLIC_URL + "/Counters"}>Counters</Link>
                        <Link to={process.env.PUBLIC_URL + "/TicTacToe"}>Tic-Tac-Toe</Link>
                        <Link to={process.env.PUBLIC_URL + "/GoogleDictionary"}>Google Dictionary</Link>
                        </div>

                        <div id="main">
                        <h2>React Examples</h2>
                        <span style={{fontSize:"30px",cursor:"pointer"}} onClick={this.toggleMenu}>&#9776; open</span>
                        <div id="content">
                            <Route path={process.env.PUBLIC_URL + "/"}  component={this.Index} />
                            <Route path={process.env.PUBLIC_URL + "/Calculator"} component={Calculator} />
                            <Route path={process.env.PUBLIC_URL + "/Counters"} component={Counters} />
                            <Route path={process.env.PUBLIC_URL + "/TicTacToe"} component={TicTacToeGame} />
                            {/* <Route path="/GoogleDictionary" component={Dictionary} /> */}
                            <Route path={process.env.PUBLIC_URL + "/GoogleDictionary"} component={() => <Dictionary MainMenuState={this.state.menuOpened}/>} />
                            {/* <Route path="/E-Learning" component={() => <ELearningMain handleELMenuStateChange={this.handleELMenuStateChange}/>} /> */}
                            {/* <Route path="/E-Learning" component={ELearningMain} /> */}
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Menu;