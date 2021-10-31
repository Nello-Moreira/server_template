# SERVER TEMPLATE

This is a template to build a web server.

## How to run

-   Clone this repository
-   Run "npm i" on terminal
-   Change the file "create-tables.sql" (./database_scripts/scripts/create-tables.sql) to the desired tables names and variables
-   Run "node config.js" on terminal. This will create a production, a development and a test database and envs variables. It will also create a local user role for postgres database, if it doesn't exist.
-   Edit the desired files and run server

## Commands to run

| Command                   | Action                                                                             |
| ------------------------- | ---------------------------------------------------------------------------------- |
| npm run start:production  | Start server at production mode                                                    |
| npm run start:development | Start server at development mode                                                   |
| npm run start             | Start server at test driven design mode (it runs all tests each time files change) |
| npm run test              | Run all tests once                                                                 |
