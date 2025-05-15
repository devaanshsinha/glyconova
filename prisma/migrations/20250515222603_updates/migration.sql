/*
  Warnings:

  - You are about to drop the column `authId` on the `Profile` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[clerkId]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `clerkId` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Profile_authId_key";

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "authId",
ADD COLUMN     "clerkId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Profile_clerkId_key" ON "Profile"("clerkId");
