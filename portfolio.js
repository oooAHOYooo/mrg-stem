// Portfolio Management System
// This handles creating, saving, and displaying student portfolios

class PortfolioManager {
    constructor() {
        this.storageKey = 'student_portfolios';
        this.currentStudent = this.getCurrentStudent();
        this.api = new PortfolioAPI(); // Use API client
        this.init();
    }

    async init() {
        await this.loadPortfolios();
        this.setupEventListeners();
        await this.renderPortfolioList();
    }

    getCurrentStudent() {
        // Get student name from localStorage or prompt
        let studentName = localStorage.getItem('student_name');
        if (!studentName) {
            studentName = prompt('Enter your name to create your portfolio:');
            if (studentName) {
                localStorage.setItem('student_name', studentName);
            }
        }
        return studentName;
    }

    async loadPortfolios() {
        // Load from API or localStorage
        const portfolios = await this.api.getPortfolios(this.currentStudent);
        this.portfolios = { [this.currentStudent]: portfolios };
    }

    async createPortfolio(projectData) {
        if (!this.currentStudent) {
            alert('Please enter your name first!');
            return;
        }

        const portfolioData = {
            studentName: this.currentStudent,
            title: projectData.title || 'Untitled Project',
            description: projectData.description || '',
            projectType: projectData.type || 'other',
            links: projectData.links || [],
            tags: projectData.tags || [],
            public: true
        };

        const portfolio = await this.api.createPortfolio(portfolioData);
        await this.loadPortfolios(); // Reload
        return portfolio;
    }

    async updatePortfolio(portfolioId, updates) {
        const result = await this.api.updatePortfolio(portfolioId, updates);
        await this.loadPortfolios(); // Reload
        return result;
    }

    async deletePortfolio(portfolioId) {
        const result = await this.api.deletePortfolio(portfolioId);
        await this.loadPortfolios(); // Reload
        return result;
    }

    async getPortfolios(studentName = null) {
        const name = studentName || this.currentStudent;
        return await this.api.getPortfolios(name);
    }

    getAllPortfolios() {
        return this.portfolios;
    }

