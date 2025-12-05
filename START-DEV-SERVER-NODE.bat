@echo off
cls
echo ========================================
echo   MRG-STEM Development Server (Node)
echo ========================================
echo.
echo Starting server on http://localhost:8080
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

cd /d "%~dp0"

REM Try to open browser after a 2 second delay
start /B timeout /t 2 /nobreak >nul && start http://localhost:8080

REM Start the server with Node
npx --yes http-server -p 8080 -c-1

pause






