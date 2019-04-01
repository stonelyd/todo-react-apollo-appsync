import React from "react";
import TaskListItem from "./Item";

export default ({
  tasks,
  updateTask,
  deleteTask,
  onSelectTask,
  selectedTask
}) => (
  <React.Fragment>
    {tasks.map(item => (
      <TaskListItem
        key={item.id}
        {...item}
        isSelected={selectedTask && item.id === selectedTask.id}
        onSelect={() => onSelectTask(item)}
        onUpdate={newProps => updateTask(item, newProps)}
        onDelete={() => deleteTask(item.id, item.version)}
      />
    ))}
  </React.Fragment>
);