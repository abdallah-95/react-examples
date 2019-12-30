import React from "react";

class CalGrid extends React.Component{

    state = {
        input:0,
        result:0
    }

    updateInput = (e) => {
        //debugger;
        let currentInput = this.state.input.toString().trim();
        let strInput = currentInput.toString();
        let lastChar = strInput.charAt(strInput.length-1)

        let TwosuccessiveOperatorsExist = this.checkTwosuccessiveOperators(e.target.value.trim(),lastChar);
        
        if(!TwosuccessiveOperatorsExist){
        let newInput = currentInput != 0 ?  currentInput + e.target.value.trim() : e.target.value.trim();
        this.setState({input:newInput});
        }
    }

    clear = () => {
        let newInput = 0;
        this.setState({input:newInput});
    }

    evaluateInput = () => {
        debugger;
        let currentInput = this.state.input.toString().trim();

        let result = eval(currentInput);

        this.setState({result:result,input:result})

    }

    checkTwosuccessiveOperators(currentOp,lastChar){
        if((lastChar == "+" || lastChar == "-" || lastChar == "/" || lastChar == "*")
            &&
            (currentOp  == "+" || currentOp == "-" || currentOp == "/" || currentOp == "*" ))
            return true;
        else
            return false;
    }
    render(){
        return(
            <div>
                <div className="m-4" style={{width:"205px"}}>
                    <form>
                    <input type="button" value=" 1 " class="btn btn-light m-1" onClick={this.updateInput}/>
                    <input type="button" value=" 2 " class="btn btn-light m-1" onClick={this.updateInput}/>
                    <input type="button" value=" 3 " class="btn btn-light m-1" onClick={this.updateInput}/>
                    <input type="button" value=" +" class="btn btn-light m-1" onClick={this.updateInput}/>
                    <br/>
                    <input type="button" value=" 4 " class="btn btn-light m-1" onClick={this.updateInput}/>
                    <input type="button" value=" 5 " class="btn btn-light m-1" onClick={this.updateInput}/>
                    <input type="button" value=" 6 " class="btn btn-light m-1" onClick={this.updateInput}/>
                    <input type="button" value=" - " class="btn btn-light m-1" onClick={this.updateInput}/>
                    <br/>
                    <input type="button" value=" 7 " class="btn btn-light m-1" onClick={this.updateInput}/>
                    <input type="button" value=" 8 " class="btn btn-light m-1" onClick={this.updateInput}/>
                    <input type="button" value=" 9 " class="btn btn-light m-1" onClick={this.updateInput}/>
                    <input type="button" value=" / " class="btn btn-light m-1" onClick={this.updateInput}/>
                    <br/>
                    <input type="button" value="C " class="btn btn-light m-1" onClick={this.clear}/>
                    <input type="button" value=" 0 " class="btn btn-light m-1"  onClick={this.updateInput}/>
                    <input type="button" value=" = " class="btn btn-light m-1" onClick={this.evaluateInput}/>
                    <input type="button" value=" * " class="btn btn-light" onClick={this.updateInput}/>
                    <br/><br/>
                    <input type="text" class="form-control" id="input" value={this.state.input}></input>
                    </form>
                </div>              
            </div>
        );
    }
}

export default CalGrid;