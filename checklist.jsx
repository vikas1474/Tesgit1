import React from 'react';

class Checklist extends React.Component{

    constructor(props){
        super(props);
        this.toggleChecked=this.toggleChecked.bind(this);
    }

    toggleChecked(){
        console.log(this.refs.textInput);
    }


    render(){
        let tas=this.props.tasks.map((abc,val)=>{
                return(                    
                    <li key={val}>
                        <input type="checkbox" ref='textInput' onClick={this.toggleChecked} defaultChecked={abc.done}/>{abc.name}<a href="#">&times;</a>
                    </li>
                )
        });
        return(
            <div>
                <ul>
                    {tas}</ul>
            </div>
        )
    }
}

export default Checklist;