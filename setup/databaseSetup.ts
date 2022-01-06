import { exec } from 'child_process';
import readlineSync from 'readline-sync';
import fs from 'fs';

const databaseScriptsFolderPath = './database_scripts';

const runMigrations = () => {
	console.log('Running database migrations...');

	exec('NODE_ENV=production npx ts-node ./node_modules/typeorm/cli migration:run', (error, stdout, stderr) => {
		if (error) {
			console.error(`error: ${error.message}`);
			return;
		}
		if (stderr) {
			console.log(`stderr: ${stderr}`);
			return;
		}
		console.log(`stdout: ${stdout}`);
		console.log('Done');
	});

	exec('NODE_ENV=development npx ts-node ./node_modules/typeorm/cli migration:run', (error, stdout, stderr) => {
		if (error) {
			console.error(`error: ${error.message}`);
			return;
		}
		if (stderr) {
			console.log(`stderr: ${stderr}`);
			return;
		}
		console.log(`stdout: ${stdout}`);
		console.log('Done');
	});

	exec('NODE_ENV=test npx ts-node ./node_modules/typeorm/cli migration:run', (error, stdout, stderr) => {
		if (error) {
			console.error(`error: ${error.message}`);
			return;
		}
		if (stderr) {
			console.log(`stderr: ${stderr}`);
			return;
		}
		console.log(`stdout: ${stdout}`);
		console.log('Done');
	});
};

const createDistFolder = () => {
	console.log('Creating dist folder...');

	exec('npx tsc --outDir dist', (error, stdout, stderr) => {
		if (error) {
			console.error(`error: ${error.message}`);
			return;
		}
		if (stderr) {
			console.log(`stderr: ${stderr}`);
			return;
		}
		console.log(`stdout: ${stdout}\nDone`);

		runMigrations();
	});
};

const createDatabase = (databaseName: string) => {
	try {
		fs.writeFileSync(
			`${databaseScriptsFolderPath}/database_name.txt`,
			`${databaseName}`
		);
	} catch (error) {
		console.error(error);
	}

	exec(`bash ${databaseScriptsFolderPath}/create-database.sh`, (error, stdout, stderr) => {
		if (error) {
			console.error(`error: ${error.message}`);
			return;
		}
		if (stderr) {
			console.log(`stderr: ${stderr}`);
			return;
		}
		console.log(`stdout: ${stdout}`);

		createDistFolder();
	});
};

interface User {
	username: string;
	password: string;
}

const createRoleScript = ({ username, password }: User) => {
	try {
		fs.writeFileSync(
			`${databaseScriptsFolderPath}/scripts/create-role.sql`,
			`DO\n$$\nBEGIN\n\tIF NOT EXISTS (\nSELECT FROM pg_catalog.pg_roles WHERE rolname='${username}'\n) THEN\nCREATE ROLE ${username} WITH SUPERUSER CREATEDB CREATEROLE LOGIN ENCRYPTED PASSWORD '${password}';\nEND IF;\nEND\n$$;`
		);
	} catch (error) {
		console.error(error);
	}
};

const getDatabaseName = () => readlineSync.question('Enter your database name: ');

const getUsername = () => readlineSync.question('Enter your username for this database: ');

const getPassword = () => {
	let firstTry;
	let secondTry;

	while (true) {
		firstTry = readlineSync.question('Enter your password: ', {
			hideEchoBack: true,
		});

		secondTry = readlineSync.question('Repeat your password: ', {
			hideEchoBack: true,
		});

		if (firstTry !== secondTry) {
			console.log("The password you entered doesn't match. Please try again.");
		} else {
			return firstTry;
		}
	}
};

export {
	getDatabaseName,
	getUsername,
	getPassword,
	createDatabase,
	createRoleScript,
};
