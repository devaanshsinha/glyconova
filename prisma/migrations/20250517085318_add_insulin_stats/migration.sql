-- CreateTable
CREATE TABLE "InsulinStats" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "totalDays" INTEGER NOT NULL,
    "avgTotalInsulin" DOUBLE PRECISION NOT NULL,
    "avgDailyBolus" DOUBLE PRECISION NOT NULL,
    "avgDailyBasal" DOUBLE PRECISION NOT NULL,
    "avgDailyCarbs" DOUBLE PRECISION NOT NULL,
    "bolusPercentage" DOUBLE PRECISION NOT NULL,
    "basalPercentage" DOUBLE PRECISION NOT NULL,
    "insulinCarbRatio" DOUBLE PRECISION,
    "totalBolusCount" INTEGER NOT NULL,
    "totalBasalChanges" INTEGER NOT NULL,
    "avgBolusesPerDay" DOUBLE PRECISION NOT NULL,
    "lastCalculated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "dataStartDate" TIMESTAMP(3) NOT NULL,
    "dataEndDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InsulinStats_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "InsulinStats_userId_key" ON "InsulinStats"("userId");

-- AddForeignKey
ALTER TABLE "InsulinStats" ADD CONSTRAINT "InsulinStats_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
