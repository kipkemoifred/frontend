
import { Button } from 'antd';
import './App.css';
import Nav from './Nav';
import About from './About'
import Contact from './Contact'
import Orders from './Orders'
import Login from './Login'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './Home';
import OrderDetail from './OrderDetail';
import Register from './Regiser';

function App() {
  return (
    <Router>
    <div className="App">
    <Nav/>
    <Switch>
    <Route path='/' exact component={Home}/>
    <Route path='/about' exact component={About}/>
    <Route path='/contact' exact component={Contact}/>
    <Route path='/orders' exact component={Orders}/>
    <Route path='/login' exact component={Login}/>
    <Route path='/register' exact component={Register}/>
    <Route path='/order/:id' exact component={OrderDetail}/>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
