-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : jeu. 08 sep. 2022 à 14:15
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
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `appuser`
--

INSERT INTO `appuser` (`id`, `password`, `mail`, `active`, `isDeleted`) VALUES
(1, 'canard', 'canard@canardland.fr', NULL, NULL),
(2, 'Iz6tsIrH', 'rnormanville1@auda.org.au', 0, 1),
(3, 'CED7C51khWAo', 'bharmson2@mapquest.com', 1, 0),
(4, 'mcFvFBztQRZ', 'aketts3@npr.org', 0, 0),
(5, 'SnMSyxcPPFG', 'gpolsin4@flickr.com', 1, 0),
(6, 'lzd2ETBf', 'yschruurs5@sogou.com', 0, 0),
(7, 'fd4DVUSf6L', 'gmirfin6@miitbeian.gov.cn', 0, 1),
(8, 'tfDR7a6', 'lcolombier7@quantcast.com', 0, 0),
(9, 'UOF5Tl', 'rgleadle8@smh.com.au', 1, 1),
(10, 'GWqo6Mya', 'bchawner9@gravatar.com', 0, 1),
(11, 'DYAfYVl', 'lsieba@bbc.co.uk', 1, 0),
(12, 'MPR3a6mS28T', 'ccloakeb@time.com', 1, 1),
(13, 'wprAxL', 'blippiettc@apache.org', 1, 1),
(14, 'jc3VLFaILh', 'kdythamd@blogger.com', 0, 1),
(15, 'CzKO31GNF3pj', 'cconiberee@example.com', 1, 1),
(16, 'k0lwO2QXD5qv', 'drotgef@woothemes.com', 0, 0),
(17, 'tHoWGWY4', 'brollingg@theguardian.com', 1, 0),
(18, 'GW2zsE', 'nkestertonh@infoseek.co.jp', 1, 1),
(19, 'vKkiUxmZNume', 'tsurgeyi@livejournal.com', 1, 0),
(20, 'JKfbgD0e0F', 'kmetterickj@ezinearticles.com', 0, 1),
(21, 'pJ8zKy', 'ekorpolakk@yahoo.co.jp', 1, 1),
(22, 'YXZgCyuccyDn', 'bupwoodl@theglobeandmail.com', 0, 1),
(23, 'ngkim4Oh', 'vbythellm@fc2.com', 1, 0),
(24, 'kbhIIkvsX', 'upfliegern@mapquest.com', 0, 0),
(25, '1XJVj29', 'rburberyeo@sogou.com', 0, 1),
(26, 'KefCHSW', 'bbraidenp@yahoo.co.jp', 0, 1),
(27, 'Nvo45XdQs', 'shalltq@nydailynews.com', 1, 1),
(28, '44JQj2u4wzkX', 'escrivnerr@mayoclinic.com', 1, 0),
(29, 'cTyzFHbTYxws', 'osustinss@ow.ly', 1, 1),
(30, '8pEBwy', 'jkunzelt@google.ca', 1, 0),
(31, 'osVPCX3XJj', 'mfrounksu@tumblr.com', 0, 1),
(32, 'bgObyjlfSRK8', 'imeacev@ca.gov', 1, 0),
(33, 'CzqHF1sgV', 'mgibbsw@toplist.cz', 1, 1),
(34, 'BW9gw4qheP8S', 'dwartersx@bizjournals.com', 0, 1),
(35, 'pganlztuc9wa', 'mcordobay@thetimes.co.uk', 0, 0),
(36, 'qKkv7dm3lQOA', 'mrymillz@howstuffworks.com', 0, 0),
(37, '3GSBgrkM1s1Y', 'lbaldery10@cloudflare.com', 1, 0),
(38, '6id5qYfn2yL', 'bubee11@wordpress.com', 1, 0),
(39, 'bpPZrxZlc', 'shaibel12@xing.com', 0, 0),
(40, '8MXrEW4y5zG', 'bcleal13@nps.gov', 0, 1),
(41, 'SHb6myeKJZyp', 'isanter14@opensource.org', 0, 0),
(42, 'yFWDmHG', 'sbinnie15@apple.com', 0, 1),
(43, 'dUR8XFFLf0NB', 'ncoursor16@washingtonpost.com', 0, 1),
(44, 'kUkjOHkK7', 'nglanfield17@marketwatch.com', 0, 1),
(45, 'skIv64ail', 'offrench18@smh.com.au', 0, 0),
(46, 'PSYXUtQ', 'alamdin19@upenn.edu', 1, 0),
(47, 'sF4xmuoGsye', 'abeardmore1a@ow.ly', 1, 1),
(48, 'reGd2T', 'fmcilwrick1b@odnoklassniki.ru', 0, 1),
(49, 'Q55fD4QW', 'balekseev1c@merriam-webster.com', 1, 0);

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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `category_product`
--

