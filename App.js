import React,{PropTypes} from 'react';
import List from './List.jsx';

class App extends React.Component {
 
  constructor(){
      super();
      this.state={
          search:'React1'
      }
      this.handleChange=this.handleChange.bind(this);
      this.getValue=this.getValue.bind(this);
  }

  handleChange(event){
    this.setState({search:event.target.value});
  }

  getValue(event){

      console.log(event.target.value);
  }




   render() {
      return (
         <div>

            <div>
                Search: <input type="text" value={this.state.search} onChange={this.handleChange}/>

                <select value="B" onChange={this.getValue} ref="selectInput">
                    <option value="A">Value 1</option>
                    <option value="B">Value 2</option>
                    <option value="C">Value 3</option>
                    </select>

               <h1>{this.props.test}</h1>     
            </div>




            <ul className="mainComponent"> 
            <li><List id='todo' title="To Do" cards={this.props.cards.filter((card)=>card.status == 'todo')}/></li>
            <li><List id='inprogres' title="In Progress" cards={this.props.cards.filter((card)=>card.status == 'in-progress')}/></li>
            <li><List id='done' title="Done" cards={this.props.cards.filter((card)=>card.status == 'done')}/></li>
            </ul>
         </div>
      );
   }
}

App.propTypes={
    cards:PropTypes.arrayOf(PropTypes.object)
}


export default App;