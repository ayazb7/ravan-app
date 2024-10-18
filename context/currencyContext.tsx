"use client";

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

interface CurrencyContextProps {
  currency: string;
  conversionRates: { [key: string]: number };
  setCurrency: (currency: string) => void;
}

const CurrencyContext = createContext<CurrencyContextProps | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currency, setCurrency] = useState<string>('AED');
  const [conversionRates, setConversionRates] = useState<{ [key: string]: number }>({ AED: 1 });

  useEffect(() => {
    const fetchCurrencyRates = async () => {
      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/88779877658cb4d3df31b820/latest/AED`
        );
        const data = await response.json();
        setConversionRates(data.conversion_rates);
      } catch (error) {
        console.error('Error fetching currency data:', error);
      }
    };

    fetchCurrencyRates();
  }, []);

  return (
    <CurrencyContext.Provider value={{ currency, conversionRates, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = (): CurrencyContextProps => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};