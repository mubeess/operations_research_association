import fx from 'money';

export const MoneyXchange = (val: number): number => {
    // Set the exchange rates
    fx.base = 'NGN';
    fx.rates = {
      'USD': 0.0024, // 1 NGN = 0.0024 USD
      'EUR': 0.0020, // 1 NGN = 0.0020 EUR
      'GBP': 0.0022, // 1 NGN = 0.0022 GBP
      // Add more exchange rates here as needed
    };
    
    // Convert the value to USD
    return fx(val).from('NGN').to('USD');
  }