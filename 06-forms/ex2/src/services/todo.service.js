import Task from "../models/Task";

/**
 * this service is in charge to query the todo api
 */

// let instance = null;

class TodoService {
    
    /**
     * @returns {Promise<Task[]>}
     */
    getTasks = async () => {
        const response = await fetch('https://nztodo.herokuapp.com/api/task/?format=json');
        const tasks = await response.json();
        return tasks.map((item) => new Task(item));
    }

    /**
     * @param task {Task}
     * @returns {Promise<Task>}
     */
    createTask = (task) => {
        return fetch('https://nztodo.herokuapp.com/api/task/?format=json', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        .then((response) => response.json())
        .then((json) => new Task(json))
    }
}

export default new TodoService();
