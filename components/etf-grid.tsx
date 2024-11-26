"use client";

import { useEffect, useState } from "react";
import { ETFCard } from "./etf-card";
import { fetchETFData, type ETFData } from "@/lib/api";
import { Skeleton } from "@/components/ui/skeleton";

const ETF_SYMBOLS = ["IVV", "BIL", "BND", "VEU"];

export function ETFGrid() {
  const [etfData, setEtfData] = useState<ETFData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadETFData() {
      try {
        setLoading(true);
        const promises = ETF_SYMBOLS.map(symbol => fetchETFData(symbol));
        const data = await Promise.all(promises);
        setEtfData(data);
        setError(null);
      } catch (err) {
        setError("Failed to load ETF data");
        console.error("Error loading ETF data:", err);
      } finally {
        setLoading(false);
      }
    }

    loadETFData();
    
    // Refresh data every 5 minutes
    const interval = setInterval(loadETFData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (error) {
    return (
      <div className="col-span-full p-4 text-center text-red-500 bg-red-50 dark:bg-red-900/20 rounded-lg">
        {error}
      </div>
    );
  }

  if (loading) {
    return (
      <>
        {[...Array(4)].map((_, i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="h-[200px] w-full" />
          </div>
        ))}
      </>
    );
  }

  return (
    <>
      {etfData.map((etf) => (
        <ETFCard key={etf.symbol} {...etf} />
      ))}
    </>
  );
}