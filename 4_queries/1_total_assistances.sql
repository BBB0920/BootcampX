-- Total number of assistances by Teacher based on their name

-- SELECT count(assistance_requests.id) as total_assistances, teachers.name as name
-- FROM assistance_requests
-- JOIN teachers on assistance_requests.teacher_id = teachers.id
-- WHERE name = 'Waylon Boehm'
-- GROUP BY teachers.name

SELECT count(assistance_requests.*) as total_assistances, teachers.name
FROM assistance_requests
JOIN teachers ON teachers.id = teacher_id
WHERE name = 'Waylon Boehm'
GROUP BY teachers.name;