import React, {PropTypes} from 'react';
import Checklist from './checklist.jsx';

let titlePropType=(props,propName,componentName)=>{
    console.log(props);
    if(props[propName]){
        let value=props[propName];
        if(typeof value != 'string' || value.length > 80){
            return new Error('${propName} in ${componentName} is longer than 80 Character');
        }
    }
}


class Card extends React.Component {
    render() {
        return (
            <div>
                <div>{this.props.title}</div>
                <div>{this.props.description}</div>
                <div>
                    <Checklist cardId={this.props.id} tasks={this.props.tasks}/>
                </div>
            </div>
        )
    }
}

Card.propTypes={
    title:titlePropType,
    description:PropTypes.string.isRequired,    
    id:PropTypes.number.isRequired,
    tasks:PropTypes.arrayOf(PropTypes.object)
}

export default Card;