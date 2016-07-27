import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../App'
import Home from '../home/Home'
import Stuff from '../stuff/Stuff'
module.exports = (
<Route path="/" component={App}>
<IndexRoute component={Home}/>
<Route path="/stuff" component={Stuff}/>
</Route>
)