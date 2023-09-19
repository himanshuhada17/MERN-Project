-- CreateTable
CREATE TABLE "database" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "duration" TIMESTAMP(3) NOT NULL,
    "seatsleft" INTEGER NOT NULL,

    CONSTRAINT "database_pkey" PRIMARY KEY ("id")
);
