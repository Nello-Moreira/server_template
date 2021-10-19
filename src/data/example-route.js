import dbConnection from './connection.js';

const getAllExamples = () => dbConnection.query(`SELECT * FROM examples`);

export { getAllExamples };
