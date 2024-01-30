-- use Key_6pm;

-- NUMERIC-FUNCTION

1. select ABS(-2.2) from dual;

+-----------+
| ABS(-2.2) |
+-----------+
|       2.2 |
+-----------+

2.  select MOD(15 , 7) from dual;

+-------------+
| MOD(15 , 7) |
+-------------+
|           1 |
+-------------+

3.  select POWER(3 , 3) from dual;

+--------------+
| POWER(3 , 3) |
+--------------+
|           27 |
+--------------+

4. select ROUND(7.6) from dual;

+------------+
| ROUND(7.6) |
+------------+
|          8 |
+------------+

5. select TRUNC(3.5) from dual;

6. select SIN(45) from dual;

+--------------------+
| SIN(45)            |
+--------------------+
| 0.8509035245341184 |
+--------------------+

7. select COS(60) from dual;

+---------------------+
| COS(60)             |
+---------------------+
| -0.9524129804151563 |
+---------------------+

8. select TAN(90) from dual;

+--------------------+
| TAN(90)            |
+--------------------+
| -1.995200412208242 |
+--------------------+

9. select ASIN(1) from dual;

+--------------------+
| ASIN(1)            |
+--------------------+
| 1.5707963267948966 |
+--------------------+

10.  select ACOS(-1) from dual;

+-------------------+
| ACOS(-1)          |
+-------------------+
| 3.141592653589793 |
+-------------------+

11. select ATAN(1) from dual;

+--------------------+
| ATAN(1)            |
+--------------------+
| 0.7853981633974483 |
+--------------------+

12. select SINH(10) from dual;

13. select COSH(10) from dual;

14. select TANH(10) from dual;

15. select SQRT(10) from dual;

+--------------------+
| SQRT(10)           |
+--------------------+
| 3.1622776601683795 |
+--------------------+

16. select EXP(2) from dual;

+------------------+
| EXP(2)           |
+------------------+
| 7.38905609893065 |
+------------------+

17. select LN(10) from dual;

+-------------------+
| LN(10)            |
+-------------------+
| 2.302585092994046 |
+-------------------+

18. select LOG(10,2) from dual;

+---------------------+
| LOG(10,2)           |
+---------------------+
| 0.30102999566398114 |
+---------------------+

19. select CEIL(5.2) from dual;

+-----------+
| CEIL(5.2) |
+-----------+
|         6 |
+-----------+

20. select FLOOR(5.8) from dual;

+------------+
| FLOOR(5.8) |
+------------+
|          5 |
+------------+

21. select SIGN(5) from dual;

+---------+
| SIGN(5) |
+---------+
|       1 |
+---------+

-- STRING-FUNCTION

1. select INITCAP('DARSHAN') from dual;

2. select LOWER('DARSHAN') from dual;

+------------------+
| LOWER('DARSHAN') |
+------------------+
| darshan          |
+------------------+

3. select UPPER('darshan') from dual;

+------------------+
| UPPER('darshan') |
+------------------+
| DARSHAN          |
+------------------+

4. select CONCAT('Darshan','Devani') from dual;

+----------------------------+
| CONCAT('Darshan','Devani') |
+----------------------------+
| DarshanDevani              |
+----------------------------+

-- GROUP-FUNCTION

1. select AVG(SELLPRICE) from PRODUCT_MASTER;

+----------------+
| AVG(SELLPRICE) |
+----------------+
|       538.8889 |
+----------------+

2. select COUNT(SELLPRICE) from PRODUCT_MASTER;

+------------------+
| COUNT(SELLPRICE) |
+------------------+
|                9 |
+------------------+

3. select MAX(SELLPRICE) from PRODUCT_MASTER;

+----------------+
| MAX(SELLPRICE) |
+----------------+
|            850 |
+----------------+

4. select MIN(SELLPRICE) from PRODUCT_MASTER;

+----------------+
| MIN(SELLPRICE) |
+----------------+
|            300 |
+----------------+

5. select SUM(SELLPRICE) from PRODUCT_MASTER;

+----------------+
| SUM(SELLPRICE) |
+----------------+
|           4850 |
+----------------+

6. select CORR(SELLPRICE,COSTPRICE) from PRODUCT_MASTER;

7. select MEDIAN(SELLPRICE) from PRODUCT_MASTER;

8. select STDDEV(SELLPRICE) from PRODUCT_MASTER;

+-------------------+
| STDDEV(SELLPRICE) |
+-------------------+
| 185.2592444503674 |
+-------------------+

9. select VARIANCE(SELLPRICE) from PRODUCT_MASTER;

+---------------------+
| VARIANCE(SELLPRICE) |
+---------------------+
|   34320.98765432098 |
+---------------------+

-- DATE AND TIME FUNCTION

1. select ADD_MONTHS(2023-12-10,3) from dual;

2. select LAST_DAY(2023-12-10) from dual;

+----------------------+
| LAST_DAY(2023-12-10) |
+----------------------+
| NULL                 |
+----------------------+

3.  select MONTHS_BETWEEN(12,10) from dual;

4.  select NEW_TIME(2023-12-10,'mumbai','surat') from dual;

5. select NEXt_DAY(2022-12,07) from SALES_MASETR;

6. select SYSDATE() from dual;

+---------------------+
| SYSDATE()           |
+---------------------+
| 2024-01-09 16:12:11 |
+---------------------+

7. select GREATEST(10,02,05) from dual;

+--------------------+
| GREATEST(10,02,05) |
+--------------------+
|                 10 |
+--------------------+

8. select LEAST(12,02,05) from dual;

+-----------------+
| LEAST(12,02,05) |
+-----------------+
|               2 |
+-----------------+

-- DATE CONVERSION FUNCTION

1. select TO_CHAR(2022-12-01,'monday') from dual;

2. select TO_DATE('monday',2022-12-01) from dual;

3. select ROUND(2022-12-01) from dual;

+-------------------+
| ROUND(2022-12-01) |
+-------------------+
|              2009 |
+-------------------+

4. select TRUNC(2022-12-01) from dual;

-- DATE FORMATS

1.  select DD(12) from dual;

2.  select Dy(12) from dual;

