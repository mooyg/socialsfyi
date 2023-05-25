-- AlterTable
ALTER TABLE `Card` ADD COLUMN `cardBanner` VARCHAR(191) NULL,
    ADD COLUMN `colorBackground` VARCHAR(191) NOT NULL DEFAULT '#aabbcc',
    ADD COLUMN `password` VARCHAR(191) NULL,
    ADD COLUMN `passwordProtection` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `viewCount` INTEGER NULL,
    ADD COLUMN `viewCountEnabled` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `bio` VARCHAR(1000) NOT NULL DEFAULT 'Default Bio';
