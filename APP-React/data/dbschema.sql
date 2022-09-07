CREATE TABLE Category(
   id INT AUTO_INCREMENT,
   name VARCHAR(255),
   isDeleted BOOLEAN,
   PRIMARY KEY(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE Brand(
   id INT AUTO_INCREMENT,
   name VARCHAR(255),
   isDeleted BOOLEAN,
   PRIMARY KEY(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE AppUser(
   id INT AUTO_INCREMENT,
   password VARCHAR(255),
   mail VARCHAR(255),
   active BOOLEAN,
   isDeleted BOOLEAN,
   PRIMARY KEY(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE Product(
   id INT AUTO_INCREMENT,
   reference VARCHAR(255),
   designation TEXT,
   min_description TEXT,
   description TEXT,
   price DOUBLE,
   rate_tva DOUBLE,
   stock_min INT,
   stock_qty INT,
   stock_max INT,
   isDeleted BOOLEAN,
   id_Brand INT,
   PRIMARY KEY(id),
   FOREIGN KEY(id_Brand) REFERENCES Brand(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE Customer(
   id INT AUTO_INCREMENT,
   inscription DATE,
   civility VARCHAR(2),
   name VARCHAR(255),
   surname VARCHAR(255),
   birthdate DATE,
   address TEXT,
   country_code INT,
   city VARCHAR(255),
   phoneNumber INT,
   isDeleted BOOLEAN,
   id_AppUser INT,
   PRIMARY KEY(id),
   FOREIGN KEY(id_AppUser) REFERENCES AppUser(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE Rating(
   id INT AUTO_INCREMENT,
   score INT,
   isDeleted BOOLEAN,
   id_Product INT,
   PRIMARY KEY(id),
   FOREIGN KEY(id_Product) REFERENCES Product(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE Command(
   id INT AUTO_INCREMENT,
   date_ordered DATETIME,
   number VARCHAR(255),
   status VARCHAR(255),
   command_nb INT,
   bill_nb INT,
   isDeleted BOOLEAN,
   id_Customer INT,
   PRIMARY KEY(id),
   FOREIGN KEY(id_Customer) REFERENCES Customer(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE Command_line(
   id INT AUTO_INCREMENT,
   quantity INT,
   price DOUBLE,
   rate_tva DOUBLE,
   id_Rating INT,
   id_Product INT,
   id_Command INT,
   PRIMARY KEY(id),
   FOREIGN KEY(id_Rating) REFERENCES Rating(id),
   FOREIGN KEY(id_Product) REFERENCES Product(id),
   FOREIGN KEY(id_Command) REFERENCES Command(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE Image(
   id INT AUTO_INCREMENT,
   url VARCHAR(255),
   isDeleted BOOLEAN,
   id_Product INT,
   PRIMARY KEY(id),
   FOREIGN KEY(id_Product) REFERENCES Product(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE Category_Product(
   id_Product INT,
   id_Category INT,
   id INT AUTO_INCREMENT,
   PRIMARY KEY(id),
   FOREIGN KEY(id_Product) REFERENCES Product(id),
   FOREIGN KEY(id_Category) REFERENCES Category(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
