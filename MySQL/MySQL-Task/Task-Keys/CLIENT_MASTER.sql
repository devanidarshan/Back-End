-- \sql

-- \connect root@localhost:3306

-- show databases;

-- create database Key_6PM;

-- show databases;

-- use key_6PM;

-- show tables;

create table CLIENT_MASTER(
    CLIENTNO Varchar(6) Primary key,
    NAME Varchar(20) not null,
    ADDRESS1 Varchar(30),
    ADDRESS2 Varchar(30),
    CITY Varchar(15),
    PINCODE Int(8),
    STATE Varchar(15),
    BALDUE Int(10)
);

-- describe CLIENT_MASTER;

+----------+-------------+------+-----+---------+-------+
| Field    | Type        | Null | Key | Default | Extra |
+----------+-------------+------+-----+---------+-------+
| CLIENTNO | varchar(6)  | NO   | PRI | NULL    |       |
| NAME     | varchar(20) | NO   |     | NULL    |       |
| ADDRESS1 | varchar(30) | YES  |     | NULL    |       |
| ADDRESS2 | varchar(30) | YES  |     | NULL    |       |
| CITY     | varchar(15) | YES  |     | NULL    |       |
| PINCODE  | int         | YES  |     | NULL    |       |
| STATE    | varchar(15) | YES  |     | NULL    |       |
| BALDUE   | int         | YES  |     | NULL    |       |
+----------+-------------+------+-----+---------+-------+

insert into CLIENT_MASTER (CLIENTNO,NAME,ADDRESS1,ADDRESS2,CITY,PINCODE,STATE,BALDUE) values
   ('C00001','Ivan Bayross','A/14','Worli','Mumbai',400054,'Maharastra',15000),
   ('C00002','Mamta Muzumdar','65','Nariman','Madras',780001,'Tamil Nadu',0),
   ('C00003','Chhaya Bankar','P-7','Bandra','Mumbai',400057,'Maharastra',5000),
   ('C00004','Ashwini Joshi','A/5','Juhu','Bangalore',560001,'Karnataka',0),   
   ('C00005','Hansel Colaco','A/15','Worli','Mumbai',400060,'Maharastra',2000),
   ('C00006','Deepak Sharma','66','Nariman','Mangalore',560050,'Karnataka',0);

   -- select * from CLIENT_MASTER;

+----------+----------------+----------+----------+-----------+---------+------------+--------+
| CLIENTNO | NAME           | ADDRESS1 | ADDRESS2 | CITY      | PINCODE | STATE      | BALDUE |
+----------+----------------+----------+----------+-----------+---------+------------+--------+
| C00001   | Ivan Bayross   | A/14     | Worli    | Mumbai    |  400054 | Maharastra |  15000 |
| C00002   | Mamta Muzumdar | 65       | Nariman  | Madras    |  780001 | Tamil Nadu |      0 |
| C00003   | Chhaya Bankar  | P-7      | Bandra   | Mumbai    |  400057 | Maharastra |   5000 |
| C00004   | Ashwini Joshi  | A/5      | Juhu     | Bangalore |  560001 | Karnataka  |      0 |
| C00005   | Hansel Colaco  | A/15     | Worli    | Mumbai    |  400060 | Maharastra |   2000 |
| C00006   | Deepak Sharma  | 66       | Nariman  | Mangalore |  560050 | Karnataka  |      0 |
+----------+----------------+----------+----------+-----------+---------+------------+--------+

