drop table if exists studios;
drop table if exists games;

create table games(
	id serial primary key,
	name varchar(120),
	price float not null
);

create table studios(
	id serial primary key,
	name varchar(50),
	game_id integer,
	foreign key (game_id) references games(id)
		on update cascade
		on delete cascade
)