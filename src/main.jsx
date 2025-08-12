import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom'
<HashRouter>
  <App />
</HashRouter>
import App from './App';
import './styles.css';createRoot(document.getElementById('root')).render(<React.StrictMode><BrowserRouter><App/></BrowserRouter></React.StrictMode>);
import './styles/med-theme.css';