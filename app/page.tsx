import { DashboardHeader } from '@/components/dashboard-header';
import { ETFGrid } from '@/components/etf-grid';
import { StrategyCard } from '@/components/strategy-card';
import { PerformanceChart } from '@/components/performance-chart';
import { PortfolioCalculator } from '@/components/portfolio-calculator';

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <DashboardHeader />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ETFGrid />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PerformanceChart />
        <div className="space-y-6">
          <StrategyCard />
          <PortfolioCalculator />
        </div>
      </div>
    </div>
  );
}