-- \sql

-- \connect root@localhost:3306

-- show databases;

-- create database node_6PM;

-- show databases;

-- use node_6PM;

-- show tables;

create table PRODUCT_MASTER(
    PRODUCTNO Varchar(6),
    DESCRIPTION Varchar(15),
    PROFITPERCENT Int(4),
    UNITMEASURE Varchar(10),
    QTYONHAND Int(8),
    REORDERLVL Int(8),
    SELLPRICE Int(8),
    COSTPRICE Int(8)
);

-- describe PRODUCT_MASTER;

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

-- A. List the various products available from the Product_master table.
   select * from PRODUCT_MASTER;

-- B. Change the cost price of 'Trousers' to Rs.950.00.
   update PRODUCT_MASTER set COSTPRICE = 950.00 where PRODUCTNO = 'P07868';

