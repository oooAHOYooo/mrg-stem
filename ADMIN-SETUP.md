# Admin Dashboard Setup Guide

## 🎯 Overview

The admin dashboard allows teachers to:
- ✅ View all student portfolios
- ✅ Check portfolio progress
- ✅ Add and manage lessons
- ✅ Export student data
- ✅ View statistics

## 🚀 Quick Start (localStorage - Works Now!)

**The admin dashboard works immediately with localStorage!**

1. Go to `/admin.html`
2. No login required (for now - uses localStorage)
3. View all student portfolios
4. Add lessons
5. Export data

## 🔐 Setting Up Authentication (Netlify Identity)

### Step 1: Enable Netlify Identity

1. Go to your Netlify site dashboard
2. Go to **Identity** → **Enable Identity**
3. Click **Enable Identity**
4. Wait for it to activate (takes a minute)

### Step 2: Configure Identity Settings

1. Go to **Identity** → **Settings**
2. Enable **Email** as a provider
3. Set **Registration preferences**:
   - **Open** - Anyone can sign up (for testing)
   - **Invite only** - Only invited users (recommended for production)
4. Save settings

### Step 3: Add Admin Script to Site

Add this to your `index.html` and `admin.html` (before closing `</body>`):

```html
<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
<script>
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
</script>
```

### Step 4: Create Admin User

1. Go to **Identity** → **Users**
2. Click **Invite users**
3. Enter your email address
4. Click **Send invite**
5. Check your email and accept the invite
6. Set your password

### Step 5: Protect Admin Routes (Optional)

Add to `netlify.toml`:

```toml
[[redirects]]
  from = "/admin/*"
  to = "/admin.html"
  status = 200
  force = true
  conditions = {Role = ["admin"]}
```

## 📊 Using the Admin Dashboard

### Overview Tab
- See total students
- See total projects
- See active students
- See average projects per student

### Student Portfolios Tab
- View all students who have portfolios
- See project count for each student
- Click "View Portfolio" to see their work
- Search for specific students

### Manage Lessons Tab
- Add new lessons
- Set lesson type (Scratch, Tinkercad, Video, Other)
- Add descriptions and resources
- Select target grades
- Delete lessons

### Settings Tab
- View system information
- Export all student data
- Clear all data (dangerous!)

## 🔄 Backend Integration (When Ready)

### With Netlify Functions

1. Set up Fauna database (see `NETLIFY-FUNCTIONS-SETUP.md`)
2. Add environment variable `FAUNA_SECRET` in Netlify
3. Update admin page to call functions:
   - `/.netlify/functions/admin-portfolios` - Get all portfolios
   - `/.netlify/functions/admin-lessons` - Manage lessons

### Current Implementation

- Uses localStorage (works immediately)
- No backend needed
- Data stored in browser
- Can export/import

## 📋 Features

### Portfolio Management
- ✅ View all student portfolios
- ✅ See project statistics per student
- ✅ Search students
- ✅ Export individual or all portfolios

### Lesson Management
- ✅ Create lessons
- ✅ Add resources and links
- ✅ Set target grades
- ✅ Delete lessons
- ✅ View all lessons

### Statistics
- ✅ Total students
- ✅ Total projects
- ✅ Active students
- ✅ Average projects per student

## 🎓 For Teachers

### Viewing Student Work

1. Go to **Student Portfolios** tab
2. Find student name
3. Click **"View Portfolio"**
4. See all their projects

### Adding Lessons

1. Go to **Manage Lessons** tab
2. Fill out the form:
   - Title (required)
   - Type (Scratch, Tinkercad, Video, Other)
   - Description
   - Resources/links
   - Target grades
3. Click **"Add Lesson"**

### Exporting Data

1. Go to **Settings** tab
2. Click **"Export All Student Data"**
3. Download JSON file with all portfolios and lessons
4. Keep as backup or share with others

## 🔒 Security Notes

### Current (localStorage)
- No authentication (anyone can access `/admin.html`)
- Data stored in browser
- Good for testing/development

### With Netlify Identity
- Requires login
- Only invited users can access
- Secure authentication
- Recommended for production

## ❓ FAQ

**Q: Can students see the admin page?**
A: Currently yes (localStorage). With Netlify Identity, only logged-in teachers can access.

**Q: How do I add more teachers?**
A: Go to Netlify Identity → Users → Invite users, and send invites.

**Q: Can I see portfolios from the cloud?**
A: Once backend is set up, yes! The functions will pull from Fauna database.

**Q: What if I lose the data?**
A: Use the Export button regularly to backup all student data.

## 🚀 Next Steps

1. **Test the admin dashboard** (works now with localStorage)
2. **Enable Netlify Identity** (for authentication)
3. **Set up backend** (for cloud storage - see `NETLIFY-FUNCTIONS-SETUP.md`)
4. **Invite teachers** (via Netlify Identity)

---

**Ready to use!** The admin dashboard works immediately. Add authentication when ready!

