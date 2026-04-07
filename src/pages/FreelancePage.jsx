import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { submitFormData } from '../lib/supabaseClient'

export default function FreelancePage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [formData, setFormData] = useState({
    projectName: '',
    scope: '',
    budget: '',
    timeline: '',
    email: '',
    message: '',
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

    // Validate required fields
    if (!formData.projectName || !formData.email) {
      setError('Project name and email are required')
      setLoading(false)
      return
    }

    const result = await submitFormData('freelance', formData)

    if (result.success) {
      setSubmitted(true)
      setFormData({
        projectName: '',
        scope: '',
        budget: '',
        timeline: '',
        email: '',
        message: '',
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
              <span className="text-sm font-semibold text-meltgreen">FREELANCE</span>
            </div>
            <h1 className="text-5xl font-bold text-deep-space mb-4">
              Project-Based Work
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Tell me about your project. I'll assess scope, complexity, and timeline to
              provide a competitive quote.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-deep-space mb-2">
                    Project Name
                  </label>
                  <input
                    type="text"
                    name="projectName"
                    value={formData.projectName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-meltgreen focus:ring-1 focus:ring-meltgreen transition-smooth"
                    placeholder="e.g., Real-Time Analytics Platform"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-deep-space mb-2">
                    Project Scope
                  </label>
                  <textarea
                    name="scope"
                    value={formData.scope}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-meltgreen focus:ring-1 focus:ring-meltgreen transition-smooth resize-none"
                    placeholder="Describe what needs to be built..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-deep-space mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-meltgreen focus:ring-1 focus:ring-meltgreen transition-smooth"
                  >
                    <option value="">Select a range...</option>
                    <option value="5k-10k">$5K - $10K</option>
                    <option value="10k-25k">$10K - $25K</option>
                    <option value="25k-50k">$25K - $50K</option>
                    <option value="50k+">$50K+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-deep-space mb-2">
                    Timeline
                  </label>
                  <input
                    type="text"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-meltgreen focus:ring-1 focus:ring-meltgreen transition-smooth"
                    placeholder="e.g., 8-12 weeks"
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
                    Additional Notes
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-meltgreen focus:ring-1 focus:ring-meltgreen transition-smooth resize-none"
                    placeholder="Anything else..."
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
                      Inquiry Sent Successfully
                    </>
                  ) : loading ? (
                    'Sending...'
                  ) : (
                    'Send Project Inquiry'
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
                  <h3 className="font-bold text-deep-space mb-3">What to Expect</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✓ 24-hour response time</li>
                    <li>✓ Detailed technical assessment</li>
                    <li>✓ Custom quote & timeline</li>
                    <li>✓ Kickoff meeting scheduled</li>
                  </ul>
                </div>

                <div className="bg-meltgreen/5 p-6 rounded-lg border border-meltgreen/20">
                  <h3 className="font-bold text-deep-space mb-3 text-sm">Perfect For</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>🎯 MVP development</li>
                    <li>🚀 Feature enhancements</li>
                    <li>⚙️ Architecture refactoring</li>
                    <li>🔧 Technical consulting</li>
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
