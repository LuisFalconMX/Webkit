import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'tailwindcss/tailwind.css'
import './i18n'

import Navbar from '@components/Navbar'
import Footer from '@components/Footer'

const Home = lazy(() => import('@routes/Home'))
const NotFound = lazy(() => import('@routes/NotFound'))

ReactDOM.render(
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Suspense>
  </BrowserRouter>,
  document.body
)
