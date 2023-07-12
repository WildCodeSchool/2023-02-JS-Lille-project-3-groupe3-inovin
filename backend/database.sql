-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: inovin_bdd
-- ------------------------------------------------------
-- Server version 8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL ,
  CONSTRAINT AK_email UNIQUE (email),
  `pwd` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES (1,'cedric@inovin.com','in0v1rouge'),(2,'valmont@gmail.com','patacrepe'), (3,'marie@gmail.com','i6you'), (4,'anne@gmail.com','saw7party'), (5,'khouloud@gmail.com','jai-pas-signé'), (6,'florent@gmail.com','monmdpsupersafe') ;
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compoRecipe`
--

DROP TABLE IF EXISTS `compoRecipe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `compoRecipe` (
  `id` int NOT NULL AUTO_INCREMENT,
  `percentage` int DEFAULT NULL,
  `user_id` int NOT NULL,
  `user_account_ID` int NOT NULL,
  `wineBottle_id` int NOT NULL,
  PRIMARY KEY (`id`,`user_id`,`user_account_ID`,`wineBottle_id`),
  KEY `fk_compoRecipe_wineBottle_user_idx` (`id`),
  KEY `fk_compoRecipe_user1_idx` (`user_id`,`user_account_ID`),
  KEY `fk_compoRecipe_wineBottle1_idx` (`wineBottle_id`),
  CONSTRAINT `fk_compoRecipe_user1` FOREIGN KEY (`user_id`, `user_account_ID`) REFERENCES `user` (`id`, `account_ID`),
  CONSTRAINT `fk_compoRecipe_wineBottle1` FOREIGN KEY (`wineBottle_id`) REFERENCES `wineBottle` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compoRecipe`
--

LOCK TABLES `compoRecipe` WRITE;
/*!40000 ALTER TABLE `compoRecipe` DISABLE KEYS */;
INSERT INTO `compoRecipe` VALUES (1,10,2,2,1), (2,10,2,2,2), (3,80,2,2,3),
(4,80,3,3,6), (5,10,3,3,3), (6,10,3,3,1),
(7,60,4,4,5), (8,30,4,4,3), (9,10,4,4,2);
/*!40000 ALTER TABLE `compoRecipe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `preference`
--

DROP TABLE IF EXISTS `preference`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `preference` (
  `id` int NOT NULL AUTO_INCREMENT,
  `color` varchar(45) NOT NULL,
  `arome` varchar(45) NOT NULL,
  `other` varchar(255) DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`,`user_id`),
  KEY `fk_preference_user_idx` (`user_id`),
  CONSTRAINT `fk_preference_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `preference`
--

LOCK TABLES `preference` WRITE;
/*!40000 ALTER TABLE `preference` DISABLE KEYS */;
INSERT INTO `preference` VALUES (1,'rouge','fruité',"j'aime le vin fait maison", 1),
(2,'blanc','fruité',"j'aime le vin doux pour l'apéro!", 2),
(3,'rouge','fruité',"je bois pas mais pourquoi pas", 3),
(4,'blanc','minéral',"avec les copains", 4),
(5,'rouge','minéral',"pour accompagner un bon couscous", 5),
(6,'rouge','fruit',"le soir devant un film", 6);
/*!40000 ALTER TABLE `preference` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recipe`
--

DROP TABLE IF EXISTS `recipe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recipe` (
  `id` int NOT NULL AUTO_INCREMENT,
  `recipe_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipe`
--

LOCK TABLES `recipe` WRITE;
/*!40000 ALTER TABLE `recipe` DISABLE KEYS */;
INSERT INTO `recipe` VALUES (1,'Blanc Nordique'), (2,'Par nous, pour vous'), (3,'Rouge feu') ;
/*!40000 ALTER TABLE `recipe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `relation_recipe`
--

DROP TABLE IF EXISTS `relation_recipe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `relation_recipe` (
  `id` int NOT NULL AUTO_INCREMENT,
  `compoRecipe_id` int NOT NULL,
  `compoRecipe_user_id` int NOT NULL,
  `compoRecipe_user_account_ID` int NOT NULL,
  `recipe_id` int NOT NULL,
  PRIMARY KEY (`id`,`compoRecipe_id`,`compoRecipe_user_id`,`compoRecipe_user_account_ID`,`recipe_id`),
  KEY `fk_relation_recipe_compoRecipe1_idx` (`compoRecipe_id`,`compoRecipe_user_id`,`compoRecipe_user_account_ID`),
  KEY `fk_relation_recipe_recipe1_idx` (`recipe_id`),
  CONSTRAINT `fk_recipe` FOREIGN KEY (`recipe_id`) REFERENCES `recipe` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `fk_relation_recipe_compoRecipe1` FOREIGN KEY (`compoRecipe_id`, `compoRecipe_user_id`, `compoRecipe_user_account_ID`) REFERENCES `compoRecipe` (`id`, `user_id`, `user_account_ID`),
  CONSTRAINT `fk_relation_recipe_recipe1` FOREIGN KEY (`recipe_id`) REFERENCES `recipe` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `relation_recipe`
--

LOCK TABLES `relation_recipe` WRITE;
/*!40000 ALTER TABLE `relation_recipe` DISABLE KEYS */;
INSERT INTO `relation_recipe` VALUES (1,3,1,1,1),(2,4,2,2,2),(3,7,3,3,3);
/*!40000 ALTER TABLE `relation_recipe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tasting`
--

DROP TABLE IF EXISTS `tasting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tasting` (
  `id` int NOT NULL AUTO_INCREMENT,
  `robe` varchar(45) NOT NULL,
  `color_intensity` varchar(45) NOT NULL,
  `arome` varchar(45) NOT NULL,
  `arome_intensity` varchar(45) NOT NULL,
  `flavor` varchar(45) NOT NULL,
  `rating` int(45) NOT NULL,
  `user_id` int NOT NULL,
  `user_account_ID` int NOT NULL,
  `wineBottle_id` int NOT NULL,
  PRIMARY KEY (`id`,`user_id`,`user_account_ID`,`wineBottle_id`),
  KEY `fk_tasting_user1_idx` (`user_id`,`user_account_ID`),
  KEY `fk_tasting_wineBottle1_idx` (`wineBottle_id`),
  CONSTRAINT `fk_tasting_user1` FOREIGN KEY (`user_id`, `user_account_ID`) REFERENCES `user` (`id`, `account_ID`),
  CONSTRAINT `fk_tasting_wineBottle1` FOREIGN KEY (`wineBottle_id`) REFERENCES `wineBottle` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tasting`
--

LOCK TABLES `tasting` WRITE;
/*!40000 ALTER TABLE `tasting` DISABLE KEYS */;
INSERT INTO `tasting` VALUES (1,'jaune','trouble','fruit','leger','gras',5,2,2,1), (2,'jaune vert','clair','vegetal','moyen','amer',3,2,2,2), (3,'jaune or','clair','fruite','fort','sucre',8,2,2,3), (4,'grenat','clair','fruite','leger','sucre',7,2,2,4),
(5,'jaune','trouble','fruit','leger','gras',5,3,3,1), (6,'jaune vert','clair','vegetal','fort','amer',1,3,3,2), (7,'jaune or','clair','fruite','moyen','sucre',5,3,3,3), (8,'grenat','trouble','fruite','moyen','sucre',10,3,3,6),
(9,'jaune','trouble','fruit','leger','gras',1,4,4,1), (10,'jaune','trouble','animal','fort','amer',3,4,4,2), (11,'jaune or','trouble','fruite','fort','sucre',6,4,4,3), (12,'grenat','clair','fruite','fort','sucre',7,4,4,5) ;
/*!40000 ALTER TABLE `tasting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `birthdate` date NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `ordering` tinyint NOT NULL,
  `feedbackRating` tinyint NULL,
  `feedbackComment` varchar(255) DEFAULT NULL,
  `user_type` varchar(45) NOT NULL,
  `account_ID` int NOT NULL,
  PRIMARY KEY (`id`,`account_ID`),
  KEY `fk_user_account1_idx` (`account_ID`),
  CONSTRAINT `fk_user_account1` FOREIGN KEY (`account_ID`) REFERENCES `account` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Cédric','Boriat','1976-10-23','',0,5,"Mon atelier c'est le meilleur",'administrateur',1),(2,'Val','Agostini','1991-07-15','',0,5,'','utilisateur',2), (3,'Marie','Vangrevelynghe','1993-08-06','',0,5,'','utilisateur',3), (4,'Anne','Marchasson','1990-03-22','',0,5,'','utilisateur',4), (5,'Khouloud','Belkhir','1992-12-27','',0,5,'','utilisateur',5), (6,'Florent','Marin','1995-12-25','',0,5,'','utilisateur',6);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wineBottle`
--

DROP TABLE IF EXISTS `wineBottle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wineBottle` (
  `id` int NOT NULL AUTO_INCREMENT,
  `bottle_name` varchar(50) NOT NULL,
  `region` varchar(50) NOT NULL,
  `color` varchar(45) NOT NULL,
  `year` int NOT NULL,
  `cepage` varchar(45) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wineBottle`
--

LOCK TABLES `wineBottle` WRITE;
/*!40000 ALTER TABLE `wineBottle` DISABLE KEYS */;

INSERT INTO `wineBottle` VALUES (1,'Chateau Auzias','Languedoc-Roussillon','blanc',2021,'chardonnay','frontend\src\assets\chardonnay-2021-chateau-auzias.png'),
(2,'Pouilly-Fumé Nuit Blanche','Val de Loire','blanc',2020,'sauvignon','frontend\src\assets\pouilly-fume-nuit-blanche.jpg'),
(3,'Pinot Gris Grand Cru zinnkoepfle','Alsace','blanc',2020,'Pinot gris','frontend\src\assets\pouilly-fume-nuit-blanche.jpg'),
(4,'Nuits St-Georges ','Bourgogne','rouge',2017,'Pinot noir',''),
(5,'Famille Sabourin Cubée Héléna','Bordeaux','rouge',2018,'Merlot',''),
(6,'Château les Mesclances','Côtes-de-Provence','rouge',2019,'Cabernet Sauvignon',''),
(7,'Astérie','Bordeaux','blanc',2019,'Sauvignon','');

UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-14 15:55:57

