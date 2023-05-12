-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema healthclub
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `healthclub` ;

-- -----------------------------------------------------
-- Schema healthclub
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `healthclub` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `healthclub` ;

-- -----------------------------------------------------
-- Table `healthclub`.`books`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `healthclub`.`books` (
  `isbn` VARCHAR(255) NOT NULL,
  `title` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`isbn`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `healthclub`.`instructor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `healthclub`.`instructor` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `age` BIGINT NOT NULL,
  `description` VARCHAR(255) NULL DEFAULT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `healthclub`.`classes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `healthclub`.`classes` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(255) NULL DEFAULT NULL,
  `instructor_id` BIGINT NULL DEFAULT NULL,
  `is_for_member` BIT(1) NULL DEFAULT NULL,
  `title` VARCHAR(255) NULL DEFAULT NULL,
  `location_id` BIGINT NULL DEFAULT NULL,
  `instructor_id1` BIGINT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_classes_instructor1_idx` (`instructor_id1` ASC) VISIBLE,
  CONSTRAINT `fk_classes_instructor1`
    FOREIGN KEY (`instructor_id1`)
    REFERENCES `healthclub`.`instructor` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `healthclub`.`clock`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `healthclub`.`clock` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `clock_in` DATETIME(6) NULL DEFAULT NULL,
  `clock_out` DATETIME(6) NULL DEFAULT NULL,
  `date` DATE NULL DEFAULT NULL,
  `location_id` BIGINT NULL DEFAULT NULL,
  `user_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `healthclub`.`location`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `healthclub`.`location` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `address` VARCHAR(255) NULL DEFAULT NULL,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `healthclub`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `healthclub`.`users` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `days_remaining` BIGINT NULL DEFAULT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `is_active` BIT(1) NULL DEFAULT NULL,
  `location_id` BIGINT NULL DEFAULT NULL,
  `membership_id` BIGINT NULL DEFAULT NULL,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `password` VARCHAR(255) NULL DEFAULT NULL,
  `role` VARCHAR(255) NULL DEFAULT NULL,
  `username` VARCHAR(255) NULL DEFAULT NULL,
  `expiry` DATETIME(6) NULL DEFAULT NULL,
  `clock_id` BIGINT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `UKr43af9ap4edm43mmtq01oddj6` (`username` ASC) VISIBLE,
  UNIQUE INDEX `UK6dotkott2kjsp8vw4d0m25fb7` (`email` ASC) VISIBLE,
  INDEX `fk_users_clock1_idx` (`clock_id` ASC) VISIBLE,
  CONSTRAINT `fk_users_clock1`
    FOREIGN KEY (`clock_id`)
    REFERENCES `healthclub`.`clock` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `healthclub`.`membership`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `healthclub`.`membership` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(255) NULL DEFAULT NULL,
  `image` VARCHAR(255) NULL DEFAULT NULL,
  `is_member` BIT(1) NULL DEFAULT NULL,
  `month` BIGINT NULL DEFAULT NULL,
  `title` VARCHAR(255) NULL DEFAULT NULL,
  `users_id` BIGINT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_membership_users1_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_membership_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `healthclub`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `healthclub`.`registered_classes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `healthclub`.`registered_classes` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `classes_id` BIGINT NULL DEFAULT NULL,
  `description` VARCHAR(255) NULL DEFAULT NULL,
  `image` VARCHAR(255) NULL DEFAULT NULL,
  `is_member` BIT(1) NULL DEFAULT NULL,
  `month` BIGINT NULL DEFAULT NULL,
  `title` VARCHAR(255) NULL DEFAULT NULL,
  `user_id` BIGINT NULL DEFAULT NULL,
  `users_id` BIGINT NOT NULL,
  `instructor_id` BIGINT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_registered_classes_users_idx` (`users_id` ASC) VISIBLE,
  INDEX `fk_registered_classes_instructor1_idx` (`instructor_id` ASC) VISIBLE,
  CONSTRAINT `fk_registered_classes_users`
    FOREIGN KEY (`users_id`)
    REFERENCES `healthclub`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_registered_classes_instructor1`
    FOREIGN KEY (`instructor_id`)
    REFERENCES `healthclub`.`instructor` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `healthclub`.`location_has_classes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `healthclub`.`location_has_classes` (
  `location_id` BIGINT NOT NULL,
  `classes_id` BIGINT NOT NULL,
  PRIMARY KEY (`location_id`, `classes_id`),
  INDEX `fk_location_has_classes_classes1_idx` (`classes_id` ASC) VISIBLE,
  INDEX `fk_location_has_classes_location1_idx` (`location_id` ASC) VISIBLE,
  CONSTRAINT `fk_location_has_classes_location1`
    FOREIGN KEY (`location_id`)
    REFERENCES `healthclub`.`location` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_location_has_classes_classes1`
    FOREIGN KEY (`classes_id`)
    REFERENCES `healthclub`.`classes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
