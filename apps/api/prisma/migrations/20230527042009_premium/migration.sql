/*
  Warnings:

  - You are about to drop the column `colorBackground` on the `Card` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Card` DROP COLUMN `colorBackground`;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `premium` BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE `PremiumFeatures` (
    `id` VARCHAR(191) NOT NULL,
    `colorBackground` VARCHAR(191) NOT NULL DEFAULT '#aabbcc',
    `spotifyEmbed` VARCHAR(191) NULL,
    `cardId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `PremiumFeatures_cardId_key`(`cardId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PremiumFeatures` ADD CONSTRAINT `PremiumFeatures_cardId_fkey` FOREIGN KEY (`cardId`) REFERENCES `Card`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
