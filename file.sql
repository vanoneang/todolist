/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50727
 Source Host           : localhost
 Source Database       : todo

 Target Server Type    : MySQL
 Target Server Version : 50727
 File Encoding         : utf-8

 Date: 11/13/2020 11:18:48 AM
*/

USE todo;

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `file`
-- ----------------------------
DROP TABLE IF EXISTS `file`;
CREATE TABLE `file` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `path` varchar(500) COLLATE utf8mb4_bin NOT NULL,
  `type` varchar(10) COLLATE utf8mb4_bin NOT NULL DEFAULT 'LOCAL' COMMENT 'LOCAL 本地，REMOTE 远程',
  `name` varchar(100) COLLATE utf8mb4_bin NOT NULL,
  `extension` varchar(50) COLLATE utf8mb4_bin DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  `uuid` varchar(40) COLLATE utf8mb4_bin DEFAULT NULL,
  `create_time` datetime NOT NULL DEFAULT '2020-10-28 09:47:00',
  `update_time` datetime NOT NULL DEFAULT '2020-10-28 09:47:00',
  `delete_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uuid_del` (`uuid`,`delete_time`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

SET FOREIGN_KEY_CHECKS = 1;
