-- CreateTable
CREATE TABLE "GlucoseStats" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "average" DOUBLE PRECISION NOT NULL,
    "standardDeviation" DOUBLE PRECISION NOT NULL,
    "highCount" INTEGER NOT NULL,
    "lowCount" INTEGER NOT NULL,
    "inRangeCount" INTEGER NOT NULL,
    "totalReadings" INTEGER NOT NULL,
    "highPercentage" DOUBLE PRECISION NOT NULL,
    "lowPercentage" DOUBLE PRECISION NOT NULL,
    "inRangePercentage" DOUBLE PRECISION NOT NULL,
    "minGlucose" DOUBLE PRECISION NOT NULL,
    "maxGlucose" DOUBLE PRECISION NOT NULL,
    "timeInRange" TEXT NOT NULL,
    "lastCalculated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GlucoseStats_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GlucoseStats_userId_key" ON "GlucoseStats"("userId");

-- AddForeignKey
ALTER TABLE "GlucoseStats" ADD CONSTRAINT "GlucoseStats_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
