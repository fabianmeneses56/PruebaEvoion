import React from 'react';
import { Provider } from 'react-redux';

import Tab from './App/navigator/Tab';
import store from './App/reducers/store'

const App=()=>{
  return (
    <Provider store={store}>
      <Tab/>
    </Provider>
  );
};



export default App;
