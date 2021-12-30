import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import { BillMe } from './components/billme';

import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <BillMe />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

