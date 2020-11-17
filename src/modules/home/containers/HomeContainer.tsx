import React from 'react';

export type HomeProps = {};

export const HomeContainer = (Screen: React.ComponentType<HomeProps>) => {
  return () => <Screen />;
};
