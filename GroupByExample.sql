-- Total assignment submissions for each students who are currently enrolled

SELECT students.name as student, count(assignment_submissions.*) as total_submissions
FROM assignment_submissions
JOIN students ON students.id = student_id
WHERE students.end_date IS NULL
GROUP BY students.name

-- With total submissions less than 100
HAVING count(assignment_submissions.*) < 100;


