// Netlify Function for Admin Portfolio Access
// Allows teachers to view all student portfolios

const faunadb = require('faunadb');
const q = faunadb.query;

exports.handler = async (event, context) => {
  // Check authentication
  const user = context.clientContext && context.clientContext.user;
  if (!user) {
    return {
      statusCode: 401,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Unauthorized' })
    };
  }

  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  try {
    const client = new faunadb.Client({
      secret: process.env.FAUNA_SECRET
    });

    // Get all portfolios
    const portfolios = await client.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection('portfolios'))),
        q.Lambda('x', q.Get(q.Var('x')))
      )
    );

    // Group by student
    const students = {};
    portfolios.data.forEach(item => {
      const studentName = item.data.studentName;
      if (!students[studentName]) {
        students[studentName] = [];
      }
      students[studentName].push({
        id: item.ref.id,
        ...item.data
      });
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(students)
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

