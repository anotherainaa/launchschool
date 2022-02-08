/*

Input: API - ajax from API? 
Output: 
- Alert as "key:value" pairs
- staff id as key, and the count of schedules as value
- format 'staff {id}' and {scheduleCount}

Rules
- if there are more than one schedule
  - tally the count of schedule for each staff
  - alert the user
- if there are no schedules
  - alert the user there are currently no schedules available for booking

Edge cases
- The server will slow down when there are more than 7 schedules
- Note that it DOESN'T ALWAYS HAPPEN
How to handle it? 
  - if more than 5 seconds passed (5000ms), cancel the retrieval(avo) and inform the user to try again.

*/
