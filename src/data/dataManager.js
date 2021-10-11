import fs from 'fs';

const databasePATH = './src/data/database.json';

function getData() {
	return JSON.parse(fs.readFileSync(databasePATH, 'utf8'));
}

function saveData(data) {
	fs.writeFileSync(databasePATH, JSON.stringify(data), 'utf-8');
	return true;
}
