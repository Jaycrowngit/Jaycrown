import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { submitFormData } from '../lib/supabaseClient'

export default function PartnerPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [formData, setFormData] = useState({
    companyName: '',
    vision: '',
    stage: '',
    equity: '',
    email: '',
    linkedIn: '',
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

    if (!formData.companyName || !formData.email) {
      setError('Company name and email are required')
      setLoading(false)
      return
    }

    const result = await submitFormData('partner', formData)

    if (result.success) {
      setSubmitted(true)
      setFormData({
        companyName: '',
        vision: '',
        stage: '',
        equity: '',
        email: '',
        linkedIn: '',
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
              <span className="text-sm font-semibold text-meltgreen">PARTNERSHIP</span>
            </div>
            <h1 className="text-5xl font-bold text-deep-space mb-4">
              Long-Term Equity Partnerships
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              I partner with visionary founders building the next generation of
              deep-tech and systems companies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-deep-space mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-meltgreen focus:ring-1 focus:ring-meltgreen transition-smooth"
                    placeholder="Your startup name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-deep-space mb-2">
                    Your Vision
                  </label>
                  <textarea
                    name="vision"
                    value={formData.vision}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-meltgreen focus:ring-1 focus:ring-meltgreen transition-smooth resize-none"
                    placeholder="What problem are you solving?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-deep-space mb-2">
                    Company Stage
                  </label>
                  <select
                    name="stage"
                    value={formData.stage}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-meltgreen focus:ring-1 focus:ring-meltgreen transition-smooth"
                  >
                    <option value="">Select stage...</option>
                    <option value="idea">Idea Stage</option>
                    <option value="pre-seed">Pre-Seed</option>
                    <option value="seed">Seed</option>
                    <option value="series-a">Series A</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-deep-space mb-2">
                    Equity/Compensation Package
                  </label>
                  <input
                    type="text"
                    name="equity"
                    value={formData.equity}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-meltgreen focus:ring-1 focus:ring-meltgreen transition-smooth"
                    placeholder="e.g., 3-5% equity + base"
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
                    placeholder="founder@startup.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-deep-space mb-2">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    name="linkedIn"
                    value={formData.linkedIn}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-meltgreen focus:ring-1 focus:ring-meltgreen transition-smooth"
                    placeholder="linkedin.com/in/yourprofile"
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
                      Partnership Inquiry Sent
                    </>
                  ) : loading ? (
                    'Sending...'
                  ) : (
                    'Explore Partnership'
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
                  <h3 className="font-bold text-deep-space mb-3">What I Look For</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✓ Visionary founders</li>
                    <li>✓ Meaningful problems</li>
                    <li>✓ Technical depth</li>
                    <li>✓ Market potential</li>
                  </ul>
                </div>

                <div className="bg-meltgreen/5 p-6 rounded-lg border border-meltgreen/20">
                  <h3 className="font-bold text-deep-space mb-3 text-sm">
                    My Commitment
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>🏛️ Full CTO/VP role</li>
                    <li>📊 Scaling architecture</li>
                    <li>🤝 Active mentorship</li>
                    <li>💡 Strategic guidance</li>
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
