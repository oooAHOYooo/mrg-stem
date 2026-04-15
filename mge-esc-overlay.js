/**
 * MGE Premium Escape Overlay Module
 * A standalone, isolated utility for teaching students how to exit Pointer Lock.
 * 
 * Usage: Simply include this script tag in any HTML file:
 * <script src="mge-esc-overlay.js"></script>
 */

(function() {
    // 1. Define the Styles
    const styles = `
        #esc-overlay-module {
            position: fixed;
            top: 40px;
            left: 50%;
            transform: translateX(-50%) translateY(-150px);
            background: rgba(0, 0, 0, 0.85);
            backdrop-filter: blur(12px);
            padding: 14px 28px;
            border-radius: 20px;
            border: 2px solid #ff6b6b;
            display: flex;
            align-items: center;
            gap: 18px;
            z-index: 99999;
            transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
            pointer-events: none;
            opacity: 0;
            box-shadow: 0 15px 50px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 107, 107, 0.3);
            font-family: 'Outfit', sans-serif;
            color: white;
        }

        #esc-overlay-module.visible {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }

        .esc-keycap-container {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .esc-keycap {
            background: linear-gradient(135deg, #3d4452, #242933);
            border: 2px solid #57606f;
            border-bottom: 6px solid #161a21;
            padding: 10px 16px;
            border-radius: 12px;
            font-weight: 850;
            font-size: 1.2rem;
            color: white;
            box-shadow: 0 4px 10px rgba(0,0,0,0.5);
            display: inline-block;
            text-shadow: 0 0 10px rgba(255,255,255,0.3);
        }

        .esc-keycap-pulse {
            position: absolute;
            inset: -4px;
            border: 2px solid #ff6b6b;
            border-radius: 14px;
            opacity: 0;
            animation: esc-pulse-anim 2s infinite;
        }

        @keyframes esc-pulse-anim {
            0% { transform: scale(0.9); opacity: 0.8; }
            100% { transform: scale(1.4); opacity: 0; }
        }

        .esc-text-container {
            display: flex;
            flex-direction: column;
            line-height: 1.2;
        }

        .esc-main-text {
            font-weight: 800;
            font-size: 1rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .esc-sub-text {
            font-size: 0.75rem;
            color: rgba(255,255,255,0.5);
            font-weight: 500;
        }
    `;

    // 2. Inject CSS
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    // 3. Create and Inject HTML
    function createOverlay() {
        const overlay = document.createElement('div');
        overlay.id = 'esc-overlay-module';
        overlay.innerHTML = `
            <div class="esc-keycap-container">
                <div class="esc-keycap">ESC</div>
                <div class="esc-keycap-pulse"></div>
            </div>
            <div class="esc-text-container">
                <div class="esc-main-text">Press Escape to Exit</div>
                <div class="esc-sub-text">Unlock mouse to return to HUD</div>
            </div>
        `;
        document.body.appendChild(overlay);
        return overlay;
    }

    // 4. Initialization
    document.addEventListener('DOMContentLoaded', () => {
        const overlay = createOverlay();
        let timeout;

        document.addEventListener('pointerlockchange', () => {
            if (document.pointerLockElement) {
                // Show overlay
                overlay.classList.add('visible');
                
                // Auto-hide after 4 seconds
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    if (document.pointerLockElement) {
                        overlay.classList.remove('visible');
                    }
                }, 4000);
            } else {
                // Hide immediately on unlock
                overlay.classList.remove('visible');
                clearTimeout(timeout);
            }
        });
    });
})();
