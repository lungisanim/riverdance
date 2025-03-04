import { Client } from 'pg';

export async function handler() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: true,
    },
  });

  try {
    console.log('starting netlify service');
    await client.connect();
    const res = await client.query('SELECT * FROM Questions');
    await client.end();

    return {
      statusCode: 200,
      body: JSON.stringify(res.rows),
    };
  } catch (err) {
    console.error('Database connection error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch questions' }),
    };
  }
}
