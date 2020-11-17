import React from 'react';

import routes from '../../../routes.json';
import { Environment } from '../../../Environment';

export type TodoAddProps = {
  /* inputs */

  /* outputs */
  /** called when the user clicks the button */
  userClickedButton: () => void;
};

export const TodoAddContainer = (Screen: React.ComponentType<TodoAddProps>) => {
  const { navigation } = Environment.current();

  return () => (
    <Screen
      userClickedButton={() => {
        navigation.navigate(routes.TODO_LIST);
      }}
    />
  );
};
