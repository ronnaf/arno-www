import React, { useEffect, useState } from 'react';

import routes from '../../../routes.json';
import { Environment } from '../../../Environment';

export type TodoListProps = {
  // inputs
  /** list of todos */
  todos: string[];

  // outputs
  /** called when the user clicks the button */
  userClickedButton: () => void;
};

export const TodoListContainer = (Screen: React.ComponentType<TodoListProps>) => {
  const [todos, setTodos] = useState<string[]>([]);

  const { navigation } = Environment.current();

  useEffect(() => {
    /** added this as an example of fetching data from server */
    setTodos(['todo 1', 'todo 2']);
  }, []);

  return () => (
    <Screen
      todos={todos}
      userClickedButton={() => {
        navigation.navigate(routes.TODO_ADD);
      }}
    />
  );
};
