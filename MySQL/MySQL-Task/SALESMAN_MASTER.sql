-- \sql

-- \connect root@localhost:3306

-- show databases;

-- create database node_6PM;

-- show databases;

-- use node_6PM;

-- show tables;

create table SALESMAN_MASTER(
    SALESMANNO Varchar(6),
    SALESMANNAME Varchar(20),
    ADDRESS1 Varchar(30),
    ADDRESS2 Varchar(30),
    CITY Varchar(20),
    PINCODE Int(8),
    STATE Varchar(20),
    SALAMT Int(8),
    TGTTOGET Int(6),
    YTDSALES Int(6),
    REMARKS Varchar(60)
);

-- describe SALESMAN_MASTER;


insert into SALESMAN_MASTER (SALESMANNO,SALESMANNAME,ADDRESS1,ADDRESS2,CITY,PINCODE,STATE,SALAMT,TGTTOGET,YTDSALES,REMARKS) values
   ('S00001','Aman','A/14','Worli','Mumbai',400002,'Maharastra',3000,100,50,'Good'),
   ('S00002','Omkar','65','Nariman','Mumbai',400001,'Maharastra',3000,200,100,'Good'),
   ('S00003','Raj','P-7','Bandra','Mumbai',400032,'Maharastra',3000,200,100,'Good'),
   ('S00004','Ashish','A/5','Juhu','Mumbai',400044,'Maharastra',3500,200,150,'Good');

    -- select * from SALESMAN_MASTER;

+------------+--------------+----------+----------+--------+---------+------------+--------+----------+----------+---------+
| SALESMANNO | SALESMANNAME | ADDRESS1 | ADDRESS2 | CITY   | PINCODE | STATE      | SALAMT | TGTTOGET | YTDSALES | REMARKS |
+------------+--------------+----------+----------+--------+---------+------------+--------+----------+----------+---------+
| S00001     | Aman         | A/14     | Worli    | Mumbai |  400002 | Maharastra |   3000 |      100 |       50 | Good    |
| S00002     | Omkar        | 65       | Nariman  | Mumbai |  400001 | Maharastra |   3000 |      200 |      100 | Good    |
| S00003     | Raj          | P-7      | Bandra   | Mumbai |  400032 | Maharastra |   3000 |      200 |      100 | Good    |
| S00004     | Ashish       | A/5      | Juhu     | Mumbai |  400044 | Maharastra |   3500 |      200 |      150 | Good    |
+------------+--------------+----------+----------+--------+---------+------------+--------+----------+----------+---------+

-- A. Find the names of salesman who have  a salary equal to Rs.3000.
   select * from SALESMAN_MASTER where SALAMT = 3000;

-- B. Change the city of the salesman to Pune.
   update SALESMAN_MASTER set CITY = 'Pune';