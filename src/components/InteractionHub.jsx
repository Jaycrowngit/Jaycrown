import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, ChevronRight, ChevronLeft, Send, Sparkles, AlertCircle, Database, ShieldCheck, Activity } from 'lucide-react'
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

  const services = ['Web Development', 'Mobile App', 'UI/UX Design', 'Graphic Design', 'Full-Stack Team']
  const budgets = ['Under $5k', '$5k – $20k', '$20k – $50k', '$50k+']
  const timelines = ['< 1 Month', '1–3 Months', '3–6 Months', '6 Months+']

  const handleNext = () => setStep(s => s + 1)
  const handleBack = () => setStep(s => s - 1)

  const handleSubmit = async (e) => {
    if (e) e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    
    const result = await submitFormData('Agency Inquiry', formData)
    
    if (result.success) {
      setIsSubmitted(true)
    } else {
      setError('Transmission Error: Unable to sync with hub. Please try again or email hello@jaytechhub.com')
    }
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-[700px] flex flex-col items-center justify-center p-12 text-center bg-theme-primary transition-colors duration-500 overflow-hidden relative">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          className="w-24 h-24 bg-meltgreen rounded-full flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(45,255,196,0.4)]"
        >
          <CheckCircle2 size={48} className="text-deep-space" />
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <h2 className="text-4xl font-black text-theme-primary mb-4 tracking-tight uppercase">Data Transmitted</h2>
          <p className="text-xl text-theme-secondary max-w-md mx-auto font-medium">
            Project requirements synchronized. Our architects will contact you within 24 business hours.
          </p>
        </motion.div>

        <motion.div 
          className="absolute inset-0 z-[-1] opacity-10"
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{ background: 'radial-gradient(circle, #2dffc4, transparent 70%)' }}
        />
      </div>
    )
  }

  return (
    <section id="inquiry" className="relative py-32 overflow-hidden transition-colors duration-500 bg-theme-tertiary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 items-stretch">
          
          {/* Left Side: Strategic Context */}
          <div className="lg:w-2/5 flex flex-col justify-between py-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/5 dark:bg-white/5 rounded-full mb-8 font-bold text-[10px] tracking-[0.3em] text-theme-secondary uppercase">
                <Sparkles size={14} className="text-meltgreen" />
                Protocol: New Inquiry
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-theme-primary mb-8 tracking-tighter uppercase leading-[0.9]">
                Ready to <span className="text-meltgreen">Interface?</span>
              </h2>
              <p className="text-lg text-theme-secondary font-medium mb-12">
                We don't just take orders. We architect solutions. Provide your parameters and let's build something significant.
              </p>

              <div className="space-y-8">
                {[
                  { icon: Database, title: 'Secure Handling', desc: 'Your project data is end-to-end encrypted.' },
                  { icon: ShieldCheck, title: 'Expert Vetting', desc: 'No generic replies. Real engineers review every brief.' },
                  { icon: Activity, title: 'High Velocity', desc: 'Average response time: 4.2 hours.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-black/5 dark:bg-white/5 flex items-center justify-center text-meltgreen">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-theme-primary uppercase tracking-wider">{item.title}</h4>
                      <p className="text-xs text-theme-secondary mt-1 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="mt-16 pt-8 border-t border-theme hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1,2,3].map(n => <div key={n} className="w-8 h-8 rounded-full border-2 border-theme bg-theme-tertiary" />)}
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-theme-secondary opacity-50">
                  Join 50+ organisations scaling with JaytechHub
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: The Dashboard Form */}
          <div className="lg:w-3/5">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-theme-secondary rounded-[2.5rem] border-theme border-2 shadow-2xl overflow-hidden relative flex flex-col h-full"
            >
              {/* Header Status Bar */}
              <div className="p-8 border-b border-theme flex justify-between items-center bg-transparent">
                <div className="flex gap-1.5">
                  {[1,2,3,4].map(s => (
                    <div key={s} className={`h-1 rounded-full transition-all duration-500 ${
                      step >= s ? 'w-8 bg-meltgreen' : 'w-4 bg-black/10 dark:bg-white/10'
                    }`} />
                  ))}
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-theme-secondary opacity-30">
                  Step {step} of 3
                </span>
              </div>

              <div className="p-8 md:p-12 flex-grow">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step === 1 && (
                      <div className="space-y-8">
                        <div className="space-y-2">
                          <h3 className="text-2xl font-black text-theme-primary uppercase tracking-tight">Requirement Selection</h3>
                          <p className="text-sm text-theme-secondary font-medium">Which discipline does your project require?</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {services.map(service => (
                            <button
                              key={service}
                              onClick={() => { setFormData({ ...formData, service }); handleNext(); }}
                              className={`p-6 rounded-2xl text-left border transition-all duration-300 relative group overflow-hidden ${
                                formData.service === service 
                                ? 'border-meltgreen dark:bg-meltgreen/5 bg-meltgreen/5' 
                                : 'border-theme hover:bg-black/5 dark:hover:bg-white/5'
                              }`}
                            >
                              <div className="relative z-10 flex justify-between items-center">
                                <span className={`font-bold text-sm uppercase tracking-wide transition-colors ${
                                  formData.service === service ? 'text-theme-primary' : 'text-theme-secondary opacity-50'
                                }`}>{service}</span>
                                <ChevronRight size={16} className={formData.service === service ? 'text-meltgreen' : 'opacity-0 group-hover:opacity-100 transition-opacity'} />
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {step === 2 && (
                      <div className="space-y-12">
                        <div className="space-y-2">
                          <h3 className="text-2xl font-black text-theme-primary uppercase tracking-tight">Scope Parameters</h3>
                          <p className="text-sm text-theme-secondary font-medium">Define your financial and temporal constraints.</p>
                        </div>
                        
                        <div className="space-y-10">
                          <div>
                            <p className="text-[10px] font-black text-theme-secondary opacity-30 uppercase tracking-[0.3em] mb-4">Capital Allocation</p>
                            <div className="flex flex-wrap gap-2">
                              {budgets.map(b => (
                                <button
                                  key={b}
                                  onClick={() => setFormData({ ...formData, budget: b })}
                                  className={`px-6 py-3 rounded-xl border text-xs font-bold uppercase tracking-widest transition-all ${
                                    formData.budget === b 
                                    ? 'bg-meltgreen border-meltgreen text-deep-space' 
                                    : 'border-theme text-theme-secondary opacity-50 hover:bg-black/5 dark:hover:bg-white/5'
                                  }`}
                                >
                                  {b}
                                </button>
                              ))}
                            </div>
                          </div>

                          <div>
                            <p className="text-[10px] font-black text-theme-secondary opacity-30 uppercase tracking-[0.3em] mb-4">Delivery Window</p>
                            <div className="flex flex-wrap gap-2">
                              {timelines.map(t => (
                                <button
                                  key={t}
                                  onClick={() => setFormData({ ...formData, timeline: t })}
                                  className={`px-6 py-3 rounded-xl border text-xs font-bold uppercase tracking-widest transition-all ${
                                    formData.timeline === t 
                                    ? 'bg-theme-primary text-theme-primary border-theme shadow-sm' 
                                    : 'border-theme text-theme-secondary opacity-50 hover:bg-black/5 dark:hover:bg-white/5'
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
                        <div className="space-y-2">
                          <h3 className="text-2xl font-black text-theme-primary uppercase tracking-tight">Direct Interface</h3>
                          <p className="text-sm text-theme-secondary font-medium">Finalize the inquiry with specific project data.</p>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <label className="text-[10px] font-black text-theme-secondary opacity-30 uppercase tracking-[0.3em]">Briefing</label>
                            <textarea
                              className="w-full bg-black/5 dark:bg-white/5 text-theme-primary rounded-2xl p-6 border-none focus:ring-1 focus:ring-meltgreen transition-all min-h-[160px] font-medium text-sm"
                              placeholder="Synchronize your vision..."
                              value={formData.details}
                              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-black text-theme-secondary opacity-30 uppercase tracking-[0.3em]">Work Email</label>
                            <input
                              type="email"
                              className="w-full bg-black/5 dark:bg-white/5 text-theme-primary rounded-xl p-4 border-none focus:ring-1 focus:ring-meltgreen transition-all font-medium text-sm"
                              placeholder="access@company.id"
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
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-500 text-[11px] font-bold uppercase tracking-wider">
                    <AlertCircle size={16} />
                    {error}
                  </motion.div>
                )}
              </div>

              {/* Footer Controls */}
              <div className="p-8 border-t border-theme flex justify-between items-center">
                {step > 1 ? (
                  <button 
                    onClick={handleBack} 
                    disabled={isSubmitting}
                    className="flex items-center gap-2 text-theme-secondary opacity-40 font-bold uppercase tracking-widest text-[10px] hover:text-theme-primary transition-colors disabled:opacity-50"
                  >
                    <ChevronLeft size={16} />
                    Previous
                  </button>
                ) : <div />}

                {step < 3 ? (
                  <button 
                    onClick={handleNext}
                    disabled={step === 1 && !formData.service}
                    className="bg-meltgreen text-deep-space px-8 py-4 rounded-xl font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_30px_rgba(45,255,196,0.2)] disabled:opacity-20"
                  >
                    Continue
                    <ChevronRight size={16} />
                  </button>
                ) : (
                  <button 
                    onClick={handleSubmit}
                    disabled={!formData.email || !formData.details || isSubmitting}
                    className="bg-theme-primary text-theme-primary px-10 py-4 rounded-xl font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-3 border border-theme hover:scale-[1.02] active:scale-95 transition-all shadow-xl disabled:opacity-20"
                  >
                    {isSubmitting ? 'Transmitting...' : 'Initiate Transmission'}
                    {!isSubmitting && <Send size={16} />}
                  </button>
                )}
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  )
}
