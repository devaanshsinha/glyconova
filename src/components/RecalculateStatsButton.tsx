'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

interface RecalculateStatsButtonProps {
  onComplete?: () => void;
}

export function RecalculateStatsButton({ onComplete }: RecalculateStatsButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleRecalculate = async () => {
    try {
      setIsLoading(true);
      
      const response = await fetch('/api/recalculate-stats', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      const data = await response.json();
      
      if (response.ok) {
        toast({
          title: "Success",
          description: "Statistics have been recalculated successfully.",
        });
        // Call the callback if provided
        if (onComplete) {
          onComplete();
        }
      } else {
        toast({
          title: "Error",
          description: data.error || "Failed to recalculate statistics.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive",
      });
      console.error('Error recalculating stats:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button 
      variant="outline" 
      size="sm" 
      onClick={handleRecalculate}
      disabled={isLoading}
      className="flex items-center gap-1"
    >
      <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
      <span>{isLoading ? 'Recalculating...' : 'Recalculate Statistics'}</span>
    </Button>
  );
} 