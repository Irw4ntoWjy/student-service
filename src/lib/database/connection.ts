import pg from 'pg';

const { Pool } = pg;
const pool = new Pool({
	host: 'localhost',
	port: 5500,
	user: 'postgres',
	password: 'mysecretpassword',
	database: 'postgres'
});

// TODO where to trigger createTable
export const createTable = async () => {
	const query = `
        CREATE TABLE IF NOT EXISTS appointment (
            id SERIAL PRIMARY KEY,
            current_number VARCHAR(4) NOT NULL,
            created_at TIMESTAMP DEFAULT NOW()
        )`;
	const client = await pool.connect();
	try {
		const res = await client.query(query);
		return res;
	} finally {
		client.release();
	}
};

createTable()	

export const insertRow = async (param: string, value: string) => {
	const query = `INSERT INTO appointment(${param}) VALUES ($1) RETURNING CURRENT_NUMBER`;
	const client = await pool.connect();
	try {
		const res = await client.query(query, [value]);
		return res;
	} finally {
		client.release();
	}
};

export const selectRow = async (sql: string) => {
	const client = await pool.connect();
	try {
		const res = await client.query(sql);
		return res;
	} finally {
		client.release();
	}
};
