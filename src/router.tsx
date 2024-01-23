import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loading from './pages/loading'

const Router = () => {
  const LazyChangePassword = lazy(() => import('./pages/reset-password'))
  const LazyLogin = lazy(() => import('./pages/login'))
  const LazyHome = lazy(() => import('./pages/home/view'))
  const LazyNotFound = lazy(() => import('./pages/not-found'))

  return (
    <BrowserRouter basename='/'>
      <main>
        <Routes>
          <Route
            path='/'
            element={
              <Suspense fallback={<Loading />}>
                <LazyNotFound />
              </Suspense>
            }
          />
          <Route
            path='/login'
            element={
              <Suspense fallback={<Loading />}>
                <LazyLogin />
              </Suspense>
            }
          />
          <Route
            path='/home'
            element={
              <Suspense fallback={<Loading />}>
                <LazyHome />
              </Suspense>
            }
          />
          <Route
            path='/reset-password'
            element={
              <Suspense fallback={<Loading />}>
                <LazyChangePassword />
              </Suspense>
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default Router
