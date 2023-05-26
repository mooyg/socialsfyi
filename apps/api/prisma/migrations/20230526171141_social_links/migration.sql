/*
  Warnings:

  - You are about to drop the column `githubSocialLink` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `instagramSocialLink` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `spotifySocialLink` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `twitterSocialLink` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `youtubeSocialLink` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `githubSocialLink`,
    DROP COLUMN `instagramSocialLink`,
    DROP COLUMN `spotifySocialLink`,
    DROP COLUMN `twitterSocialLink`,
    DROP COLUMN `youtubeSocialLink`;

-- CreateTable
CREATE TABLE `Socials` (
    `id` VARCHAR(191) NOT NULL,
    `socialMedia` ENUM('SPOTIFY', 'GITHUB', 'TWITTER', 'INSTAGRAM', 'YOUTUBE') NOT NULL,
    `socialLink` VARCHAR(191) NULL,
    `userId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Socials` ADD CONSTRAINT `Socials_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
