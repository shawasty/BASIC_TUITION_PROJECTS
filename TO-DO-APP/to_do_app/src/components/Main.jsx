import React from 'react';
import CreateTask from './CreateTask';
import TaskList from './TaskList';


const tasks = [];
export default class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tasks: tasks,
        };
    }
    CreateTask = (task)=>{
        if(task.trim()==='') {
            alert("Task can't be empty");
            return
        }
        tasks.push({task,isCompleted:false});
        this.setState({tasks: tasks});
    }
    render() {
        return (
            <div>
                <h1>Todos</h1>
               <div>
               <CreateTask/>
               <br />
               <TaskList/>
               </div>
            </div>
        )

    }
}