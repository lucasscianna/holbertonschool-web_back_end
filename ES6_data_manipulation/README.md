# ES6 Data Manipulation

## Resources
**Read or watch:**
* Array
* Typed Array
* Set Data Structure
* Map Data Structure
* WeakMap

## Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:
* How to use map, filter and reduce on arrays
* Typed arrays
* The Set, Map, and Weak link data structures

## Requirements
* All your files will be interpreted/compiled on Ubuntu 20.04 LTS using node 20.x.x and npm 9.x.x
* Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
* All your files should end with a new line
* A `README.md` file, at the root of the folder of the project, is mandatory
* Your code should use the `.js` extension
* Your code will be tested using Jest and the command `npm run test`
* Your code will be verified against lint using ESLint
* Your code needs to pass all the tests and lint. You can verify the entire project running `npm run full-test`
* All of your functions must be exported

## Setup

### Install NodeJS 20.x.x
(in your home directory):
```bash
curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

### Install Jest, Babel, and ESLint
In your project directory:
* Install Jest using: `npm install --save-dev jest`
* Install Babel using: `npm install --save-dev babel-jest @babel/core @babel/preset-env`
* Install ESLint using: `npm install --save-dev eslint`

## Configuration files
Ensure the following configuration files are present in the root directory:
* `package.json`
* `babel.config.js`
* `.eslintrc.js`

Don't forget to run `npm install` when you have the `package.json`.

## Tasks

### 0. Basic list of objects
Create a function named `getListStudents` that returns an array of objects.

Each object should have three attributes: `id` (Number), `firstName` (String), and `location` (String).

The array contains the following students in order:
* `Guillaume`, id: `1`, in `San Francisco`
* `James`, id: `2`, in `Columbia`
* `Serena`, id: `5`, in `San Francisco`

### 1. More mapping
Create a function `getListStudentIds` that returns an array of ids from a list of objects.

This function is taking one argument which is an array of objects - and this array is the same format as `getListStudents` from the previous task.

If the argument is not an array, the function is returning an empty array.

You must use the `map` function on the array.

### 2. Filter
Create a function `getStudentsByLocation` that returns an array of objects who are located in a specific city.

It should accept a list of students (from `getListStudents`) and a `city` (string) as parameters.

You must use the `filter` function on the array.

### 3. Reduce
Create a function `getStudentIdsSum` that returns the sum of all the student ids.

It should accept a list of students (from `getListStudents`) as a parameter.

You must use the `reduce` function on the array.

### 4. Combine
Create a function `updateStudentGradeByCity` that returns an array of students for a specific city with their new grade

It should accept a list of students (from `getListStudents`), a `city` (String), and `newGrades` (Array of "grade" objects) as parameters.

`newGrades` is an array of objects with this format:
```javascript
  {
    studentId: 31,
    grade: 78,
  }
```

If a student doesn't have grade in `newGrades`, the final grade should be `N/A`.

You must use `filter` and `map` combined.

### 5. Typed Arrays
Create a function named `createInt8TypedArray` that returns a new `ArrayBuffer` with an `Int8` value at a specific position.

It should accept three arguments: `length` (Number), `position` (Number), and `value` (Number).

If adding the value is not possible the error `Position outside range` should be thrown.

### 6. Set data structure
Create a function named `setFromArray` that returns a `Set` from an array.

It accepts an argument (Array, of any kind of element).

### 7. More set data structure
Create a function named `hasValuesFromArray` that returns a boolean if all the elements in the array exist within the set.

It accepts two arguments: a `set` (Set) and an `array` (Array).

### 8. Clean set
Create a function named `cleanSet` that returns a string of all the set values that start with a specific string (`startString`).

It accepts two arguments: a `set` (Set) and a `startString` (String).

When a value starts with `startString` you only append the rest of the string. The string contains all the values of the set separated by `-`.

### 9. Map data structure
Create a function named `groceriesList` that returns a map of groceries with the following items (name, quantity):

* Apples, 10
* Tomatoes, 10
* Pasta, 1
* Rice, 1
* Banana, 5

### 10. More map data structure
Create a function named `updateUniqueItems` that returns an updated map for all items with initial quantity at 1.

It should accept a map as an argument. The map it accepts for argument is similar to the map you create in the previous task.

For each entry of the map where the quantity is 1, update the quantity to 100. If updating the quantity is not possible (argument is not a map) the error `Cannot process` should be thrown.
