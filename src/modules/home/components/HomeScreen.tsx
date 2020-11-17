import React from 'react';

import { HomeProps } from '../containers/HomeContainer';

export const HomeScreen: React.FC<HomeProps> = () => {
  return <div style={styles.container}>Hello world!</div>;
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
