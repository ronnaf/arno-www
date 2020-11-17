import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import routes from './routes.json';
import './App.css';

// Connected components
import { HomeContainer as Home } from './modules/home/containers/HomeContainer';
import { TodoListContainer as TodoList } from './modules/todo/containers/TodoListContainer';
import { TodoAddContainer as TodoAdd } from './modules/todo/containers/TodoAddContainer';

/** Routes are structured here, and declared at routes.json */
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.HOME}>
          <Home />
        </Route>
        <Route path={routes.TODO_ADD}>
          <TodoAdd />
        </Route>
        <Route path={routes.TODO_LIST}>
          <TodoList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
