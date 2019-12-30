import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//const element = <h1>Hello React!</h1>;

// function Welcome(props){
//     return <h1 align="center">Hello {props.name}!</h1>;
// }

//#region Clock

// class Clock extends React.Component{
//     constructor(){
//         super();
//         this.state = {time:''};

//        // this.tick = this.tick.bind(this);

//         //setInterval(this.tick, 1000);

//         setInterval(() => {
//             this.setState({time: new Date().toLocaleTimeString()})
//         }, 1000);

//     }

//     tick(){
//         this.setState({time: new Date().toLocaleTimeString()})
//     }

//     render(){
//         return(
//         <div>
//         <h2>It is {this.state.time}</h2>
//         </div>);
//     }
// }

//#endregion


class App extends React.Component{
    constructor(){
        super();
        this.state = {};
        this.state.value = '';
        // this.state.user = {
        //   name: 'Abdallah',
        //   email: 'a@a.a',
        // };
          this.state.user = {
          name: '',
        };
        this.state.numbers = [1,2,3,4,5,6];
    }

    render(){
        return(
        <div>
            {/* <Greeting isUser={true} user={this.state.user}/>
            <Clock />
        <label>Name:  </label>
        <input type='text' onChange={(e) => this.setState({user:{name:e.target.value}})}/>
        <br></br>
        <br></br>
        <input type='text' onChange={(e) => this.setState({value:e.target.value})}/>
        <h2>{this.state.value}</h2>
            <Counter />
            <NumberList numbers={this.state.numbers}/> */}

            <NameForm />
        </div>);
    }

}

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() { //Lifecycle method
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() { //Lifecycle method
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
}

class Counter extends React.Component {
    constructor(props){
        super(props);

        this.state = {c:0};
        //this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let oldVal = this.state.c;
        this.setState({
            c:oldVal+1,
        })
    }

    render(){
        return(
            <div>
            <h2>{this.state.c}</h2>
            <button onClick={() => this.handleClick()}>+</button>
            </div>
        );
    }
}

function GuestGreeting(){
    return(
        <h1>Please sign up.</h1>
    );
}

function UserGreeting(props){
    return(
        <h1>Welcome back! {props.user.name}</h1>
    );
}

function Greeting(props){
    if(props.isUser)
        return <UserGreeting user={props.user}/>;
    else
        return <GuestGreeting />;

}

function NumberList(props){
    const numbers = props.numbers;

    const listItems = numbers.map((number) => 
                                            <li key={number.toString()}>
                                                {number}
                                            </li>);

    return (<ul>
            {listItems}
        </ul>);    
}

class NameForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { value: '' };
    }

    handleOnChange = (e) => {
      this.setState({value: e.target.value})  
    }

    handleOnSubmit = (e) => {
        //alert('This name "'+this.state.value+'" was submitted!');
        alert('Your favorite flavor is: ' + this.state.value);
        e.preventDefaults();
    }
    render(){
        return(
            <form onSubmit={this.handleOnSubmit}>
                <label>Name:   
                       <input type="text" value={this.state.value} onChange={this.handleOnChange} />
                </label>
                <br/>
                <input type="submit" />

                <br/>

                <select value={this.state.value} onChange={this.handleOnChange}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>

                {/* <input type="file" /> */}

            </form>
        );
    }
}

//ReactDOM.render(<Welcome name="React"/>, document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'));
