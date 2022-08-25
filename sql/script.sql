drop table if exists games_studios;
drop table if exists studios;
drop table if exists games;

create table games(
	id serial primary key,
	name varchar(120),
	price float not null
);

create table studios(
	id serial primary key,
	name varchar(50)
);

create table games_studios(
	game_id int,
	studio_id int,
	foreign key (game_id) references games(id)
		on update cascade
		on delete cascade,
	foreign key (studio_id) references studios(id)
		on update cascade
		on delete cascade,
	primary key(game_id, studio_id)
);