    setupEventListeners() {
        // Add event listeners for portfolio actions
        document.addEventListener('click', (e) => {
            if (e.target.matches('.add-to-portfolio-btn')) {
                this.showPortfolioForm(e.target.dataset.projectType);
            }
            if (e.target.matches('.view-portfolio-btn')) {
                this.showPortfolio();
            }
            if (e.target.matches('.delete-portfolio-item')) {
                if (confirm('Are you sure you want to delete this portfolio item?')) {
                    this.deletePortfolio(e.target.dataset.portfolioId).then(() => {
                        this.renderPortfolioList();
                    });
                }
            }
            if (e.target.matches('.edit-portfolio-item')) {
                this.editPortfolio(e.target.dataset.portfolioId);
            }
        });

        // Form submission
        const portfolioForm = document.getElementById('portfolio-form');
        if (portfolioForm) {
            portfolioForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmit(e);
            });
        }
    }

    showPortfolioForm(projectType = 'other') {
        const modal = document.getElementById('portfolio-modal');
        if (!modal) {
            this.createPortfolioModal();
        }

        // Pre-fill project type
        const typeInput = document.getElementById('portfolio-type');
        if (typeInput) {
            typeInput.value = projectType;
        }

        document.getElementById('portfolio-modal').style.display = 'flex';
    }

    createPortfolioModal() {
        const modal = document.createElement('div');
        modal.id = 'portfolio-modal';
        modal.className = 'portfolio-modal';
        modal.innerHTML = `
            <div class="portfolio-modal-content">
                <span class="portfolio-modal-close">&times;</span>
                <h2>Add to Portfolio</h2>
                <form id="portfolio-form">
                    <div class="form-group">
                        <label for="portfolio-title">Project Title *</label>
                        <input type="text" id="portfolio-title" name="title" required>
                    </div>
                    <div class="form-group">
                        <label for="portfolio-type">Project Type</label>
                        <select id="portfolio-type" name="type">
                            <option value="tinkercad">🌍 Tinkercad World</option>
                            <option value="scratch">🎮 Scratch Platformer</option>
                            <option value="video">🎬 Video Project</option>
                            <option value="other">✨ Other</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="portfolio-description">Description</label>
                        <textarea id="portfolio-description" name="description" rows="4" placeholder="Describe your project, what you learned, and what you're proud of..."></textarea>
                    </div>
                    <div class="form-group">
                        <label for="portfolio-links">Links (one per line)</label>
                        <textarea id="portfolio-links" name="links" rows="3" placeholder="https://scratch.mit.edu/projects/...&#10;https://www.tinkercad.com/things/..."></textarea>
                    </div>
                    <div class="form-group">
                        <label for="portfolio-tags">Tags (comma-separated)</label>
                        <input type="text" id="portfolio-tags" name="tags" placeholder="game, platformer, coding">
                    </div>
                    <div class="form-actions">
                        <button type="submit" class="btn-primary">Add to Portfolio</button>
                        <button type="button" class="btn-secondary portfolio-modal-close-btn">Cancel</button>
                    </div>
                </form>
            </div>
        `;
        document.body.appendChild(modal);

        // Close modal handlers
        modal.querySelector('.portfolio-modal-close').addEventListener('click', () => {
            modal.style.display = 'none';
        });
        modal.querySelector('.portfolio-modal-close-btn').addEventListener('click', () => {
            modal.style.display = 'none';
        });
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    async handleFormSubmit(e) {
        const formData = new FormData(e.target);
        const projectData = {
            title: formData.get('title'),
            type: formData.get('type'),
            description: formData.get('description'),
            links: formData.get('links').split('\n').filter(link => link.trim()),
            tags: formData.get('tags').split(',').map(tag => tag.trim()).filter(tag => tag)
        };

        const editId = e.target.dataset.editId;
        if (editId) {
            // Update existing portfolio
            await this.updatePortfolio(editId, projectData);
            this.showNotification('Portfolio item updated successfully!', 'success');
            delete e.target.dataset.editId;
            // Reset form title
            const formTitle = e.target.previousElementSibling;
            if (formTitle && formTitle.tagName === 'H2') {
                formTitle.textContent = 'Add to Portfolio';
            }
            const submitBtn = e.target.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.textContent = 'Add to Portfolio';
            }
        } else {
            // Create new portfolio
            await this.createPortfolio(projectData);
            this.showNotification('Portfolio item added successfully!', 'success');
        }

        await this.renderPortfolioList();
        document.getElementById('portfolio-modal').style.display = 'none';
        e.target.reset();
    }

    async renderPortfolioList() {
        const container = document.getElementById('portfolio-items-container');
        if (!container) return;

        const portfolios = await this.getPortfolios();
        
        // Check if we're on the portfolio page (has empty-portfolio class)
        const isPortfolioPage = container.querySelector('.empty-portfolio') !== null;
        
        if (portfolios.length === 0) {
            if (isPortfolioPage) {
                // Keep the existing empty portfolio message on portfolio.html
                return;
            }
            container.innerHTML = `
                <div class="portfolio-empty">
                    <p>📁 Your portfolio is empty. Start creating projects and add them to your portfolio!</p>
                </div>
            `;
            return;
        }
        
        // Remove empty message if portfolios exist
        const emptyMsg = container.querySelector('.empty-portfolio');
        if (emptyMsg) {
            emptyMsg.remove();
        }

        container.innerHTML = portfolios.map(portfolio => `
            <div class="portfolio-item" data-portfolio-id="${portfolio.id}">
                <div class="portfolio-item-header">
                    <h3>${this.escapeHtml(portfolio.title)}</h3>
                    <div class="portfolio-item-actions">
                        <button class="edit-portfolio-item" data-portfolio-id="${portfolio.id}" title="Edit">✏️</button>
                        <button class="delete-portfolio-item" data-portfolio-id="${portfolio.id}" title="Delete">🗑️</button>
                    </div>
                </div>
                <div class="portfolio-item-type">${this.getTypeIcon(portfolio.projectType)} ${this.getTypeName(portfolio.projectType)}</div>
                ${portfolio.description ? `<p class="portfolio-item-description">${this.escapeHtml(portfolio.description)}</p>` : ''}
                ${portfolio.links && portfolio.links.length > 0 ? `
                    <div class="portfolio-item-links">
                        ${portfolio.links.map(link => `
                            <a href="${link}" target="_blank" rel="noopener noreferrer" class="portfolio-link">
                                🔗 ${this.getDomainFromUrl(link)}
                            </a>
                        `).join('')}
                    </div>
                ` : ''}
                ${portfolio.tags && portfolio.tags.length > 0 ? `
                    <div class="portfolio-item-tags">
                        ${portfolio.tags.map(tag => `<span class="portfolio-tag">${this.escapeHtml(tag)}</span>`).join('')}
                    </div>
                ` : ''}
                <div class="portfolio-item-date">
                    Created: ${new Date(portfolio.createdAt).toLocaleDateString()}
                    ${portfolio.updatedAt !== portfolio.createdAt ? 
                        ` • Updated: ${new Date(portfolio.updatedAt).toLocaleDateString()}` : ''}
                </div>
            </div>
        `).join('');
    }

    async showPortfolio() {
        const container = document.getElementById('portfolio-display');
        if (!container) return;

        await this.renderPortfolioList();
        container.scrollIntoView({ behavior: 'smooth' });
        
        // Show link to public portfolio page
        const portfolioUrl = this.api.getPortfolioPageUrl(this.currentStudent);
        const linkContainer = container.querySelector('.portfolio-public-link');
        if (!linkContainer) {
            const linkDiv = document.createElement('div');
            linkDiv.className = 'portfolio-public-link';
            linkDiv.style.cssText = 'margin-top: 1.5rem; padding: 1rem; background: rgba(16, 185, 129, 0.1); border-radius: 10px; border-left: 4px solid rgba(16, 185, 129, 0.5);';
            linkDiv.innerHTML = `
                <h4 style="color: #065f46; margin-bottom: 0.5rem; font-weight: 700;">🔗 Share Your Portfolio</h4>
                <p style="color: #047857; margin-bottom: 0.75rem; font-size: 0.95rem;">
                    Share your portfolio with others at this link:
                </p>
                <a href="${portfolioUrl}" target="_blank" style="color: #059669; font-weight: 600; text-decoration: none; word-break: break-all;">
                    ${window.location.origin}${portfolioUrl}
                </a>
            `;
            container.appendChild(linkDiv);
        }
    }

    editPortfolio(portfolioId) {
        const portfolios = this.getPortfolios();
        const portfolio = portfolios.find(p => p.id === portfolioId);
        if (!portfolio) return;

        this.showPortfolioForm(portfolio.projectType);
        
        // Pre-fill form
        setTimeout(() => {
            document.getElementById('portfolio-title').value = portfolio.title;
            document.getElementById('portfolio-type').value = portfolio.projectType;
            document.getElementById('portfolio-description').value = portfolio.description;
            document.getElementById('portfolio-links').value = portfolio.links.join('\n');
            document.getElementById('portfolio-tags').value = portfolio.tags.join(', ');

            // Change form to update mode
            const form = document.getElementById('portfolio-form');
            form.dataset.editId = portfolioId;
            form.querySelector('h2').textContent = 'Edit Portfolio Item';
            form.querySelector('button[type="submit"]').textContent = 'Update Portfolio';
        }, 100);
    }

    getTypeIcon(type) {
        const icons = {
            'tinkercad': '🌍',
            'scratch': '🎮',
            'video': '🎬',
            'other': '✨'
        };
        return icons[type] || '✨';
    }

    getTypeName(type) {
        const names = {
            'tinkercad': 'Tinkercad World',
            'scratch': 'Scratch Platformer',
            'video': 'Video Project',
            'other': 'Other Project'
        };
        return names[type] || 'Other';
    }

    getDomainFromUrl(url) {
        try {
            const urlObj = new URL(url);
            return urlObj.hostname.replace('www.', '');
        } catch {
            return url;
        }
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('show');
        }, 10);

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Export portfolio data (for future backend sync)
    exportPortfolio() {
        const data = {
            studentName: this.currentStudent,
            portfolios: this.getPortfolios(),
            exportedAt: new Date().toISOString()
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${this.currentStudent}_portfolio_${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }

    // Import portfolio data (for future backend sync)
    importPortfolio(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                if (data.portfolios && Array.isArray(data.portfolios)) {
                    if (!this.portfolios[this.currentStudent]) {
                        this.portfolios[this.currentStudent] = [];
                    }
                    this.portfolios[this.currentStudent].push(...data.portfolios);
                    this.savePortfolios();
                    this.renderPortfolioList();
                    this.showNotification('Portfolio imported successfully!', 'success');
                }
            } catch (error) {
                this.showNotification('Error importing portfolio. Please check the file format.', 'error');
            }
        };
        reader.readAsText(file);
    }
}

// Initialize portfolio manager when DOM is ready
let portfolioManager;
document.addEventListener('DOMContentLoaded', () => {
    portfolioManager = new PortfolioManager();
});

// Make it globally available
window.portfolioManager = portfolioManager;

