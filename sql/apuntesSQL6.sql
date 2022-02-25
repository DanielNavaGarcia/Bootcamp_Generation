drop database Empresa;
create schema Empresa;
use Empresa;



create table Worker (EMPLOYEE_ID int not null auto_increment, primary key(EMPLOYEE_ID),
FIRST_NAME varchar(255) not null,
LAST_NAME  varchar(255) not null,
SALARY  int not null,
START_DATE date not null,
DEPARTMENT varchar(255) not null
);

create table Title (EMPLOYEE_REF_ID int not null auto_increment, primary key(EMPLOYEE_REF_ID),
JOB_TITLE varchar(255) not null,
AFFECTED_FROM varchar(255) not null
);

create table Bonus (EMPLOYEE_REF_ID int not null auto_increment, primary key(EMPLOYEE_REF_ID),
BONUS_DATE date not null,
BONUS_AMOUNT int not null
);

insert into Worker (FIRST_NAME, LAST_NAME, SALARY, START_DATE, DEPARTMENT) values
('Monika','Arora',100000,'2014-02-20','HR'),
('Santiago','Carrillo',80000,'2014-06-11','Admin'),
('Ian','Smith',300000,'2014-02-20','HR'),
('Boyd','Ndonga',500000,'2014-02-20','Admin'),
('vivek','Bhati',500000,'2014-06-11','Admin'),
('Elise','Guimares',200000,'2014-06-11','Account'),
('Barrack','Obama',75000,'2014-01-20','Account'),
('Vivan','Muyu',90000,'2014-04-11','Admin');

select * from Worker;

insert into Title (JOB_TITLE, AFFECTED_FROM) values
('Manager',5000),
('Executive',3000),
('Lead',3500),
('Asst. Manager',3500),
('Manager',4500),
('Lead',4500),
('Executive',4000),
('Executive',4000);

select * from Title;

insert into Bonus (BONUS_DATE, BONUS_AMOUNT) values
('2016-02-20',5000),
('2016-06-11',3000),
('2016-02-20',4000),
('2016-02-20',4500),
('2016-06-11',3500);

select * from Bonus;
