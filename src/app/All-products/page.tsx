import React from "react";
import Image from "next/image";

import rustic from "../../../public/rustic.png";
import lucy from "../../../public/lucy.png";
import chair from "../../../public/chair.png";
import vases from "../../../public/vases.png";
import vase1 from "../../../public/vase1.png";
import lamp from "../../../public/lamp.png";
import lamps from "../../../public/lamps.png";
import chairs from "../../../public/chairs.png";

import { FaChevronDown } from "react-icons/fa";

const ProductsPage = () => {
    const products = [
        { name: "The Comfy Chair", image: chair, price: "$250" },
        { name: "Rustic Vase Set", image: vases, price: "$155" },
        { name: "Stoneware Pitcher", image: vase1, price: "$125" },
        { name: "The Luxe Lamp", image: lamp, price: "$399" },
        { name: "Modern Pendant Lamp", image: lamps, price: "$350" },
        { name: "Abstract Ceramic Vase", image: rustic, price: "$200" },
        { name: "Yellow Accent Chair", image: lucy, price: "$299" },
        { name: "Wooden Stool", image: chairs, price: "$180" },
        { name: "The Comfy Chair", image: chair, price: "$250" },
        { name: "Rustic Vase Set", image: vases, price: "$155" },
        { name: "Stoneware Pitcher", image: vase1, price: "$125" },
        { name: "The Luxe Lamp", image: lamp, price: "$399" },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header */}
            <div
                style={{ backgroundImage: "url('/bg.png')" }}
                className="bg-gray-900 text-white h-48 py-6 px-4 lg:px-28 bg-cover bg-center"
            >
                {/* Add header content here if needed */}
            </div>

            {/* Filters */}
            <div className="py-4 px-4 lg:px-28">
                <div className="flex flex-wrap justify-between items-center">
                    {/* Left-Aligned Filters */}
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                        {["Category", "Product Type", "Price", "Rating"].map((filter) => (
                            <button
                                key={filter}
                                className="flex items-center text-lg px-4 py-2 rounded-lg hover:bg-gray-100 focus:ring focus:ring-gray-200 transition w-full sm:w-auto"
                            >
                                {filter} <FaChevronDown className="ml-2 text-xs" />
                            </button>
                        ))}
                    </div>

                    {/* Right-Aligned Filters */}
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600 mt-3 sm:mt-0">
                        {["Sort by :", "Filter"].map((filter) => (
                            <button
                                key={filter}
                                className="flex items-center text-lg px-4 py-2 rounded-lg hover:bg-gray-100 focus:ring focus:ring-gray-200 transition"
                            >
                                {filter} {filter === "Filter" && <FaChevronDown className="ml-2 text-xs" />}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            <div className="py-10 px-4 lg:px-28">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="bg-white shadow rounded-lg hover:shadow-lg transition overflow-hidden"
                        >
                            <Image
                                src={product.image}
                                alt={product.name}
                                className="w-full h-64 object-cover"
                                placeholder="blur" // Optional for better UX
                            />
                            <div className="p-4">
                                <p className="text-gray-700 font-medium">{product.name}</p>
                                <p className="text-gray-900 font-semibold">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="flex justify-center mt-8">
                    <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
                        View More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;
