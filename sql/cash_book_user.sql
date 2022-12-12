CREATE DATABASE  IF NOT EXISTS `cash_book`;
USE `cash_book`;


DROP TABLE IF EXISTS `user`;

CREATE TABLE IF NOT EXISTS `user` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `email` varchar(90) NOT NULL,
  `password` varchar(60) NOT NULL,
  `type` enum('counter','admin') NOT NULL DEFAULT 'counter',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `user` (`id`, `name`, `email`, `password`, `type`) VALUES
(1, 'Eduardo', 'eduardo.moller@hotmail.com', '45b45c21a0cdd1479235e69c936a09e6', 'admin');

