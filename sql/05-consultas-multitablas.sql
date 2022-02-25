-- primero nos trae la categoria
select * from category, language;

select city_id, city, country from city join country on city.country_id = country.country_id order by city_id asc;

use world;
select country, city, address from country
inner join city on country_id = city.country_id
inner join address on city.city_id = address.city_id;

use sakila;
select concat(first_name, ' ', last_name) as 'Name', title, description from film_text
inner join film_actor on film_actor.film_id = film_text.film_id
inner join actor on film_actor.actor_id = actor.actor_id;