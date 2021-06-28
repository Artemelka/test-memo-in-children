import React from 'react';
import { Wrapper } from '../wrapper/wrapper';
import { List, MemoList } from '../list/list';
import './app.css';

export const App = () => (
  <div className="App">
    <div className="App__section">
      <Wrapper
        component={MemoList}
        title="memo children"
      />
    </div>
    <div className="App__section">
      <Wrapper
        component={List}
        title="pure children"
      />
    </div>
  </div>
);
