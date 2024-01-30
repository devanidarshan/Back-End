-- OPERATOR :-
select * from customers;
select * from customers where country <> 'germany';
select * from customers where customerNumber != 103;
select * from customers where country  = 'germany' or customerNumber > 400;

-- BETWEEN :-
select * from customers where customerNumber > 200 and customerNumber < 300;
select * from customers where CustomerNumber not between 200 and 350;

-- IN AND NOT IN :-
select * from customers where country = 'germany' or country = 'usa' or country = 'france';
select * from customers where country not in ('germany' , 'usa' , 'france') order by country desc, city asc;

-- ORDER BY :- 
select * from customers order by country desc , city asc;

-- LIMIT :-
select * from customers limit 10;

-- DISTINCT :-
select distinct country from customers;

-- LIKE OPERATOR :-
select * from customers where customerName like 'co%';
select * from customers where customerName like '%co';
select * from customers where customerName like '__e%';
select * from customers where customerName like '%c__';
select * from customers where customerName like '%d%';
select * from customers where customerName like 'a%co.';

-- GROUP BY :-
select country, count(customerNumber) from customers group by country;
select count(creditLimit) as "Total Sum" from customers;

-- JOIN :-
select SALES_ORDER. *, CLIENT_MASTER.NAME,CLIENT_MASTER.CITY from SALES_ORDER,CLIENT_MASTER Where CLIENT_MASTER.CLIENTNO = SALES_ORDER.CLIENTNO;

-- TYPES:-
-- INNER-JOIN:-
-- LEFT-JOIN:-
-- RIGHT-JOIN:-
-- CROSS-JOIN:-

-- INNER-JOIN:-
SELECT column_name(s)
FROM table1
INNER JOIN table2
ON table1.column_name = table2.column_name;

select so.* , cm.NAME from SALES_ORDER so 
inner join CLIENT_MASTER cm on cm.CLIENTNO = so.CLIENTNO;

-- LEFT-JOIN:-
SELECT column_name(s)
FROM table1
LEFT JOIN table2
ON table1.column_name = table2.column_name;

select so.* , cm.NAME from SALES_ORDER so 
left join CLIENT_MASTER cm on cm.CLIENTNO = so.CLIENTNO;

-- RIGHT-JOIN:-
SELECT column_name(s)
FROM table1
RIGHT JOIN table2
ON table1.column_name = table2.column_name;

select so.* , cm.NAME from SALES_ORDER so
right join CLIENT_MASTER cm on cm.CLIENTNO = so.CLIENTNO;

-- CROSS-JOIN:-
SELECT column_name(s)
FROM table1
CROSS JOIN table2;

-- MULTIPLE-TABLE
select so.ORDERNO , cm.NAME, sm.SALESMANNAME from SALES_ORDER so 
inner join CLIENT_MASTER cm on cm.CLIENTNO = so.CLIENTNO
inner join SALESMAN_MASTER sm on sm. SALESMANNO = so.SALESMANNO order by cm.NAME asc;




