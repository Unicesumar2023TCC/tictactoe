create database db_tictactoe;
use db_tictactoe;

create table users (
	id int primary key auto_increment,
    	name varchar(50) not null,
    	email varchar(150),
    	nickname varchar(50) not null unique,
    	password varchar(50) not null,
	stats ENUM('ACTIVE', 'DISABLE', 'BLOCK') DEFAULT 'ACTIVE'
);
