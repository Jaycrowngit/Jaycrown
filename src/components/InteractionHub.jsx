import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, ChevronRight, ChevronLeft, Send, Sparkles, AlertCircle } from 'lucide-react'
import { submitFormData } from '../lib/supabaseClient'

export default function InteractionHub() {
  const [step, setStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [formData, setFormData] = useState({
    service: '',
    budget: '',
    timeline: '',
    email: '',
    details: ''
  })

  const services = ['Web Ecosystems', 'Mobile Apps', 'DevOps & Infrastructure', 'Design Systems']
  const budgets = ['Under $10k', '$10k - $50k', '$50k - $100k', '$100k+']
  const timelines = ['< 1 Month', '1-3 Months', '3-6 Months', '6 Months+']

  const handleNext = () => setStep(s => s + 1)
  const handleBack = () => setStep(s => s - 1)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    
    const result = await submitFormData('Agency Inquiry', formData)
    
    if (result.success) {
      setIsSubmitted(true)
    } else {
      setError('System Error: Unable to transmit inquiry. Please try again or contact hello@jaytech.hub directly.')
    }
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-[600px] flex flex-col items-center justify-center p-12 text-center bg-white rounded-3xl border border-gray-100 shadow-2xl overflow-hidden relative">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          className="w-24 h-24 bg-meltgreen rounded-full flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(45,255,196,0.6)]"
        >
          <CheckCircle2 size={48} className="text-deep-space" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-4xl font-bold text-deep-space mb-4 tracking-tight">Inquiry Received</h2>
          <p className="text-xl text-deep-space/60 max-w-md mx-auto">
            Our team has been notified. Expect a strategic response within 24 business hours.
          </p>
        </motion.div>

        {/* Global pulse effect on success */}
        <motion.div 
          className="absolute inset-0 z-[-1] bg-meltgreen/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: 1 }}
        />
      </div>
    )
  }

  return (
    <section id="inquiry" className="py-32 bg-gray-50/50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-deep-space/5 rounded-full mb-6 font-bold text-[10px] tracking-widest text-deep-space/60 uppercase">
            <Sparkles size={14} className="text-meltgreen" />
            Client Inquiry Hub
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-deep-space mb-6 tracking-tight">
            Ready to <span className="text-meltgreen">scale?</span>
          </h2>
          <p className="text-xl text-deep-space/60">
            Tell us about your project requirements and we'll prepare a tailored architectural proposal.
          </p>
        </div>

        <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl p-8 md:p-12 overflow-hidden relative">
          {/* Progress bar */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gray-100">
            <motion.div
              className="h-full bg-meltgreen shadow-[0_0_10px_#2DFFC4]"
              initial={{ width: '25%' }}
              animate={{ width: `${(step / 4) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {step === 1 && (
                <div className="space-y-8">
                  <h3 className="text-3xl font-bold text-deep-space">Which service do you need?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map(service => (
                      <button
                        key={service}
                        onClick={() => { setFormData({ ...formData, service }); handleNext(); }}
                        className={`p-6 rounded-2xl text-left border-2 transition-all font-bold group ${
                          formData.service === service 
                          ? 'border-meltgreen bg-meltgreen/5 text-deep-space' 
                          : 'border-gray-100 hover:border-gray-200 text-deep-space/60'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span>{service}</span>
                          <div className={`p-1 rounded-full ${formData.service === service ? 'bg-meltgreen' : 'bg-gray-100'}`}>
                            <ChevronRight size={16} />
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-8">
                  <h3 className="text-3xl font-bold text-deep-space">Financial & Timeline Scope</h3>
                  <div className="space-y-10">
                    <div>
                      <p className="text-sm font-black text-deep-space/40 uppercase tracking-widest mb-4">Estimated Budget</p>
                      <div className="flex flex-wrap gap-3">
                        {budgets.map(b => (
                          <button
                            key={b}
                            onClick={() => setFormData({ ...formData, budget: b })}
                            className={`px-6 py-3 rounded-full border-2 font-bold transition-all ${
                              formData.budget === b 
                              ? 'border-deep-space bg-deep-space text-white' 
                              : 'border-gray-100 hover:border-gray-200'
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-black text-deep-space/40 uppercase tracking-widest mb-4">Launch Timeline</p>
                      <div className="flex flex-wrap gap-3">
                        {timelines.map(t => (
                          <button
                            key={t}
                            onClick={() => setFormData({ ...formData, timeline: t })}
                            className={`px-6 py-3 rounded-full border-2 font-bold transition-all ${
                              formData.timeline === t 
                              ? 'border-meltgreen bg-meltgreen text-deep-space' 
                              : 'border-gray-100 hover:border-gray-200'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-8">
                  <h3 className="text-3xl font-bold text-deep-space">The Foundation</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-black text-deep-space/40 uppercase tracking-widest mb-3">Project Details</label>
                      <textarea
                        className="w-full bg-gray-50 border-2 border-gray-100 rounded-3xl p-6 focus:border-meltgreen focus:ring-0 transition-all text-deep-space font-medium min-h-[150px]"
                        placeholder="Explain your vision, current pain points, or specific technical requirements..."
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-black text-deep-space/40 uppercase tracking-widest mb-3">Work Email</label>
                      <input
                        type="email"
                        className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl p-4 focus:border-meltgreen focus:ring-0 transition-all text-deep-space font-medium"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {error && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-600 text-sm font-medium"
            >
              <AlertCircle size={18} />
              {error}
            </motion.div>
          )}

          <div className="mt-12 pt-8 border-t border-gray-100 flex justify-between items-center">
            {step > 1 ? (
              <button 
                onClick={handleBack} 
                disabled={isSubmitting}
                className="flex items-center gap-2 text-deep-space/60 font-bold hover:text-deep-space transition-colors disabled:opacity-50"
              >
                <ChevronLeft size={20} />
                Back
              </button>
            ) : <div />}

            {step < 3 ? (
              <button 
                onClick={handleNext}
                className="bg-deep-space text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-deep-space/90 transition-all disabled:opacity-50"
                disabled={step === 1 && !formData.service}
              >
                Continue
                <ChevronRight size={20} />
              </button>
            ) : (
              <button 
                onClick={handleSubmit}
                className="bg-meltgreen text-deep-space px-10 py-4 rounded-2xl font-bold flex items-center gap-3 hover:translate-x-1 group transition-all disabled:opacity-50 shadow-[0_0_30px_rgba(45,255,196,0.3)]"
                disabled={!formData.email || !formData.details || isSubmitting}
              >
                {isSubmitting ? 'Transmitting...' : 'Send Inquiry'}
                {!isSubmitting && <Send size={18} className="transition-transform group-hover:rotate-12" />}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
