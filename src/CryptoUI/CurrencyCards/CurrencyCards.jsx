import { CurrencyCard } from "../CurrencyCard/CurrencyCard";
import { CurrencySkeletons } from "../CurrencySkeletons/CurrencySkeletons";

export function CurrencyCards(props) {
   const coins = props.coins;

   if(!coins.length) return <CurrencySkeletons />;

   return (
      <>
         {coins.map((coin) => (
               <CurrencyCard coin={coin} key={coin.id} />
         ))}
      </>
   );
}
