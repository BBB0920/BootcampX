-- Return cohort with the longest assitance time

-- SELECT name, MAX(timetable.average_assistance_time) as maxim
-- FROM (
--   SELECT cohorts.name, AVG(completed_at-started_at) as average_assistance_time
--   FROM students 
--   JOIN assistance_requests ON students.id = student_id
--   JOIN cohorts ON cohort_id = cohorts.id
--   GROUP BY cohorts.name
-- ) as timetable
-- ;

SELECT cohorts.name, AVG(completed_at-started_at) as average_assistance_time
FROM students 
JOIN assistance_requests ON students.id = student_id
JOIN cohorts ON cohort_id = cohorts.id
GROUP BY cohorts.name
ORDER BY average_assistance_time DESC
LIMIT 1;
