import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'tailwindcss/tailwind.css'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'

const Home = lazy(() => import('@routes/Home'))
const NotFound = lazy(() => import('@routes/NotFound'))

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
    <Footer />
  </BrowserRouter>,
  document.getElementById('app')
)
