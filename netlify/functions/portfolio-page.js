// Netlify Function to generate curated student portfolio pages
// Reads teacher-curated data from /data/student-portfolios.json
//
// Routes:
// - /portfolio                  -> directory (all classes)
// - /portfolio/:classSlug       -> class page (students list)
// - /portfolio/:classSlug/:studentSlug -> student page

const fs = require('fs');
const path = require('path');

function loadCuratedPortfolios() {
  const jsonPath = path.resolve(__dirname, '../../data/student-portfolios.json');
  const raw = fs.readFileSync(jsonPath, 'utf8');
  return JSON.parse(raw);
}

exports.handler = async (event) => {
  try {
    const cleanedPath = String(event.path || '/').replace(/\/+$/, '');
    const parts = cleanedPath.replace(/^\/+/, '').split('/').filter(Boolean);

    // We only handle /portfolio routes
    if (parts.length === 0 || parts[0] !== 'portfolio') {
      return { statusCode: 404, body: 'Not found' };
    }

    const data = loadCuratedPortfolios();
    const classes = Array.isArray(data.classes) ? data.classes : [];

    // /portfolio (directory)
    if (parts.length === 1) {
      return htmlResponse(generateDirectoryPage({ classes }));
    }

    const classSlug = parts[1];
    const cls = classes.find(c => c && String(c.slug) === String(classSlug));
    if (!cls) {
      return htmlResponse(generateNotFoundPage('Class not found', '/portfolio'));
    }

    // /portfolio/:classSlug (class page)
    if (parts.length === 2) {
      return htmlResponse(generateClassPage({ cls }));
    }

    const studentSlug = parts[2];
    const students = Array.isArray(cls.students) ? cls.students : [];
    const student = students.find(s => s && String(s.slug) === String(studentSlug));
    if (!student) {
      return htmlResponse(generateNotFoundPage('Student not found', `/portfolio/${encodeURIComponent(classSlug)}`));
    }

    // /portfolio/:classSlug/:studentSlug (student page)
    return htmlResponse(generateStudentPage({ cls, student }));

  } catch (error) {
    console.error('portfolio-page error:', error);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
      body: 'Error loading portfolio'
    };
  }
};

function htmlResponse(body) {
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
    body
  };
}

function titleCaseFromSlug(slug) {
  return String(slug)
    .split('-')
    .filter(Boolean)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function getScratchEmbedUrl(url) {
  try {
    const u = new URL(url);
    if (u.hostname !== 'scratch.mit.edu') return null;
    const m = u.pathname.match(/\/projects\/(\d+)(\/|$)/);
    if (!m) return null;
    return `https://scratch.mit.edu/projects/${m[1]}/embed`;
  } catch {
    return null;
  }
}

function getTinkercadEmbedUrl(url) {
  try {
    const u = new URL(url);
    if (!u.hostname.includes('tinkercad.com')) return null;
    // Extract project ID from Tinkercad URL
    // Formats: https://www.tinkercad.com/things/ABC123 or https://www.tinkercad.com/things/ABC123/edit
    const m = u.pathname.match(/\/things\/([a-zA-Z0-9]+)/);
    if (!m) return null;
    return `https://www.tinkercad.com/embed/${m[1]}`;
  } catch {
    return null;
  }
}

function normalizeProjects(projects) {
  const arr = Array.isArray(projects) ? projects : [];
  return arr
    .filter(Boolean)
    .map(p => ({
      title: p.title || 'Untitled',
      projectType: p.projectType || 'other',
      description: p.description || '',
      links: Array.isArray(p.links) ? p.links : [],
      tags: Array.isArray(p.tags) ? p.tags : [],
      createdAt: p.createdAt || null,
      featured: Boolean(p.featured)
    }))
    .sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      const ad = a.createdAt ? Date.parse(a.createdAt) : 0;
      const bd = b.createdAt ? Date.parse(b.createdAt) : 0;
      return bd - ad;
    });
}

