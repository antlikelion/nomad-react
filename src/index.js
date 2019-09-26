import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
// public폴더에 있는 index.html의 root라는 id를 가진 element에 App컴포넌트를 렌더링시키겠다는 것
// 리액트 앱은 한 번에 하나의 컴포넌트만 렌더링할 수 있기 때문에 다른 컴포넌트는 App컴포넌트 안에 위치해야 함