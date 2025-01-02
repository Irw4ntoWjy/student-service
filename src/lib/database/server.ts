import { sql } from '@vercel/postgres';
import dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("Missing connection string");
}

export const createTable = async () => {
    try {
        await sql
           ` CREATE TABLE IF NOT EXISTS appointment (
                id SERIAL PRIMARY KEY,
                current_number VARCHAR(4) NOT NULL,
                created_at TIMESTAMP DEFAULT NOW()
            )`
        ;
    } catch (error) {
        console.error('Error creating table:', error);
        throw error;
    }
};
//TODO move so doesnt called everytime
createTable();

export const createAppointmentCode = async (value: string) => {
  try {
    const res = await sql`INSERT INTO appointment(current_number) VALUES (${value}) RETURNING current_number`;
    return res.rows;
  } catch (error) {
    console.error('Error inserting row:', error);
    throw error;
  }
};

export const getAppointmentCurrentNumber = async () => {
	try {
	  const res = await sql`select current_number from appointment order by created_at desc limit 1`;
	  return res.rows;
	} catch (error) {
	  console.error('Error selecting row:', error);
	  throw error;
	}
  };