function generateDirectoryPage({ classes }) {
  const safeClasses = Array.isArray(classes) ? classes : [];
  const classCards = safeClasses.length === 0
    ? `<div class="portfolio-empty"><p>No classes added yet.</p></div>`
    : safeClasses.map(cls => {
        const displayName = escapeHtml(cls.displayName || titleCaseFromSlug(cls.slug || cls.id || 'class'));
        const slug = String(cls.slug || '').trim();
        const studentsCount = Array.isArray(cls.students) ? cls.students.length : 0;
        const projectsCount = (Array.isArray(cls.students) ? cls.students : [])
          .flatMap(s => (Array.isArray(s.projects) ? s.projects : []))
          .length;

        return `
          <div class="portfolio-item">
            <div class="portfolio-item-header">
              <h3>${displayName}</h3>
            </div>
            <div class="portfolio-item-type">👥 ${studentsCount} students • 📁 ${projectsCount} projects</div>
            <div class="portfolio-item-links">
              <a class="portfolio-link" href="/portfolio/${encodeURIComponent(slug)}">Open class →</a>
            </div>
          </div>
        `;
      }).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Portfolios | MRG STEM</title>
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
    </style>
</head>
<body>
    <div class="background"></div>
    <nav class="navbar navbar-top">
        <div class="navbar-container">
            <a href="/" class="navbar-brand">⚡ Home</a>
            <a href="/student-work.html" class="navbar-brand">🎨 Student Work</a>
            <a href="/submit-portfolio.html" class="navbar-brand">📮 Submit Project</a>
        </div>
    </nav>
    
    <main class="dashboard-main">
        <div class="main-content-scroll">
            <div class="portfolio-header">
                <h1>Student Portfolios</h1>
                <p>Teacher-curated class + student pages</p>
            </div>

            <section class="portfolio-section">
                <h2>🏫 Classes</h2>
                <div id="portfolio-items-container">
                    ${classCards}
                </div>
            </section>
        </div>
    </main>

    <nav class="navbar navbar-bottom">
        <div class="navbar-container">
            <a href="/" class="navbar-link">🏠 Back to Home</a>
            <a href="/submit-portfolio.html" class="navbar-link">📮 Submit</a>
        </div>
    </nav>
</body>
</html>`;
}

function generateClassPage({ cls }) {
  const classDisplay = escapeHtml(cls.displayName || titleCaseFromSlug(cls.slug || cls.id || 'class'));
  const classSlug = String(cls.slug || '').trim();
  const students = Array.isArray(cls.students) ? cls.students : [];

  const studentCards = students.length === 0
    ? `<div class="portfolio-empty"><p>No students added yet.</p></div>`
    : students
        .slice()
        .sort((a, b) => String(a.firstName || '').localeCompare(String(b.firstName || '')))
        .map(s => {
          const firstName = escapeHtml(s.firstName || titleCaseFromSlug(s.slug || 'student'));
          const studentSlug = String(s.slug || '').trim();
          const projectsCount = Array.isArray(s.projects) ? s.projects.length : 0;
          return `
            <div class="portfolio-item">
              <div class="portfolio-item-header">
                <h3>${firstName}</h3>
              </div>
              <div class="portfolio-item-type">📁 ${projectsCount} projects</div>
              <div class="portfolio-item-links">
                <a class="portfolio-link" href="/portfolio/${encodeURIComponent(classSlug)}/${encodeURIComponent(studentSlug)}">Open portfolio →</a>
              </div>
            </div>
          `;
        })
        .join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${classDisplay} | Student Portfolios</title>
  <link rel="stylesheet" href="/styles.css">
  <link rel="stylesheet" href="/portfolio.css">
</head>
<body>
  <div class="background"></div>
  <nav class="navbar navbar-top">
    <div class="navbar-container">
      <a href="/" class="navbar-brand">⚡ Home</a>
      <a href="/portfolio" class="navbar-brand">🏫 Portfolios</a>
      <a href="/submit-portfolio.html" class="navbar-brand">📮 Submit Project</a>
    </div>
  </nav>

  <main class="dashboard-main">
    <div class="main-content-scroll">
      <div class="portfolio-header" style="text-align:center; padding: 2.5rem 2rem; background: linear-gradient(135deg, rgba(59,130,246,0.1), rgba(37,99,235,0.1)); border-radius: 20px; margin-bottom: 2rem;">
        <h1 style="color:#1e40af; font-size: clamp(2rem, 5vw, 3.2rem); margin-bottom: 0.5rem;">${classDisplay}</h1>
        <p style="color:#64748b; font-size: 1.1rem;">Choose a student</p>
      </div>

      <section class="portfolio-section">
        <h2>👥 Students</h2>
        <div id="portfolio-items-container">
          ${studentCards}
        </div>
      </section>
    </div>
  </main>

  <nav class="navbar navbar-bottom">
    <div class="navbar-container">
      <a href="/portfolio" class="navbar-link">← All Classes</a>
      <a href="/submit-portfolio.html" class="navbar-link">📮 Submit</a>
    </div>
  </nav>
</body>
</html>`;
}

