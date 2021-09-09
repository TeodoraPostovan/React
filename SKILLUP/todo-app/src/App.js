import React from 'react';
import './scss/app.scss';
import TaskList from './TaskList';

const tasks = [
  {
    id: 1,
    task_name: "Do exercises",
    isImportant: true
  },
  {
    id: 2,
    task_name: "Read 20 minutes per day",
    isImportant: true
  },
  {
    id: 3,
    task_name: "Do shopping",
    isImportant: false
  },
  {
    id: 4,
    task_name: "Do Home Works",
    isImportant: true
  }
]

function App() {
  return (
    <div className="App">
      <TaskList data={tasks} />  {/* transmit task array to TaskList Component through props */}
    </div>
  );
}

export default App;
