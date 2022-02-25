use sakila;
select * from sakila.category;

select * from film where film_id in (select film_id from film_category where category_id = 7);

select * from film_actor;
select * from actor;

-- Obtener todas las peliculas en donde haya participado una actriz o actor
select * from film where film_id in (select film_id from film_actor where actor_id = (select actor_id from actor where actor_id = 5));

-- Between nos permite seleccionar un rango de valores 
select * from actor where actor_id between 16 and 35;

select * from film where film_id in (select film_id from film_actor where actor_id = (select actor_id from actor where first_name = 'RITA' and last_name = 'REYNOLDS'));