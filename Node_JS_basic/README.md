# Node JS basic

## Description
This project introduces the fundamentals of Node.js. It covers executing basic JavaScript code, using the `process` module for standard input/output, reading files synchronously and asynchronously using the `fs` module, creating simple HTTP servers using the built-in `http` module, and transitioning to the `Express.js` framework. Finally, the project includes building a well-organized, complex HTTP server structured with routes, controllers, and ES6 module syntax via Babel.

## Resources
**Read or watch:**
* [Node JS getting started](https://nodejs.org/en/docs/guides/getting-started-guide/)
* [Process API doc](https://node.readthedocs.io/en/latest/api/process/)
* [Child process](https://nodejs.org/api/child_process.html)
* [Express getting started](https://expressjs.com/en/starter/installing.html)
* [Mocha documentation](https://mochajs.org/)
* [Nodemon documentation](https://github.com/remy/nodemon#nodemon)

## Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:
* run javascript using NodeJS
* use NodeJS modules
* use specific Node JS module to read files
* use process to access command line arguments and the environment
* create a small HTTP server using Node JS
* create a small HTTP server using Express JS
* create advanced routes with Express JS
* use ES6 with Node JS with Babel-node
* use Nodemon to develop faster

## Requirements
* Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
* All your files will be interpreted/compiled on Ubuntu 20.04 LTS using `node` (version 20.x.x)
* All your files should end with a new line
* A `README.md` file, at the root of the folder of the project, is mandatory
* Your code should use the `.js` extension
* Your code will be tested using `Jest` and the command `npm run test`
* Your code will be verified against lint using ESLint
* Your code needs to pass all the tests and lint. You can verify the entire project running `npm run full-test`
* All of your functions/classes must be exported by using this format: `module.exports = myFunction;` (except for the `full_server` folder which uses ES6 exports)

## Setup
Don't forget to run `$ npm install` when you have the `package.json`.

## Provided Files
You will need to ensure the following files are present in your repository:
* `package.json`
* `babel.config.js`
* `.eslintrc.js`
* `database.csv` (Sample data)

## Tasks Completed
* **0. Executing basic javascript with Node JS**: Created `0-console.js` to print a string to STDOUT.
* **1. Using Process stdin**: Created `1-stdin.js` to handle interactive command-line inputs.
* **2. Reading a file synchronously with Node JS**: Created `2-read_file.js` to parse a CSV file synchronously.
* **3. Reading a file asynchronously with Node JS**: Created `3-read_file_async.js` to handle file reading with Promises.
* **4. Create a small HTTP server using Node's HTTP module**: Created `4-http.js` that listens on port 1245.
* **5. Create a more complex HTTP server using Node's HTTP module**: Created `5-http.js` to handle multiple endpoints.
* **6. Create a small HTTP server using Express**: Created `6-http_express.js` as an introduction to the Express framework.
* **7. Create a more complex HTTP server using Express**: Created `7-http_express.js` with routes handling asynchronous file processing.
* **8. Organize a complex HTTP server using Express**: Created a complete API structure in the `full_server` directory utilizing Babel for ES6 capabilities (`import`/`export`).
