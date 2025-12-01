import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App'; // ✅ Import App
import { Provider } from 'react-redux';

import ExampleStore from './example1/ExampleStore';
import TodoStore from './example1/TodoStore';
import NoteStore from './example1/NoteStore';
import InputStore from './example1/InputStore';
import SaveStore from './example1/SaveStore';
import ReduxStore from './reviews/ReduxStore';
import ProfileStore from './example1/ProfileStore';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={ProfileStore}>
    <App />
  </Provider>
);