INSERT INTO `category_product` (`id_Product`, `id_Category`, `id`) VALUES
(1, 1, 1),
(2, 2, 2),
(1, 9, 3);

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
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `command`
--

INSERT INTO `command` (`id`, `date_ordered`, `number`, `status`, `command_nb`, `bill_nb`, `isDeleted`, `id_Customer`) VALUES
(1, '2022-02-17 10:08:34', '0285834878', '2', 2147483647, 1107154812, 0, 1),
(2, '2021-10-13 05:08:15', '5239749809', '1', 2147483647, 2147483647, 0, 2),
(3, '2022-01-09 23:52:53', '2657927696', '1', 2147483647, 2147483647, 0, 3),
(4, '2022-02-05 19:34:09', '3720703193', '3', 817394230, 1647526779, 1, 4),
(5, '2022-04-12 15:39:02', '1593297823', '3', 2147483647, 2147483647, 1, 5),
(6, '2022-04-01 04:10:14', '8217602166', '3', 2147483647, 2147483647, 0, 6),
(7, '2022-08-14 12:08:38', '7539653965', '2', 2147483647, 205549004, 1, 7),
(8, '2022-03-21 06:15:51', '6801952617', '2', 125960042, 1035532131, 0, 8),
(9, '2022-02-26 10:41:25', '8609907082', '2', 2147483647, 2147483647, 1, 9),
(10, '2022-01-18 04:10:32', '5465969741', '3', 2147483647, 2147483647, 0, 10),
(11, '2022-03-16 17:28:56', '6099923446', '2', 2147483647, 1408402009, 0, 11),
(12, '2022-04-18 22:11:32', '6584504395', '3', 2147483647, 2147483647, 0, 12),
(13, '2021-10-30 09:16:59', '3028611597', '3', 512673691, 2147483647, 1, 13),
(14, '2022-07-20 20:27:14', '2744574813', '3', 2147483647, 2147483647, 0, 14),
(15, '2021-09-26 21:59:06', '2986906192', '3', 2147483647, 2147483647, 0, 15),
(16, '2021-12-14 14:56:48', '6738483473', '1', 2147483647, 593443144, 1, 16),
(17, '2021-10-17 15:58:11', '9134409793', '2', 2147483647, 2147483647, 0, 17),
(18, '2022-02-27 06:19:28', '3232919847', '1', 2147483647, 2147483647, 1, 18),
(19, '2022-04-21 12:58:13', '1014147735', '2', 2147483647, 886815088, 1, 19),
(20, '2021-10-07 23:39:23', '2284262651', '3', 2147483647, 2147483647, 0, 20),
(21, '2022-07-08 09:45:20', '0018964192', '1', 2147483647, 2147483647, 0, 21),
(22, '2022-04-20 05:42:42', '5958829920', '1', 1601869886, 2147483647, 1, 22),
(23, '2022-01-08 23:16:37', '0362358095', '1', 2147483647, 2147483647, 0, 23),
(24, '2022-06-15 08:31:28', '1778777325', '1', 2147483647, 2147483647, 1, 24),
(25, '2022-01-12 10:45:34', '6940554807', '2', 2147483647, 2147483647, 1, 25),
(26, '2022-08-15 01:22:02', '0778998436', '2', 1880365758, 2147483647, 0, 26),
(27, '2021-09-16 13:40:16', '8473666062', '3', 2147483647, 1657503011, 1, 27),
(28, '2022-03-08 07:09:13', '6425727810', '1', 1683532643, 2147483647, 0, 28),
(29, '2022-06-16 07:35:40', '5868539532', '1', 2147483647, 2147483647, 0, 29),
(30, '2021-12-11 06:26:27', '2026329362', '1', 2067857177, 2147483647, 0, 30),
(31, '2022-03-27 02:15:51', '2673236198', '3', 2147483647, 1247080382, 1, 31),
(32, '2022-04-18 18:49:42', '2498498346', '1', 2147483647, 2147483647, 1, 32),
(33, '2021-10-09 01:17:28', '6747530381', '1', 2147483647, 2147483647, 0, 33),
(34, '2022-01-08 20:13:19', '2085860680', '3', 165653051, 1763091430, 0, 34),
(35, '2022-03-11 19:26:10', '8000601133', '1', 2147483647, 905167813, 0, 35),
(36, '2021-11-22 01:00:08', '5074538807', '1', 2147483647, 2147483647, 1, 36),
(37, '2022-06-26 01:21:22', '5360247886', '1', 1269275518, 2147483647, 1, 37),
(38, '2022-08-03 10:15:48', '8596260617', '2', 2147483647, 485157845, 1, 38),
(39, '2022-01-21 10:46:53', '5229784954', '1', 2147483647, 2147483647, 0, 39),
(40, '2022-02-22 12:12:32', '1466325712', '1', 2147483647, 2147483647, 0, 40),
(41, '2022-06-10 22:14:11', '8791537002', '3', 2147483647, 2147483647, 0, 41),
(42, '2022-06-09 23:50:18', '9856133661', '1', 2147483647, 2147483647, 1, 42),
(43, '2022-06-08 23:31:30', '3119531871', '1', 1845589688, 2147483647, 0, 43),
(44, '2022-08-27 12:58:25', '0625192370', '3', 2147483647, 2147483647, 0, 44),
(45, '2021-11-24 11:48:36', '7480792115', '3', 2147483647, 2147483647, 0, 45),
(46, '2022-06-14 22:53:16', '1681194317', '3', 2147483647, 2147483647, 0, 46),
(47, '2021-11-19 15:40:30', '0065196805', '1', 2147483647, 2147483647, 0, 47),
(48, '2021-11-23 11:22:21', '1366670744', '1', 2147483647, 2147483647, 1, 48),
(49, '2022-03-27 21:29:54', '4961246697', '2', 2147483647, 2147483647, 1, 49),
(50, '2021-12-13 21:21:59', '6112234610', '1', 1878819690, 2147483647, 0, 50);