function generateStudentPage({ cls, student }) {
  const classDisplay = escapeHtml(cls.displayName || titleCaseFromSlug(cls.slug || cls.id || 'class'));
  const classSlug = String(cls.slug || '').trim();
  const firstName = escapeHtml(student.firstName || titleCaseFromSlug(student.slug || 'student'));
  const studentSlug = String(student.slug || '').trim();
  const projects = normalizeProjects(student.projects);
  const projectTypesCount = new Set(projects.map(p => p.projectType)).size;

  const itemsHtml = projects.length === 0
    ? `<div class="portfolio-empty"><p>No projects yet. Check back soon!</p></div>`
    : projects.map(p => {
        const typeIcon = getTypeIcon(p.projectType);
        const typeName = getTypeName(p.projectType);

        const firstLink = Array.isArray(p.links) && p.links[0] && p.links[0].url ? String(p.links[0].url) : null;
        const scratchEmbed = firstLink ? getScratchEmbedUrl(firstLink) : null;
        const tinkercadEmbed = firstLink ? getTinkercadEmbedUrl(firstLink) : null;

        const linksHtml = Array.isArray(p.links) && p.links.length > 0
          ? `
            <div class="portfolio-item-links">
              ${p.links.map(l => {
                const url = l && l.url ? String(l.url) : '';
                const label = l && l.label ? String(l.label) : getDomainFromUrl(url);
                if (!url) return '';
                return `<a href="${escapeAttribute(url)}" target="_blank" rel="noopener noreferrer" class="portfolio-link">🔗 ${escapeHtml(label)}</a>`;
              }).join('')}
            </div>
          `
          : '';

        const tagsHtml = Array.isArray(p.tags) && p.tags.length > 0
          ? `
            <div class="portfolio-item-tags">
              ${p.tags.map(tag => `<span class="portfolio-tag">${escapeHtml(tag)}</span>`).join('')}
            </div>
          `
          : '';

        const dateText = p.createdAt ? new Date(p.createdAt).toLocaleDateString() : '';

        return `
          <div class="portfolio-item">
            <div class="portfolio-item-header">
              <h3>${escapeHtml(p.title)}</h3>
            </div>
            <div class="portfolio-item-type">${typeIcon} ${typeName}${p.featured ? ' • ⭐ Featured' : ''}</div>
            ${scratchEmbed ? `
              <div style="margin: 0.75rem 0; border-radius: 12px; overflow: hidden; border: 2px solid rgba(59, 130, 246, 0.25); background: rgba(0,0,0,0.05);">
                <iframe src="${escapeAttribute(scratchEmbed)}" allowtransparency="true" width="100%" height="380" frameborder="0" scrolling="no" allowfullscreen></iframe>
              </div>
            ` : ''}
            ${tinkercadEmbed ? `
              <div style="margin: 0.75rem 0; border-radius: 12px; overflow: hidden; border: 2px solid rgba(16, 185, 129, 0.25); background: rgba(0,0,0,0.05);">
                <iframe src="${escapeAttribute(tinkercadEmbed)}" width="100%" height="400" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" allowfullscreen></iframe>
                <div style="padding: 0.5rem; text-align: center; background: rgba(16, 185, 129, 0.1); color: #047857; font-size: 0.85rem; font-weight: 600;">
                  🖱️ Click and drag to rotate • Scroll to zoom
                </div>
              </div>
            ` : ''}
            ${p.description ? `<p class="portfolio-item-description">${escapeHtml(p.description)}</p>` : ''}
            ${linksHtml}
            ${tagsHtml}
            ${dateText ? `<div class="portfolio-item-date">Added: ${escapeHtml(dateText)}</div>` : ''}
          </div>
        `;
      }).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${firstName}'s Portfolio | ${classDisplay}</title>
  <link rel="stylesheet" href="/styles.css">
  <link rel="stylesheet" href="/portfolio.css">
</head>
<body>
  <div class="background"></div>
  <nav class="navbar navbar-top">
    <div class="navbar-container">
      <a href="/" class="navbar-brand">⚡ Home</a>
      <a href="/portfolio" class="navbar-brand">🏫 Portfolios</a>
      <a href="/submit-portfolio.html" class="navbar-brand">📮 Submit Project</a>
    </div>
  </nav>

  <main class="dashboard-main">
    <div class="main-content-scroll">
      <div class="portfolio-header" style="text-align:center; padding: 2.5rem 2rem; background: linear-gradient(135deg, rgba(59,130,246,0.1), rgba(37,99,235,0.1)); border-radius: 20px; margin-bottom: 2rem;">
        <h1 style="color:#1e40af; font-size: clamp(2rem, 5vw, 3.2rem); margin-bottom: 0.25rem;">${firstName}'s Portfolio</h1>
        <p style="color:#64748b; font-size: 1.05rem; margin-bottom: 0.75rem;">${classDisplay}</p>
        <div style="display:flex; justify-content:center; gap: 1.25rem; flex-wrap: wrap; color:#1e40af; font-weight: 700;">
          <div style="background: rgba(255,255,255,0.8); border: 2px solid rgba(59,130,246,0.2); border-radius: 14px; padding: 0.75rem 1.25rem;">
            📁 ${projects.length} Projects
          </div>
          <div style="background: rgba(255,255,255,0.8); border: 2px solid rgba(59,130,246,0.2); border-radius: 14px; padding: 0.75rem 1.25rem;">
            🎯 ${projectTypesCount} Types
          </div>
        </div>
      </div>

      <section class="portfolio-section">
        <h2>📁 Projects</h2>
        <div id="portfolio-items-container">
          ${itemsHtml}
        </div>
      </section>

      <section class="portfolio-section" style="margin-top: 1.5rem;">
        <h2>📮 Submit a New Project</h2>
        <p>Want to add something here? Submit it to your teacher and it can be added to this page.</p>
        <div style="margin-top: 1rem;">
          <a class="project-button" href="/submit-portfolio.html?class=${encodeURIComponent(classSlug)}&student=${encodeURIComponent(studentSlug)}" style="display:inline-block;">Open submission form →</a>
        </div>
      </section>
    </div>
  </main>

  <nav class="navbar navbar-bottom">
    <div class="navbar-container">
      <a href="/portfolio/${encodeURIComponent(classSlug)}" class="navbar-link">← ${classDisplay}</a>
      <a href="/portfolio" class="navbar-link">🏫 All Classes</a>
    </div>
  </nav>
</body>
</html>`;
}

function generateNotFoundPage(title, backHref) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)} | MRG STEM</title>
  <link rel="stylesheet" href="/styles.css">
  <link rel="stylesheet" href="/portfolio.css">
</head>
<body>
  <div class="background"></div>
  <nav class="navbar navbar-top">
    <div class="navbar-container">
      <a href="/" class="navbar-brand">⚡ Home</a>
      <a href="/portfolio" class="navbar-brand">🏫 Portfolios</a>
    </div>
  </nav>
  <main class="dashboard-main">
    <div class="main-content-scroll">
      <section class="portfolio-section" style="text-align:center;">
        <h2>😕 ${escapeHtml(title)}</h2>
        <p>Try going back and picking a different link.</p>
        <div style="margin-top: 1rem;">
          <a class="project-button" href="${escapeAttribute(backHref)}">← Go back</a>
        </div>
      </section>
    </div>
  </main>
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

function escapeAttribute(text) {
  return escapeHtml(text).replace(/`/g, '&#096;');
}

function getTypeIcon(type) {
  const icons = { tinkercad: '🌍', scratch: '🎮', video: '🎬', other: '✨' };
  return icons[type] || '✨';
}

function getTypeName(type) {
  const names = { tinkercad: 'Tinkercad', scratch: 'Scratch', video: 'Video', other: 'Other' };
  return names[type] || 'Other';
}

function getDomainFromUrl(url) {
  try {
    const u = new URL(url);
    return u.hostname.replace('www.', '');
  } catch {
    return url;
  }
}

