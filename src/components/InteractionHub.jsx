import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CheckCircle2, ChevronRight, ChevronLeft, Send, AlertCircle,
  Shield, Clock, Users
} from 'lucide-react'
import { submitFormData } from '../lib/supabaseClient'

const trustItems = [
  { icon: Shield, title: 'Confidential',    desc: 'All project details are handled with strict confidentiality.' },
  { icon: Clock,  title: '24hr Response',   desc: 'A senior team member reviews every inquiry within one business day.' },
  { icon: Users,  title: 'Senior Review',   desc: 'Your brief is reviewed by engineers, not a sales team.' },
]

export default function InteractionHub() {
  const [step, setStep]             = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError]           = useState(null)
  const [formData, setFormData]     = useState({
    service: '', budget: '', timeline: '', email: '', details: '', name: ''
  })

  const services  = ['Web Development', 'Mobile Application', 'UI/UX Design', 'DevOps & Cloud', 'Graphic Design', 'Dedicated Team']
  const budgets   = ['Under $5k', '$5k – $20k', '$20k – $50k', '$50k+']
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
      setError('Unable to submit at this time. Please email us directly at hello@jaytechhub.com')
    }
    setIsSubmitting(false)
  }

  /* ── Success state ── */
  if (isSubmitted) {
    return (
      <section id="inquiry" style={{ background: 'var(--bg-secondary)', padding: '100px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '400px', textAlign: 'center' }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.1, 1] }}
            transition={{ duration: 0.5 }}
            style={{
              width: '64px', height: '64px', borderRadius: '50%',
              background: 'var(--navy)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '28px',
            }}
          >
            <CheckCircle2 size={30} color="#ffffff" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h2 className="heading-md" style={{ marginBottom: '14px' }}>
              Inquiry received.
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'var(--text-secondary)', maxWidth: '400px' }}>
              A senior team member will review your project brief and contact you within one business day.
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  /* ── Chip styles ── */
  const chipBase = {
    background: '#ffffff',
    border: '1.5px solid var(--border-light)',
    color: 'var(--text-secondary)',
  }
  const chipSelected = {
    background: 'var(--navy)',
    border: '1.5px solid var(--navy)',
    color: '#ffffff',
  }

  return (
    <section id="inquiry" style={{ background: 'var(--bg-secondary)', padding: '100px 0', position: 'relative' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '80px', alignItems: 'start' }}
          className="contact-grid"
        >

          {/* ── LEFT: Context ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              Start a Project
            </div>
            <h2 className="heading-lg" style={{ marginBottom: '20px' }}>
              Let's discuss your next initiative.
            </h2>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '15px',
              lineHeight: 1.75,
              color: 'var(--text-secondary)',
              marginBottom: '48px',
            }}>
              Tell us about your project and we'll be back within 24 hours with a clear 
              scoping proposal — no generic responses, no sales pitch.
            </p>

            {/* Trust items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {trustItems.map(({ icon: Icon, title, desc }) => (
                <div key={title} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    flexShrink: 0,
                    width: '40px', height: '40px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-light)',
                    background: '#ffffff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={17} color="var(--blue)" />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '14px', color: 'var(--text-primary)', marginBottom: '4px' }}>
                      {title}
                    </p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Multi-step form ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              background: '#ffffff',
              border: '1px solid var(--border-light)',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 16px 64px rgba(8,13,31,0.08)',
            }}
          >
            {/* Progress bar */}
            <div style={{
              padding: '20px 28px',
              borderBottom: '1px solid var(--border-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                {[1, 2, 3].map(s => (
                  <div
                    key={s}
                    style={{
                      height: '3px',
                      borderRadius: '3px',
                      transition: 'all 0.4s ease',
                      width: step >= s ? '40px' : '20px',
                      background: step >= s ? 'var(--navy)' : 'var(--bg-tertiary)',
                    }}
                  />
                ))}
              </div>
              <span style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '11.5px',
                fontWeight: 500,
                color: 'var(--text-muted)',
              }}>
                Step {step} of 3
              </span>
            </div>

            {/* Form body */}
            <div style={{ padding: '36px 28px' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.25 }}
                >

                  {/* Step 1 — Service */}
                  {step === 1 && (
                    <div>
                      <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '6px' }}>
                        What do you need?
                      </h3>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13.5px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                        Select the primary service for your project.
                      </p>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                        {services.map(service => (
                          <button
                            key={service}
                            id={`service-${service.toLowerCase().replace(/\s/g, '-')}`}
                            onClick={() => { setFormData({ ...formData, service }); handleNext() }}
                            style={{
                              ...(formData.service === service ? chipSelected : chipBase),
                              padding: '14px 18px',
                              borderRadius: '8px',
                              fontFamily: 'Inter, sans-serif',
                              fontWeight: 600,
                              fontSize: '13.5px',
                              textAlign: 'left',
                              cursor: 'pointer',
                              transition: 'all 0.15s',
                            }}
                            onMouseEnter={e => {
                              if (formData.service !== service) {
                                e.currentTarget.style.borderColor = 'var(--navy)'
                                e.currentTarget.style.color = 'var(--text-primary)'
                              }
                            }}
                            onMouseLeave={e => {
                              if (formData.service !== service) {
                                e.currentTarget.style.borderColor = 'var(--border-light)'
                                e.currentTarget.style.color = 'var(--text-secondary)'
                              }
                            }}
                          >
                            {service}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 2 — Scope */}
                  {step === 2 && (
                    <div>
                      <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '6px' }}>
                        Project scope
                      </h3>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13.5px', color: 'var(--text-secondary)', marginBottom: '28px' }}>
                        Define your budget and expected timeline.
                      </p>

                      <div style={{ marginBottom: '28px' }}>
                        <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '11px', letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '10px' }}>
                          Budget Range
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                          {budgets.map(b => (
                            <button
                              key={b}
                              onClick={() => setFormData({ ...formData, budget: b })}
                              style={{
                                ...(formData.budget === b ? chipSelected : chipBase),
                                padding: '10px 18px',
                                borderRadius: '6px',
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 600,
                                fontSize: '13px',
                                cursor: 'pointer',
                                transition: 'all 0.15s',
                              }}
                            >
                              {b}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '11px', letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '10px' }}>
                          Timeline
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                          {timelines.map(t => (
                            <button
                              key={t}
                              onClick={() => setFormData({ ...formData, timeline: t })}
                              style={{
                                ...(formData.timeline === t ? chipSelected : chipBase),
                                padding: '10px 18px',
                                borderRadius: '6px',
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 600,
                                fontSize: '13px',
                                cursor: 'pointer',
                                transition: 'all 0.15s',
                              }}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3 — Details */}
                  {step === 3 && (
                    <div>
                      <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '6px' }}>
                        Your details
                      </h3>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13.5px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                        Tell us about the project and how to reach you.
                      </p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                        <div>
                          <label style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '11px', letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '7px' }}>
                            Your Name / Company
                          </label>
                          <input
                            id="inquiry-name"
                            type="text"
                            className="form-input"
                            placeholder="John Doe / Acme Corp"
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                          />
                        </div>
                        <div>
                          <label style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '11px', letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '7px' }}>
                            Work Email
                          </label>
                          <input
                            id="inquiry-email"
                            type="email"
                            className="form-input"
                            placeholder="you@company.com"
                            value={formData.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                        <div>
                          <label style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '11px', letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '7px' }}>
                            Project Brief
                          </label>
                          <textarea
                            id="inquiry-details"
                            className="form-input"
                            style={{ minHeight: '130px', resize: 'vertical' }}
                            placeholder="Briefly describe your project, goals, and any specific requirements..."
                            value={formData.details}
                            onChange={e => setFormData({ ...formData, details: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Error */}
              {error && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    marginTop: '16px',
                    padding: '14px 16px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: 'rgba(220,38,38,0.06)',
                    border: '1px solid rgba(220,38,38,0.14)',
                  }}
                >
                  <AlertCircle size={15} color="#dc2626" />
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#dc2626' }}>{error}</span>
                </motion.div>
              )}
            </div>

            {/* Footer controls */}
            <div style={{
              padding: '20px 28px',
              borderTop: '1px solid var(--border-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              {step > 1 ? (
                <button
                  onClick={handleBack}
                  disabled={isSubmitting}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--text-muted)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'color 0.15s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                >
                  <ChevronLeft size={15} /> Back
                </button>
              ) : <div />}

              {step < 3 ? (
                <button
                  id="form-continue-btn"
                  onClick={handleNext}
                  disabled={step === 1 && !formData.service}
                  className="btn-primary"
                  style={{ padding: '11px 24px', opacity: step === 1 && !formData.service ? 0.3 : 1 }}
                >
                  Continue <ChevronRight size={15} />
                </button>
              ) : (
                <button
                  id="form-submit-btn"
                  onClick={handleSubmit}
                  disabled={!formData.email || !formData.details || isSubmitting}
                  className="btn-primary"
                  style={{ padding: '11px 24px', opacity: (!formData.email || !formData.details || isSubmitting) ? 0.3 : 1 }}
                >
                  {isSubmitting ? 'Submitting…' : 'Submit Inquiry'}
                  {!isSubmitting && <Send size={14} />}
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}
