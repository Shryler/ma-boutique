CREATE TABLE category(
   id INT AUTO_INCREMENT,
   category VARCHAR(255),
   is_deleted BOOLEAN,
   PRIMARY KEY(id)
);

CREATE TABLE img(
   id INT AUTO_INCREMENT,
   url VARCHAR(255),
   is_deleted BOOLEAN,
   PRIMARY KEY(id)
);

CREATE TABLE brand(
   id INT AUTO_INCREMENT,
   name_brand VARCHAR(255),
   is_deleted BOOLEAN,
   PRIMARY KEY(id)
);

CREATE TABLE app_user(
   id INT AUTO_INCREMENT,
   password VARCHAR(255),
   mail VARCHAR(255),
   active BOOLEAN,
   is_deleted BOOLEAN,
   PRIMARY KEY(id)
);

CREATE TABLE product(
   id INT AUTO_INCREMENT,
   designation TEXT,
   min_description TEXT,
   description TEXT,
   current_price DOUBLE,
   current_rate_tva DOUBLE,
   stock_min INT,
   stock_qty INT,
   stock_max INT,
   is_deleted BOOLEAN,
   id_brand INT,
   PRIMARY KEY(id),
   FOREIGN KEY(id_brand) REFERENCES brand(id)
);

CREATE TABLE customer(
   id INT AUTO_INCREMENT,
   inscription DATE,
   civility TEXT,
   name VARCHAR(255),
   surname VARCHAR(255),
   birthdate DATE,
   address TEXT,
   country_code INT,
   city VARCHAR(255),
   phone_number INT,
   is_deleted BOOLEAN,
   id_app_user INT,
   PRIMARY KEY(id),
   FOREIGN KEY(id_app_user) REFERENCES app_user(id)
);

CREATE TABLE command(
   id INT AUTO_INCREMENT,
   date_ordered DATETIME,
   cmd_number INT,
   status INT,
   bill_nb INT,
   is_deleted BOOLEAN,
   id_customer INT,
   PRIMARY KEY(id),
   FOREIGN KEY(id_customer) REFERENCES customer(id)
);

CREATE TABLE command_line(
   id INT AUTO_INCREMENT,
   quantity INT,
   price DOUBLE,
   rate_tva DOUBLE,
   id_product INT,
   id_command INT,
   PRIMARY KEY(id),
   FOREIGN KEY(id_product) REFERENCES product(id),
   FOREIGN KEY(id_command) REFERENCES command(id)
);

CREATE TABLE category_product(
   id_product INT,
   id_category INT,
   id INT AUTO_INCREMENT,
   PRIMARY KEY(id),
   FOREIGN KEY(id_product) REFERENCES product(id),
   FOREIGN KEY(id_category) REFERENCES category(id)
);

CREATE TABLE img_product(
   id_img INT,
   id_product INT,
   id INT AUTO_INCREMENT,
   PRIMARY KEY(id),
   FOREIGN KEY(id_img) REFERENCES img(id),
   FOREIGN KEY(id_product) REFERENCES product(id)
);
