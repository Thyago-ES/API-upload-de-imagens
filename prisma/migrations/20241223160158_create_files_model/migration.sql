-- CreateTable
CREATE TABLE "File" (
    "id" SERIAL NOT NULL,
    "path" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "File_pkey" PRIMARY KEY ("id")
);
