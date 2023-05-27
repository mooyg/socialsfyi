/*
  Warnings:

  - You are about to drop the `Socials` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Socials` DROP FOREIGN KEY `Socials_userId_fkey`;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `spotifyURL` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `Socials`;
