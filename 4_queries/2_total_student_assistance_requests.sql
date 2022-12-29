-- Total number of assistances requested by students

-- SELECT count(assistance_requests.*) as total_assistances, students.name as name
-- FROM assistance_requests
-- JOIN students ON assistance_requests.student_id = students.id
-- WHERE students.name = 'Elliot Dickinson'
-- GROUP BY students.name

SELECT count(assistance_requests.*) as total_assistances, students.name
FROM assistance_requests
JOIN students ON students.id = student_id
WHERE name = 'Elliot Dickinson'
GROUP BY students.name;