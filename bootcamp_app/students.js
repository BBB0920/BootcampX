const { Pool } = require('pg');
const args = process.argv;

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'bootcampx'
});

//Query Parameters

const cohortName = process.argv[2];
const limit = process.argv[3] || 5;

const values = [`%${cohortName}%`, limit];

pool.query(`
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE $1
LIMIT $2;
`, values)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
  })
}).catch(err => console.error('query error', err.stack));

// Querying the database

// pool.query(`
// SELECT students.id as student_id, students.name as name, cohorts.name as cohort
// FROM students
// JOIN cohorts ON cohorts.id = cohort_id
// WHERE cohorts.name LIKE '%${args[2]}%'
// LIMIT ${args[3]};
// `)
// .then(res => {
//   res.rows.forEach(user => {
//     console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
//   })
// });

// -------------------------------------------------------------
// Displays rows containing the table

// pool.query(`
// SELECT id, name, cohort_id
// FROM students
// LIMIT 5;
// `)
// .then(res => {
//   console.log(res.rows); //res is everything, res.rows just shows the table
// })
// .catch(err => console.error('query error', err.stack));

// My attempt at Querying the Database

// pool.query(`
// SELECT students.id as student_id, students.name as student_name, cohorts.name as cohorts_name
// FROM students
// JOIN cohorts ON students.cohort_id = cohorts.id
// LIMIT 5;
// `)
// .then(res => {
//   res.rows.forEach(user => {
//     console.log(`${user.student_name} has an id of ${user.student_id} and was in the ${user.cohorts_name} cohort`);
//   })
// });
