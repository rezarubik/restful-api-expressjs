/*
 Navicat Premium Data Transfer

 Source Server         : MySQL Local
 Source Server Type    : MySQL
 Source Server Version : 110602 (11.6.2-MariaDB)
 Source Host           : localhost:3306
 Source Schema         : express_rest_api

 Target Server Type    : MySQL
 Target Server Version : 110602 (11.6.2-MariaDB)
 File Encoding         : 65001

 Date: 31/12/2024 02:39:39
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `address` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO `users` (`id`, `name`, `email`, `password`, `address`) VALUES (1, 'Deli Update', 'deli-update@gmail.com', '$2b$10$7odNMBeNpIppEZ6tHX5n/OWRQ8T1/5CzMhsdjlig6mma0nZIln2x2', 'Duren Sawit update');
INSERT INTO `users` (`id`, `name`, `email`, `password`, `address`) VALUES (2, 'Deli 2', 'deli2@gmail.com', '$2b$10$aOe3sifE/1BV8YaApeUYseH2MR3li6XG4doNAoNYbsJWoQGeaxGK6', 'Duren Sawit');
INSERT INTO `users` (`id`, `name`, `email`, `password`, `address`) VALUES (3, 'Deli 3', 'deli3@gmail.com', '$2b$10$I/PuJjnDoSnmX4MP0Sf62uEpi/c3kZvhr/DdDmHTsd9PYT9GbgcrG', 'Duren Sawit');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
