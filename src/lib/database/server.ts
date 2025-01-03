import { sql } from '@vercel/postgres';
import dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
	throw new Error('Missing connection string');
}

//TODO move so doesnt called everytime

export const createTable = async () => {
	try {
		await sql` CREATE TABLE IF NOT EXISTS appointment (
      id SERIAL PRIMARY KEY,
      current_number VARCHAR(4) NOT NULL,
	  appointment_reason VARCHAR(200) NOT NULL,
	  appointment_status VARCHAR(10) NOT NULL,
      created_at TIMESTAMP DEFAULT NOW()
      )`;
	} catch (error) {
		console.error('Error creating table:', error);
		throw error;
	}
};

export const createAppointmentCode = async (number: string, reason: string) => {
	try {
		const res =
			await sql`INSERT INTO appointment(current_number, appointment_reason, appointment_status) VALUES (${number}, ${reason}, 'PENDING') RETURNING current_number`;
		return res.rows[0].current_number;
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

export const getAppointmentByCurrentNumber = async (number: string) => {
	try {
		const res = await sql`select * from appointment where current_number = ${number}`;
		return res.rows;
	} catch (error) {
		console.error('Error selecting row:', error);
		throw error;
	}
};
