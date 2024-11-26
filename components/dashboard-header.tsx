"use client";

import { ArrowUpDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export function DashboardHeader() {
  const { t } = useTranslation();
  const [timestamp, setTimestamp] = useState<string>('');

  useEffect(() => {
    setTimestamp(new Date().toLocaleString());
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-4xl font-bold tracking-tight">
        {t('dashboard.title')}
      </h1>
      <p className="text-muted-foreground">
        {t('dashboard.subtitle')}
      </p>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <ArrowUpDown className="h-4 w-4" />
        <span>{t('dashboard.lastUpdated')}: {timestamp}</span>
      </div>
    </div>
  );
}