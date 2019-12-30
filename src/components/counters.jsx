import React from 'react';
import Counter from './counter';


class Counters extends React.Component{

    state = {
        counters : [
            // {key:1,value:0},
            // {key:2,value:0}
        ],
        TotalItemsCount : 0
    };

    handleOnAdd = () => {
        let Counters = this.state.counters;
        let lastKey = Counters.length === 0 ? 0 : Counters[Counters.length-1].key;
        Counters.push({key:lastKey+1,value:0});

        this.setState({counters:Counters})
    }

    handleOnDelete = (id,itemsCount) => {
        let Counters = this.state.counters;
        
        for(let i = 0 ; i<Counters.length; i++){
            if (Counters[i].key == id){
                Counters.splice(i,1);
                break;
            }
        }

        let newTotalCount = this.state.TotalItemsCount - itemsCount;
        this.setState({counters:Counters,TotalItemsCount:newTotalCount})
    }

    notify = (actionName) => {
        let newTotalCount;

        if(actionName == 'Add')
             newTotalCount = this.state.TotalItemsCount + 1;   
        else
             newTotalCount = this.state.TotalItemsCount > 0 ? this.state.TotalItemsCount - 1 : 0;

        this.setState({TotalItemsCount:newTotalCount});
    }

    render(){
        return (
            <div>
                <label style={{fontSize:'50px','font-weight':'bold',marginRight:'170px'}}>Counters</label>
                <button className="btn btn-primary lg" onClick={this.handleOnAdd}>Add</button>
                <br/>
                <label style={{fontSize:'20px','font-weight':'bold',marginRight:'170px'}}>Total Items Count:{this.state.TotalItemsCount}</label>
                {
                this.state.counters.map(c => <Counter key ={c.key} id={c.key} value={c.value} onDelete={this.handleOnDelete} notify={this.notify}/>)       
                }</div>
        );
    }
}

export default Counters;