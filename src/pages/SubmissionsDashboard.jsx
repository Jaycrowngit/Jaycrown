import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Trash2, Eye, Lock, LogOut } from 'lucide-react'
import { getSubmissions, deleteSubmission } from '../lib/supabaseClient'

const ADMIN_PASSWORD = 'jaycrown2024' // Change this to your password

export default function SubmissionsDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [passwordInput, setPasswordInput] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [submissions, setSubmissions] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [selectedSubmission, setSelectedSubmission] = useState(null)

  const handlePasswordSubmit = (e) => {
    e.preventDefault()
    setPasswordError('')

    if (passwordInput === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      setPasswordInput('')
      loadSubmissions()
    } else {
      setPasswordError('Incorrect password')
      setPasswordInput('')
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      loadSubmissions()
      const interval = setInterval(loadSubmissions, 30000)
      return () => clearInterval(interval)
    }
  }, [isAuthenticated])

  const loadSubmissions = async () => {
    try {
      setLoading(true)
      const data = await getSubmissions()
      setSubmissions(data)
      setError(null)
    } catch (err) {
      setError('Failed to load submissions')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this submission?')) {
      const success = await deleteSubmission(id)
      if (success) {
        setSubmissions(submissions.filter((s) => s.id !== id))
        setSelectedSubmission(null)
      }
    }
  }

  const getFormTypeLabel = (type) => {
    const labels = {
      freelance: '💼 Freelance',
      partner: '📈 Partner',
      collaborate: '👥 Collaborate',
      hire: '🚀 Hire',
    }
    return labels[type] || type
  }

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  // Password Protection Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-deep-space to-deep-space/90 flex items-center justify-center pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md px-4"
        >
          <div className="bg-white rounded-lg shadow-2xl p-8">
            <div className="text-center mb-8">
              <Lock size={48} className="text-meltgreen mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-deep-space mb-2">
                Submissions
              </h1>
              <p className="text-gray-600">Enter password to view submissions</p>
            </div>

            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value)
                    setPasswordError('')
                  }}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') handlePasswordSubmit(e)
                  }}
                  placeholder="Enter password"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-meltgreen focus:ring-2 focus:ring-meltgreen/20 transition-all text-center text-lg tracking-widest"
                  autoFocus
                />
              </div>

              {passwordError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm text-center"
                >
                  {passwordError}
                </motion.div>
              )}

              <button
                type="submit"
                className="w-full px-6 py-3 bg-meltgreen text-deep-space font-semibold rounded-lg hover:bg-meltgreen/90 transition-colors flex items-center justify-center gap-2"
              >
                <Lock size={18} />
                Unlock Dashboard
              </button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-6">
              🔒 Password protected. Only authorized access.
            </p>
          </div>
        </motion.div>
      </div>
    )
  }

  // Main Dashboard (After Authentication)
  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-5xl font-bold text-deep-space mb-4">
                Submissions Dashboard
              </h1>
              <p className="text-gray-600">
                View and manage all form submissions from your portfolio
              </p>
            </div>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="px-4 py-2 bg-gray-200 text-deep-space rounded-lg hover:bg-gray-300 transition-colors flex items-center gap-2"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>

          {error && (
            <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg mb-6">
              {error}
            </div>
          )}

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="text-lg text-gray-600">Loading submissions...</div>
            </div>
          ) : submissions.length === 0 ? (
            <div className="flex justify-center items-center h-64 bg-gray-50 rounded-lg">
              <div className="text-lg text-gray-600">No submissions yet</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Submissions List */}
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  {submissions.map((submission) => (
                    <motion.div
                      key={submission.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      onClick={() => setSelectedSubmission(submission)}
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${
                        selectedSubmission?.id === submission.id
                          ? 'border-meltgreen bg-meltgreen/5'
                          : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="font-semibold text-deep-space">
                              {getFormTypeLabel(submission.form_type)}
                            </span>
                            <span className="text-xs text-gray-500">
                              {formatDate(submission.submitted_at)}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">
                            {submission.form_data?.projectName ||
                              submission.form_data?.companyName ||
                              submission.form_data?.projectType ||
                              'No title'}
                          </p>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleDelete(submission.id)
                          }}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete submission"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Submission Details */}
              <div className="lg:col-span-1">
                {selectedSubmission ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gray-50 border border-gray-200 rounded-lg p-6 sticky top-24"
                  >
                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-deep-space mb-2">
                        {getFormTypeLabel(selectedSubmission.form_type)}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {formatDate(selectedSubmission.submitted_at)}
                      </p>
                    </div>

                    <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                      {Object.entries(selectedSubmission.form_data).map(
                        ([key, value]) => (
                          <div key={key}>
                            <label className="text-xs font-semibold text-gray-600 uppercase">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </label>
                            <p className="text-sm text-deep-space mt-1 break-words">
                              {value || '—'}
                            </p>
                          </div>
                        )
                      )}
                    </div>

                    <button
                      onClick={() => handleDelete(selectedSubmission.id)}
                      className="w-full px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors font-medium flex items-center justify-center gap-2"
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>
                  </motion.div>
                ) : (
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex items-center justify-center h-64 text-center">
                    <div>
                      <Eye size={32} className="text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600">
                        Select a submission to view details
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Refresh Button */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={loadSubmissions}
              disabled={loading}
              className="px-6 py-2 bg-meltgreen text-deep-space rounded-lg font-semibold hover:bg-meltgreen/90 transition-colors disabled:opacity-50"
            >
              {loading ? 'Refreshing...' : 'Refresh'}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
