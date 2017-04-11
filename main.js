import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

let cardsList = [
    {
        id: 1,
        title: "Read the Book Read the Book Read the Book Read the Book",
        description: "I should read the whole book",
        status: "in-progress",
        tasks: []
    },
    {
        id: 3,
        title: "Write some code",
        description: "Code along with the samples in the book",
        status: "todo",
        tasks: [
            {
                id: 1,
                name: "ContactList Example",
                done: true
            },
            {
                id: 2,
                name: "Kanban Example",
                done: false
            },
            {
                id: 3,
                name: "My own experiments",
                done: false
            }
        ]
    },
];

ReactDOM.render(<App cards={cardsList} test='20'/>, document.getElementById('app'));