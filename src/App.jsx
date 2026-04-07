import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy, useState, useEffect } from 'react'
import LoadingScreen from './components/LoadingScreen'

// Dynamic imports with error handling
const Navigation = lazy(() => import('./components/Navigation').catch(e => {
  console.error('Navigation import failed:', e)
  return { default: () => <div style={{color:'red', padding:'20px'}}>Navigation Error: {e.message}</div> }
}))

const Footer = lazy(() => import('./components/Footer').catch(e => {
  console.error('Footer import failed:', e)
  return { default: () => <div style={{color:'red', padding:'20px'}}>Footer Error: {e.message}</div> }
}))

const HomePage = lazy(() => import('./pages/HomePage').catch(e => {
  console.error('HomePage import failed:', e)
  return { default: () => <div style={{color:'red', padding:'20px'}}>HomePage Error: {e.message}</div> }
}))

const FreelancePage = lazy(() => import('./pages/FreelancePage').catch(e => {
  console.error('FreelancePage import failed:', e)
  return { default: () => <div style={{color:'red', padding:'20px'}}>FreelancePage Error: {e.message}</div> }
}))

const PartnerPage = lazy(() => import('./pages/PartnerPage').catch(e => {
  console.error('PartnerPage import failed:', e)
  return { default: () => <div style={{color:'red', padding:'20px'}}>PartnerPage Error: {e.message}</div> }
}))

const CollaboratePage = lazy(() => import('./pages/CollaboratePage').catch(e => {
  console.error('CollaboratePage import failed:', e)
  return { default: () => <div style={{color:'red', padding:'20px'}}>CollaboratePage Error: {e.message}</div> }
}))

const HireMePage = lazy(() => import('./pages/HireMePage').catch(e => {
  console.error('HireMePage import failed:', e)
  return { default: () => <div style={{color:'red', padding:'20px'}}>HireMePage Error: {e.message}</div> }
}))

const SubmissionsDashboard = lazy(() => import('./pages/SubmissionsDashboard').catch(e => {
  console.error('SubmissionsDashboard import failed:', e)
  return { default: () => <div style={{color:'red', padding:'20px'}}>Dashboard Error: {e.message}</div> }
}))

const ReviewsPage = lazy(() => import('./pages/ReviewsPage').catch(e => {
  console.error('ReviewsPage import failed:', e)
  return { default: () => <div style={{color:'red', padding:'20px'}}>Reviews Error: {e.message}</div> }
}))

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 15000)
    return () => clearTimeout(timer)
  }, [])

  console.log('App Component Mounting')
  
  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <Router>
      <div style={{ minHeight: '100vh', backgroundColor: 'white', display: 'flex', flexDirection: 'column' }}>
        <Suspense fallback={<div>Loading Navigation...</div>}>
          <Navigation />
        </Suspense>
        <main style={{ flex: 1 }}>
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/freelance" element={<FreelancePage />} />
              <Route path="/partner" element={<PartnerPage />} />
              <Route path="/collaborate" element={<CollaboratePage />} />
              <Route path="/hire" element={<HireMePage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="/submissions" element={<SubmissionsDashboard />} />
            </Routes>
          </Suspense>
        </main>
        <Suspense fallback={<div>Loading Footer...</div>}>
          <Footer />
        </Suspense>
      </div>
    </Router>
  )
}

export default App
