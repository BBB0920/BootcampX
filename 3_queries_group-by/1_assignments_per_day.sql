-- Total number of assignments for each day of bootcamp
SELECT day, count(chapter) as total_assignments
FROM assignments 
GROUP BY day
ORDER BY day;
