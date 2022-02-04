/*
  Warnings:

  - You are about to drop the `_projectTotechno` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_projectTotechno` DROP FOREIGN KEY `_projecttotechno_ibfk_1`;

-- DropForeignKey
ALTER TABLE `_projectTotechno` DROP FOREIGN KEY `_projecttotechno_ibfk_2`;

-- DropTable
DROP TABLE `_projectTotechno`;

-- CreateTable
CREATE TABLE `project_techno` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `project_id` INTEGER NOT NULL,
    `techno_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `project_techno` ADD CONSTRAINT `user_planning_ibfk_1` FOREIGN KEY (`project_id`) REFERENCES `project`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
