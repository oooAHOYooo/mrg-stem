# Aether Academy: Database Infrastructure

## Stack Recommendation
To keep this "Aether" (Elite/Premium), I recommend one of the following for your PostgreSQL hosting:
1.  **Supabase:** Excellent if you want built-in Auth and a "Realtime" activity stream (like the one we mocked in the Hub).
2.  **Neon.tech:** Great for serverless Postgres with "Branching" (you can branch your DB like you branch code).
3.  **Self-Hosted Docker:** If you want absolute control over your infrastructure in the New Haven lab.

## Connecting the Hub to SQL
Since the Hub is currently HTML/JS, you will need a small "Backend Gateway" to talk to Postgres. 

### Option A: Node.js (Express + PG)
*Fast, industry standard for web hubs.*
```javascript
const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// Get Top Architects for Leaderboard
app.get('/api/leaderboard', async (req, res) => {
    const result = await pool.query('SELECT username, xp, level FROM architects ORDER BY xp DESC LIMIT 10');
    res.json(result.rows);
});
```

### Option B: Python (FastAPI + SQLAlchemy)
*Better if you plan to do AI integration or data science on student performance.*
```python
@app.get("/architects/{id}")
def get_architect(id: int, db: Session = Depends(get_db)):
    return db.query(Architect).filter(Architect.id == id).first()
```

## Data Philosophy
- **Everything is an Event:** Don't just update a student's XP. Insert a row into `activity_stream`. This allows you to generate "Replay" reports for parents and schools showing *exactly* how the student improved over time.
- **The "Nexus" Relationship:** By linking students to `deployments`, you can run competitions between the "New Haven" lab and the "Mobile Unit" teams.
