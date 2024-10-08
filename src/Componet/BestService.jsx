import React from 'react'

const BestService = () => {
  return (
    <section className="py-12">
    <h2 className="text-center text-3xl font-bold text-navy-900 mb-8">
      We Offer Best Services
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { name: "Calculated Weather", icon: "/src/assets/group1.png" },
        { name: "Best Flights", icon: "/src/assets/group2.png" },
        { name: "Local Events", icon: "/src/assets/group3.png" },
        { name: "Customization", icon: "/src/assets/group4.png" },
      ].map((service, index) => (
        <div
          key={index}
          className={`text-center  rounded-lg p-4 ${
            index === 1 ? "shadow-lg" : ""
          }`}
        >
          <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <img
              src={service.icon}
              alt={service.name}
              width={32}
              height={32}
            />
          </div>
          <h3 className="font-semibold mb-2">{service.name}</h3>
          <p className="text-sm text-gray-600">
            Built Wicked longer admire do barton vanity itself do in it.
          </p>
        </div>
      ))}
    </div>
  </section>
  )
}

export default BestService