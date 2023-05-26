-- AlterTable
ALTER TABLE `User` ADD COLUMN `githubSocialLink` VARCHAR(191) NULL,
    ADD COLUMN `instagramSocialLink` VARCHAR(191) NULL,
    ADD COLUMN `spotifySocialLink` VARCHAR(191) NULL,
    ADD COLUMN `twitterSocialLink` VARCHAR(191) NULL,
    ADD COLUMN `youtubeSocialLink` VARCHAR(191) NULL;
