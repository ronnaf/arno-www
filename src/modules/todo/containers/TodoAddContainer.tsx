import React from 'react';

import routes from '../../../routes.json';
import { Environment } from '../../../Environment';
import { TodoAddScreen } from '../components/TodoAddScreen';

export type TodoAddProps = {
  /* inputs */

  /* outputs */
  /** called when the user clicks the button */
  userClickedButton: () => void;
};

export const TodoAddContainer = () => {
  const { navigation } = Environment.current();

  return (
    <TodoAddScreen
      userClickedButton={() => {
        navigation.navigate(routes.TODO_LIST);
      }}
    />
  );
};
