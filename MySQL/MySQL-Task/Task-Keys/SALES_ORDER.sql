-- \sql

-- \connect root@localhost:3306

-- show databases;

-- create database Key_6PM;

-- show databases;

-- use Key_6PM;

-- show tables;

create table SALES_ORDER(
    ORDERNO Varchar(6) primary key,
    CLIENTNO Varchar(6),
    ORDERDATE Date not null,
    SALESMANNO Varchar(6),
    DELYTYPE Char(1),
    BILLYN Char(1),
    DELYDATE Date,
    ORDERSTATUS Varchar(10),

    foreign key (CLIENTNO) references CLIENT_MASTER(CLIENTNO),
    foreign key (SALESMANNO) references SALESMAN_MASTER(SALESMANNO)

);

-- describe SALES_ORDER;

+-------------+-------------+------+-----+---------+-------+
| Field       | Type        | Null | Key | Default | Extra |
+-------------+-------------+------+-----+---------+-------+
| ORDERNO     | varchar(6)  | NO   | PRI | NULL    |       |
| CLIENTNO    | varchar(6)  | YES  | MUL | NULL    |       |
| ORDERDATE   | date        | NO   |     | NULL    |       |
| SALESMANNO  | varchar(6)  | YES  | MUL | NULL    |       |
| DELYTYPE    | char(1)     | YES  |     | NULL    |       |
| BILLYN      | char(1)     | YES  |     | NULL    |       |
| DELYDATE    | date        | YES  |     | NULL    |       |
| ORDERSTATUS | varchar(10) | YES  |     | NULL    |       |
+-------------+-------------+------+-----+---------+-------+

insert into SALES_ORDER (ORDERNO,CLIENTNO,ORDERDATE,SALESMANNO,DELYTYPE,BILLYN,DELYDATE,ORDERSTATUS) values
   ('O19001','C00001','2004-06-12','S00001','F','N','2002-07-20','In Process'),
   ('O19002','C00002','2004-06-25','S00002','P','N','2002-06-27','Cancelled'),
   ('O46865','C00003','2004-02-18','S00003','F','Y','2002-02-20','Fulfilled'),
   ('O19003','C00001','2004-04-03','S00001','F','Y','2002-04-07','Fulfilled'),   
   ('O46866','C00004','2004-05-20','S00002','P','N','2002-05-22','Cancelled'),
   ('O19008','C00005','2004-05-24','S00004','F','N','2002-07-26','In Process');

-- select * from SALES_ORDER;

+---------+----------+------------+------------+----------+--------+------------+-------------+
| ORDERNO | CLIENTNO | ORDERDATE  | SALESMANNO | DELYTYPE | BILLYN | DELYDATE   | ORDERSTATUS |
+---------+----------+------------+------------+----------+--------+------------+-------------+
| O19001  | C00001   | 2004-06-12 | S00001     | F        | N      | 2002-07-20 | In Process  |
| O19002  | C00002   | 2004-06-25 | S00002     | P        | N      | 2002-06-27 | Cancelled   |
| O19003  | C00001   | 2004-04-03 | S00001     | F        | Y      | 2002-04-07 | Fulfilled   |
| O19008  | C00005   | 2004-05-24 | S00004     | F        | N      | 2002-07-26 | In Process  |
| O46865  | C00003   | 2004-02-18 | S00003     | F        | Y      | 2002-02-20 | Fulfilled   |
| O46866  | C00004   | 2004-05-20 | S00002     | P        | N      | 2002-05-22 | Cancelled   |
+---------+----------+------------+------------+----------+--------+------------+-------------+