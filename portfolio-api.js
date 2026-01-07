// Portfolio API Client
// Works with both localStorage (fallback) and Netlify Functions API

class PortfolioAPI {
    constructor() {
        this.apiBase = '/.netlify/functions/portfolios';
        this.useAPI = false; // Set to true when backend is ready
        this.testConnection();
    }

    async testConnection() {
        // Test if API is available
        try {
            const response = await fetch(this.apiBase, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });
            if (response.ok) {
                this.useAPI = true;
                console.log('✅ Using API backend');
            }
        } catch (error) {
            console.log('📦 Using localStorage (API not available)');
            this.useAPI = false;
        }
    }

    // Get all portfolios for a student
    async getPortfolios(studentName) {
        if (!this.useAPI) {
            return this.getPortfoliosLocal(studentName);
        }

        try {
            const response = await fetch(`${this.apiBase}?studentName=${encodeURIComponent(studentName)}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });

            if (!response.ok) throw new Error('Failed to fetch portfolios');
            return await response.json();
        } catch (error) {
            console.error('API error, falling back to localStorage:', error);
            return this.getPortfoliosLocal(studentName);
        }
    }

    // Create new portfolio
    async createPortfolio(portfolioData) {
        if (!this.useAPI) {
            return this.createPortfolioLocal(portfolioData);
        }

        try {
            const response = await fetch(this.apiBase, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ portfolioData })
            });

            if (!response.ok) throw new Error('Failed to create portfolio');
            return await response.json();
        } catch (error) {
            console.error('API error, falling back to localStorage:', error);
            return this.createPortfolioLocal(portfolioData);
        }
    }

    // Update portfolio
    async updatePortfolio(portfolioId, updates) {
        if (!this.useAPI) {
            return this.updatePortfolioLocal(portfolioId, updates);
        }

        try {
            const response = await fetch(this.apiBase, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ portfolioId, portfolioData: updates })
            });

            if (!response.ok) throw new Error('Failed to update portfolio');
            return await response.json();
        } catch (error) {
            console.error('API error, falling back to localStorage:', error);
            return this.updatePortfolioLocal(portfolioId, updates);
        }
    }

    // Delete portfolio
    async deletePortfolio(portfolioId) {
        if (!this.useAPI) {
            return this.deletePortfolioLocal(portfolioId);
        }

        try {
            const response = await fetch(this.apiBase, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ portfolioId })
            });

            if (!response.ok) throw new Error('Failed to delete portfolio');
            return { success: true };
        } catch (error) {
            console.error('API error, falling back to localStorage:', error);
            return this.deletePortfolioLocal(portfolioId);
        }
    }

    // Get portfolio page URL for a student
    getPortfolioPageUrl(studentName) {
        const slug = studentName.toLowerCase().replace(/\s+/g, '-');
        return `/portfolio/${slug}`;
    }

    // LocalStorage fallback methods
    getPortfoliosLocal(studentName) {
        const stored = localStorage.getItem('student_portfolios');
        const portfolios = stored ? JSON.parse(stored) : {};
        return portfolios[studentName] || [];
    }

    createPortfolioLocal(portfolioData) {
        const storageKey = 'student_portfolios';
        const stored = localStorage.getItem(storageKey);
        const portfolios = stored ? JSON.parse(stored) : {};
        
        const portfolioId = Date.now().toString();
        const portfolio = {
            id: portfolioId,
            studentName: portfolioData.studentName,
            title: portfolioData.title,
            description: portfolioData.description || '',
            projectType: portfolioData.projectType || 'other',
            links: portfolioData.links || [],
            tags: portfolioData.tags || [],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            public: portfolioData.public || false
        };

        if (!portfolios[portfolioData.studentName]) {
            portfolios[portfolioData.studentName] = [];
        }

        portfolios[portfolioData.studentName].push(portfolio);
        localStorage.setItem(storageKey, JSON.stringify(portfolios));
        return portfolio;
    }

    updatePortfolioLocal(portfolioId, updates) {
        const storageKey = 'student_portfolios';
        const stored = localStorage.getItem(storageKey);
        const portfolios = stored ? JSON.parse(stored) : {};
        const studentName = localStorage.getItem('student_name');

        if (!portfolios[studentName]) return false;

        const portfolio = portfolios[studentName].find(p => p.id === portfolioId);
        if (portfolio) {
            Object.assign(portfolio, updates);
            portfolio.updatedAt = new Date().toISOString();
            localStorage.setItem(storageKey, JSON.stringify(portfolios));
            return portfolio;
        }
        return false;
    }

    deletePortfolioLocal(portfolioId) {
        const storageKey = 'student_portfolios';
        const stored = localStorage.getItem(storageKey);
        const portfolios = stored ? JSON.parse(stored) : {};
        const studentName = localStorage.getItem('student_name');

        if (!portfolios[studentName]) return false;

        portfolios[studentName] = portfolios[studentName].filter(p => p.id !== portfolioId);
        localStorage.setItem(storageKey, JSON.stringify(portfolios));
        return { success: true };
    }
}

// Export for use
window.PortfolioAPI = PortfolioAPI;


