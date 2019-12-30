import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './components/TicTacToe Game/styles.css'; 

import Counters from './components/counters';
import Calculator  from './components/Calculator';
import TicTacToeGame from './components/TicTacToe Game/TicTacToeGame';
import Menu from './components/Menu';
import Dictionary from './components/Dictionary';


//ReactDom.render(<Counter />,document.getElementById('root'));

//ReactDom.render(<Counters />,document.getElementById('root'));

//ReactDom.render(<TicTacToeGame />,document.getElementById('root'));

//ReactDom.render(<Dictionary />,document.getElementById('root'));

ReactDom.render(<Menu />,document.getElementById('root'));
