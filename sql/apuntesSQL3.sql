/* 
Crear una base DB llamada tienda_abarrotes
productos 
clientes 
provedores 

c/ tablas columnas 
*/
create database tienda_abarrotes;
use tienda_abarrotes;
create table productos(
id int not null auto_increment, primary key(id), 
nombre varchar(255) not null,
sku int not null,
cantidad int not null,
precio int not null
);

create table clientes(
id int not null auto_increment, primary key(id),
nombre varchar(255) not null,
apellido varchar(255) not null,
direccion_cliente varchar(255) not null,
telefono bigint not null
);

create table provedores(
id int not null auto_increment, primary key(id),
razon_social varchar(255) not null,
direccion_provedor varchar(255) not null,
fax bigint not null,
telefono bigint not null
);

-- drop database tienda_abarrotes;

select * from provedores;
select * from clientes;
select * from productos;