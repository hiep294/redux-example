import React from 'react';
import './App.css';
import Posts from './components/Posts'
import PostFrom from './components/Postform'
import { Provider } from 'react-redux'

import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostFrom />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
