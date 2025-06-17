-- CreateTable
CREATE TABLE "task" (
    "task_id" TEXT NOT NULL,
    "task_title" TEXT NOT NULL,
    "task_description" TEXT NOT NULL,
    "is_complete" BOOLEAN NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "task_pkey" PRIMARY KEY ("task_id")
);
