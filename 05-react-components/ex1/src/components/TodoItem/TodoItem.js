/**
 * display a single item from the todo task
 */

 import React from 'react';
 import PropTypes from 'prop-types';

export default function TodoItem(props) {
    return (
        <li>
            <h1>{props.task.title}</h1>
            <h3>
                {props.task.description}
            </h3>
        </li>
    )

}

TodoItem.displayName = 'CPTodoItem';

TodoItem.propTypes = {
    task: PropTypes.object.isRequired
}

TodoItem.defaultProps = {
    task: {title: 'stam', description: 'task'}
}