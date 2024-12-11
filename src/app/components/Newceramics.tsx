import Image from "next/image";
import chair from "../../../public/chair.png";
import vases from "../../../public/vases.png";
import vase1 from "../../../public/vase1.png";
import lamp from "../../../public/lamp.png";

const NewCeramicsStatic = () => {
  return (
    <section className="px-6 md:px-12 py-12">
      {/* Section heading */}
      <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-8">
        New ceramics
      </h2>

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="flex flex-col items-center bg-white shadow-md overflow-hidden">
          <Image
            src={chair}
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

        {/* Card 2 */}
        <div className="flex flex-col items-center bg-white shadow-md overflow-hidden">
          <Image
            src={vases}
            alt="Rustic Vase Set"
            className="w-full h-64 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-base font-medium text-gray-800 mb-1">
              Rustic Vase Set
            </h3>
            <p className="text-sm text-gray-600">£365</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center bg-white shadow-md overflow-hidden">
          <Image
            src={vase1}
            alt="The Silky Vase"
            className="w-full h-64 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-base font-medium text-gray-800 mb-1">
              The Silky Vase
            </h3>
            <p className="text-sm text-gray-600">£125</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center bg-white shadow-md overflow-hidden">
          <Image
            src={lamp}
            alt="The Lucy Lamp"
            className="w-full h-64 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-base font-medium text-gray-800 mb-1">
              The Lucy Lamp
            </h3>
            <p className="text-sm text-gray-600">£399</p>
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

export default NewCeramicsStatic;
