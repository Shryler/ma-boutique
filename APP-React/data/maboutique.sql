-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mer. 07 sep. 2022 à 16:47
-- Version du serveur : 5.7.36
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `maboutique`
--

-- --------------------------------------------------------

--
-- Structure de la table `appuser`
--

DROP TABLE IF EXISTS `appuser`;
CREATE TABLE IF NOT EXISTS `appuser` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(255) DEFAULT NULL,
  `mail` varchar(255) DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL,
  `isDeleted` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `appuser`
--

INSERT INTO `appuser` (`id`, `password`, `mail`, `active`, `isDeleted`) VALUES
(1, 'canard', 'canard@canardland.fr', NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `brand`
--

DROP TABLE IF EXISTS `brand`;
CREATE TABLE IF NOT EXISTS `brand` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name_brand` varchar(255) DEFAULT NULL,
  `isDeleted` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `brand`
--

INSERT INTO `brand` (`id`, `name_brand`, `isDeleted`) VALUES
(1, 'Logitech', NULL),
(2, 'LG', NULL),
(3, 'Razer', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `category`
--

DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(255) DEFAULT NULL,
  `isDeleted` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `category`
--

INSERT INTO `category` (`id`, `category`, `isDeleted`) VALUES
(1, 'Ecran PC', NULL),
(2, 'Clavier/Souris/Tapis', NULL),
(3, 'Casque & Micro', NULL),
(4, 'Webcam', NULL),
(5, 'Ordinateurs Portables', NULL),
(6, 'Ordinateurs PC Fixe', NULL),
(7, 'Tablette', NULL),
(8, 'Ipad', NULL),
(9, 'Nouveautés', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `category_product`
--

DROP TABLE IF EXISTS `category_product`;
CREATE TABLE IF NOT EXISTS `category_product` (
  `id_Product` int(11) DEFAULT NULL,
  `id_Category` int(11) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `id_Product` (`id_Product`),
  KEY `id_Category` (`id_Category`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `category_product`
--

INSERT INTO `category_product` (`id_Product`, `id_Category`, `id`) VALUES
(1, 1, 1),
(2, 2, 2);

-- --------------------------------------------------------

--
-- Structure de la table `command`
--

DROP TABLE IF EXISTS `command`;
CREATE TABLE IF NOT EXISTS `command` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date_ordered` datetime DEFAULT NULL,
  `number` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `command_nb` int(11) DEFAULT NULL,
  `bill_nb` int(11) DEFAULT NULL,
  `isDeleted` tinyint(1) DEFAULT NULL,
  `id_Customer` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_Customer` (`id_Customer`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `command_line`
--

DROP TABLE IF EXISTS `command_line`;
CREATE TABLE IF NOT EXISTS `command_line` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quantity` int(11) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `rate_tva` double DEFAULT NULL,
  `id_Rating` int(11) DEFAULT NULL,
  `id_Product` int(11) DEFAULT NULL,
  `id_Command` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_Rating` (`id_Rating`),
  KEY `id_Product` (`id_Product`),
  KEY `id_Command` (`id_Command`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `customer`
--

DROP TABLE IF EXISTS `customer`;
CREATE TABLE IF NOT EXISTS `customer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `inscription` date DEFAULT NULL,
  `civility` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `address` text,
  `country_code` int(11) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `phoneNumber` int(11) DEFAULT NULL,
  `isDeleted` tinyint(1) DEFAULT NULL,
  `id_AppUser` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_AppUser` (`id_AppUser`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `customer`
--

INSERT INTO `customer` (`id`, `inscription`, `civility`, `name`, `surname`, `birthdate`, `address`, `country_code`, `city`, `phoneNumber`, `isDeleted`, `id_AppUser`) VALUES
(1, '2022-09-06', 'M', 'Lenormand', 'Gérard', '1979-04-30', '35 rue de la liberté', 59135, 'wallers', 688998899, NULL, 1);

-- --------------------------------------------------------

--
-- Structure de la table `image`
--

DROP TABLE IF EXISTS `image`;
CREATE TABLE IF NOT EXISTS `image` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` text,
  `isDeleted` tinyint(1) DEFAULT NULL,
  `id_Product` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_Product` (`id_Product`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `image`
--

INSERT INTO `image` (`id`, `url`, `isDeleted`, `id_Product`) VALUES
(1, 'https://media.ldlc.com/r374/ld/products/00/05/96/73/LD0005967352.jpg, \r\nhttps://media.ldlc.com/r1600/ld/products/00/05/96/73/LD0005967353.jpg, \r\nhttps://media.ldlc.com/r1600/ld/products/00/05/96/73/LD0005967354.jpg, \r\nhttps://media.ldlc.com/r1600/ld/products/00/05/96/73/LD0005967355.jpg, \r\nhttps://media.ldlc.com/r1600/ld/products/00/05/96/73/LD0005967356.jpg ', NULL, 1),
(2, 'https://media.ldlc.com/r1600/ld/products/00/04/73/99/LD0004739987_2.jpg, \r\nhttps://media.ldlc.com/r1600/ld/products/00/04/74/00/LD0004740007_2.jpg, \r\nhttps://media.ldlc.com/r1600/ld/products/00/04/74/00/LD0004740002_2.jpg, \r\nhttps://media.ldlc.com/r1600/ld/products/00/04/73/99/LD0004739997_2.jpg, \r\nhttps://media.ldlc.com/r1600/ld/products/00/04/73/99/LD0004739992_2.jpg, ', NULL, 2);

-- --------------------------------------------------------

--
-- Structure de la table `product`
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE IF NOT EXISTS `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `reference` varchar(255) DEFAULT NULL,
  `designation` text,
  `min_description` text,
  `description` text,
  `price` double DEFAULT NULL,
  `rate_tva` double DEFAULT NULL,
  `stock_min` int(11) DEFAULT NULL,
  `stock_qty` int(11) DEFAULT NULL,
  `stock_max` int(11) DEFAULT NULL,
  `isDeleted` tinyint(1) DEFAULT NULL,
  `id_Brand` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_Brand` (`id_Brand`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `product`
--

INSERT INTO `product` (`id`, `reference`, `designation`, `min_description`, `description`, `price`, `rate_tva`, `stock_min`, `stock_qty`, `stock_max`, `isDeleted`, `id_Brand`) VALUES
(1, '16MQ70', 'LG 16\" LED - gram +view 16MQ70', '2560 x 1600 pixels - 16/10 - USB-C - Portrait/Paysage - Portable - Etui/Support - Argent', 'Avec l\'écran portable LG gram +view 16MQ70, vous avez entre vos mains une solution efficace et confortable pour travailler dans les meilleures conditions, et n\'importe où ! Léger, ce moniteur IPS 16 pouces se glisse aisément dans vos affaires et s\'installera très rapidement via une connexion USB-C.', 329.95, 20, 0, 3, 5, NULL, 3),
(2, 'Logitech Corded Keyboard K280e', 'Logitech Corded Keyboard K280e', 'Clavier filaire - résistant aux éclaboussures - AZERTY, Français', 'Idéal pour le travail en entreprise, le Logitech Corded Keyboard K280e est doté d\'un châssis renforcé, de pattes d\'inclinaison robustes et d\'une structure résistante aux éclaboussures. Conçu pour résister à des années d\'utilisation intensive en bureau, il est doté de touches ultra-plates.', 24.95, 20, 0, 6, 20, NULL, 1);

-- --------------------------------------------------------

--
-- Structure de la table `rating`
--

DROP TABLE IF EXISTS `rating`;
CREATE TABLE IF NOT EXISTS `rating` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `score` int(11) DEFAULT NULL,
  `isDeleted` tinyint(1) DEFAULT NULL,
  `id_Product` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_Product` (`id_Product`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `rating`
--

INSERT INTO `rating` (`id`, `score`, `isDeleted`, `id_Product`) VALUES
(1, 3, NULL, 1),
(2, 4, NULL, 2);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `category_product`
--
ALTER TABLE `category_product`
  ADD CONSTRAINT `category_product_ibfk_1` FOREIGN KEY (`id_Product`) REFERENCES `product` (`id`),
  ADD CONSTRAINT `category_product_ibfk_2` FOREIGN KEY (`id_Category`) REFERENCES `category` (`id`);

--
-- Contraintes pour la table `command`
--
ALTER TABLE `command`
  ADD CONSTRAINT `command_ibfk_1` FOREIGN KEY (`id_Customer`) REFERENCES `customer` (`id`);

--
-- Contraintes pour la table `command_line`
--
ALTER TABLE `command_line`
  ADD CONSTRAINT `command_line_ibfk_1` FOREIGN KEY (`id_Rating`) REFERENCES `rating` (`id`),
  ADD CONSTRAINT `command_line_ibfk_2` FOREIGN KEY (`id_Product`) REFERENCES `product` (`id`),
  ADD CONSTRAINT `command_line_ibfk_3` FOREIGN KEY (`id_Command`) REFERENCES `command` (`id`);

--
-- Contraintes pour la table `customer`
--
ALTER TABLE `customer`
  ADD CONSTRAINT `customer_ibfk_1` FOREIGN KEY (`id_AppUser`) REFERENCES `appuser` (`id`);

--
-- Contraintes pour la table `image`
--
ALTER TABLE `image`
  ADD CONSTRAINT `image_ibfk_1` FOREIGN KEY (`id_Product`) REFERENCES `product` (`id`);

--
-- Contraintes pour la table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`id_Brand`) REFERENCES `brand` (`id`);

--
-- Contraintes pour la table `rating`
--
ALTER TABLE `rating`
  ADD CONSTRAINT `rating_ibfk_1` FOREIGN KEY (`id_Product`) REFERENCES `product` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
