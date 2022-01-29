/*
  Warnings:

  - You are about to drop the column `is_adim` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "is_adim",
ADD COLUMN     "is_admin" BOOLEAN NOT NULL DEFAULT false;
