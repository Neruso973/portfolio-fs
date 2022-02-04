/*
  Warnings:

  - You are about to drop the column `name` on the `techno` table. All the data in the column will be lost.
  - Added the required column `techno_name` to the `techno` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `techno` DROP COLUMN `name`,
    ADD COLUMN `techno_name` VARCHAR(255) NOT NULL;
