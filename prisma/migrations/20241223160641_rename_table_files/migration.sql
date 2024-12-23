/*
  Warnings:

  - You are about to drop the `File` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "File";

-- CreateTable
CREATE TABLE "files" (
    "id" SERIAL NOT NULL,
    "path" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "files_pkey" PRIMARY KEY ("id")
);
