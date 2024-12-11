// import React from 'react'
//  import image from "next/image"
// import whitevase1 from "../../../public/whitevase1.png"
// import whitevase2 from "../../../public/whitevase2.png"




// const page = () => {
//   return (
//     <div>
//       <div className="flex flex-col items-center">
//         <div className="bg-gray-200 w-full max-w-4xl px-4 sm:px-10 lg:px-10 pt-10 pb-16 text-custom-purple">
//           <h1 className="text-2xl sm:text-3xl text-center lg:text-left">
//             Your Shopping Cart
//           </h1>
//           <div className="grid grid-cols-1 gap-8 pt-10">
//             {/* Product Section */}
//             <div className="border-2 p-4">
//               <div className="flex items-center justify-between border-b pb-4">
//                 <h1 className="text-lg font-semibold w-2/3">Product</h1>
//                 <h1 className="text-lg font-semibold w-28 text-center">Quantity</h1>
//                 <h1 className="text-lg font-semibold w-20 text-right">Total</h1>
//               </div>

//               {/* Product 1 */}
//               <div className="flex items-center justify-between mt-4">
//                 <div className="flex w-2/3">
//                   <image
//                     src="/whitevase1.png"
//                     alt="Product 1"
//                     className="w-20 h-20 sm:w-28 sm:h-28 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
//                   />
//                   <div className="ml-6">
//                     <h1 className="text-base sm:text-lg font-medium">Graystone vase</h1>
//                     <p className="text-sm mt-2">
//                       A timeless ceramic vase with a tri-color grey glaze.
//                     </p>
//                   </div>
//                 </div>
//                 {/* Quantity Section */}
//                 <div className="flex flex-col items-center w-28">
//                   <button className="border px-2 text-sm">-</button>
//                   <p className="text-lg font-medium border-t border-b px-4">1</p>
//                   <button className="border px-2 text-sm">+</button>
//                 </div>
//                 {/* Price Section */}
//                 <p className="text-lg font-semibold w-20 text-right">£85</p>
//               </div>

//               {/* Product 2 */}
//               <div className="flex items-center justify-between mt-8">
//                 <div className="flex w-2/3">
//                   <Img
//                     src="/whitevase2.png"
//                     alt="Product 2"
//                     className="w-20 h-20 sm:w-28 sm:h-28 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
//                   />
//                   <div className="ml-6">
//                     <h1 className="text-base sm:text-lg font-medium">Basic white vase</h1>
//                     <p className="text-sm mt-2">
//                       Beautiful and simple, this is one for the classics.
//                     </p>
//                   </div>
//                 </div>
//                 {/* Quantity Section */}
//                 <div className="flex flex-col items-center w-28">
//                   <button className="border px-2 text-sm">-</button>
//                   <p className="text-lg font-medium border-t border-b px-4">1</p>
//                   <button className="border px-2 text-sm">+</button>
//                 </div>
//                 {/* Price Section */}
//                 <p className="text-lg font-semibold w-20 text-right">£125</p>
//               </div>
//             </div>
//           </div>

//           {/* Subtotal Section */}
//           <div className="mt-10 text-center lg:text-right">
//             <h1 className="inline text-lg sm:text-xl font-medium mr-4">Subtotal</h1>
//             <h1 className="inline text-xl sm:text-2xl font-semibold">£210</h1>
//             <p className="text-sm mt-4">Taxes and shipping are calculated at checkout</p>
//             <button className="bg-custom-purple h-12 sm:h-14 mt-6 w-full sm:w-56 rounded-sm text-white">
//               Go to checkout
//             </button>
//           </div>
//         </div>
//       </div>


//     </div>
//   )
// }

// export default page














import React from 'react';
import Image from "next/image";
import whitevase1 from "../../../public/whitevase1.png";
import whitevase2 from "../../../public/whitevase2.png";

const Page = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="bg-gray-200 w-full max-w-4xl px-4 sm:px-10 lg:px-10 pt-10 pb-16 text-custom-purple">
          <h1 className="text-2xl sm:text-3xl text-center lg:text-left">
            Your Shopping Cart
          </h1>
          <div className="grid grid-cols-1 gap-8 pt-10">
            {/* Product Section */}
            <div className="border-2 p-4">
              <div className="flex items-center justify-between border-b pb-4">
                <h1 className="text-lg font-semibold w-2/3">Product</h1>
                <h1 className="text-lg font-semibold w-28 text-center">Quantity</h1>
                <h1 className="text-lg font-semibold w-20 text-right">Total</h1>
              </div>

              {/* Product 1 */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex w-2/3">
                  <Image
                    src={whitevase1}
                    alt="Product 1"
                    className="w-20 h-20 sm:w-28 sm:h-28 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
                  />
                  <div className="ml-6">
                    <h1 className="text-base sm:text-lg font-medium">Graystone vase</h1>
                    <p className="text-sm mt-2">
                      A timeless ceramic vase with a tri-color grey glaze.
                    </p>
                  </div>
                </div>
                {/* Quantity Section */}
                <div className="flex flex-col items-center w-28">
                  <button className="border px-2 text-sm">-</button>
                  <p className="text-lg font-medium border-t border-b px-4">1</p>
                  <button className="border px-2 text-sm">+</button>
                </div>
                {/* Price Section */}
                <p className="text-lg font-semibold w-20 text-right">£85</p>
              </div>

              {/* Product 2 */}
              <div className="flex items-center justify-between mt-8">
                <div className="flex w-2/3">
                  <Image
                    src={whitevase2}
                    alt="Product 2"
                    className="w-20 h-20 sm:w-28 sm:h-28 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
                  />
                  <div className="ml-6">
                    <h1 className="text-base sm:text-lg font-medium">Basic white vase</h1>
                    <p className="text-sm mt-2">
                      Beautiful and simple, this is one for the classics.
                    </p>
                  </div>
                </div>
                {/* Quantity Section */}
                <div className="flex flex-col items-center w-28">
                  <button className="border px-2 text-sm">-</button>
                  <p className="text-lg font-medium border-t border-b px-4">1</p>
                  <button className="border px-2 text-sm">+</button>
                </div>
                {/* Price Section */}
                <p className="text-lg font-semibold w-20 text-right">£125</p>
              </div>
            </div>
          </div>

          {/* Subtotal Section */}
          <div className="mt-10 text-center lg:text-right">
            <h1 className="inline text-lg sm:text-xl font-medium mr-4">Subtotal</h1>
            <h1 className="inline text-xl sm:text-2xl font-semibold">£210</h1>
            <p className="text-sm mt-4">Taxes and shipping are calculated at checkout</p>
            <button className="bg-custom-purple h-12 sm:h-14 mt-6 w-full sm:w-56 rounded-sm text-white">
              Go to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
