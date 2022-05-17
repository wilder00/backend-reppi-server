CREATE TABLE users(
  
  name varchar(50) NOT NULL,
  last_name_p varchar(50) NOT NULL, --apellido paterno
  last_name_m varchar(50) NOT NULL --apellido materno
)

CREATE TABLE services
(
    id serial NOT NULL,
    name text NOT NULL,
    picture_url text,
    PRIMARY KEY (id)
);

ALTER TABLE IF EXISTS services
    OWNER to admin;