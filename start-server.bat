@echo off
echo ========================================
echo   PORTFOLIO WEB SERVER
echo ========================================
echo.
echo Starting local web server...
echo Your portfolio will open at: http://localhost:8000
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

REM Check if Python is installed
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Python is not installed!
    echo Please install Python from https://python.org
    pause
    exit /b
)

REM Start Python HTTP server and open browser
start http://localhost:8000
python -m http.server 8000
