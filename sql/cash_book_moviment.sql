use cash_book;

DROP TABLE IF EXISTS `moviment`;

CREATE TABLE IF NOT EXISTS `moviment` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `description` varchar(120) NOT NULL,
  `date` datetime NOT NULL,
  `value` double NOT NULL,
  `type` enum('input','output') NOT NULL DEFAULT 'input',
  `user_id` int UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_moviment_user_idx` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `moviment` (`id`, `description`, `date`, `value`, `type`, `user_id`) VALUES
(1, 'Venda a vista', '2022-10-09 22:59:59', 35.9, 'input', 1),
(2, 'Venda de mercadorias a vista', '2021-08-10 22:59:59', 98, 'input', 1),
(3, 'Serviço de limpeza', '2022-05-02 23:50:00', 120, 'output', 1),
(4, 'Pagamento de materiais', '2022-05-02 17:45:00', 250.9, 'output', 1),
(5, 'Pagamento internet', '2021-04-05 22:59:59', 105, 'output', 1),
(6, 'venda de mercadorias', '2022-03-03 22:59:59', 65.1, 'input', 1),
(7, 'Venda de serviço', '2022-10-29 22:59:59', 90, 'input', 1),
(8, 'Pagamento impostos', '2021-06-08 22:59:59', 189, 'output', 1),
(9, 'Venda de produtos', '2022-05-05 22:59:59', 22, 'input', 1),
(10, 'Venda de produtos', '2022-07-17 22:59:59', 165.45, 'input', 1),
(11, 'Pagamento energia', '2022-05-02 13:30:00', 388.1, 'output', 1),
(12, 'Pagamento serviço de segurança', '2022-10-10 22:59:59', 150, 'output', 1),
(13, 'Pagamento materiais de escritório', '2022-08-01 22:59:59', 89.45, 'output', 1),
(14, 'Pagamento', '2022-06-08 00:00:00', 25.9, 'output', 1),
(15, 'Pagamento', '2022-06-08 00:00:00', 25.9, 'output', 1),
(16, 'Venda a vista', '2022-10-09 22:59:59', 35.9, 'input', 1);