-- CreateTable
CREATE TABLE "accounts" (
    "id" VARCHAR(30) NOT NULL,
    "name" VARCHAR(40) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "workSessions" (
    "id" VARCHAR(30) NOT NULL,
    "accountId" VARCHAR(30) NOT NULL,
    "startsOn" DATE,
    "description" VARCHAR(120),
    "hours" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "workSessions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "accounts_name_idx" ON "accounts"("name");

-- CreateIndex
CREATE INDEX "workSessions_accountId_startsOn_idx" ON "workSessions"("accountId", "startsOn");

-- AddForeignKey
ALTER TABLE "workSessions" ADD CONSTRAINT "workSessions_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
