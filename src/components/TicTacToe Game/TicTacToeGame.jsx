import React from 'react';
import './styles.css'; 
import SvgIcon from '@material-ui/core/SvgIcon';


class TicTacToeGame extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          squares: Array(9).fill(null),
          xIsNext: true,
          x:0,
          o:0,
          winningStatusUpdated:false
        };
      }

    handleClick(i){
        let currentSquares = this.state.squares;

        if (calculateWinner(currentSquares) || currentSquares[i]) {
            return;
        }

        currentSquares[i] = this.state.xIsNext ? "X" : "O";

        this.setState({
            squares: currentSquares,
            xIsNext: !this.state.xIsNext
        });
        debugger;
        this.UpdateWinningStatus();
    }

    Square(props, className) {
        return (
          <td style={props.value == "X" ? {color:'blue'} : {color:'red'}} className={props.className} onClick={props.onClick}> 
            {props.value}
          </td>
        );
    }

    renderSquare(i, className){
        return(<this.Square className={className}
                       value={this.state.squares[i]}
                       onClick={() => this.handleClick(i)} />);
    }

    reset = () => {
        this.setState({ 
          squares: Array(9).fill(null),
          xIsNext: true,
          winningStatusUpdated: !this.state.winningStatusUpdated
        })
    }

    increaseX = () =>{
      let xWinningCount = this.state.x;
      this.setState({x:xWinningCount+1})
    }
      
    increaseO = () =>{
      let oWinningCount = this.state.o;
      this.setState({o:oWinningCount+1});
    }

    notNull(currentValue) {
      return currentValue != null;
    }

    UpdateWinningStatus = () => {
      let winner = calculateWinner(this.state.squares);

      if(winner && !this.state.winningStatusUpdated){
        debugger;
        if(winner == "X")
          this.increaseX();
        else
          this.increaseO();  

          this.setState({winningStatusUpdated: !this.state.winningStatusUpdated})
      }
    }
    

    render() {
        let winner = calculateWinner(this.state.squares)
        let next = this.state.xIsNext ? "X" : "O";
        let color = this.state.xIsNext ? "blue" : "red";

        let winnerColor = winner == "X" ? "blue" : "red";
        let status = winner ? <label style={{color:winnerColor}}>Winner: {winner} </label> : <label>Next player: <span style={{color:color}}>{next}</span></label>;

        if(winner == null && this.state.squares.every(this.notNull)){
          status = <label>Game Over!</label>;
        }

        return(
            <div className="m-5">
              <div>
                <label>Tic-Tac-Toe</label>
              
              <button className="btn btn-primary" id="reset" onClick={this.reset}>Reset
                <SvgIcon id="refresh">
                  <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/>
                </SvgIcon>
              </button>

              </div>
                <div>
                    {status}
                </div>
                <br/>
                <table>
                    <tr>
                        {this.renderSquare(0)}
                        {this.renderSquare(1,"vert")}
                        {this.renderSquare(2)}
                    </tr>
                    <tr>
                        {this.renderSquare(3,"hori")}
                        {this.renderSquare(4,"hori vert")}
                        {this.renderSquare(5,"hori")}
                    </tr>
                    <tr>
                        {this.renderSquare(6)}
                        {this.renderSquare(7,"vert")}
                        {this.renderSquare(8)}
                    </tr>
                </table>
                <br/>
                <div>
                  <div>
                    <label style={{color:"blue"}}>X: {this.state.x}</label>
                  </div>
                  <div>
                  <label style={{color:"red"}}>O: {this.state.o}</label>
                  </div>
                </div>
            </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
}



export default TicTacToeGame;


