-- CreateTable
CREATE TABLE `Uploads` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `uploaderId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Uploads_uploaderId_key`(`uploaderId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Uploads` ADD CONSTRAINT `Uploads_uploaderId_fkey` FOREIGN KEY (`uploaderId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
