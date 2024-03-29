import React, { useContext } from 'react';
import { TodosContext } from './contexts/todos.context';
import Todo from './Todo';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

function TodoList() {
  const todos = useContext(TodosContext);
  if (todos.length) return (
    <Paper>
      <List>
        {todos.sort((a, b) => {
          if (a.task[1] < b.task[1]) return -1;
          if (a.task[1] > b.task[1]) return 1;
          return 0;
        }).map((todo, i) => (
          <>
            <Todo
              {...todo} 
              key={todo.id}
            />
            {i < todos.length - 1 && <Divider />}
          </>
        ))}
      </List>
    </Paper>
  )
  return null;
}

export default TodoList;
