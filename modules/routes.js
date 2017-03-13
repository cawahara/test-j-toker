import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import About from './About'
import Repos from './Repos'
import Repo from './Repo'
import Home from './Home'
import AxiosPage from './AxiosPage'
import MaterialUiPage from './material-ui/MaterialUiPage'
import JtokerPage from './JtokerPage'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/repos" component={Repos}>
      <Route path="/repos/:userName/:repoName" component={Repo}/>
    </Route>
    <Route path="/about" component={About}/>
    <Route path="/axiospage" component={AxiosPage}/>
    <Route path="/materialui" component={MaterialUiPage}/>
    <Route path="/jtoker" component={JtokerPage}/>
  </Route>
)
