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

 Date: 31/12/2024 01:18:29
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
  `address` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO `users` (`id`, `name`, `email`, `address`) VALUES (2, 'Reza Pahlevi', 'rezapahlevi@gmail.com', 'Duren Sawit Jakarta Timur');
INSERT INTO `users` (`id`, `name`, `email`, `address`) VALUES (3, 'Nadiah Tsamara Pratiwi', 'tspnadiah@gmail.com', 'Kalibata');
INSERT INTO `users` (`id`, `name`, `email`, `address`) VALUES (4, 'Deli', 'deli@gmail.com', 'Kalibata');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
