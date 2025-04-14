// Use require for Node.js script compatibility
const { neon } = require('@neondatabase/serverless');
const fs = require('fs');
const path = require('path');

// Load environment variables
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

// --- Fetch Terms Function ---
async function getTerms() {
  const sql = neon(process.env.DATABASE_URL);
  const terms = await sql`SELECT id, section_title, content, created_at FROM Terms ORDER BY id;`;
  return terms;
}

// --- Fetch Questions Function ---
async function getQuestions() {
  // Define the Question type structure expected by the frontend
  // Example: interface Question { id: number; text: string; }
  const sql = neon(process.env.DATABASE_URL);
  // Select only the columns needed by the frontend component
  const questions = await sql`SELECT questionid, question FROM Questions ORDER BY questionid;`; // Assuming 'id' and 'text' columns
  return questions;
}


// --- Main Execution ---
async function fetchDataAndSave() {
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL environment variable is not set for build script.");
    process.exit(1);
  }

  try {
    console.log('Fetching data for build...');

    // Fetch and Save Terms
    const terms = await getTerms();
    const termsFilePath = path.resolve(__dirname, '../public/terms.json');
    fs.writeFileSync(termsFilePath, JSON.stringify(terms, null, 2));
    console.log(`Terms successfully saved to ${termsFilePath}`);

    // Fetch and Save Questions
    const questions = await getQuestions();
    const questionsFilePath = path.resolve(__dirname, '../public/questions.json');
    fs.writeFileSync(questionsFilePath, JSON.stringify(questions, null, 2));
    console.log(`Questions successfully saved to ${questionsFilePath}`);

  } catch (error) {
    console.error('Error fetching or saving data:', error);
    process.exit(1); // Exit build process with error
  }
}

fetchDataAndSave(); 