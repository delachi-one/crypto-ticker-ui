import { CurrencyCardChart } from "../CurrencyCardChart/CurrencyCardChart";

export function CurrencyCard(props) {
   const isNegative = (percentChange) => {
      return Math.sign(percentChange) === -1 ? true : false;
   };

   const coin = props.coin;

   return (
      <>
         <div
            className={`text-white border-black border-[1px] min-h-[120px] py-1 ${
               isNegative(coin.changePercent24Hr) ? "negative" : "positive"
            }`}
            key={coin.id}
         >
            <div className="currency-name px-2 mb-1">{coin.name}</div>
            <div className="flex text-left px-2 text-xxs">
               <div>{coin.symbol}/USD</div>
               <div className="ml-auto text-right">
                  <span className="pr-2">
                     {coin.changePercent24Hr.toFixed(2)}%
                  </span>
                  <span>{coin.changePercent24Hr.toFixed(2)}</span>
               </div>
            </div>
            <div className="flex text-left px-2 pt-1 text-lg">
               <div className="price-usd leading-none font-bold">
                  {coin.priceUsd}
               </div>
               <div className="ml-auto text-right text-xxs">
                  <p className="leading-none">
                     H {Number(coin.history[0].priceUsd).toFixed(2)}
                  </p>
                  <p className="leading-none">
                     L{" "}
                     {Number(
                        coin.history[coin.history.length - 1].priceUsd
                     ).toFixed(2)}
                  </p>
               </div>
            </div>
            <div>
               <CurrencyCardChart
                  data={coin.history.map(
                     (history) => history.priceUsd
                  )}
                  labels={["6AM", "12PM", "6PM", "12AM"]}
                  name={coin.symbol}
               />
            </div>
         </div>
      </>
   );
}
