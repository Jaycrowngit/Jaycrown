import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy, useState, useEffect } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const HomePage             = lazy(() => import('./pages/HomePage'))
const SubmissionsDashboard = lazy(() => import('./pages/SubmissionsDashboard'))

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <Router>
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          background: 'var(--bg-primary)',
          color: 'var(--text-primary)',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <Navigation />
        <main style={{ flex: 1 }}>
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route path="/"            element={<HomePage />} />
              <Route path="/submissions" element={<SubmissionsDashboard />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
