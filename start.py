import os
import subprocess
import webbrowser
import time
import sys
import threading

def start_static_server(port):
    """Starts the basic Python HTTP server."""
    print(f"[*] Starting Static Server on http://localhost:{port}")
    try:
        subprocess.run([sys.executable, "-m", "http.server", str(port)])
    except Exception as e:
        print(f"[!] Error starting static server: {e}")

def main():
    # Clear screen for a clean look
    os.system('cls' if os.name == 'nt' else 'clear')
    
    print("====================================================")
    print("   MRG-STEM | ARCADE & LESSON DASHBOARD")
    print("====================================================")
    print("\nStarting development environment...")

    # Configuration
    STATIC_PORT = 8080
    MAIN_URL = f"http://localhost:{STATIC_PORT}"
    
    # Step 1: Start the main static server in a separate thread
    server_thread = threading.Thread(target=start_static_server, args=(STATIC_PORT,), daemon=True)
    server_thread.start()

    # Step 2: Check for Arcade App (Vue)
    arcade_path = os.path.join(os.getcwd(), "stem-arcade-app")
    has_arcade = os.path.exists(arcade_path)
    
    if has_arcade:
        print(f"[+] Detected Arcade App in /stem-arcade-app")
        if not os.path.exists(os.path.join(arcade_path, "node_modules")):
            print("[!] Arcade App dependencies (node_modules) are missing.")
            print("    Run 'npm install' inside /stem-arcade-app to enable the full arcade experience.")
    
    # Step 3: Open Browser
    print(f"\n[*] Opening {MAIN_URL} in your browser...")
    time.sleep(1.5) # Give the server a moment to spin up
    webbrowser.open(MAIN_URL)

    print("\n----------------------------------------------------")
    print("[SUCCESS] System is RUNNING.")
    print(f"[*] Main Site:   {MAIN_URL}")
    print("\n[INFO] Keep this window open to keep the server alive.")
    print("[STOP] Press Ctrl+C to shut down.")
    print("----------------------------------------------------")

    # Keep main thread alive
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print("\n\nShutting down servers. Have a great day!")
        sys.exit(0)

if __name__ == "__main__":
    main()
