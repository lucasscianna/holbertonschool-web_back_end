const fs = require('fs');

/**
 * Counts the students in a CSV file.
 * @param {string} path The path to the CSV file.
 */
function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }

  const fileContent = fs.readFileSync(path, 'utf-8');
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

  console.log(`Number of students: ${totalStudents}`);
  for (const [field, group] of Object.entries(studentGroups)) {
    console.log(`Number of students in ${field}: ${group.length}. List: ${group.join(', ')}`);
  }
}

module.exports = countStudents;
