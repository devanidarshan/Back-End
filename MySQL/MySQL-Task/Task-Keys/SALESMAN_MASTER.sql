-- \sql

-- \connect root@localhost:3306

-- show databases;

-- create database Key_6PM;

-- show databases;

-- use Key_6PM;

-- show tables;

create table SALESMAN_MASTER(
    SALESMANNO Varchar(6) primary key,
    SALESMANNAME Varchar(20) not null,
    ADDRESS1 Varchar(30) not null,
    ADDRESS2 Varchar(30),
    CITY Varchar(20),
    PINCODE Int(8),
    STATE Varchar(20),
    SALAMT Int(8) not null,
    TGTTOGET Int(6) not null,
    YTDSALES Int(6) not null,
    REMARKS Varchar(60)
);

-- describe SALESMAN_MASTER;

+--------------+-------------+------+-----+---------+-------+
| Field        | Type        | Null | Key | Default | Extra |
+--------------+-------------+------+-----+---------+-------+
| SALESMANNO   | varchar(6)  | NO   | PRI | NULL    |       |
| SALESMANNAME | varchar(20) | NO   |     | NULL    |       |
| ADDRESS1     | varchar(30) | NO   |     | NULL    |       |
| ADDRESS2     | varchar(30) | YES  |     | NULL    |       |
| CITY         | varchar(20) | YES  |     | NULL    |       |
| PINCODE      | int         | YES  |     | NULL    |       |
| STATE        | varchar(20) | YES  |     | NULL    |       |
| SALAMT       | int         | NO   |     | NULL    |       |
| TGTTOGET     | int         | NO   |     | NULL    |       |
| YTDSALES     | int         | NO   |     | NULL    |       |
| REMARKS      | varchar(60) | YES  |     | NULL    |       |
+--------------+-------------+------+-----+---------+-------+

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
