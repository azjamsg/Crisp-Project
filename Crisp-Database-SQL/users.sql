create table users (
	user_id VARCHAR(50),
	name VARCHAR(9),
	email VARCHAR(50),
	password VARCHAR(50)
);
insert into users (user_id, name, email, password) values ('Z0648104G', 'Adam', 'sstruan0@economist.com', 'TAkscyO7');
insert into users (user_id, name, email, password) values ('K1733982Q', 'Alan', 'rlombard1@time.com', 'A3HZ6dY');
insert into users (user_id, name, email, password) values ('L0285288X', 'Bertha', 'cruilton2@senate.gov', 'QPXy36CEXYB');
insert into users (user_id, name, email, password) values ('Y9176458L', 'Monica', 'eadamini3@census.gov', '8fSr6Ky');
insert into users (user_id, name, email, password) values ('F7731266P', 'Yun Siong', 'cenglish4@uiuc.edu', 'Gpf1aqR6KhR');

alter table users
modify column user_id VARCHAR(9);

alter table users
modify column name VARCHAR(50);