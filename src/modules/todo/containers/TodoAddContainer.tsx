import React from 'react';

import { routes } from '../../../routes';
import { Environment } from '../../../Environment';
import { TodoAddScreen } from '../components/TodoAddScreen';

export type TodoAddProps = {
  /* inputs */

  /* outputs */
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
export const TodoAddContainer = () => {
  const { navigation } = Environment.current();

  return (
    <TodoAddScreen
      userClickedButton={() => {
        navigation.navigate(routes.TODO__LIST);
      }}
    />
  );
};
