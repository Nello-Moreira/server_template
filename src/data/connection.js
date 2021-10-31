import pg from 'pg';

const { Pool } = pg;

let dbConnection;

try {
	const config = {
		port: process.env.DB_PORT,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		host: process.env.DB_HOST,
		database: process.env.DB_DATABASE,
	};

	dbConnection = new Pool(config);
} catch (error) {
	console.log(error);
}

export default dbConnection;
