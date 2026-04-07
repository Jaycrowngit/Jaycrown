import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Star, Check } from 'lucide-react'
import { supabase } from '../lib/supabaseClient'

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [formData, setFormData] = useState({
    authorName: '',
    company: '',
    role: '',
    rating: 5,
    message: '',
    email: '',
  })

  useEffect(() => {
    loadReviews()
  }, [])

  const loadReviews = async () => {
    try {
      setLoading(true)
      const { data, error: err } = await supabase
        .from('reviews')
        .select('*')
        .order('created_at', { ascending: false })

      if (err) throw err
      setReviews(data || [])
    } catch (err) {
      console.error('Error loading reviews:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value,
    }))
    setError(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    if (!formData.authorName || !formData.message) {
      setError('Name and review are required')
      setSubmitting(false)
      return
    }

    try {
      const { error: err } = await supabase.from('reviews').insert([
        {
          author_name: formData.authorName,
          company: formData.company,
          role: formData.role,
          rating: formData.rating,
          message: formData.message,
          email: formData.email,
        },
      ])

      if (err) throw err

      setSubmitted(true)
      setFormData({
        authorName: '',
        company: '',
        role: '',
        rating: 5,
        message: '',
        email: '',
      })

      // Reload reviews
      await loadReviews()

      setTimeout(() => setSubmitted(false), 3000)
    } catch (err) {
      setError(err.message || 'Failed to submit review')
      console.error(err)
    } finally {
      setSubmitting(false)
    }
  }

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? 'fill-meltgreen text-meltgreen' : 'text-gray-300'}
          />
        ))}
      </div>
    )
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-meltgreen/10 border border-meltgreen/30 rounded-full mb-4">
            <span className="text-sm font-semibold text-meltgreen">TESTIMONIALS</span>
          </div>
          <h1 className="text-5xl font-bold text-deep-space mb-4">
            What Clients Say
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real feedback from people I've worked with. Share your experience and help others learn about my work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Reviews List */}
          <div className="lg:col-span-2">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="text-gray-600">Loading reviews...</div>
              </div>
            ) : reviews.length === 0 ? (
              <div className="flex justify-center items-center h-64 bg-gray-50 rounded-lg">
                <div className="text-gray-600 text-center">
                  <p className="font-semibold mb-2">No reviews yet</p>
                  <p className="text-sm">Be the first to share your experience!</p>
                </div>
              </div>
            ) : (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-6"
              >
                {reviews.map((review) => (
                  <motion.div
                    key={review.id}
                    variants={itemVariants}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:border-meltgreen hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-deep-space">
                          {review.author_name}
                        </h3>
                        {review.role && (
                          <p className="text-sm text-gray-600">
                            {review.role}
                            {review.company && ` at ${review.company}`}
                          </p>
                        )}
                      </div>
                      <StarRating rating={review.rating} />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{review.message}</p>
                    <p className="text-xs text-gray-500 mt-4">
                      {new Date(review.created_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Review Form */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-deep-space rounded-lg p-6 text-white sticky top-24"
            >
              <h2 className="text-2xl font-bold mb-6">Share Your Feedback</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="authorName"
                    value={formData.authorName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-meltgreen transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Tech Corp"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-meltgreen transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Your Role
                  </label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    placeholder="CTO / Product Manager"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-meltgreen transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email (private)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-meltgreen transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Rating *
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, rating: star }))
                        }
                        className="p-1 transition-transform hover:scale-110"
                      >
                        <Star
                          size={24}
                          className={
                            star <= formData.rating
                              ? 'fill-meltgreen text-meltgreen'
                              : 'text-white/30'
                          }
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Your Review *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share your experience..."
                    rows="4"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-meltgreen transition-colors resize-none"
                    required
                  />
                </div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-red-500/20 border border-red-500/50 text-red-300 rounded-lg text-sm"
                  >
                    {error}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={submitted || submitting}
                  whileHover={!submitted && !submitting ? { scale: 1.05 } : {}}
                  whileTap={!submitted && !submitting ? { scale: 0.95 } : {}}
                  className={`w-full px-6 py-3 font-semibold rounded-lg transition-all flex items-center justify-center gap-2 ${
                    submitted
                      ? 'bg-meltgreen text-deep-space'
                      : 'bg-meltgreen text-deep-space hover:bg-meltgreen/90'
                  }`}
                >
                  {submitted ? (
                    <>
                      <Check size={20} />
                      Review Posted!
                    </>
                  ) : submitting ? (
                    'Posting...'
                  ) : (
                    'Post Review'
                  )}
                </motion.button>
              </form>

              <p className="text-xs text-white/60 mt-4 text-center">
                All reviews are moderated and will appear after approval
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
