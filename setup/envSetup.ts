import fs from 'fs';

const pathToCreate = './';

interface Settings {
	username: string;
	password: string;
	databaseName: string;
}
const createEnvs = ({ username, password, databaseName }: Settings) => {
	const writeEnvsData = (env: string) => {
		try {
			fs.writeFileSync(
				`${pathToCreate}/.${env}.env`,
				`DATABASE_URL=postgres://${username}:${password}@localhost:5432/${databaseName}${env !== 'production' ? `_${env}` : ''}\nPORT=8080\nJWT_SECRET=notARealSecret`
			);
		} catch (error) {
			console.error(error);
		}
	};

	writeEnvsData('production');
	writeEnvsData('development');
	writeEnvsData('test');
};

export { createEnvs };
