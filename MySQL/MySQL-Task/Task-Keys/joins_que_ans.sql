-- a. find out products,which have been sold to "Ivan bayross"
select  CLIENT_MASTER.NAME,PRODUCT_MASTER.DESCRIPTION,SALES_ORDER.ORDERNO 
from SALES_ORDER_DETAILS 
inner join SALES_ORDER  on SALES_ORDER_DETAILS.ORDERNO = SALES_ORDER.ORDERNO 
inner join CLIENT_MASTER on SALES_ORDER.CLIENTNO =  CLIENT_MASTER.CLIENTNO
inner join PRODUCT_MASTER on SALES_ORDER_DETAILS.PRODUCTNO = PRODUCT_MASTER.PRODUCTNO where CLIENT_MASTER.NAME = "Ivan bayross";

+--------------+--------------+---------+
| NAME         | DESCRIPTION  | ORDERNO |
+--------------+--------------+---------+
| Ivan Bayross | T-Shirts     | O19001  |
| Ivan Bayross | Denim Shirts | O19001  |
| Ivan Bayross | Pull Overs   | O19001  |
| Ivan Bayross | Shirts       | O19003  |
| Ivan Bayross | Cotton Jeans | O19003  |
+--------------+--------------+---------+

-- b. find out the products and their quantites that will have to be deliverd in the current month.
select  SALES_ORDER.DELYDATE,PRODUCT_MASTER.DESCRIPTION,SALES_ORDER_DETAILS.QTYORDERED
from SALES_ORDER_DETAILS
inner join SALES_ORDER  on SALES_ORDER_DETAILS.ORDERNO = SALES_ORDER.ORDERNO
inner join CLIENT_MASTER on SALES_ORDER.CLIENTNO =  CLIENT_MASTER.CLIENTNO
inner join  PRODUCT_MASTER on SALES_ORDER_DETAILS.PRODUCTNO = PRODUCT_MASTER.PRODUCTNO where DELYDATE = "2002-06-27" ;

+------------+-------------+------------+
| DELYDATE   | DESCRIPTION | QTYORDERED |
+------------+-------------+------------+
| 2002-06-27 | T-Shirts    |         10 |
+------------+-------------+------------+
 
--c. list the productno and description of constantly sold (i.e. rapidly moving);
select  distinct PRODUCT_MASTER.PRODUCTNO,DESCRIPTION  
from SALES_ORDER_DETAILS
inner join  PRODUCT_MASTER on SALES_ORDER_DETAILS.PRODUCTNO = PRODUCT_MASTER.PRODUCTNO ;

+-----------+--------------+
| PRODUCTNO | DESCRIPTION  |
+-----------+--------------+
| P00001    | T-Shirts     |
| P0345     | Shirts       |
| P06734    | Cotton Jeans |
| P07868    | Trousers     |
| P07885    | Pull Overs   |
| P07965    | Denim Shirts |
| P07975    | Lycra Tops   |
+-----------+--------------+

--d. find the names of clients who have purchased trousers
select CLIENT_MASTER.NAME, PRODUCT_MASTER.DESCRIPTION 
from SALES_ORDER_DETAILS
inner join SALES_ORDER on SALES_ORDER_DETAILS.ORDERNO = SALES_ORDER.ORDERNO 
inner join CLIENT_MASTER on SALES_ORDER.CLIENTNO =  CLIENT_MASTER.CLIENTNO
inner join  PRODUCT_MASTER on SALES_ORDER_DETAILS.PRODUCTNO = PRODUCT_MASTER.PRODUCTNO where DESCRIPTION = "Trousers";

+---------------+-------------+
| NAME          | DESCRIPTION |
+---------------+-------------+
| Chhaya Bankar | Trousers    |
+---------------+-------------+

-- e. list of the products and orders from customers who have ordered less than 5 units of "pull overs"
select CLIENT_MASTER.NAME , PRODUCT_MASTER.DESCRIPTION , SALES_ORDER_DETAILS.QTYORDERED
from SALES_ORDER_DETAILS 
inner join SALES_ORDER  on SALES_ORDER_DETAILS.ORDERNO = SALES_ORDER.ORDERNO 
inner join CLIENT_MASTER on SALES_ORDER.CLIENTNO =  CLIENT_MASTER.CLIENTNO
inner join  PRODUCT_MASTER on SALES_ORDER_DETAILS.PRODUCTNO = PRODUCT_MASTER.PRODUCTNO where QTYORDERED < 5 and DESCRIPTION = "Pull overs";

+---------------+-------------+------------+
| NAME          | DESCRIPTION | QTYORDERED |
+---------------+-------------+------------+
| Ivan Bayross  | Pull Overs  |          2 | 
| Chhaya Bankar | Pull Overs  |          3 |
+---------------+-------------+------------+

-- f. find the products and their quantities for ther orders placed by "ivan byross" and "mamta muzumdar"
select CLIENT_MASTER.NAME, PRODUCT_MASTER.DESCRIPTION ,SALES_ORDER_DETAILS.QTYORDERED
from SALES_ORDER_DETAILS 
inner join SALES_ORDER on SALES_ORDER_DETAILS.ORDERNO = SALES_ORDER.ORDERNO 
inner join CLIENT_MASTER on SALES_ORDER.CLIENTNO =  CLIENT_MASTER.CLIENTNO
inner join  PRODUCT_MASTER on SALES_ORDER_DETAILS.PRODUCTNO = PRODUCT_MASTER.PRODUCTNO where NAME  in ("Ivan bayross" ,"Mamta muzumdar");

+----------------+--------------+------------+
| NAME           | DESCRIPTION  | QTYORDERED |
+----------------+--------------+------------+
| Ivan Bayross   | T-Shirts     |          4 |
| Ivan Bayross   | Denim Shirts |          2 |
| Ivan Bayross   | Pull Overs   |          2 |
| Ivan Bayross   | Shirts       |          2 |
| Ivan Bayross   | Cotton Jeans |          1 |
| Mamta Muzumdar | T-Shirts     |         10 |
+----------------+--------------+------------+

--  g. find the products and their quantites for the orders placed by clientno "c00001" and "c00002"
select CLIENT_MASTER.CLIENTNO , PRODUCT_MASTER.DESCRIPTION ,SALES_ORDER_DETAILS.QTYORDERED 
from SALES_ORDER_DETAILS 
inner join SALES_ORDER  on SALES_ORDER_DETAILS.ORDERNO = SALES_ORDER.ORDERNO 
inner join client_master on sales_order.CLIENTNO =  CLIENT_MASTER.CLIENTNO
inner join  PRODUCT_MASTER on SALES_ORDER_DETAILS.PRODUCTNO = PRODUCT_MASTER.PRODUCTNO where CLIENT_MASTER.CLIENTNO in ("C00001" ,"C00002");

+----------+--------------+------------+
| CLIENTNO | DESCRIPTION  | QTYORDERED |
+----------+--------------+------------+
| C00001   | T-Shirts     |          4 |
| C00001   | Denim Shirts |          2 |
| C00001   | Pull Overs   |          2 |
| C00001   | Shirts       |          2 |
| C00001   | Cotton Jeans |          1 |
| C00002   | T-Shirts     |         10 |
+----------+--------------+------------+


-- e. list of the products and orders from customers who have ordered less than 5 units of "pull overs"
select PRODUCT_MASTER.DESCRIPTION,     