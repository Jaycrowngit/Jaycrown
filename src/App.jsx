import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy, useState, useEffect } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const HomePage = lazy(() => import('./pages/HomePage'))
const SubmissionsDashboard = lazy(() => import('./pages/SubmissionsDashboard'))

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Artificial delay to show the beautiful loader
    const timer = setTimeout(() => setIsLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-meltgreen/30 selection:text-deep-space">
        <Navigation />
        <main className="flex-grow">
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
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
