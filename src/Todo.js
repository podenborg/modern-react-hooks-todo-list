import React from 'react';
import useToggleState from './hooks/useToggleState';

import EditTodoForm from './EditTodoForm';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

function Todo({ id, task, completed, removeTodo, toggleTodo, editTodo }) {
  const [isEditing, toggle] = useToggleState(false);

  return (
    <ListItem style={{ height: '64px' }}>
      {isEditing ?  <EditTodoForm 
                      id={id} 
                      task={task} 
                      toggleEditForm={toggle} 
                      editTodo={editTodo} 
                    /> :
      <>
        <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)} />
        <ListItemText style={{ textDecoration: completed ? 'line-through' : 'none'}}>{task}</ListItemText>
        <ListItemSecondaryAction>
          <IconButton aria-label='Edit' onClick={() => toggle()}>
            <EditIcon />
          </IconButton>
          <IconButton aria-label='Delete' onClick={() => removeTodo(id)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </>
      }
    </ListItem>
  )
}

export default Todo;
