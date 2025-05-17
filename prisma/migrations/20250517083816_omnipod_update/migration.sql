-- CreateTable
CREATE TABLE "CarbEntry" (
    "id" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "carbAmount" DOUBLE PRECISION NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CarbEntry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AlarmEvent" (
    "id" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "eventType" TEXT NOT NULL,
    "deviceId" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AlarmEvent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CarbEntry_userId_idx" ON "CarbEntry"("userId");

-- CreateIndex
CREATE INDEX "CarbEntry_timestamp_idx" ON "CarbEntry"("timestamp");

-- CreateIndex
CREATE INDEX "AlarmEvent_userId_idx" ON "AlarmEvent"("userId");

-- CreateIndex
CREATE INDEX "AlarmEvent_timestamp_idx" ON "AlarmEvent"("timestamp");

-- CreateIndex
CREATE INDEX "AlarmEvent_eventType_idx" ON "AlarmEvent"("eventType");

-- AddForeignKey
ALTER TABLE "CarbEntry" ADD CONSTRAINT "CarbEntry_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlarmEvent" ADD CONSTRAINT "AlarmEvent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
