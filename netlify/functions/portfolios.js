// Netlify Function for Portfolio Management
// Handles CRUD operations for student portfolios

const faunadb = require('faunadb');
const q = faunadb.query;

// Initialize Fauna client (you'll need to set FAUNA_SECRET in Netlify environment variables)
const client = new faunadb.Client({
  secret: process.env.FAUNA_SECRET || 'your-secret-here'
});

exports.handler = async (event, context) => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    const { studentName, portfolioId, action, portfolioData } = JSON.parse(event.body || '{}');
    const path = event.path.split('/').pop();

    // GET - List all portfolios or get specific portfolio
    if (event.httpMethod === 'GET') {
      if (path && path !== 'portfolios') {
        // Get specific portfolio by ID
        const portfolio = await client.query(
          q.Get(q.Ref(q.Collection('portfolios'), path))
        );
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify(portfolio.data)
        };
      } else if (studentName) {
        // Get all portfolios for a student
        const portfolios = await client.query(
          q.Map(
            q.Paginate(q.Match(q.Index('portfolios_by_student'), studentName)),
            q.Lambda('x', q.Get(q.Var('x')))
          )
        );
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify(portfolios.data.map(item => ({
            id: item.ref.id,
            ...item.data
          })))
        };
      } else {
        // Get all portfolios (for admin view)
        const portfolios = await client.query(
          q.Map(
            q.Paginate(q.Documents(q.Collection('portfolios'))),
            q.Lambda('x', q.Get(q.Var('x')))
          )
        );
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify(portfolios.data.map(item => ({
            id: item.ref.id,
            ...item.data
          })))
        };
      }
    }

    // POST - Create new portfolio
    if (event.httpMethod === 'POST') {
      const newPortfolio = {
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

      const result = await client.query(
        q.Create(q.Collection('portfolios'), { data: newPortfolio })
      );

      return {
        statusCode: 201,
        headers,
        body: JSON.stringify({
          id: result.ref.id,
          ...result.data
        })
      };
    }

    // PUT - Update portfolio
    if (event.httpMethod === 'PUT') {
      if (!portfolioId) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: 'Portfolio ID required' })
        };
      }

      const updates = {
        ...portfolioData,
        updatedAt: new Date().toISOString()
      };

      const result = await client.query(
        q.Update(q.Ref(q.Collection('portfolios'), portfolioId), {
          data: updates
        })
      );

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          id: result.ref.id,
          ...result.data
        })
      };
    }

    // DELETE - Delete portfolio
    if (event.httpMethod === 'DELETE') {
      if (!portfolioId) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: 'Portfolio ID required' })
        };
      }

      await client.query(
        q.Delete(q.Ref(q.Collection('portfolios'), portfolioId))
      );

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ success: true })
      };
    }

    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };

  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message })
    };
  }
};


