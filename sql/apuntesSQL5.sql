create schema Generation;
use Generation;

-- crear tabla
create table cohorte (id int not null auto_increment, primary key(id));
alter table cohorte add column nombre varchar(255) not null;
alter table cohorte add column edad int not null;

-- agregar datos
insert into cohorte (nombre, edad) values
('Pedro',15),
('Maria',35),
('Juan',12);

-- mostrar los datos de una tabla
select * from cohorte; -- tabla seleccionada por defecto
select * from world.city; -- para mostrar una tabla que no esta seleccionada

select nombre from cohorte;

select countryCode, Population from world.city;

select name as 'Nombre de los paises' from world.country; -- agregar un alias a la columna

-- update actualizar valores
-- update cohorte set nombre = 'juan' where; -- si no usamos el where se corre el riesgo de modificartodos los valores de la tabla

update cohorte set
nombre = 'juan',
edad = 30 
where id = 4;

-- DELETE borrar un reguistro o toda la columna
-- delete from cohorte; 
-- nunca usen delete sin el where