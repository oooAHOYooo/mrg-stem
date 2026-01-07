# Render Setup Guide (Flask + Python)

## Overview

Render is great for Flask apps! It offers:
- ✅ Free tier (with limitations)
- ✅ Easy deployment from GitHub
- ✅ Automatic SSL
- ✅ PostgreSQL database option
- ✅ Simple setup

## Step 1: Create Flask App Structure

```
portfolio-backend/
├── app.py
├── requirements.txt
├── models.py
├── routes/
│   ├── portfolios.py
│   └── auth.py
└── templates/
    └── portfolio.html
```

## Step 2: Create Flask App (`app.py`)

```python
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import os
from models import db, Portfolio

app = Flask(__name__)
CORS(app)

# Database setup
database_url = os.environ.get('DATABASE_URL', 'sqlite:///portfolios.db')
app.config['SQLALCHEMY_DATABASE_URI'] = database_url
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

# Create tables
with app.app_context():
    db.create_all()

# Routes
@app.route('/api/portfolios', methods=['GET', 'POST'])
def portfolios():
    if request.method == 'GET':
        student_name = request.args.get('studentName')
        if student_name:
            portfolios = Portfolio.query.filter_by(studentName=student_name).all()
        else:
            portfolios = Portfolio.query.all()
        return jsonify([p.to_dict() for p in portfolios])
    
    elif request.method == 'POST':
        data = request.json
        portfolio = Portfolio(**data)
        db.session.add(portfolio)
        db.session.commit()
        return jsonify(portfolio.to_dict()), 201

@app.route('/api/portfolios/<int:portfolio_id>', methods=['GET', 'PUT', 'DELETE'])
def portfolio(portfolio_id):
    portfolio = Portfolio.query.get_or_404(portfolio_id)
    
    if request.method == 'GET':
        return jsonify(portfolio.to_dict())
    
    elif request.method == 'PUT':
        data = request.json
        for key, value in data.items():
            setattr(portfolio, key, value)
        db.session.commit()
        return jsonify(portfolio.to_dict())
    
    elif request.method == 'DELETE':
        db.session.delete(portfolio)
        db.session.commit()
        return jsonify({'success': True})

@app.route('/portfolio/<student_name>')
def portfolio_page(student_name):
    portfolios = Portfolio.query.filter_by(studentName=student_name).all()
    return render_template('portfolio.html', 
                         studentName=student_name,
                         portfolios=[p.to_dict() for p in portfolios])

if __name__ == '__main__':
    app.run(debug=True)
```

## Step 3: Create Models (`models.py`)

```python
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Portfolio(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    studentName = db.Column(db.String(100), nullable=False, index=True)
    title = db.Column(db.String(200), nullable=False)
    description = db.Column(db.Text)
    projectType = db.Column(db.String(50))
    links = db.Column(db.JSON)
    tags = db.Column(db.JSON)
    createdAt = db.Column(db.DateTime, default=db.func.now())
    updatedAt = db.Column(db.DateTime, default=db.func.now(), onupdate=db.func.now())
    public = db.Column(db.Boolean, default=True)

    def to_dict(self):
        return {
            'id': self.id,
            'studentName': self.studentName,
            'title': self.title,
            'description': self.description,
            'projectType': self.projectType,
            'links': self.links or [],
            'tags': self.tags or [],
            'createdAt': self.createdAt.isoformat(),
            'updatedAt': self.updatedAt.isoformat(),
            'public': self.public
        }
```

## Step 4: Create Requirements (`requirements.txt`)

```
Flask==2.3.3
Flask-SQLAlchemy==3.0.5
Flask-CORS==4.0.0
psycopg2-binary==2.9.9
gunicorn==21.2.0
```

## Step 5: Deploy to Render

1. **Push to GitHub** (create a new repo for the backend)

2. **Go to Render Dashboard**:
   - Visit [render.com](https://render.com)
   - Sign up/login
   - Click "New +" → "Web Service"

3. **Connect GitHub Repo**:
   - Select your repository
   - Render will auto-detect Flask

4. **Configure Service**:
   - **Name**: `mrg-stem-portfolios`
   - **Environment**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn app:app`

5. **Add Database** (Optional but recommended):
   - Click "New +" → "PostgreSQL"
   - Name it `mrg-stem-db`
   - Copy the connection string

6. **Add Environment Variables**:
   - `DATABASE_URL`: (paste PostgreSQL connection string)
   - `FLASK_ENV`: `production`

7. **Deploy**:
   - Click "Create Web Service"
   - Render will build and deploy
   - Your API will be at: `https://mrg-stem-portfolios.onrender.com`

## Step 6: Update Frontend

Update `portfolio.js` to call your Render API:

```javascript
const API_BASE = 'https://mrg-stem-portfolios.onrender.com/api';

async function createPortfolio(projectData) {
    const response = await fetch(`${API_BASE}/portfolios`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(projectData)
    });
    return response.json();
}
```

## Student Portfolio Pages

Students can access their portfolios at:
- `https://mrg-stem-portfolios.onrender.com/portfolio/john-doe`
- `https://mrg-stem-portfolios.onrender.com/portfolio/jane-smith`

## Render Free Tier Limits

- **750 hours/month** (enough for always-on)
- **512 MB RAM**
- **Spins down after 15 min inactivity** (first request takes ~30s)
- **PostgreSQL**: 90 days free trial, then $7/month

## Pros & Cons

**Pros:**
- Full control with Flask
- Easy deployment
- PostgreSQL database
- Good for learning

**Cons:**
- Separate hosting from Netlify
- Free tier spins down (slow first load)
- Need to maintain backend code
- Database costs after trial

## Recommendation

**Use Render if:**
- You want full control
- You're comfortable with Python/Flask
- You don't mind separate hosting
- You want to learn backend development

**Use Netlify Functions if:**
- You want to stay on Netlify
- You want simpler setup
- You want serverless (pay per use)
- You want everything in one place


