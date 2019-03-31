/**
 * fetch todo tasks from an api
 * update the state
 * display the list of items
 */

import React from 'react';
import todoService from '../../services/todo.service';
import TodoItem from '../TodoItem/TodoItem';

 export default class TodoList extends React.Component {
    static displayName = 'CPTodoList';

    state = {
        tasks: []
    }

    /**
     * call the server and grab the tasks
     */
    async componentDidMount() {
        const tasks = await todoService.getTasks()
        this.setState({
            tasks
        })
    }

    render() {
        return (
            <ul>
                {
                    this.state.tasks.map(function(task) {
                        return <TodoItem key={task.id} task={task} />
                    })
                }
            </ul>
        )
    }
 }