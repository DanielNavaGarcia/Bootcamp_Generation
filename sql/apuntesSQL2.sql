-- crear base de datos 
create schema tienda;
-- usar aquella base de datos
use tienda;
-- borrar esa base de datos 
drop schema nombre;
-- crear tabla en esa base de datos 
create table productos(id int not null auto_increment, primary key(id));
-- añadir columna en esa  
alter table productos add column nombre varchar(255) not null;
alter table productos add column precio int not null after id;

-- renombrar tabla
alter table productos rename inventario;
alter table inventario rename productos;

-- mostrar las tablas de una base de datos
use tienda; -- seleccionar primero la base de datos a manipular

-- eliminar table
alter table productos add column precio varchar(255) not null;

-- eliminar table
drop table productos;

-- cambiar nombre y el tipo de valor de columna
alter table productos change column nombre precio int not null;