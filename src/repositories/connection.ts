import { getConnectionManager, getConnection } from 'typeorm';

if (
	process.env.NODE_ENV === 'production'
	&& process.env.DATABASE_URL.indexOf('sslmode=require') === -1
) {
	process.env.DATABASE_URL += '?sslmode=require';
}

async function dbConnection() {
	const connectionManager = await getConnectionManager();
	const connection = connectionManager.create({
		name: 'default',
		type: 'postgres',
		url: process.env.DATABASE_URL,
		entities: [
			`${
				process.env.NODE_ENV === 'production' ? 'dist' : 'src'
			}/repositories/entities/*.*`,
		],
		ssl: process.env.NODE_ENV === 'production',
	});
	await connection.connect();
	return connection;
}

async function closeConnection() {
	await getConnection().close();
}

export { dbConnection, closeConnection };
