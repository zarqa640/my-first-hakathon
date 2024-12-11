const Features = () => {
  const features = [
    {
      icon: "🚚",
      title: "Next day as standard",
      description: "Order before 3pm and get your order the next day as standard",
    },
    {
      icon: "🛠️",
      title: "Made by true artisans",
      description: "Handmade crafted goods made with real passion and craftsmanship",
    },
    {
      icon: "💰",
      title: "Unbeatable prices",
      description: "For our materials and quality, you won't find better prices anywhere",
    },
    {
      icon: "♻️",
      title: "Recycled packaging",
      description: "We use 100% recycled packaging to ensure our footprint is manageable",
    },
  ];

  return (
    <section className="px-6 md:px-12 py-12">
      <h2 className="text-xl md:text-2xl font-semibold text-center text-blue-900 mb-10">
        What makes our brand different
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-start">
            <div className="text-1x1 mb-3">{feature.icon}</div>
            <h4 className="text-2xl font-normal text-blue-950 mb-1">
              {feature.title}
            </h4>
            <p className="text-gray-600 text-xs">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
