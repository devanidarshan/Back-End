-- \sql

-- \connect root@localhost:3306

-- show databases;

-- create database Key_6PM;

-- show databases;

-- use key_6PM;

-- show tables;

create table SALES_ORDER_DETAILS(
    ORDERNO Varchar(6),
    PRODUCTNO Varchar(6),
    QTYORDERED Int(8),
    QTYDISP Int(8),
    PRODUCTRATE Int(10),

    foreign key (ORDERNO) references SALES_ORDER(ORDERNO),
    foreign key (PRODUCTNO) references PRODUCT_MASTER(PRODUCTNO)
);

-- describe SALES_ORDER_DETAILS;

+-------------+------------+------+-----+---------+-------+
| Field       | Type       | Null | Key | Default | Extra |
+-------------+------------+------+-----+---------+-------+
| ORDERNO     | varchar(6) | YES  | MUL | NULL    |       |
| PRODUCTNO   | varchar(6) | YES  | MUL | NULL    |       |
| QTYORDERED  | int        | YES  |     | NULL    |       |
| QTYDISP     | int        | YES  |     | NULL    |       |
| PRODUCTRATE | int        | YES  |     | NULL    |       |
+-------------+------------+------+-----+---------+-------+

insert into SALES_ORDER_DETAILS(ORDERNO,PRODUCTNO,QTYORDERED,QTYDISP,PRODUCTRATE) values
   ('O19001','P00001',4,4,525),
   ('O19001','P07965',2,1,8400),
   ('O19001','P07885',2,1,5250),
   ('O19002','P00001',10,0,525),   
   ('O46865','P07868',3,3,3150),
   ('O46865','P07885',3,1,5250),
   ('O46865','P00001',10,10,525),
   ('O46865','P0345' ,4,4,1025),
   ('O19003','P0345',2,2,1025),
   ('O19003','P06734',1,1,12000),
   ('O46866','P07965',1,0,8400),
   ('O46866','P07975',1,0,1050),
   ('O19008','P00001',10,5,525),
   ('O19008','P07975',5,3,1050);

 -- select * from SALES_ORDER_DETAILS;

+---------+-----------+------------+---------+-------------+
| ORDERNO | PRODUCTNO | QTYORDERED | QTYDISP | PRODUCTRATE |
+---------+-----------+------------+---------+-------------+
| O19001  | P00001    |          4 |       4 |         525 |
| O19001  | P07965    |          2 |       1 |        8400 |
| O19001  | P07885    |          2 |       1 |        5250 |
| O19002  | P00001    |         10 |       0 |         525 |
| O46865  | P07868    |          3 |       3 |        3150 |
| O46865  | P07885    |          3 |       1 |        5250 |
| O46865  | P00001    |         10 |      10 |         525 |
| O46865  | P0345     |          4 |       4 |        1025 |
| O19003  | P0345     |          2 |       2 |        1025 |
| O19003  | P06734    |          1 |       1 |       12000 |
| O46866  | P07965    |          1 |       0 |        8400 |
| O46866  | P07975    |          1 |       0 |        1050 |
| O19008  | P00001    |         10 |       5 |         525 |
| O19008  | P07975    |          5 |       3 |        1050 |
| O19001  | P00001    |          4 |       4 |         525 |
| O19001  | P07965    |          2 |       1 |        8400 |
| O19001  | P07885    |          2 |       1 |        5250 |
| O19002  | P00001    |         10 |       0 |         525 |
| O46865  | P07868    |          3 |       3 |        3150 |
| O46865  | P07885    |          3 |       1 |        5250 |
| O46865  | P00001    |         10 |      10 |         525 |
| O46865  | P0345     |          4 |       4 |        1025 |
| O19003  | P0345     |          2 |       2 |        1025 |
| O19003  | P06734    |          1 |       1 |       12000 |
| O46866  | P07965    |          1 |       0 |        8400 |
| O46866  | P07975    |          1 |       0 |        1050 |
| O19008  | P00001    |         10 |       5 |         525 |
| O19008  | P07975    |          5 |       3 |        1050 |
+---------+-----------+------------+---------+-------------+