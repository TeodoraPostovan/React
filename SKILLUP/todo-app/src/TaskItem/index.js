import React from 'react';
import '../scss/task-item.scss';

const TaskItem = ({tasks}) =>(

        <div>
            <ul>
                <li>{tasks.task_name}</li>
            </ul>
        </div>

)

export default TaskItem;
