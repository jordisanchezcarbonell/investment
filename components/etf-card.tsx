"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

interface ETFCardProps {
  symbol: string;
  name: string;
  price: number;
  change: number;
  performance: number;
}

export function ETFCard({ symbol, name, price, change, performance }: ETFCardProps) {
  const isPositive = change >= 0;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {symbol}
        </CardTitle>
        <div className={`flex items-center gap-1 ${isPositive ? "text-green-500" : "text-red-500"}`}>
          {isPositive ? <ArrowUpIcon className="h-4 w-4" /> : <ArrowDownIcon className="h-4 w-4" />}
          <span className="text-sm font-bold">{change.toFixed(2)}%</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">${price.toFixed(2)}</div>
        <p className="text-xs text-muted-foreground mt-1">{name}</p>
        <div className="mt-4">
          <p className="text-sm">30-Day Performance</p>
          <div className="mt-1 h-2 rounded-full bg-secondary">
            <div
              className={`h-2 rounded-full ${isPositive ? "bg-green-500" : "bg-red-500"}`}
              style={{ width: `${Math.min(Math.abs(performance), 100)}%` }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}