-- CreateTable
CREATE TABLE "GlucoseStats" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "average" DOUBLE PRECISION NOT NULL,
    "standardDeviation" DOUBLE PRECISION NOT NULL,
    "minGlucose" DOUBLE PRECISION NOT NULL,
    "maxGlucose" DOUBLE PRECISION NOT NULL,
    "totalReadings" INTEGER NOT NULL,
    "timeInRange" TEXT NOT NULL,
    "highCount" INTEGER NOT NULL,
    "lowCount" INTEGER NOT NULL,
    "inRangeCount" INTEGER NOT NULL,
    "highPercentage" DOUBLE PRECISION NOT NULL,
    "lowPercentage" DOUBLE PRECISION NOT NULL,
    "inRangePercentage" DOUBLE PRECISION NOT NULL,
    "estimatedA1C" DOUBLE PRECISION NOT NULL,
    "dataStartDate" TIMESTAMP(3) NOT NULL,
    "dataEndDate" TIMESTAMP(3) NOT NULL,
    "totalDays" INTEGER NOT NULL,
    "lastCalculated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GlucoseStats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InsulinStats" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "avgTotalInsulin" DOUBLE PRECISION NOT NULL,
    "avgDailyBolus" DOUBLE PRECISION NOT NULL,
    "avgDailyBasal" DOUBLE PRECISION NOT NULL,
    "avgDailyCarbs" DOUBLE PRECISION NOT NULL,
    "bolusPercentage" DOUBLE PRECISION NOT NULL,
    "basalPercentage" DOUBLE PRECISION NOT NULL,
    "avgBolusesPerDay" DOUBLE PRECISION NOT NULL,
    "totalBolusCount" INTEGER NOT NULL,
    "totalBasalChanges" INTEGER NOT NULL,
    "avgInsulinCarbRatio" DOUBLE PRECISION,
    "avgCorrectionFactor" DOUBLE PRECISION,
    "dataStartDate" TIMESTAMP(3) NOT NULL,
    "dataEndDate" TIMESTAMP(3) NOT NULL,
    "totalDays" INTEGER NOT NULL,
    "lastCalculated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InsulinStats_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GlucoseStats_userId_key" ON "GlucoseStats"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "InsulinStats_userId_key" ON "InsulinStats"("userId");

-- AddForeignKey
ALTER TABLE "GlucoseStats" ADD CONSTRAINT "GlucoseStats_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InsulinStats" ADD CONSTRAINT "InsulinStats_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
