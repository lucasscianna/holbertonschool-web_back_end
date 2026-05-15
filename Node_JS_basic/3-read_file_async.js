const fs = require('fs');

/**
 * Counts the students in a CSV file asynchronously.
 * @param {string} path The path to the CSV file.
 * @returns {Promise<void>}
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    if (!path) {
      reject(new Error('Cannot load the database'));
      return;
    }
    fs.readFile(path, 'utf-8', (error, fileContent) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = fileContent.split('\n');
      const studentGroups = {};
      let totalStudents = 0;

      for (let i = 1; i < lines.length; i += 1) {
        const line = lines[i].trim();
        if (line) {
          const studentData = line.split(',');
          if (studentData.length >= 4) {
            totalStudents += 1;
            const field = studentData[3];
            const firstName = studentData[0];
            if (!studentGroups[field]) {
              studentGroups[field] = [];
            }
            studentGroups[field].push(firstName);
          }
        }
      }

      let output = `Number of students: ${totalStudents}\n`;
      console.log(`Number of students: ${totalStudents}`);

      const fields = Object.keys(studentGroups);
      for (let j = 0; j < fields.length; j += 1) {
        const field = fields[j];
        const group = studentGroups[field];
        const lineStr = `Number of students in ${field}: ${group.length}. List: ${group.join(', ')}`;
        output += lineStr + (j === fields.length - 1 ? '' : '\n');
        console.log(lineStr);
      }
      resolve(output);
    });
  });
}

module.exports = countStudents;
