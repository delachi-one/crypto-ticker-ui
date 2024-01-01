export function CurrencySkeletons() {
   return (
      <>
         {[...Array(15)].map((i) => (
            <div
               className="skeleton text-white border-black border-[1px] h-[240px] py-1"
               key={crypto.randomUUID()}
            />
         ))}
      </>
   );
}
