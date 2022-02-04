/*
  Warnings:

  - You are about to drop the `project_techno` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `technos` to the `project` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `project_techno` DROP FOREIGN KEY `user_planning_ibfk_1`;

-- AlterTable
ALTER TABLE `project` ADD COLUMN `technos` JSON NOT NULL;

-- DropTable
DROP TABLE `project_techno`;
