import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Download } from 'lucide-react'
import { submitFormData } from '../lib/supabaseClient'

export default function HireMePage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [formData, setFormData] = useState({
    companyName: '',
    position: '',
    employmentType: '',
    salaryRange: '',
    description: '',
    email: '',
    contactName: '',
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

    const result = await submitFormData('hire', formData)

    if (result.success) {
      setSubmitted(true)
      setFormData({
        companyName: '',
        position: '',
        employmentType: '',
        salaryRange: '',
        description: '',
        email: '',
        contactName: '',
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
              <span className="text-sm font-semibold text-meltgreen">FULL-TIME & CONTRACT</span>
            </div>
            <h1 className="text-5xl font-bold text-deep-space mb-4">
              Let's Build Together
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Looking for a Senior Engineer to lead technical strategy, scale systems, and mentor teams?
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-deep-space mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-meltgreen focus:ring-1 focus:ring-meltgreen transition-smooth"
                    placeholder="Your organization"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-deep-space mb-2">
                    Your Name/Hiring Manager *
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-meltgreen focus:ring-1 focus:ring-meltgreen transition-smooth"
                    placeholder="Full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-deep-space mb-2">
                    Position/Role *
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-meltgreen focus:ring-1 focus:ring-meltgreen transition-smooth"
                    placeholder="e.g., Senior Backend Engineer"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-deep-space mb-2">
                    Employment Type *
                  </label>
                  <select
                    name="employmentType"
                    value={formData.employmentType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-meltgreen focus:ring-1 focus:ring-meltgreen transition-smooth"
                  >
                    <option value="">Select type...</option>
                    <option value="full-time">Full-Time</option>
                    <option value="contract">Contract (6-12 months)</option>
                    <option value="fractional-cto">Fractional CTO</option>
                    <option value="advisory">Advisory Board</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-deep-space mb-2">
                    Salary/Compensation Range *
                  </label>
                  <select
                    name="salaryRange"
                    value={formData.salaryRange}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-meltgreen focus:ring-1 focus:ring-meltgreen transition-smooth"
                  >
                    <option value="">Select range...</option>
                    <option value="150k-180k">$150K - $180K</option>
                    <option value="180k-220k">$180K - $220K</option>
                    <option value="220k-280k">$220K - $280K</option>
                    <option value="280k+">$280K+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-deep-space mb-2">
                    About the Role/Opportunity
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-meltgreen focus:ring-1 focus:ring-meltgreen transition-smooth resize-none"
                    placeholder="What is the role, team size, and growth opportunities?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-deep-space mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-meltgreen focus:ring-1 focus:ring-meltgreen transition-smooth"
                    placeholder="hiring@company.com"
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
                      Inquiry Received
                    </>
                  ) : loading ? (
                    'Sending...'
                  ) : (
                    'Send Opportunity'
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
                <motion.button
                  onClick={() => alert('CV download feature - add your CV file to public/CV.pdf')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-4 bg-meltgreen/10 border-2 border-meltgreen text-meltgreen font-semibold rounded-lg transition-smooth hover:bg-meltgreen/20 flex items-center justify-center gap-2"
                >
                  <Download size={20} />
                  Download CV
                </motion.button>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="font-bold text-deep-space mb-3">Qualifications</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✓ 10+ years engineering</li>
                    <li>✓ Full-stack expertise</li>
                    <li>✓ Distributed systems</li>
                    <li>✓ Team leadership</li>
                    <li>✓ Startup to IPO</li>
                  </ul>
                </div>

                <div className="bg-meltgreen/5 p-6 rounded-lg border border-meltgreen/20">
                  <h3 className="font-bold text-deep-space mb-3 text-sm">My Interests</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>🚀 Scaling problems</li>
                    <li>💼 Technical strategy</li>
                    <li>👥 Team building</li>
                    <li>🌍 Remote/hybrid OK</li>
                    <li>⚡ High-impact roles</li>
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
