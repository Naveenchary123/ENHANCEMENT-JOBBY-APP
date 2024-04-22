import {Route, Switch, Redirect} from 'react-router-dom'

import Login from './component/Login'
import ProtectedRoute from './component/ProtectedRoute'
import Home from './component/Home'
import Jobs from './component/Jobs'
import NotFound from './component/NotFound'
import JobItemDetail from './component/JobItemDetail'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/jobs" component={Jobs} />
    <ProtectedRoute exact path="/jobs/:id" component={JobItemDetail} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
