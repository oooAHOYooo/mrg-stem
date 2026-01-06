// Netlify Function to generate student portfolio pages
// Creates dynamic portfolio pages at /portfolio/:studentName

exports.handler = async (event, context) => {
  const studentName = event.path.split('/').pop();

  if (!studentName || studentName === 'portfolio') {
    return {
      statusCode: 404,
      body: 'Student not found'
    };
  }

  try {
    // Fetch student's portfolios from Fauna
    const faunadb = require('faunadb');
    const q = faunadb.query;
    const client = new faunadb.Client({
      secret: process.env.FAUNA_SECRET
    });

    const portfolios = await client.query(
      q.Map(
        q.Paginate(q.Match(q.Index('portfolios_by_student'), studentName)),
        q.Lambda('x', q.Get(q.Var('x')))
      )
    );

    const portfolioData = portfolios.data.map(item => ({
      id: item.ref.id,
      ...item.data
    }));

    // Generate HTML page
    const html = generatePortfolioPage(studentName, portfolioData);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html'
      },
      body: html
    };

  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: 'Error loading portfolio'
    };
  }
};

function generatePortfolioPage(studentName, portfolios) {
  const displayName = studentName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${displayName}'s Portfolio | MRG STEM</title>
    <link rel="stylesheet" href="/styles.css">
    <link rel="stylesheet" href="/portfolio.css">
    <style>
        .portfolio-header {
            text-align: center;
            padding: 3rem 2rem;
            background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(37, 99, 235, 0.1));
            border-radius: 20px;
            margin-bottom: 3rem;
        }
        .portfolio-header h1 {
            color: #1e40af;
            font-size: clamp(2rem, 5vw, 3.5rem);
            margin-bottom: 0.5rem;
        }
        .portfolio-header p {
            color: #64748b;
            font-size: 1.2rem;
        }
        .portfolio-stats {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-top: 2rem;
            flex-wrap: wrap;
        }
        .stat-item {
            text-align: center;
        }
        .stat-number {
            font-size: 2rem;
            font-weight: 700;
            color: #1e40af;
        }
        .stat-label {
            color: #64748b;
            font-size: 0.9rem;
        }
    </style>
</head>
<body>
    <div class="background"></div>
    <nav class="navbar navbar-top">
        <div class="navbar-container">
            <a href="/" class="navbar-brand">⚡ Home</a>
            <a href="/student-work.html" class="navbar-brand">🎨 Student Work</a>
        </div>
    </nav>
    
    <main class="dashboard-main">
        <div class="main-content-scroll">
            <div class="portfolio-header">
                <h1>${displayName}'s Portfolio</h1>
                <p>Creative Projects & Learning Journey</p>
                <div class="portfolio-stats">
                    <div class="stat-item">
                        <div class="stat-number">${portfolios.length}</div>
                        <div class="stat-label">Projects</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">${new Set(portfolios.map(p => p.projectType)).size}</div>
                        <div class="stat-label">Project Types</div>
                    </div>
                </div>
            </div>

            <section class="portfolio-section">
                <h2>📁 Projects</h2>
                <div id="portfolio-items-container">
                    ${portfolios.length === 0 ? `
                        <div class="portfolio-empty">
                            <p>No projects yet. Check back soon!</p>
                        </div>
                    ` : portfolios.map(portfolio => `
                        <div class="portfolio-item">
                            <div class="portfolio-item-header">
                                <h3>${escapeHtml(portfolio.title)}</h3>
                            </div>
                            <div class="portfolio-item-type">
                                ${getTypeIcon(portfolio.projectType)} ${getTypeName(portfolio.projectType)}
                            </div>
                            ${portfolio.description ? `
                                <p class="portfolio-item-description">${escapeHtml(portfolio.description)}</p>
                            ` : ''}
                            ${portfolio.links && portfolio.links.length > 0 ? `
                                <div class="portfolio-item-links">
                                    ${portfolio.links.map(link => `
                                        <a href="${link}" target="_blank" rel="noopener noreferrer" class="portfolio-link">
                                            🔗 ${getDomainFromUrl(link)}
                                        </a>
                                    `).join('')}
                                </div>
                            ` : ''}
                            ${portfolio.tags && portfolio.tags.length > 0 ? `
                                <div class="portfolio-item-tags">
                                    ${portfolio.tags.map(tag => `
                                        <span class="portfolio-tag">${escapeHtml(tag)}</span>
                                    `).join('')}
                                </div>
                            ` : ''}
                            <div class="portfolio-item-date">
                                Created: ${new Date(portfolio.createdAt).toLocaleDateString()}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
        </div>
    </main>

    <nav class="navbar navbar-bottom">
        <div class="navbar-container">
            <a href="/" class="navbar-link">🏠 Back to Home</a>
        </div>
    </nav>
</body>
</html>`;
}

function escapeHtml(text) {
    if (!text) return '';
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function getTypeIcon(type) {
    const icons = { 'tinkercad': '🌍', 'scratch': '🎮', 'video': '🎬', 'other': '✨' };
    return icons[type] || '✨';
}

function getTypeName(type) {
    const names = { 'tinkercad': 'Tinkercad World', 'scratch': 'Scratch Platformer', 'video': 'Video Project', 'other': 'Other Project' };
    return names[type] || 'Other';
}

function getDomainFromUrl(url) {
    try {
        const urlObj = new URL(url);
        return urlObj.hostname.replace('www.', '');
    } catch {
        return url;
    }
}
`;

