/**
 * The STEM Arcade - License Validator
 * A privacy-first, kid-safe authentication system using simple School Codes.
 */

const LicenseValidator = {
    // In a real app, these would be fetched from a secure API (Supabase/Firebase)
    VALID_CODES: {
        'BARNUM-2026': { school: 'Barnum Public Schools', tier: 'District' },
        'BETA-TEST': { school: 'MGE Beta Laboratory', tier: 'Founder' },
        'ADMIN-ROOT': { school: 'Global Administrator', tier: 'Full' }
    },

    init() {
        console.log("🛡️ License Validator Initialized...");
        this.checkExistingLicense();
    },

    checkExistingLicense() {
        const activeLicense = localStorage.getItem('stem_arcade_license');
        if (activeLicense) {
            this.applyLicense(JSON.parse(activeLicense));
        } else {
            this.requestLicense();
        }
    },

    requestLicense() {
        // Simple overlay if no license found
        // In the production "Self-Contained" version, you can toggle this.
        console.log("⚠️ No active license detected.");
    },

    validateCode(code) {
        const upperCode = code.toUpperCase().trim();
        if (this.VALID_CODES[upperCode]) {
            const licenseData = {
                ...this.VALID_CODES[upperCode],
                code: upperCode,
                activatedAt: new Date().toISOString()
            };
            localStorage.setItem('stem_arcade_license', JSON.stringify(licenseData));
            this.applyLicense(licenseData);
            return true;
        }
        return false;
    },

    applyLicense(data) {
        console.log(`✅ License Verified for: ${data.school} (${data.tier} Tier)`);
        
        // Update UI elements if they exist
        const statusEl = document.querySelector('.license-status');
        if (statusEl) {
            statusEl.textContent = `✓ ${data.school} License Active`;
            statusEl.style.background = 'rgba(16, 185, 129, 0.2)';
            statusEl.style.color = '#10b981';
        }
    },

    logout() {
        localStorage.removeItem('stem_arcade_license');
        window.location.reload();
    }
};

// Initialize on load
document.addEventListener('DOMContentLoaded', () => LicenseValidator.init());
