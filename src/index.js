import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App3';
import Qna from './Qna'
import Gna from './Gnb'
import Gnbgo from './Gnbgo';

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    {/* <App />
    <Qna keynm='qna' /> */}
    {/* <Gna></Gna> */}
    <Gnbgo></Gnbgo>
  </React.Fragment>
);



