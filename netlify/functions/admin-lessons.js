// Netlify Function for Admin Lesson Management
// Allows teachers to create and manage lessons

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

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  try {
    const client = new faunadb.Client({
      secret: process.env.FAUNA_SECRET
    });

    // GET - List all lessons
    if (event.httpMethod === 'GET') {
      const lessons = await client.query(
        q.Map(
          q.Paginate(q.Documents(q.Collection('lessons'))),
          q.Lambda('x', q.Get(q.Var('x')))
        )
      );

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(lessons.data.map(item => ({
          id: item.ref.id,
          ...item.data
        })))
      };
    }

    // POST - Create new lesson
    if (event.httpMethod === 'POST') {
      const lessonData = JSON.parse(event.body);

      const newLesson = {
        title: lessonData.title,
        type: lessonData.type,
        description: lessonData.description || '',
        resources: lessonData.resources || [],
        grades: lessonData.grades || [],
        createdBy: user.email,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      const result = await client.query(
        q.Create(q.Collection('lessons'), { data: newLesson })
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

    // PUT - Update lesson
    if (event.httpMethod === 'PUT') {
      const { lessonId, lessonData } = JSON.parse(event.body);

      const updates = {
        ...lessonData,
        updatedAt: new Date().toISOString()
      };

      const result = await client.query(
        q.Update(q.Ref(q.Collection('lessons'), lessonId), {
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

    // DELETE - Delete lesson
    if (event.httpMethod === 'DELETE') {
      const { lessonId } = JSON.parse(event.body);

      await client.query(
        q.Delete(q.Ref(q.Collection('lessons'), lessonId))
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


