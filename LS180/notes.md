# LS 180 Notes

## SQL Sublanguages

Data Definition Language
- `CREATE` `ALTER` `DROP`
- used to define and modify the structure (tables and columns) in a database.

Data Manipulation Language
- `SELECT` `INSERT` `UPDATE` `DELETE`
- used to retrieve and mofidy data in a database.

Data Control Language
- `GRANT` `REVOKE`
- used to control what various users can do when interacting with a database.

## JOINs

**INNER JOINS** - returns a result set of common elements between two tables

**LEFT OUTER JOIN** - returns all the rows from the first table (also known as the left table) along with the
common elements from the second table.

**RIGHT OUTER JOIN** - returns all the rows from the second table (also known as the right table) along with the common elements from the first table.

**FULL OUTER JOIN** - a combination of left outer join and right outer join where all the rows from the first and second table are returned.

**CROSS JOIN** - also known as a cartesian join. Crosses all the rows from the first table with all the rows from the second table to create all the possible combinations between the rows of both tables.

## Subqueries

What are subqueries?  - Basically, a SQL query within another query.

**IN / NOT IN**
```sql
SELECT column_name FROM table_name
WHERE id IN (SELECT column_name FROM table_name)
```

**EXISTS**
```sql
SELECT column_name FROM table_name WHERE EXISTS
  (SELECT column_name FROM table_name WHERE condition)
```

**Scalar subqueries**
```sql
SELECT column_name, (SELECT COUNT(column_name) FORM table_name) FROM table_name
```

## Keys

Natural Keys - an exisiting key that can be used to uniquely identify rows in a dataset such as phone number

Surrogate Keys - a key that is specifically created for the sole purpose to identify rows in a database.

Primary Keys - a key that is used to uniquely identify rows in a database.

Foreign Keys - a key that is used to identify the relationship between a row in a table with another row in another table.

## Cardinality and Modality

Cardinality is about the number of objects on each side of the relationship
Modality is about whether a relationship is required or not.
