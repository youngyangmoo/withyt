import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// 만약 오프라인에서 앱을 동작시킬거고 로드를 빨리하려면,
// unregister() 를 register로 바꿔. 약간 fails를 가져다 줄 수는 있어.
// severce workers에 대해 배우려면, https://bit.ly/CRA-PWA 를 참조해

serviceWorker.unregister();
