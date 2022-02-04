/*
  Warnings:

  - You are about to drop the `project_technos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `projects` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `technos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `project_technos` DROP FOREIGN KEY `user_planning_ibfk_1`;

-- DropTable
DROP TABLE `project_technos`;

-- DropTable
DROP TABLE `projects`;

-- DropTable
DROP TABLE `technos`;

-- CreateTable
CREATE TABLE `project` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `screen` VARCHAR(255) NOT NULL,
    `link` VARCHAR(255) NULL,
    `github` VARCHAR(255) NULL,
    `description` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `techno` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_projectTotechno` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_projectTotechno_AB_unique`(`A`, `B`),
    INDEX `_projectTotechno_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_projectTotechno` ADD FOREIGN KEY (`A`) REFERENCES `project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_projectTotechno` ADD FOREIGN KEY (`B`) REFERENCES `techno`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
