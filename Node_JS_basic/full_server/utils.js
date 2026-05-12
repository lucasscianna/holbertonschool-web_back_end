import fs from 'fs';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }
    const lines = data.split('\n');
    const studentGroups = {};
    for (let i = 1; i < lines.length; i += 1) {
      const line = lines[i].trim();
      if (line) {
        const studentData = line.split(',');
        if (studentData.length >= 4) {
          const field = studentData[3];
          const firstName = studentData[0];
          if (!studentGroups[field]) {
            studentGroups[field] = [];
          }
          studentGroups[field].push(firstName);
        }
      }
    }
    resolve(studentGroups);
  });
});

export default readDatabase;
