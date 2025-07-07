/*
  Warnings:

  - You are about to drop the `AlarmEvent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BasalRecord` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BolusRecord` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CarbEntry` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DataUpload` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GlucoseReading` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GlucoseStats` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `InsulinStats` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AlarmEvent" DROP CONSTRAINT "AlarmEvent_userId_fkey";

-- DropForeignKey
ALTER TABLE "BasalRecord" DROP CONSTRAINT "BasalRecord_userId_fkey";

-- DropForeignKey
ALTER TABLE "BolusRecord" DROP CONSTRAINT "BolusRecord_userId_fkey";

-- DropForeignKey
ALTER TABLE "CarbEntry" DROP CONSTRAINT "CarbEntry_userId_fkey";

-- DropForeignKey
ALTER TABLE "DataUpload" DROP CONSTRAINT "DataUpload_userId_fkey";

-- DropForeignKey
ALTER TABLE "GlucoseReading" DROP CONSTRAINT "GlucoseReading_userId_fkey";

-- DropForeignKey
ALTER TABLE "GlucoseStats" DROP CONSTRAINT "GlucoseStats_userId_fkey";

-- DropForeignKey
ALTER TABLE "InsulinStats" DROP CONSTRAINT "InsulinStats_userId_fkey";

-- DropTable
DROP TABLE "AlarmEvent";

-- DropTable
DROP TABLE "BasalRecord";

-- DropTable
DROP TABLE "BolusRecord";

-- DropTable
DROP TABLE "CarbEntry";

-- DropTable
DROP TABLE "DataUpload";

-- DropTable
DROP TABLE "GlucoseReading";

-- DropTable
DROP TABLE "GlucoseStats";

-- DropTable
DROP TABLE "InsulinStats";

-- CreateTable
CREATE TABLE "DexcomUpload" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "uploadedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "patientFirstName" TEXT,
    "patientLastName" TEXT,
    "deviceInfo" TEXT,
    "sourceDeviceId" TEXT,

    CONSTRAINT "DexcomUpload_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DexcomReading" (
    "id" TEXT NOT NULL,
    "uploadId" TEXT NOT NULL,
    "index" TEXT,
    "timestamp" TIMESTAMP(3),
    "eventType" TEXT,
    "eventSubtype" TEXT,
    "patientInfo" TEXT,
    "deviceInfo" TEXT,
    "sourceDeviceId" TEXT,
    "glucoseValue" DOUBLE PRECISION,
    "insulinValue" DOUBLE PRECISION,
    "carbValue" DOUBLE PRECISION,
    "duration" TEXT,
    "glucoseRateOfChange" DOUBLE PRECISION,
    "transmitterTime" TEXT,
    "transmitterId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DexcomReading_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OmnipodUpload" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "uploadedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fileName" TEXT NOT NULL,
    "dateRange" TEXT,

    CONSTRAINT "OmnipodUpload_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OmnipodBgReading" (
    "id" TEXT NOT NULL,
    "uploadId" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "glucoseValue" DOUBLE PRECISION NOT NULL,
    "manualReading" TEXT,
    "serialNumber" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OmnipodBgReading_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OmnipodCgmReading" (
    "id" TEXT NOT NULL,
    "uploadId" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "cgmGlucoseValue" DOUBLE PRECISION NOT NULL,
    "serialNumber" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OmnipodCgmReading_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OmnipodBolusRecord" (
    "id" TEXT NOT NULL,
    "uploadId" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "insulinType" TEXT,
    "bloodGlucoseInput" DOUBLE PRECISION,
    "carbsInput" DOUBLE PRECISION,
    "carbsRatio" DOUBLE PRECISION,
    "insulinDelivered" DOUBLE PRECISION,
    "initialDelivery" DOUBLE PRECISION,
    "extendedDelivery" DOUBLE PRECISION,
    "serialNumber" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OmnipodBolusRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OmnipodBasalRecord" (
    "id" TEXT NOT NULL,
    "uploadId" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "insulinType" TEXT,
    "duration" INTEGER,
    "percentage" DOUBLE PRECISION,
    "rate" DOUBLE PRECISION,
    "insulinDelivered" DOUBLE PRECISION,
    "serialNumber" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OmnipodBasalRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OmnipodInsulinRecord" (
    "id" TEXT NOT NULL,
    "uploadId" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "insulinType" TEXT,
    "amount" DOUBLE PRECISION,
    "serialNumber" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OmnipodInsulinRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OmnipodCarbRecord" (
    "id" TEXT NOT NULL,
    "uploadId" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "carbAmount" DOUBLE PRECISION,
    "serialNumber" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OmnipodCarbRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OmnipodAlarmRecord" (
    "id" TEXT NOT NULL,
    "uploadId" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "alarmType" TEXT,
    "description" TEXT,
    "serialNumber" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OmnipodAlarmRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OmnipodExerciseRecord" (
    "id" TEXT NOT NULL,
    "uploadId" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "exerciseType" TEXT,
    "duration" INTEGER,
    "intensity" TEXT,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OmnipodExerciseRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OmnipodFoodRecord" (
    "id" TEXT NOT NULL,
    "uploadId" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "name" TEXT,
    "carbs" DOUBLE PRECISION,
    "fat" DOUBLE PRECISION,
    "protein" DOUBLE PRECISION,
    "calories" DOUBLE PRECISION,
    "servingQuantity" DOUBLE PRECISION,
    "numberOfServings" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OmnipodFoodRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OmnipodManualInsulinRecord" (
    "id" TEXT NOT NULL,
    "uploadId" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "insulinType" TEXT,
    "amount" DOUBLE PRECISION,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OmnipodManualInsulinRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OmnipodMedicationRecord" (
    "id" TEXT NOT NULL,
    "uploadId" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "medicationName" TEXT,
    "dosage" TEXT,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OmnipodMedicationRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OmnipodNotesRecord" (
    "id" TEXT NOT NULL,
    "uploadId" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "note" TEXT,
    "category" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OmnipodNotesRecord_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "DexcomUpload_userId_idx" ON "DexcomUpload"("userId");

-- CreateIndex
CREATE INDEX "DexcomReading_uploadId_idx" ON "DexcomReading"("uploadId");

-- CreateIndex
CREATE INDEX "DexcomReading_timestamp_idx" ON "DexcomReading"("timestamp");

-- CreateIndex
CREATE INDEX "DexcomReading_eventType_idx" ON "DexcomReading"("eventType");

-- CreateIndex
CREATE INDEX "OmnipodUpload_userId_idx" ON "OmnipodUpload"("userId");

-- CreateIndex
CREATE INDEX "OmnipodBgReading_uploadId_idx" ON "OmnipodBgReading"("uploadId");

-- CreateIndex
CREATE INDEX "OmnipodBgReading_timestamp_idx" ON "OmnipodBgReading"("timestamp");

-- CreateIndex
CREATE INDEX "OmnipodCgmReading_uploadId_idx" ON "OmnipodCgmReading"("uploadId");

-- CreateIndex
CREATE INDEX "OmnipodCgmReading_timestamp_idx" ON "OmnipodCgmReading"("timestamp");

-- CreateIndex
CREATE INDEX "OmnipodBolusRecord_uploadId_idx" ON "OmnipodBolusRecord"("uploadId");

-- CreateIndex
CREATE INDEX "OmnipodBolusRecord_timestamp_idx" ON "OmnipodBolusRecord"("timestamp");

-- CreateIndex
CREATE INDEX "OmnipodBasalRecord_uploadId_idx" ON "OmnipodBasalRecord"("uploadId");

-- CreateIndex
CREATE INDEX "OmnipodBasalRecord_timestamp_idx" ON "OmnipodBasalRecord"("timestamp");

-- CreateIndex
CREATE INDEX "OmnipodInsulinRecord_uploadId_idx" ON "OmnipodInsulinRecord"("uploadId");

-- CreateIndex
CREATE INDEX "OmnipodInsulinRecord_timestamp_idx" ON "OmnipodInsulinRecord"("timestamp");

-- CreateIndex
CREATE INDEX "OmnipodCarbRecord_uploadId_idx" ON "OmnipodCarbRecord"("uploadId");

-- CreateIndex
CREATE INDEX "OmnipodCarbRecord_timestamp_idx" ON "OmnipodCarbRecord"("timestamp");

-- CreateIndex
CREATE INDEX "OmnipodAlarmRecord_uploadId_idx" ON "OmnipodAlarmRecord"("uploadId");

-- CreateIndex
CREATE INDEX "OmnipodAlarmRecord_timestamp_idx" ON "OmnipodAlarmRecord"("timestamp");

-- CreateIndex
CREATE INDEX "OmnipodExerciseRecord_uploadId_idx" ON "OmnipodExerciseRecord"("uploadId");

-- CreateIndex
CREATE INDEX "OmnipodExerciseRecord_timestamp_idx" ON "OmnipodExerciseRecord"("timestamp");

-- CreateIndex
CREATE INDEX "OmnipodFoodRecord_uploadId_idx" ON "OmnipodFoodRecord"("uploadId");

-- CreateIndex
CREATE INDEX "OmnipodFoodRecord_timestamp_idx" ON "OmnipodFoodRecord"("timestamp");

-- CreateIndex
CREATE INDEX "OmnipodManualInsulinRecord_uploadId_idx" ON "OmnipodManualInsulinRecord"("uploadId");

-- CreateIndex
CREATE INDEX "OmnipodManualInsulinRecord_timestamp_idx" ON "OmnipodManualInsulinRecord"("timestamp");

-- CreateIndex
CREATE INDEX "OmnipodMedicationRecord_uploadId_idx" ON "OmnipodMedicationRecord"("uploadId");

-- CreateIndex
CREATE INDEX "OmnipodMedicationRecord_timestamp_idx" ON "OmnipodMedicationRecord"("timestamp");

-- CreateIndex
CREATE INDEX "OmnipodNotesRecord_uploadId_idx" ON "OmnipodNotesRecord"("uploadId");

-- CreateIndex
CREATE INDEX "OmnipodNotesRecord_timestamp_idx" ON "OmnipodNotesRecord"("timestamp");

-- AddForeignKey
ALTER TABLE "DexcomUpload" ADD CONSTRAINT "DexcomUpload_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DexcomReading" ADD CONSTRAINT "DexcomReading_uploadId_fkey" FOREIGN KEY ("uploadId") REFERENCES "DexcomUpload"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OmnipodUpload" ADD CONSTRAINT "OmnipodUpload_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OmnipodBgReading" ADD CONSTRAINT "OmnipodBgReading_uploadId_fkey" FOREIGN KEY ("uploadId") REFERENCES "OmnipodUpload"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OmnipodCgmReading" ADD CONSTRAINT "OmnipodCgmReading_uploadId_fkey" FOREIGN KEY ("uploadId") REFERENCES "OmnipodUpload"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OmnipodBolusRecord" ADD CONSTRAINT "OmnipodBolusRecord_uploadId_fkey" FOREIGN KEY ("uploadId") REFERENCES "OmnipodUpload"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OmnipodBasalRecord" ADD CONSTRAINT "OmnipodBasalRecord_uploadId_fkey" FOREIGN KEY ("uploadId") REFERENCES "OmnipodUpload"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OmnipodInsulinRecord" ADD CONSTRAINT "OmnipodInsulinRecord_uploadId_fkey" FOREIGN KEY ("uploadId") REFERENCES "OmnipodUpload"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OmnipodCarbRecord" ADD CONSTRAINT "OmnipodCarbRecord_uploadId_fkey" FOREIGN KEY ("uploadId") REFERENCES "OmnipodUpload"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OmnipodAlarmRecord" ADD CONSTRAINT "OmnipodAlarmRecord_uploadId_fkey" FOREIGN KEY ("uploadId") REFERENCES "OmnipodUpload"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OmnipodExerciseRecord" ADD CONSTRAINT "OmnipodExerciseRecord_uploadId_fkey" FOREIGN KEY ("uploadId") REFERENCES "OmnipodUpload"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OmnipodFoodRecord" ADD CONSTRAINT "OmnipodFoodRecord_uploadId_fkey" FOREIGN KEY ("uploadId") REFERENCES "OmnipodUpload"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OmnipodManualInsulinRecord" ADD CONSTRAINT "OmnipodManualInsulinRecord_uploadId_fkey" FOREIGN KEY ("uploadId") REFERENCES "OmnipodUpload"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OmnipodMedicationRecord" ADD CONSTRAINT "OmnipodMedicationRecord_uploadId_fkey" FOREIGN KEY ("uploadId") REFERENCES "OmnipodUpload"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OmnipodNotesRecord" ADD CONSTRAINT "OmnipodNotesRecord_uploadId_fkey" FOREIGN KEY ("uploadId") REFERENCES "OmnipodUpload"("id") ON DELETE CASCADE ON UPDATE CASCADE;
