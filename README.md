# Product Overview API Endpoint
A complete redesign and optimization of a back end system (comprised of an express server and PostgreSQL database) to meet large quanitities of data and traffic.

This section focuses on modernization of the Atelier products API.

## Tech Stack:
<br>
<a href="">![-Node](https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white)</a>
<a href="">![-Express](https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white)</a>
<a href="">![-Postgresql](https://img.shields.io/badge/PostgreSQL-4169E1.svg?style=for-the-badge&logo=PostgreSQL&logoColor=white)</a>
<a href="">![-Amazon AWS](https://img.shields.io/badge/Amazon%20AWS-232F3E.svg?style=for-the-badge&logo=Amazon-AWS&logoColor=white)</a>

# Getting Started:
## Installation
- Run `npm install` to install initial dependencies
- Create a local file `.env` using `example.env` as a template.
  - `.env` is listed in the `.gitignore` file and thus will not be added to Git's source control
  - Populate this new `.env` file with the required values for your local machine
- Run `npm eslint-dev` to configure ESLint rules and check code quality and syntax

## Start Server
- Run `npm run server-dev` to start the server

## Populating PostgreSQL database
- Download CSV files for features, photos, products, related, skus, and styles in server/data
- Run `npm run etl` to transform data to correct format
- Execute `psql -f server/db/schema.sql` to populate table

# Testing:
## API functionality
- Run `npm run test` to do Jest testing of all products API endpoints
