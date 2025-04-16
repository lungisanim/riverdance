import { neon } from "@neondatabase/serverless";

export async function getQuestions() {
    const sql = neon(process.env.DATABASE_URL!);
    const questions = await sql`SELECT id, text FROM Questions;`;
    return questions;
}

export interface Term {
  id: number;
  section_title: string;
  content: string;
  created_at: Date;
}

export async function getTerms(): Promise<Term[]> {
    if (!process.env.DATABASE_URL) {
        throw new Error("DATABASE_URL environment variable is not set.");
    }
    const sql = neon(process.env.DATABASE_URL);
    const terms = await sql`SELECT id, section_title, content, created_at FROM Terms ORDER BY id;`;
    return terms as Term[];
} 