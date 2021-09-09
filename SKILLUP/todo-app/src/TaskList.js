import React from 'react';
import TaskItem from './TaskItem';
import './scss/task-list.scss';

function TaskList({data}){
    return(
        <div>
            <h4>CheckList</h4>
            {
                data.map(function(item, index){
                    return(
                        <TaskItem tasks={item} />
                    )
                }
                )
            }
        </div>
    )
    
}

export default TaskList;

