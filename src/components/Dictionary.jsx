import React from 'react';
import '../css/dictionaryStyles.css';
import $ from 'jquery'; 
import logo from '../images/google-logo-9808.png';


class Dictionary extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            searchIsClicked: false,
            word: '',
            wordData: null,
            menuOpened: this.props.menuState
        } 
    }


    updateInput = (e) => {
        let newWord = e.target.value;
        this.setState({word: newWord})
    }

    search = () => {
        let wordData = this.getWordDefinition(this.state.word);

        this.setState({searchIsClicked: true,
                       wordData:wordData
        });
    }
    
    //"https://googledictionaryapi.eu-gb.mybluemix.net/?define="+word.trim()+"&lang=en"

    getWordDefinition(word) {
        debugger;
        let wordData = null;
        $.ajax({
            type: "GET",
            async: false,
            url: "https://api.dictionaryapi.dev/api/v1/entries/en/"+word,
            // headers:{
            //     "Access-Control-Allow-Origin":"*"
            // },
            success: function(data) {
                wordData = data[0];
            }
          });      

          return wordData; 
    }

    toggleCollapsible(thisObj,btnID){
        debugger;
        let content = thisObj.refs["content" + btnID];
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } 
        else {
            content.style.maxHeight = content.scrollHeight + "px";
        } 
    }

    renderWordData(thisObj){

        // let arr = [];
        // Object.keys(this.state.wordData.meaning).forEach(function(key) {
        //     arr.push(<h5 className="m-3">{key}</h5>) 
        //     arr.push(<h6 className="m-5">{key.definition}</h6>) 
        // });
        // return arr;

        let arr = [];
        let synonymsArr = [];
        let wordMeaning = this.state.wordData.meaning;
        let btnIDCount = 0;

                Object.keys(wordMeaning).forEach(function(key) {
                
                arr.push(<h5 className="meaning m-3">{key}</h5>)
                
                wordMeaning[key].forEach(function(item) {
                    arr.push(<div className="m-4"><li className="definition">{item.definition}</li>                    
                            {item.example == null ?   <div className="example m-4"></div>: <div className="example m-4">Example: {item.example}</div>}
                            
                    </div>)
                    debugger;

                    if(item.synonyms != null){
                        synonymsArr = [];
                        item.synonyms.forEach((synonymItem)=> {
                            synonymsArr.push(<li>{synonymItem}</li>)
                        });
                    }
                    arr.push(<div>
                        <button id={++btnIDCount} class="collapsible btn-info m-2" onClick={(e) => {thisObj.toggleCollapsible(thisObj, e.target.id)}}>Synonyms</button>
                        <div class="content m-2" ref={"content"+btnIDCount}>
                            {
                            item.synonyms != null ?
                            <ul className="synonym">  
                            {synonymsArr}
                            </ul>
                            :<div></div>
                            }
                        </div>
                    </div>)
                    })
                arr.push(<hr className="hl"/>)
              })
            
        return arr;
    }

    render(){

        return(
            <div>
                <div>
                    {/* <img id="img1" src="https://s3.eu-central-1.amazonaws.com/centaur-wp/designweek/prod/content/uploads/2014/01/Oxford-Dictionaries-with-strapline-1002x273.png" alt="Oxford Dictionaries"/> */}
                    {/* <img id="img2" src="https://www.stickpng.com/assets/images/5a951939c4ffc33e8c148af2.png" alt="Oxford Dictionaries"/>
                    <h1 id="h1">Google Dictionary</h1> */}

                    {/* <img id="img2" src="https://www.stickpng.com/assets/images/5a951939c4ffc33e8c148af2.png" alt="Oxford Dictionaries"/>
                    <h1 id="h1">Google Dictionary</h1> */}

                    
                </div>


                {/* <form>

                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    
                </form> */}

                {/* <div class="header">
                    <img src="https://www.stickpng.com/assets/images/5a951939c4ffc33e8c148af2.png" alt="logo" />         
                    <h1>oogle Dictionary</h1>
                </div> */}


                
                {
                (this.state.menuOpened ?
                
                <div class="headerMenuOpened">
                    <img src={logo} alt="logo" />
                    <h1>Dictionary</h1>
                </div>  
                     
                :

                <div class="header">
                    <img src={logo} alt="logo" />         
                    <h1>oogle Dictionary</h1>
                </div>
 
                )}

                    <br/>
                    <br/>

                <form>
                <div className="form-group">
                    <input id="i1" type="text" className="form-control" onChange={this.updateInput}/>
                </div>
                <button id="btn1" type="button" className="btn btn-primary" onClick={this.search}>Search</button>
                </form>
                {
                this.state.searchIsClicked & this.state.wordData != null?
                    <div className="m-5">
                        <h1 style={{fontSize:"60px"}}>{this.state.wordData.word}</h1>
                        <h6 class="form-text text-muted m-2">{this.state.wordData.phonetic}</h6>
                        <hr className="hl"/>
                        {
                            this.renderWordData(this)
                        }
                    </div>
                    :
                    this.state.wordData == null && this.state.searchIsClicked?
                    
                    <div className="m-5">
                    <h1>No Result!</h1>
                    </div>
                    
                    :
                    <div className="m-5">
                    </div>
                }
            </div>
        );
    }
}

export default Dictionary;