-- --------------------------------------------------------

--
-- Structure de la table `command_line`
--

DROP TABLE IF EXISTS `command_line`;
CREATE TABLE IF NOT EXISTS `command_line` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quantity` int(11) DEFAULT NULL,
  `price_cmd` double DEFAULT NULL,
  `rate_tva` double DEFAULT NULL,
  `id_Rating` int(11) DEFAULT NULL,
  `id_Product` int(11) DEFAULT NULL,
  `id_Command` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_Rating` (`id_Rating`),
  KEY `id_Product` (`id_Product`),
  KEY `id_Command` (`id_Command`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `command_line`
--

INSERT INTO `command_line` (`id`, `quantity`, `price_cmd`, `rate_tva`, `id_Rating`, `id_Product`, `id_Command`) VALUES
(1, 5, 12.99, 20, 1, 1, 21),
(2, 4, 10.99, 20, 2, 2, 46),
(5, 6, 160.88, 20, 1, 2, 1),
(9, 3, 10.99, 20, 1, 1, 1);

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
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `customer`
--

INSERT INTO `customer` (`id`, `inscription`, `civility`, `name`, `surname`, `birthdate`, `address`, `country_code`, `city`, `phoneNumber`, `isDeleted`, `id_AppUser`) VALUES
(1, '2022-03-30', 'Ms', 'Proschek', 'Welsh', '2022-08-08', '60071 Harbort Place', 2, 'Medang', 2147483647, 1, 1),
(2, '2022-04-06', 'Re', 'Drewet', 'Rodd', '2022-08-09', '91277 Tony Alley', 83899, 'Paobokol', 2147483647, 1, 2),
(3, '2022-06-12', 'Mrs', 'Piotr', 'Norris', '2022-02-17', '6555 Riverside Parkway', 27824, 'Fanzeres', 2147483647, 0, 3),
(4, '2021-11-29', 'Honorable', 'Byllam', 'Olivette', '2022-02-05', '01979 Kingsford Pass', 7, 'Xindi', 2147483647, 0, 4),
(5, '2021-11-17', 'Honorable', 'MacKeller', 'Bax', '2021-12-14', '76 Transport Pass', 47575, 'Iguape', 2147483647, 0, 5),
(6, '2021-12-04', 'Ms', 'Fennelly', 'Giraldo', '2022-05-23', '81630 Mccormick Crossing', 87036, 'Valera', 2147483647, 1, 6),
(7, '2022-01-10', 'Dr', 'Sextone', 'Chan', '2022-04-20', '8642 Kim Drive', 84, 'Chone', 1959212073, 0, 7),
(8, '2022-02-03', 'Mr', 'Heinz', 'Kennett', '2021-09-25', '2277 Scofield Avenue', 7, 'Itaperuna', 2147483647, 1, 8),
(9, '2022-02-18', 'Honorable', 'O\'Carroll', 'Tommie', '2022-08-14', '64 Sunbrook Terrace', 17, 'Niono', 2147483647, 0, 9),
(10, '2022-08-26', 'Honorable', 'Lowey', 'Eugen', '2021-12-21', '8 5th Street', 44570, 'Fort-de-France', 2147483647, 1, 10),
(11, '2021-10-08', 'Dr', 'Welden', 'Myrtia', '2022-06-28', '117 Schmedeman Plaza', 8070, 'Caçapava do Sul', 2147483647, 0, 11),
(12, '2022-05-20', 'Mrs', 'Yateman', 'Graeme', '2022-03-01', '9634 Sauthoff Hill', 52477, 'Gubin', 2147483647, 0, 12),
(13, '2022-02-24', 'Dr', 'Caller', 'Hyacintha', '2022-02-06', '16445 Maple Street', 49830, 'Carrascal', 2147483647, 1, 13),
(14, '2022-03-18', 'Ms', 'Noyes', 'Gasper', '2021-10-01', '662 Derek Avenue', 8, 'Karlskoga', 2147483647, 1, 14),
(15, '2021-12-07', 'Honorable', 'Sloss', 'Sharai', '2022-03-01', '90 Dottie Parkway', 8, 'Gorzkowice', 2147483647, 1, 15),
(16, '2021-11-02', 'Dr', 'Goade', 'Sargent', '2022-07-03', '7 Arizona Drive', 599, 'Farroupilha', 2147483647, 0, 16),
(17, '2022-06-01', 'Dr', 'Etheredge', 'Paulie', '2021-09-18', '1349 Sloan Plaza', 23335, 'Hamburg', 2147483647, 0, 17),
(18, '2022-01-10', 'Mr', 'Klimshuk', 'Ileana', '2022-06-16', '1 Upham Alley', 96, 'Bamut', 2147483647, 1, 18),
(19, '2022-02-21', 'Ms', 'De Malchar', 'Nike', '2022-04-21', '27 Surrey Avenue', 9, 'Yanping', 1114035410, 0, 19),
(20, '2022-03-06', 'Honorable', 'Paxman', 'Meghann', '2022-03-18', '090 Mallory Point', 894, 'Taoyao', 2147483647, 1, 20),
(21, '2021-10-15', 'Mrs', 'Davidovic', 'Berny', '2022-03-14', '31773 Bellgrove Trail', 37, 'Adil Makmur', 2147483647, 0, 21),
(22, '2021-09-27', 'Mrs', 'Burgiss', 'Alysa', '2022-01-18', '57 Jenifer Alley', 49176, 'Mibu', 2147483647, 1, 22),
(23, '2022-01-08', 'Honorable', 'Roswarn', 'Danya', '2022-05-19', '8 Welch Hill', 496, 'Baruta', 2147483647, 0, 23),
(24, '2022-02-18', 'Ms', 'O\'Cahey', 'Merrill', '2022-05-26', '392 Kinsman Road', 9, 'Libacao', 2147483647, 0, 24),
(25, '2022-06-27', 'Honorable', 'Carik', 'Borden', '2022-02-28', '4 Shelley Pass', 4938, 'Lobuni', 2147483647, 1, 25),
(26, '2022-03-11', 'Dr', 'Dabernott', 'Betsy', '2021-12-03', '7 Melby Crossing', 19, 'Kremidivka', 2147483647, 0, 26),
(27, '2022-03-21', 'Mr', 'Bloxholm', 'Cherin', '2021-10-24', '2613 Mitchell Alley', 66, 'Niafunké', 2147483647, 0, 27),
(28, '2021-11-09', 'Ms', 'Clemitt', 'Ivan', '2022-06-21', '17694 Hoepker Pass', 7, 'Wootton', 2147483647, 0, 28),
(29, '2021-12-02', 'Rev', 'Shard', 'Jackelyn', '2022-05-13', '70421 Lerdahl Avenue', 719, 'Sibiti', 2147483647, 0, 29),
(30, '2022-06-20', 'Mr', 'Huckerby', 'Valenka', '2021-10-30', '15109 Arrowood Hill', 581, 'Zhangcun', 2147483647, 1, 30),
(31, '2021-10-23', 'Mrs', 'Biffin', 'Winifield', '2022-05-21', '509 Vahlen Court', 74, 'Makapanstad', 2147483647, 0, 31),
(32, '2022-06-05', 'Dr', 'Pretorius', 'Pincus', '2022-08-12', '28043 Mitchell Way', 1439, 'Guicheng', 2147483647, 1, 32),
(33, '2021-11-14', 'Honorable', 'Jouanet', 'Flore', '2021-11-23', '16037 Bowman Parkway', 9, 'Kumberg', 2147483647, 1, 33),
(34, '2021-09-18', 'Mrs', 'Bourne', 'Rora', '2021-12-10', '671 School Way', 59, 'Qaryat ad Da‘īs', 2147483647, 1, 34),
(35, '2021-11-16', 'Mr', 'Paige', 'Eadith', '2022-07-10', '5055 Fulton Parkway', 235, 'Pasirbatang', 2147483647, 0, 35),
(36, '2021-11-11', 'Dr', 'Leynagh', 'Mycah', '2022-04-28', '3 Waxwing Way', 83, 'Yafran', 2147483647, 1, 36),
(37, '2021-09-10', 'Honorable', 'Schooley', 'Giraldo', '2022-06-05', '7 Bultman Center', 61001, 'Kogota', 2117126924, 1, 37),
(38, '2022-07-02', 'Rev', 'Yegorshin', 'Hartley', '2021-11-23', '4014 Redwing Parkway', 6793, 'Jackson', 2147483647, 1, 38),
(39, '2022-01-09', 'Rev', 'Benoi', 'Prudence', '2022-07-01', '24518 Menomonie Terrace', 342, 'Wulongshan', 2147483647, 0, 39),
(40, '2021-09-24', 'Mr', 'Opfer', 'Amalea', '2021-12-07', '2 Vidon Way', 9675, 'Ljungby', 2147483647, 0, 40),
(41, '2022-08-10', 'Mrs', 'Corrett', 'Coralyn', '2022-04-29', '5305 Nova Junction', 8875, 'Tarbes', 2147483647, 0, 41),
(42, '2022-01-23', 'Dr', 'Wordsworth', 'Scottie', '2021-10-16', '3 Summerview Road', 340, 'Stari Bohorodchany', 1701092822, 0, 42),
(43, '2022-06-03', 'Dr', 'Bytheway', 'Francesca', '2022-05-01', '6 Nova Circle', 31, 'Concordia', 2147483647, 1, 43),
(44, '2021-10-26', 'Dr', 'Commins', 'Gwenneth', '2021-09-11', '99420 Colorado Hill', 86606, 'Chichigalpa', 2147483647, 0, 44),
(45, '2021-11-17', 'Rev', 'Traill', 'Lise', '2022-02-12', '8854 Carpenter Alley', 466, 'Wendo', 2147483647, 1, 45),
(46, '2022-06-19', 'Mrs', 'Esterbrook', 'Lothario', '2022-06-22', '6071 Farwell Trail', 1751, 'Runjin', 2147483647, 0, 46),
(47, '2022-04-06', 'Mrs', 'Cockarill', 'Terri-jo', '2022-06-01', '48933 Chive Terrace', 221, 'Vanimo', 2147483647, 1, 47),
(48, '2022-07-02', 'Honorable', 'Polgreen', 'Curran', '2022-06-05', '9 Nevada Park', 7236, 'San Lorenzo', 2147483647, 0, 48),
(49, '2021-09-17', 'Dr', 'Pohling', 'Toddy', '2021-10-26', '97849 Welch Street', 51130, 'Jianfeng', 2147483647, 0, 49),
(50, '2022-02-18', 'Honorable', 'Rumford', 'Karlie', '2022-05-27', '5 Crowley Court', 73, 'Šoštanj', 2147483647, 1, 50);

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
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `image`
--

INSERT INTO `image` (`id`, `url`, `isDeleted`, `id_Product`) VALUES
(1, 'https://media.ldlc.com/r1600/ld/products/00/04/73/99/LD0004739987_2.jpg', NULL, 2),
(2, 'https://media.ldlc.com/r1600/ld/products/00/04/74/00/LD0004740007_2.jpg', NULL, 2),
(3, 'https://media.ldlc.com/r1600/ld/products/00/04/73/99/LD0004739997_2.jpg', NULL, 2),
(4, 'https://media.ldlc.com/r1600/ld/products/00/05/96/73/LD0005967352.jpg', NULL, 1),
(6, 'https://media.ldlc.com/r1600/ld/products/00/05/96/73/LD0005967353.jpg', NULL, 1),
(7, 'https://media.ldlc.com/r1600/ld/products/00/05/96/73/LD0005967354.jpg', NULL, 1),
(8, 'https://media.ldlc.com/r1600/ld/products/00/05/96/73/LD0005967355.jpg', NULL, 1);

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
(1, '16MQ70', 'LG 16\" LED - gram +view 16MQ70', '2560 x 1600 pixels - 16/10 - USB-C - Portrait/Paysage - Portable - Etui/Support - Argent', 'Avec l\'écran portable LG gram +view 16MQ70, vous avez entre vos mains une solution efficace et confortable pour travailler dans les meilleures conditions, et n\'importe où ! Léger, ce moniteur IPS 16 pouces se glisse aisément dans vos affaires et s\'installera très rapidement via une connexion USB-C.', 329.95, 20, 0, 3, 5, NULL, 2),
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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `rating`
--

INSERT INTO `rating` (`id`, `score`, `isDeleted`, `id_Product`) VALUES
(1, 3, NULL, 1),
(2, 4, NULL, 2),
(3, 5, NULL, 1);

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
