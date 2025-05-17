-- CreateTable
CREATE TABLE "BolusRecord" (
    "id" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "bolusType" TEXT NOT NULL,
    "duration" INTEGER,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BolusRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BasalRecord" (
    "id" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "rate" DOUBLE PRECISION NOT NULL,
    "duration" INTEGER NOT NULL,
    "changeType" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BasalRecord_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "BolusRecord_userId_idx" ON "BolusRecord"("userId");

-- CreateIndex
CREATE INDEX "BolusRecord_timestamp_idx" ON "BolusRecord"("timestamp");

-- CreateIndex
CREATE INDEX "BasalRecord_userId_idx" ON "BasalRecord"("userId");

-- CreateIndex
CREATE INDEX "BasalRecord_timestamp_idx" ON "BasalRecord"("timestamp");

-- AddForeignKey
ALTER TABLE "BolusRecord" ADD CONSTRAINT "BolusRecord_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BasalRecord" ADD CONSTRAINT "BasalRecord_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
