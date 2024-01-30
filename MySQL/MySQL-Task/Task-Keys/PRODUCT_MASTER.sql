-- \sql

-- \connect root@localhost:3306

-- show databases;

-- create database Key_6PM;

-- show databases;

-- use Key_6PM;

-- show tables;

create table PRODUCT_MASTER(
    PRODUCTNO Varchar(6) primary key,
    DESCRIPTION Varchar(15) not null,
    PROFITPERCENT Int(4) not null,
    UNITMEASURE Varchar(10) not null,
    QTYONHAND Int(8) not null,
    REORDERLVL Int(8) not null,
    SELLPRICE Int(8) not null,
    COSTPRICE Int(8) not null
);

-- describe PRODUCT_MASTER;

+---------------+-------------+------+-----+---------+-------+
| Field         | Type        | Null | Key | Default | Extra |
+---------------+-------------+------+-----+---------+-------+
| PRODUCTNO     | varchar(6)  | NO   | PRI | NULL    |       |
| DESCRIPTION   | varchar(15) | NO   |     | NULL    |       |
| PROFITPERCENT | int         | NO   |     | NULL    |       |
| UNITMEASURE   | varchar(10) | NO   |     | NULL    |       |
| QTYONHAND     | int         | NO   |     | NULL    |       |
| REORDERLVL    | int         | NO   |     | NULL    |       |
| SELLPRICE     | int         | NO   |     | NULL    |       |
| COSTPRICE     | int         | NO   |     | NULL    |       |
+---------------+-------------+------+-----+---------+-------+

insert into PRODUCT_MASTER (PRODUCTNO,DESCRIPTION,PROFITPERCENT,UNITMEASURE,QTYONHAND,REORDERLVL,SELLPRICE,COSTPRICE) values
   ('P00001','T-Shirts',5,'Piece',200,50,350,250),
   ('P0345','Shirts',6,'Piece',150,50,500,350),
   ('P06734','Cotton Jeans',5,'Piece',100,20,600,450),
   ('P07865','Jeans',5,'Piece',100,20,750,500),
   ('P07868','Trousers',2,'Piece',150,50,850,550),
   ('P07885','Pull Overs',2,'Piece',80,30,700,450),
   ('P07965','Denim Shirts',4,'Piece',100,40,350,250),
   ('P07975','Lycra Tops',5,'Piece',70,30,300,175),
   ('P08865','Skirts',5,'Piece',75,30,450,300);

   -- select * from PRODUCT_MASTER;

+-----------+--------------+---------------+-------------+-----------+------------+-----------+-----------+
| PRODUCTNO | DESCRIPTION  | PROFITPERCENT | UNITMEASURE | QTYONHAND | REORDERLVL | SELLPRICE | COSTPRICE |
+-----------+--------------+---------------+-------------+-----------+------------+-----------+-----------+
| P00001    | T-Shirts     |             5 | Piece       |       200 |         50 |       350 |       250 |
| P0345     | Shirts       |             6 | Piece       |       150 |         50 |       500 |       350 |
| P06734    | Cotton Jeans |             5 | Piece       |       100 |         20 |       600 |       450 |
| P07865    | Jeans        |             5 | Piece       |       100 |         20 |       750 |       500 |
| P07868    | Trousers     |             2 | Piece       |       150 |         50 |       850 |       550 |
| P07885    | Pull Overs   |             2 | Piece       |        80 |         30 |       700 |       450 |
| P07965    | Denim Shirts |             4 | Piece       |       100 |         40 |       350 |       250 |
| P07975    | Lycra Tops   |             5 | Piece       |        70 |         30 |       300 |       175 |
| P08865    | Skirts       |             5 | Piece       |        75 |         30 |       450 |       300 |
+-----------+--------------+---------------+-------------+-----------+------------+-----------+-----------+



