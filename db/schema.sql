USE burgers_db;

CREATE TABLE burgers
(
	id INT AUTO_INCREMENT PRIMARY KEY,
	burger_name VARCHAR(100) not null,
	devoured BOOLEAN default false
);