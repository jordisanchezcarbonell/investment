"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, AlertCircle } from "lucide-react";

export function StrategyCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Current Strategy Recommendation
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-start gap-4 rounded-lg border p-4">
            <div className="rounded-full bg-green-100 p-2 dark:bg-green-900">
              <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h4 className="text-lg font-semibold">Recommended Allocation</h4>
              <p className="text-sm text-muted-foreground">Based on current market conditions:</p>
              <p className="mt-2 font-medium">100% IVV (S&P 500 ETF)</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4 rounded-lg border p-4">
            <div className="rounded-full bg-blue-100 p-2 dark:bg-blue-900">
              <AlertCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h4 className="text-lg font-semibold">Strategy Explanation</h4>
              <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                <li>• IVV is outperforming BIL (4.8% vs 0.4%)</li>
                <li>• IVV is also outperforming VEU (4.8% vs 3.2%)</li>
                <li>• Following the strategy, allocate 100% to IVV</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}