# St. Charles Auto
A node API for scheduling vehicle service appointments, created for BizzyCar coding challenge.

## Requirements
- Node 14
- NPM 6.14.15

## Setup:
1. Clone this repo.
2. `npm i` to install package dependencies
3. Save the following environment variables to a token.env file stored in the project root directory.
- DB_PASS=(database password)
4. 

## Run tests:
`npm run unit` will run all unit tests.

## Start the API:
`nmp start` to start a locally served API

## Discussion
1. I started off using a NodeJS API template that I created. The template comes with the basics: a working Express API with a healthcheck and a GET route, connection to a database, and basic unit/integration testing.
2. Basic API/Database setup is easy. I knew the harder aspects of this assignment were going to be:
   1. Setting up the database to relate the tables such that a customer can have a vehicle and appointment.
   2. Ensuring that appointments are available by returning an error if an appointment in that timeslot already exists.

## References
The API the app gets data from:
- [Code edited with Jetbrains WebStorm](https://www.jetbrains.com/webstorm/)
- [Database stored on ElephantSQL](https://www.elephantsql.com/)
- [Database tables created/viewed with Postico](https://eggerapps.at/postico/)
- [API accessed with PAW](https://paw.cloud/)
