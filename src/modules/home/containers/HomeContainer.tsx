import React from 'react';
import { HomeScreen } from '../components/HomeScreen';

export type HomeProps = {};

/**
 * Why is this not following the same structure as (link below)?
 * https://github.com/smashingboxes/arno/blob/dev/src/modules/home/containers/HomeContainer.tsx
 *
 * Reason 1: Don’t call Hooks inside loops, conditions, or nested functions
 * (https://reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level)
 * Reason 2: Don’t call Hooks from regular JavaScript functions.
 * (https://reactjs.org/docs/hooks-rules.html#only-call-hooks-from-react-functions)
 */
export const HomeContainer = () => {
  return <HomeScreen />;
};
