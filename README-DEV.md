# Development Setup

## Starting the Development Server

You have several options to start the local development server:

### Option 1: Double-Click Batch File (Easiest)
1. **Double-click** `START-DEV-SERVER.bat` in the project folder
2. A terminal window will open and the server will start
3. Your browser will automatically open to http://localhost:8080
4. Keep the terminal window open while developing
5. Press `Ctrl+C` to stop the server when done

### Option 2: Use Node/NPX
1. **Double-click** `START-DEV-SERVER-NODE.bat`
2. This uses Node.js http-server instead of Python

### Option 3: Manual Command (Terminal)
Open PowerShell/Terminal and run:
```powershell
cd C:\Users\agonzalez7\mrg-stem
python -m http.server 8080
```
Then open http://localhost:8080 in your browser

### Option 4: NPM Scripts
If you have Node.js installed:
```bash
npm start        # Start on port 8080
npm run dev      # Start on port 5500 (Live Preview compatible)
```

## Accessing the Site

Once the server is running, open your browser to:
- **http://localhost:8080** (or whatever port you chose)

## Troubleshooting

**Port already in use?**
- Change the port number in the batch file (replace `8080` with `3000`, `5500`, `8000`, etc.)

**Python not found?**
- Use `START-DEV-SERVER-NODE.bat` instead
- Or install Python from https://www.python.org/downloads/

**Node/NPX not found?**
- Use `START-DEV-SERVER.bat` instead
- Or install Node.js from https://nodejs.org/

## Git Restore Point

This version is based on commit: **4d61c01**
- "Apply unified dashboard layout to all lesson pages with mobile responsiveness"
- This was the last known working version before the broken commits

To restore to this commit again in the future:
```bash
git reset --hard 4d61c01
```






