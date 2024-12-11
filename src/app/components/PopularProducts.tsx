import Image from "next/image";
import sofa from "../../../public/sofa.png";
import singleChair from "../../../public/singlechair.png";
import chair1 from "../../../public/chair1.png";

const PopularProductsStatic = () => {
  return (
    <section className="px-6 md:px-12 py-12">
      {/* Section heading */}
      <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-8">
        Our popular products
      </h2>
      {/* Product grid */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* Product 1 */}
        <div className="w-[600px] flex flex-col items-center bg-white shadow-md overflow-hidden">
          <Image
            src={sofa}
            alt="The Poplar suede sofa"
            className="w-full h-64 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-base font-medium text-gray-800 mb-1">
              The Poplar suede sofa
            </h3>
            <p className="text-sm text-gray-600">£980</p>
          </div>
        </div>

        {/* Product 2 */}
        <div className="w-[200px] flex flex-col items-center bg-white shadow-md overflow-hidden">
          <Image
            src={singleChair}
            alt="The Dandy chair"
            className="w-full h-64 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-base font-medium text-gray-800 mb-1">
              The Dandy chair
            </h3>
            <p className="text-sm text-gray-600">£250</p>
          </div>
        </div>

        {/* Product 3 */}
        <div className="w-[200px] flex flex-col items-center bg-white shadow-md overflow-hidden">
          <Image
            src={chair1}
            alt="The Dandy chair"
            className="w-full h-64 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-base font-medium text-gray-800 mb-1">
              The Dandy chair
            </h3>
            <p className="text-sm text-gray-600">£250</p>
          </div>
        </div>
      </div>
      {/* View collection button */}
      <div className="flex justify-center mt-8">
        <button className="px-6 py-2 bg-gray-100 text-gray-800 text-sm font-medium rounded hover:bg-gray-200">
          View collection
        </button>
      </div>
    </section>
  );
};

export default PopularProductsStatic;
