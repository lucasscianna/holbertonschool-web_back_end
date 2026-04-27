# ES6 Classes

## Resources
**Read or watch:**
* [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
* [Metaprogramming](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Meta_programming)

## Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, **without the help of Google**:

* How to define a Class
* How to add methods to a class
* Why and how to add a static method to a class
* How to extend a class from another
* Metaprogramming and symbols

## Requirements
* All your files will be interpreted/compiled on Ubuntu 20.04 LTS using NodeJS 20.x.x and npm 9.x.x
* Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
* All your files should end with a new line
* A `README.md` file, at the root of the folder of the project, is mandatory
* Your code should use the `.js` extension
* Your code will be tested using [Jest](https://jestjs.io/) and the command `npm run test`
* Your code will be verified against lint using [ESLint](https://eslint.org/)
* Your code needs to pass all the tests and lint. You can verify the entire project running `npm run full-test`

## Setup

### Install NodeJS 20.x.x
(in your home directory):
```bash
curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
$ nodejs -v
v20.15.1
$ npm -v
10.7.0
```

### Install Jest, Babel, and ESLint
In your project directory:
* Install Jest using: `npm install --save-dev jest`
* Install Babel using: `npm install --save-dev babel-jest @babel/core @babel/preset-env`
* Install ESLint using: `npm install --save-dev eslint`

### Configuration files
Make sure to add the following files to your project directory:
* `package.json`
* `babel.config.js`
* `.eslintrc.js`

And don't forget to run `npm install` when you have the `package.json`.
