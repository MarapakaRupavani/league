import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import TeamMatches from './TeamMatches'
import NotFound from './NotFound'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/team-matches/:id" component={TeamMatches} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
