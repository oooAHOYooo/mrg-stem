# Netlify Functions Setup Guide

## Overview

This setup allows students to:
1. **Create and manage portfolios** via API
2. **Get their own portfolio page** at `/portfolio/student-name`
3. **Share their portfolio** with a unique URL
4. **Store data in the cloud** (not just localStorage)

## Step 1: Set Up Fauna Database

1. Go to [fauna.com](https://fauna.com) and create a free account
2. Create a new database called `mrg-stem-portfolios`
3. Create a collection called `portfolios`
4. Create an index:
   - Name: `portfolios_by_student`
   - Terms: `data.studentName`
5. Get your database secret key (Settings → Keys → New Key)
6. Copy the secret key

## Step 2: Configure Netlify

1. Go to your Netlify site dashboard
2. Go to **Site settings** → **Environment variables**
3. Add a new variable:
   - Key: `FAUNA_SECRET`
   - Value: (paste your Fauna secret key)

## Step 3: Install Dependencies

The functions need the `faunadb` package. Netlify will automatically install it when you deploy, but for local testing:

```bash
cd netlify/functions
npm install
```

## Step 4: Update Frontend to Use API

Update `portfolio.js` to call the Netlify Functions instead of localStorage.

## Step 5: Deploy

1. Commit and push your changes
2. Netlify will automatically deploy
3. Functions will be available at:
   - `/.netlify/functions/portfolios` - Portfolio CRUD
   - `/.netlify/functions/portfolio-page` - Student portfolio pages

## Student Portfolio URLs

Once set up, students can access their portfolios at:
- `https://your-site.netlify.app/portfolio/john-doe`
- `https://your-site.netlify.app/portfolio/jane-smith`

The function automatically generates a beautiful portfolio page for each student!

## Testing Locally

Install Netlify CLI:
```bash
npm install -g netlify-cli
```

Run locally:
```bash
netlify dev
```

This will:
- Start local server
- Run Netlify Functions locally
- Allow you to test before deploying

## Next Steps

1. Set up Fauna database
2. Add environment variable in Netlify
3. Update frontend to use API (I can help with this)
4. Test locally with `netlify dev`
5. Deploy and test!

