const dotenv = require('dotenv');

let path;

if (process.env.NODE_ENV === 'production') {
	path = '.production.env';
} else if (process.env.NODE_ENV === 'development') {
	path = '.development.env';
} else {
	path = '.test.env';
}

dotenv.config({
	path,
});

module.exports = {
	type: 'postgres',
	url: process.env.DATABASE_URL,
	migrationsTableName: 'migrations',
	entities: ['dist/src/repositories/entities/*.js'],
	migrations: ['dist/src/repositories/migrations/*.js'],
	cli: {
		migrationsDir: 'src/repositories/migrations',
		entitiesDir: 'dist/src/repositories/entities/*.js',
	},
};
