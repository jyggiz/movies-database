import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Container from './components/containers/Container';

function App() {
  return (
      <Provider store={store}>
        <Container/>
      </Provider>
  );
}

export default App;
