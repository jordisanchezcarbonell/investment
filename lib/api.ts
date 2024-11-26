const API_KEY = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY;
const BASE_URL = 'https://www.alphavantage.co/query';

export interface ETFData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  performance: number;
}

const ETF_NAMES: Record<string, string> = {
  'IVV': 'iShares Core S&P 500 ETF',
  'BIL': 'SPDR Bloomberg 1-3 Month T-Bill ETF',
  'BND': 'Vanguard Total Bond Market ETF',
  'VEU': 'Vanguard FTSE All-World ex-US ETF',
};

export async function fetchETFData(symbol: string): Promise<ETFData> {
  try {
    const response = await fetch(
      `${BASE_URL}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
    );
    const data = await response.json();
    
    const quote = data['Global Quote'];
    if (!quote) {
      throw new Error('Invalid API response');
    }

    const price = parseFloat(quote['05. price']);
    const change = parseFloat(quote['09. change']);
    const changePercent = parseFloat(quote['10. change percent'].replace('%', ''));

    return {
      symbol,
      name: ETF_NAMES[symbol],
      price,
      change: changePercent,
      performance: changePercent * 1.2, // Simplified 30-day performance calculation
    };
  } catch (error) {
    console.error(`Error fetching data for ${symbol}:`, error);
    throw error;
  }
}