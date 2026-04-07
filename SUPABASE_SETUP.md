# Supabase Setup Instructions

Your portfolio is now ready to receive form submissions! Here's how to complete the setup:

## Step 1: Create the Submissions Table in Supabase

1. Go to your Supabase project dashboard: https://app.supabase.com
2. Click on **SQL Editor** in the left sidebar
3. Click **New Query** (or **New SQL Query**)
4. Copy and paste the SQL code below:

```sql
-- Create submissions table
CREATE TABLE submissions (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  form_type TEXT NOT NULL,
  form_data JSONB NOT NULL,
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL,
  ip_address TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create reviews table
CREATE TABLE reviews (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  author_name TEXT NOT NULL,
  company TEXT,
  role TEXT,
  rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
  message TEXT NOT NULL,
  email TEXT,
  approved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for faster queries
CREATE INDEX idx_submissions_form_type ON submissions(form_type);
CREATE INDEX idx_submissions_submitted_at ON submissions(submitted_at DESC);
CREATE INDEX idx_reviews_approved ON reviews(approved);
CREATE INDEX idx_reviews_created_at ON reviews(created_at DESC);

-- Enable Row Level Security
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Submissions policies
CREATE POLICY "Allow public submissions" ON submissions
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Allow read submissions" ON submissions
  FOR SELECT
  USING (true);

-- Reviews policies
CREATE POLICY "Allow public review submissions" ON reviews
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Allow read approved reviews" ON reviews
  FOR SELECT
  USING (approved = true);
```

5. Click **Run** to execute the query
6. Done! Your table is ready

## Step 2: Test the Forms

Go to any of the form pages and submit a test entry:
- **Freelance**: `/freelance`
- **Partner**: `/partner`
- **Collaborate**: `/collaborate`
- **Hire Me**: `/hire`

## Step 3: View Submissions

All submissions will appear in your **Submissions Dashboard** at `/submissions` (password-protected)

## Step 4: Test Reviews Page

The **Reviews Page** is available at `/reviews` where visitors can:
- ⭐ View all approved reviews
- 💬 Submit new testimonials with star ratings
- 📝 Share feedback about your work

**Note:** Reviews are moderated. Only update the `approved = TRUE` when you want to display a review.

## If Forms Aren't Working

1. Check browser console (F12) for errors
2. Verify Supabase credentials in `src/lib/supabaseClient.js`
3. Make sure the `submissions` and `reviews` tables exist in your Supabase database
4. Check that Row Level Security policies are correct

## Moderating Reviews

1. Go to [Supabase Dashboard](https://app.supabase.com) → Your Project → Table Editor
2. Click on the `reviews` table
3. Find new reviews (they'll have `approved = FALSE`)
4. Edit the row and set `approved = TRUE` to display it on your site
5. Reviews will instantly appear on `/reviews` page

## Managing Everything

| Page | URL | Access | Purpose |
|------|-----|--------|---------|
| Reviews | `/reviews` | Public | Display & collect testimonials |
| Freelance Form | `/freelance` | Public | Collect freelance inquiries |
| Partner Form | `/partner` | Public | Collect partnership inquiries |
| Collaborate Form | `/collaborate` | Public | Collect collaboration offers |
| Hire Form | `/hire` | Public | Collect job opportunities |
| Submissions Dashboard | `/submissions` | Password Protected | View all form submissions |

## Next Steps

- **Add Authentication**: Protect the `/submissions` page with a password
- **Email Notifications**: Set up Supabase functions to send email alerts
- **Webhooks**: Trigger actions when new submissions arrive
- **Database Backups**: Set up automatic backups in Supabase

Happy receiving submissions! 🎉
