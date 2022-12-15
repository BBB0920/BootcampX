-- Busy days when total number of assignments are greater or equal to 10
SELECT day, count(chapter) as total_assignments
FROM assignments 
GROUP BY day
HAVING count(chapter) >= 10
ORDER BY day;