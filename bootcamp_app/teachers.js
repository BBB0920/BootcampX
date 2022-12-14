//Name of Teachers That Assisted

const { Pool } = require('pg');
const args = process.argv;

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'bootcampx'
});

const cohortName = process.argv[2];
const values = [cohortName];

pool.query(`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers 
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = $1
ORDER BY teacher;
`, values)
.then(res => {
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher}`);
  })
});

// My attempt

// pool.query(`
// SELECT DISTINCT cohorts.name as cohort, teachers.name as teacher
// FROM teachers
// JOIN assistance_requests ON teachers.id = assistance_requests.teacher_id
// JOIN students ON assistance_requests.student_id = students.id
// JOIN cohorts ON students.cohort_id = cohorts.id
// WHERE cohorts.name = '${args[2]}';
// `)
// .then(res => {
//   res.rows.forEach(user => {
//     console.log(`${user.cohort}:${user.teacher}`);
//   })
// }).catch(err => console.error('query error', err.stack));
