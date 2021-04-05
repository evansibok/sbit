import React from 'react';
import { Input } from 'reactstrap';


const TodoItem = ({ task }) => {
  return (
    <div className="todo-item" key={task && task.id}>
      <Input type="checkbox" />
      <div className="text-content">
        <p>{task && task.task_name}</p>
        <small>
          {/* You’re having a meeting the Saathi Hiring Team on the 17th of March,
          2021 by 4PM (WAT)  */}
          {task && task.details}
        </small>
      </div>
    </div>
  );
};

export default TodoItem;
