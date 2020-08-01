import React from 'react';
import ReactDOM from 'react-dom';

// import { HookApp } from './HookApp';
// import { CounterApp } from './components/useState/CounterApp';
// import { CounterWithCustomHook } from './components/useState/CounterWithCustomHook';
// import { SimpleForm } from './components/useEffect/SimpleForm';
// import { FormWithCustomHook } from './components/useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { RealExampleRef } from './components/04-useRef/RealExampleRef';
// import { Layout } from './components/05-useLayoutEffect/Layout';
// import { Memorize } from './components/06-Memos/Memorize';
// import { MemoHook } from './components/06-Memos/MemoHook';
// import { CallBackHook } from './components/06-Memos/CallBackHook';
import { TodoApp } from './components/08-useReducer/TodoApp';

ReactDOM.render(
    <TodoApp />,
  document.getElementById('root')
);


// import './components/08-useReducer/intro-reducer'