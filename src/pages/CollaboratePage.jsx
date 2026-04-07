import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { submitFormData } from '../lib/supabaseClient'

export default function CollaboratePage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [formData, setFormData] = useState({
    projectType: '',
    description: '',
    repositoryUrl: '',
    skills: '',
    email: '',
    github: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    if (!formData.projectType || !formData.email) {
      setError('Project type and email are required')
      setLoading(false)
      return
    }

    const result = await submitFormData('collaborate', formData)

    if (result.success) {
      setSubmitted(true)
      setFormData({
        projectType: '',
        description: '',
        repositoryUrl: '',
        skills: '',
        email: '',
        github: '',
      })
      setTimeout(() => setSubmitted(false), 3000)
    } else {
      setError('Failed to submit. Please try again.')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <div className="inline-block px-4 py-2 bg-meltgreen/10 border border-meltgreen/30 rounded-full mb-4">
              <span className="text-sm font-semibold text-meltgreen">COLLABORATION</span>
            </div>
            <h1 className="text-5xl font-bold text-deep-space mb-4">
              Open-Source & Peer Development
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Interested in collaborating on an open-source project or peer development?
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-deep-space mb-2">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-meltgreen focus:ring-1 focus:ring-meltgreen transition-smooth"
                  >
                    <option value="">Select type...</option>
                    <option value="open-source">Open Source Library</option>
                    <option value="framework">Framework Enhancement</option>
                    <option value="community">Community Project</option>
                    <option value="experiment">Research/Experiment</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-deep-space mb-2">
                    Project Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-meltgreen focus:ring-1 focus:ring-meltgreen transition-smooth resize-none"
                    placeholder="What are you building?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-deep-space mb-2">
                    Repository URL
                  </label>
                  <input
                    type="url"
                    name="repositoryUrl"
                    value={formData.repositoryUrl}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-meltgreen focus:ring-1 focus:ring-meltgreen transition-smooth"
                    placeholder="github.com/your-org/project"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-deep-space mb-2">
                    Required Skills
                  </label>
                  <input
                    type="text"
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-meltgreen focus:ring-1 focus:ring-meltgreen transition-smooth"
                    placeholder="e.g., Rust, distributed systems"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-deep-space mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-meltgreen focus:ring-1 focus:ring-meltgreen transition-smooth"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-deep-space mb-2">
                    GitHub Profile
                  </label>
                  <input
                    type="url"
                    name="github"
                    value={formData.github}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-meltgreen focus:ring-1 focus:ring-meltgreen transition-smooth"
                    placeholder="github.com/yourprofile"
                  />
                </div>

                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={submitted || loading}
                  whileHover={!submitted && !loading ? { scale: 1.05 } : {}}
                  whileTap={!submitted && !loading ? { scale: 0.95 } : {}}
                  className={`w-full px-8 py-4 font-semibold rounded-lg transition-smooth flex items-center justify-center gap-2 ${
                    submitted
                      ? 'bg-meltgreen text-deep-space'
                      : 'bg-deep-space text-white hover:bg-deep-space/90'
                  }`}
                >
                  {submitted ? (
                    <>
                      <Check size={20} />
                      Collaboration Inquiry Sent
                    </>
                  ) : loading ? (
                    'Sending...'
                  ) : (
                    'Send Collaboration Inquiry'
                  )}
                </motion.button>
              </form>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="sticky top-24 space-y-6"
              >
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="font-bold text-deep-space mb-3">Open To</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✓ OSS contributions</li>
                    <li>✓ Co-maintainance</li>
                    <li>✓ Mentorship</li>
                    <li>✓ Research projects</li>
                  </ul>
                </div>

                <div className="bg-meltgreen/5 p-6 rounded-lg border border-meltgreen/20">
                  <h3 className="font-bold text-deep-space mb-3 text-sm">
                    Collaboration Time
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>📅 5-10 hours/week</li>
                    <li>🎯 Project-based</li>
                    <li>🌍 Remote friendly</li>
                    <li>📞 Flexible engagement</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
