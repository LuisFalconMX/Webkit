import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'tailwindcss/tailwind.css'

const Home = lazy(() => import('@routes/Home'))
const NotFound = lazy(() => import('@routes/NotFound'))

ReactDOM.render(
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </BrowserRouter>,
  document.getElementById('app')
)
