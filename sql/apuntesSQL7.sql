use sakila;
-- obtiene toda la informacion

/*
Operadores de comparación
OPERADORES DE COMPARACION:
Igual           =
Distinto        !=
Menor           <
Mayor           >
Menor o igual   <=
Mayor o igual   >=
Entre           between A and B
En              in
Es nulo         is null
No nulo         is not null
Como            like
No es como      not like
*/

-- Selecciona de la tabla actor todas las personas que se llamen Penelope
select * from actor where first_name = 'Penelope';

-- Selecciona de la tabla actor todas las personas que NO se llamen Penelope
select * from actor where first_name != 'Penelope';

-- Selecciona de la tabla film todos los film cuyo fild_id sea mayor a 50
select * from film where film_id > 50;

-- Selecciona de la tabla film todos los film cuyo fild_id sea menor a 50
select * from film where film_id < 50;

-- selecciona de la tabla film las peliculas cuyo rental rate
select * from film where rental_rate = 2.99 and rating = 'PG-13';

-- Nos permite usar comodines a diferencia de =
select * from actor where first_name like 'tom';

-- Comodines con like - inicio
select * from actor where first_name like '%ie';

-- Comodines con like - final
select * from actor where first_name like 'an%';

-- Comodines con like - contenga un
select * from actor where first_name like '%ne%';

-- consultas de agrupamiento
-- Las ultilizamos para agrupar resultados que tengan el mismo valor
select * from inventory group by store_id;
select * from rental group by customer_id;

select country_id, count(city_id)
as 'total_de_ciudades'
from city
group by country_id;

select country_id, count(city_id)
as 'total_de_ciudades'
from city
group by country_id >
having total_de_ciudades > 2;