import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(request, response) {
    const dbPath = process.argv[2];
    readDatabase(dbPath)
      .then((studentGroups) => {
        let output = 'This is the list of our students\n';
        const fields = Object.keys(studentGroups).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        for (let i = 0; i < fields.length; i += 1) {
          const field = fields[i];
          const group = studentGroups[field];
          output += `Number of students in ${field}: ${group.length}. List: ${group.join(', ')}`;
          if (i < fields.length - 1) {
            output += '\n';
          }
        }
        response.status(200).send(output);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    const dbPath = process.argv[2];
    readDatabase(dbPath)
      .then((studentGroups) => {
        const group = studentGroups[major] || [];
        response.status(200).send(`List: ${group.join(', ')}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}
