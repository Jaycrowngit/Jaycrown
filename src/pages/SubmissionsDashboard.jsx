import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trash2, Eye, Lock, LogOut, RefreshCcw, Search, Calendar, ChevronRight } from 'lucide-react'
import { getSubmissions, deleteSubmission } from '../lib/supabaseClient'

const ADMIN_PASSWORD = 'jaycrown2024' 

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
      setPasswordError('ACCESS DENIED: Invalid Security Token')
      setPasswordInput('')
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      loadSubmissions()
      const interval = setInterval(loadSubmissions, 60000)
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
      setError('System Error: Data sync failed.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (confirm('Authorize clinical deletion of this record?')) {
      const success = await deleteSubmission(id)
      if (success) {
        setSubmissions(submissions.filter((s) => s.id !== id))
        setSelectedSubmission(null)
      }
    }
  }

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    }).replace(/\//g, '.')
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-deep-space flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-meltgreen/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
             
            <div className="text-center mb-10">
              <div className="w-16 h-16 bg-meltgreen/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                 <Lock className="text-meltgreen" size={32} />
              </div>
              <h1 className="text-2xl font-bold text-white mb-2 tracking-tight uppercase">Admin Terminal</h1>
              <p className="text-white/40 text-sm font-medium tracking-widest uppercase">Secure Intake Dashboard</p>
            </div>

            <form onSubmit={handlePasswordSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value)
                    setPasswordError('')
                  }}
                  placeholder="Security Password"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white text-center tracking-[0.5em] focus:border-meltgreen outline-none transition-all placeholder:tracking-normal placeholder:text-white/20"
                  autoFocus
                />
              </div>

              {passwordError && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-400 text-[10px] font-black uppercase tracking-widest text-center"
                >
                  {passwordError}
                </motion.div>
              )}

              <button
                type="submit"
                className="w-full py-4 bg-meltgreen text-deep-space font-black uppercase tracking-widest rounded-2xl hover:bg-white transition-colors duration-300 shadow-[0_10px_30px_rgba(45,255,196,0.15)]"
              >
                Authenticate
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 bg-meltgreen rounded-full animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-deep-space/40">Real-time Lead Intake</span>
            </div>
            <h1 className="text-4xl font-bold text-deep-space tracking-tight">Terminal. <span className="text-deep-space/50">Submissions</span></h1>
          </div>
          <div className="flex gap-4">
             <button
              onClick={loadSubmissions}
              disabled={loading}
              className="p-3 bg-white border border-gray-100 rounded-xl text-deep-space/60 hover:text-deep-space transition-colors shadow-sm"
            >
              <RefreshCcw size={20} className={loading ? 'animate-spin' : ''} />
            </button>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="px-6 py-3 bg-deep-space text-white rounded-xl font-bold text-sm flex items-center gap-3 hover:bg-gray-800 transition-colors shadow-lg shadow-deep-space/10"
            >
              <LogOut size={16} />
              Disconnect
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar: List of Submissions */}
          <div className="lg:col-span-5 space-y-4">
            <AnimatePresence>
            {submissions?.map((sub, i) => (
              <motion.div
                key={sub.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setSelectedSubmission(sub)}
                className={`p-6 rounded-[2rem] border-2 cursor-pointer transition-all duration-300 ${
                  selectedSubmission?.id === sub.id
                  ? 'border-meltgreen bg-white shadow-xl shadow-meltgreen/5 translate-x-2'
                  : 'border-transparent bg-white/50 hover:bg-white hover:border-gray-100'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                   <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold ${
                        selectedSubmission?.id === sub.id ? 'bg-meltgreen text-deep-space' : 'bg-gray-100 text-gray-400'
                      }`}>
                        {sub.form_data?.service?.[0] || sub.form_data?.projectType?.[0] || 'A'}
                      </div>
                      <div>
                        <h3 className="font-bold text-deep-space">{sub.form_data?.service || sub.form_data?.projectType || 'New Project'}</h3>
                        <p className="text-[10px] uppercase font-black tracking-widest text-deep-space/30">{sub.form_type}</p>
                      </div>
                   </div>
                   <span className="text-[10px] font-bold text-gray-400 font-mono">{formatDate(sub.submitted_at)}</span>
                </div>
                <div className="flex justify-between items-center group">
                   <p className="text-sm font-medium text-deep-space/60 truncate max-w-[200px]">{sub.form_data?.email || 'No Email'}</p>
                   <ChevronRight size={16} className={`transition-transform ${selectedSubmission?.id === sub.id ? 'text-meltgreen translate-x-1' : 'text-gray-200'}`} />
                </div>
              </motion.div>
            ))}
            </AnimatePresence>
            {(!submissions || submissions.length === 0) && !loading && (
              <div className="p-12 text-center border-2 border-dashed border-gray-200 rounded-[2rem]">
                 <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">No records detected</p>
              </div>
            )}
          </div>

          {/* Details Panel */}
          <div className="lg:col-span-7">
            {selectedSubmission ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                key={selectedSubmission.id}
                className="bg-white border border-gray-100 rounded-[2.5rem] p-10 shadow-2xl sticky top-32"
              >
                <div className="flex justify-between items-start mb-12">
                   <div>
                      <h2 className="text-3xl font-bold text-deep-space mb-2">Project Brief</h2>
                      <p className="text-sm text-deep-space/40 font-mono">ID: {selectedSubmission?.id?.slice(0,8) || 'N/A'}... :: {formatDate(selectedSubmission.submitted_at)}</p>
                   </div>
                   <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(selectedSubmission.id);
                      }}
                      className="p-4 bg-red-50 text-red-500 rounded-2xl hover:bg-red-500 hover:text-white transition-all group"
                      title="Clinical Wipe"
                    >
                      <Trash2 size={24} className="group-active:scale-95" />
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-12">
                   <div className="p-6 bg-gray-50 rounded-3xl">
                      <p className="text-[10px] font-black uppercase tracking-widest text-deep-space/30 mb-2">Financial Scope</p>
                      <p className="text-xl font-bold text-deep-space">{selectedSubmission.form_data?.budget || selectedSubmission.form_data?.timeline || 'N/A'}</p>
                   </div>
                   <div className="p-6 bg-gray-50 rounded-3xl">
                      <p className="text-[10px] font-black uppercase tracking-widest text-deep-space/30 mb-2">Target Timeline</p>
                      <p className="text-xl font-bold text-deep-space">{selectedSubmission.form_data?.timeline || 'N/A'}</p>
                   </div>
                </div>

                <div className="space-y-8">
                   <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-deep-space/30 mb-4 flex items-center gap-2">
                        <Search size={12} /> Project Intention
                      </p>
                      <div className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100 text-deep-space leading-relaxed whitespace-pre-wrap">
                        {selectedSubmission.form_data?.details || selectedSubmission.form_data?.message || 'No details provided.'}
                      </div>
                   </div>

                   <div className="flex items-center justify-between p-6 bg-meltgreen/5 border border-meltgreen/10 rounded-3xl">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-meltgreen mb-1">Communication Channel</p>
                        <p className="text-lg font-bold text-deep-space">{selectedSubmission.form_data?.email || 'N/A'}</p>
                      </div>
                      <a 
                        href={`mailto:${selectedSubmission.form_data?.email}`}
                        className="px-6 py-3 bg-deep-space text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-meltgreen hover:text-deep-space transition-all"
                      >
                        Initiate Response
                      </a>
                   </div>
                </div>
              </motion.div>
            ) : (
              <div className="h-[600px] border-2 border-dashed border-gray-200 rounded-[2.5rem] flex flex-col items-center justify-center text-center p-12">
                 <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                    <Eye className="text-gray-200" size={40} />
                 </div>
                 <h3 className="text-xl font-bold text-deep-space/40 mb-2">Awaiting Selection</h3>
                 <p className="text-sm text-deep-space/20 max-w-xs">Select a project record from the left to view the full architectural brief.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
