'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Calculator } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ALLOCATIONS = [
  { name: 'MSCI World', percentage: 50 },
  { name: 'AGG', percentage: 30 },
  { name: 'Crypto', percentage: 20 },
];

export function PortfolioCalculator() {
  const [amount, setAmount] = useState<string>('');
  const { t } = useTranslation();

  const calculateAllocation = (percentage: number): number => {
    const value = parseFloat(amount) || 0;
    return (value * percentage) / 100;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5" />
          {t('portfolio.calculator')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">
              {t('portfolio.totalInvestment')}
            </label>
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="mt-1"
            />
          </div>
          <div className="space-y-3">
            {ALLOCATIONS.map((allocation) => (
              <div
                key={allocation.name}
                className="flex justify-between items-center p-3 rounded-lg border"
              >
                <div>
                  <p className="font-medium">{allocation.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {allocation.percentage}%
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold">
                    ${calculateAllocation(allocation.percentage).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
