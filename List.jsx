import React,{PropTypes} from 'react';
import Card from './card.jsx';

class List extends React.Component{
    render(){

        var cards=this.props.cards.map((card,val)=>{
            return <Card key={val} id={card.id} title={card.title} description={card.description} tasks={card.tasks}/>
        });

        return(
            <div>              
                <h1>{this.props.title}</h1>
                {cards}
            </div>

        )
    }

}

List.propTypes={
    title:PropTypes.string.isRequired,
    cards:PropTypes.arrayOf(PropTypes.object)    
}

export default List;