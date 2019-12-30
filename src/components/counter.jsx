import React from "react";

class Counter extends React.Component {
  state = {
    key:this.props.key,
    count: this.props.value,
    listItems: []
  };
  // formatCount() {
  //   return this.state.listItems.length === 0
  //     ? "Zero"
  //     : this.state.listItems.length;
  // }

  formatCount() {
    return this.state.count === 0
      ? "Zero"
      : this.state.count;
  }

  renderList() {
    if (this.state.listItems.length === 0) return <p>There are no items</p>;
    else
      return (
        <ul>
          {this.state.listItems.map(i => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      );
  }

  handleIncreament = () => {
    let currentArr = this.state.listItems;

    currentArr.push("Item");
    this.setState({listItems:currentArr,count:this.state.count+1})

    this.props.notify('Add');
  }

  handleDecreament = () => {
    let currentArr = this.state.listItems;

    let currentCount = this.state.count;
    
    if(currentCount === 0){
      alert("You can't decrease more!");
    }
    else{
    currentArr.pop();
    this.setState({listItems:currentArr,count:this.state.count-1})
    }

    this.props.notify('Decreament');
  }

  render() {
    return (
      <div>
        <label style={{fontSize:'30px','font-weight':'bold',marginRight:'50px'}}>Counter Component #{this.props.id}</label> 
        <button className="btn btn-danger" onClick={() => this.props.onDelete(this.props.id,this.state.count)}>Delete</button>
        <br/>
        <span className={this.getCssClass()}>{this.formatCount()}</span>
        <button className="btn btn-light m-2" onClick={this.handleIncreament}>Increment</button>
        <button className="btn btn-light" onClick={this.handleDecreament}>Decreament</button>
        {this.renderList()}
      </div>
    );
  }

  getCssClass() {
    let cssClass = "badge m-2 ";
    cssClass += this.state.count === 0 ? "badge-warning" : "badge-primary";
    return cssClass;
  }
}

export default Counter;
