SELECT AVG(cohort_time.total_duration) as average_total_duration
FROM (
  SELECT cohorts.name as cohort, sum(completed_at - started_at) as total_duration
  FROM assistance_requests
  JOIN students ON students.id = student_id
  JOIN cohorts ON cohort_id = cohorts.id
  GROUP BY cohort 
  ORDER BY total_duration
) as cohort_time