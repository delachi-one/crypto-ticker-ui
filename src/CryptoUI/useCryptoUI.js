import { useEffect, useState, useRef } from "react";

export function useCryptoUI() {
   const fetchFlag = useRef(false);
   const [coins, setCoins] = useState([]);

   //#
   const fetchCoinsAndTheirHistory = async (
      COINS_API_URL,
      HOUR_INTERVAL
   ) => {
      try {
         const coinsResponse = await fetch(COINS_API_URL + `?limit=15`);
         const coinsData = await coinsResponse.json();
         const exchanges = coinsData.data;

         const assetHistory = exchanges.map(async (coin) => {
            const start = new Date();
            start.setDate(start.getDate() - 1);
            const end = new Date();

            const coinsHistoryResponse = await fetch(
               `${
                  COINS_API_URL + "/" + coin.id
               }/history?interval=${HOUR_INTERVAL}&start=${start.getTime()}&end=${end.getTime()}`
            );
            const coinsHistoryData = await coinsHistoryResponse.json();

            //#...Simulate small network delay...
            await new Promise((resolve) => setTimeout(resolve, 300));

            return coinsHistoryData;
         });

         const coinsAndHistoryData = (await Promise.all(assetHistory)).map(
            (history, index) => {
               return {
                  id: exchanges[index].id,
                  changePercent24Hr: Number(exchanges[index].changePercent24Hr),
                  symbol: exchanges[index].symbol,
                  name: exchanges[index].name,
                  priceUsd: Number(exchanges[index].priceUsd),
                  history: [...history.data],
               };
            }
         );

         setCoins(coinsAndHistoryData);
      } catch (err) {
         alert("Error Fetching Coins. Please try again later.");
      }
   };

   useEffect(() => {
      if (!fetchFlag.current) {
         fetchCoinsAndTheirHistory("https://api.coincap.io/v2/assets", "h6");
      }

      return () => {
         fetchFlag.current = true;
      };
   }, []);

   return { 
      coins, 
      pageTitle: coins.length ? "CRYPTO UI" : "LOADING TICKER..." 
   };
}
