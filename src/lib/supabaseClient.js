import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://vsbaesmhwvaasyuqukjp.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_9AS-kWoM1eyhcXxUvdTxbQ_16LCChm8'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// Helper function to submit form data
export const submitFormData = async (formType, formData) => {
  try {
    const { data, error } = await supabase
      .from('submissions')
      .insert([
        {
          form_type: formType,
          form_data: formData,
          submitted_at: new Date().toISOString(),
          ip_address: null,
        },
      ])

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Submission error:', error)
    return { success: false, error: error.message }
  }
}

// Get all submissions
export const getSubmissions = async () => {
  try {
    const { data, error } = await supabase
      .from('submissions')
      .select('*')
      .order('submitted_at', { ascending: false })

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error fetching submissions:', error)
    return []
  }
}

// Delete a submission
export const deleteSubmission = async (id) => {
  try {
    const { error } = await supabase
      .from('submissions')
      .delete()
      .eq('id', id)

    if (error) throw error
    return true
  } catch (error) {
    console.error('Error deleting submission:', error)
    return false
  }
}
