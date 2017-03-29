import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import Repos from './Repos'
import Repo from './Repo'
import Home from './Home'
import AxiosPage from './AxiosPage'
import JtokerPage from './JtokerPage'
import UploadImage from './UploadImage'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/repos" component={Repos}>
      <Route path="/repos/:userName/:repoName" component={Repo}/>
    </Route>
    <Route path="/axiospage" component={AxiosPage}/>
    <Route path="/jtoker" component={JtokerPage}/>
    <Route path="/uploadimage" component={UploadImage}/>
  </Route>
)
