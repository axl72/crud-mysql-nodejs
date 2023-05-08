-- create DATABASE

use sistemas2
create table
    customer(
        id int(6) unsigned auto_increment primary key,
        name varchar(50) not null,
        address varchar(100) not null,
        phone varchar(15)
    );

show tables;