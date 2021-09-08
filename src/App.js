import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import EmailPage from './pages/EmailPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SuccessfullySent from './components/EmailMe/SuccessfullySent';

function App() {
  const lazyHomePage = React.lazy(() => import('./pages/Home'));
  const lazyEmailPage = React.lazy(() => import('./pages/EmailPage'));
  return (
    <Router>
     
        <Switch>
          <Route path ='/' component ={Home} exact/>
          <Route path ='/email' component ={EmailPage} exact/>
          <Route path ='/sent' component = {SuccessfullySent} exact/>
        </Switch>
      
    </Router>
  );
}

export default App;
