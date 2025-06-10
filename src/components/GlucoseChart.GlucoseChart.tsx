// Determine y-axis domain
const calculateYDomain = () => {
  // Use processedDailyData for 'day' interval, otherwise averageData or raw data if no average
  const baseData = interval === 'day' ? processedDailyData : averageData.length > 0 ? averageData : data;
  const activeData = baseData.filter(d => d.value !== undefined);

  if (activeData.length === 0) return [0, 200];
  
  const values = activeData.map(d => d.value as number);
  const minValue = Math.min(...values, LOW_THRESHOLD - 10);
  const maxValue = Math.max(...values, HIGH_THRESHOLD + 10);
  
  return [minValue, maxValue];
} 