import { CurrencyCards } from "./CurrencyCards/CurrencyCards";
import { useCryptoUI } from "./useCryptoUI";
import "./crypto.scss";

export function CryptoUI() {
   const { coins, pageTitle } = useCryptoUI();

   return (
      <div className="container mx-auto py-4">
         <h1 className="text-white text-center mb-4">[ {pageTitle} ]</h1>
         <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-2">
            <CurrencyCards coins={coins} />
         </div>
      </div>
   );
}
