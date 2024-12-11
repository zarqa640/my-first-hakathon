
import Image from "next/image";
import vasewall from "../../../public/vasewall.png"

export default function services() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-6 lg:p-12 gap-6 max-w-7xl mx-auto">
      {/* Left Section: Image */}
      <div className="flex-1">
        <Image
          src={vasewall}
          alt="The Dandy Chair"
          width={600}
          height={600}
          className="rounded-lg object-cover"
        />
      </div>

      {/* Right Section: Product Details */}
      <div className="flex-1 max-w-lg">
        <h1 className="text-2xl lg:text-4xl font-semibold mb-4">The Dandy Chair</h1>
        <p className="text-lg text-gray-700 mb-6">£250</p>

        <p className="text-gray-600 mb-6">
          A timeless design, with premium materials feature as one of our most
          popular and iconic pieces. The dandy chair is perfect for any stylish
          living space with beach legs and lambskin leather upholstery.
        </p>

        <ul className="text-gray-600 list-disc list-inside mb-6">
          <li>Premium material</li>
          <li>Handmade upholstery</li>
          <li>Quality timeless classic</li>
        </ul>

        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Dimensions</h3>
          <p className="text-gray-600">
            Height: 110cm | Width: 75cm | Depth: 50cm
          </p>
        </div>

        {/* Amount Selector and Button */}
        <div className="flex items-center gap-4">
          <div className="flex items-center border border-gray-300 rounded">
            <button className="px-3 py-1 text-gray-500">-</button>
            {/* <input
                type="number"
                min="1"
                defaultValue="1"
                className="w-12 text-center border-none outline-none"
                readOnly
              /> */}
            <button className="px-3 py-1 text-gray-500">+</button>
          </div>
          <button className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-700">
            Add to cart
          </button>
        </div>

      </div>
    </div>
  );
}
