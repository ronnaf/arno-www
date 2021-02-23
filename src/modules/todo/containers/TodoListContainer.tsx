import React, { useEffect, useState } from 'react';

import { routes } from '../../../routes';
import { Environment } from '../../../Environment';
import { TodoListScreen } from '../components/TodoListScreen';

export type TodoListProps = {
  // inputs
  /** list of todos */
  todos: string[];

  // outputs
  /** called when the user clicks the button */
  userClickedButton: () => void;
};

/**
 * Why is this not following the same structure as (link below)?
 * https://github.com/smashingboxes/arno/blob/dev/src/modules/home/containers/HomeContainer.tsx
 *
 * Reason 1: Don’t call Hooks inside loops, conditions, or nested functions
 * (https://reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level)
 * Reason 2: Don’t call Hooks from regular JavaScript functions.
 * (https://reactjs.org/docs/hooks-rules.html#only-call-hooks-from-react-functions)
 */
export const TodoListContainer = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const { navigation } = Environment.current();

  useEffect(() => {
    /** added this as an example of fetching data from server */
    setTodos(['todo 1', 'todo 2']);
  }, []);

  return (
    <TodoListScreen
      todos={todos}
      userClickedButton={() => {
        navigation.navigate(routes.TODO__ADD);
      }}
    />
  );
};
