<h1 align="center">
  <br>
  Atelier Products Service API
  <br>
</h1>

A complete redesign and optimization of a back end system (comprised of an express server and PostgreSQL database) to meet large quanitities of data and traffic.

This section focuses on modernization of the Atelier Products API.

<div align='center'>
  <img src='https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white' />
  <img src='https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white' />
  <img src='https://img.shields.io/badge/ESLint-4B32C3.svg?style=for-the-badge&logo=ESLint&logoColor=white' />
  <img src='https://img.shields.io/badge/PostgreSQL-4169E1.svg?style=for-the-badge&logo=PostgreSQL&logoColor=white' />
  <img src='https://img.shields.io/badge/Postman-FF6C37.svg?style=for-the-badge&logo=Postman&logoColor=white' />
  <img src='https://img.shields.io/badge/k6-7D64FF.svg?style=for-the-badge&logo=k6&logoColor=white' />
  <img src='https://custom-icon-badges.demolab.com/badge/Loader.io-40AEF0.svg?style=for-the-badge&logo=loader_io&logoColor=white' />
  <img src='https://img.shields.io/badge/Amazon%20AWS-232F3E.svg?style=for-the-badge&logo=Amazon-AWS&logoColor=white' />
</div>

# Analytics:
## Products Query Times

Using indices within the PostgreSQL database, the execution times for each API endpoints decreased as follows:
  - `/products/:product_id` by 99.73% (51.257 ms to <b>0.14 ms</b>)
  - `/products/:product_id/styles` by 99.99% (6155.382 ms to <b>0.411 ms</b>)

<div>
  <img src='__media__/products_query_times.png' alt='Products Query Times Graph' width='500'/>
</div>

- Run `psql -f server/db/query-times.sql` to run psql shell and analzye query times

## API functionality
- Run `npm run test` to do Jest testing of all products API endpoints

# Getting Started:
## Installation
- Run `npm install` to install initial dependencies
- Create a local file `.env` using `example.env` as a template.
  - `.env` is listed in the `.gitignore` file and thus will not be added to Git's source control
  - Populate this new `.env` file with the required values for your local machine
- Run `npm eslint-dev` to configure ESLint rules and check code quality and syntax

## Start Server
- Run `npm run server-dev` to start the server

## Populate PostgreSQL database
- Download CSV files for features, photos, products, related, skus, and styles in server/data
- Run `npm run etl` to transform data to correct format
- Execute `psql -f server/db/schema.sql` to populate table

<div>
  <img src='__media__/schema.png' alt='PostgreSQL Schema' width='300' />
</div>
