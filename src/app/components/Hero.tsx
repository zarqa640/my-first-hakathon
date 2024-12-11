import Image from "next/image";
import chair from "../../../public/singlechair.png";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center px-8 md:px-16 py-12">
      {/* Left Section */}
      <div className="flex flex-col justify-between w-full h-[355px] bg-blue-950 p-6 md:p-8">
        <h2 className="text-2xl md:text-xl font-semibold leading-tight text-white mb-4">
          The furniture brand for the future, with timeless designs
        </h2>
        <button className="mt-4 w-max px-6 py-2 text-white bg-gray-800 hover:bg-gray-700 transition rounded">
          View collection
        </button>
        <p className="text-white mb-4">
          A new era in eco-friendly furniture with Avion, the French luxury retail
          brand with nice fonts, tasteful colors, and a beautiful way to display
          things digitally using modern web technologies.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex justify-center items-center w-full h-[355px]">
        <Image
          src={chair}
          alt="Chair"
          className="hidden md:block w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
