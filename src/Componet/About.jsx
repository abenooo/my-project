import { FaFaceGrinHearts } from "react-icons/fa6";
import banner from "../assets/About.png";
import { useNavigate } from "react-router-dom";
export default function LandingPage() {
  const navigate = useNavigate();

  const handleReadMoreClick = () => {
    navigate("/"); // Forwarding to the About page
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* <Navbar/> */}

      <main>
        <section className="flex items-center justify-between py-12">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold text-navy-900 leading-tight mb-4">
              Welcome to Ethiopia, Land of Origins
            </h1>
            <p className="text-gray-600 mb-6">
              Ethiopia is an ancient country whose unique cultural heritage,
              rich history, and remarkable biodiversity are reflected in a tally
              of nine UNESCO World Heritage Sites – more than any other country
              in Africa. Within its borders, you’ll find the world’s
              fourth-holiest Islamic city, along with the oldest continuously
              occupied town south of the Sahara.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={handleReadMoreClick}
                className="bg-orange-400 text-white px-6 py-3 rounded-full font-semibold"
              >
                Back to Home
              </button>
            </div>
          </div>
          <div className="relative">
            <img src={banner} alt="Traveler" width={500} height={500} />
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-3xl font-bold mb-8 text-center">
            What Makes Us Different From The Others
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FaFaceGrinHearts,
                title: "Reliable and Efficient",
                description:
                  "Built-in travel longer service we deliver efficient and timely travel service",
              },
              {
                icon: FaFaceGrinHearts,
                title: "Built on Expertise",
                description:
                  "Engineered touring that goes well may have been for the best",
              },
              {
                icon: FaFaceGrinHearts,
                title: "Engaged and Dedicated",
                title: "Broken surely that as with a was as engaged traveling",
              },
              {
                icon: FaFaceGrinHearts,
                title: "Attention to Detail",
                description:
                  "We deliver customized solution services for industry customers",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <feature.icon className="h-12 w-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="/placeholder.svg?height=300&width=300"
              alt="Travel stamp"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Our Popular Tour Plans</h2>
            <p className="text-gray-600 mb-8">
              Et labore harum non nobis ipsum eum molestias mollitia et corporis
              praesentium a laudantium internos. Non quis eius quo eligendi
              corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut
              ducimus illum aut optio quibusdam!
            </p>
            <div className="flex space-x-8">
              {[
                { label: "Vacations", percentage: 78 },
                { label: "Honeymoon", percentage: 55 },
                { label: "Musical Events", percentage: 30 },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="relative inline-flex items-center justify-center">
                    <svg className="w-20 h-20">
                      <circle
                        className="text-gray-200"
                        strokeWidth="5"
                        stroke="currentColor"
                        fill="transparent"
                        r="30"
                        cx="40"
                        cy="40"
                      />
                      <circle
                        className="text-orange-500"
                        strokeWidth="5"
                        strokeDasharray={30 * 2 * Math.PI}
                        strokeDashoffset={
                          30 * 2 * Math.PI * (1 - stat.percentage / 100)
                        }
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="30"
                        cx="40"
                        cy="40"
                      />
                    </svg>
                    <span className="absolute text-xl font-bold">
                      {stat.percentage}%
                    </span>
                  </div>
                  <p className="mt-2 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-100 rounded-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 px-8">
              <span className="text-orange-500 font-semibold">PROMOTION</span>
              <h2 className="text-3xl font-bold mt-2 mb-4">
                We Provide You Best Europe Sightseeing Tours
              </h2>
              <p className="text-gray-600 mb-6">
                Et labore harum non nobis ipsum eum molestias mollitia et
                corporis praesentium a laudantium internos. Non quis eius quo
                eligendi corrupti et fugiat nulla qui soluta recusandae in
                maxime quasi aut ducimus illum aut optio quibusdam!
              </p>
              <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold">
                View Packages
              </button>
            </div>
            <div className="md:w-1/2">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Europe sightseeing"
                width={400}
                height={400}
                className="rounded-full"
              />
            </div>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our International Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Barcelona", price: "$840" },
              { name: "Switzerland", price: "$840" },
              { name: "Rio de Janeiro", price: "$840" },
              { name: "Tomorrow land", price: "$840" },
              { name: "Los Angeles", price: "$840" },
              { name: "Barcelona", price: "$840" },
              { name: "Barcelona", price: "$840" },
              { name: "Maldives", price: "$840" },
              { name: "Barcelona", price: "$840" },
            ].map((destination, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg"
              >
                <img
                  src="/src/assets/About.png"
                  alt={destination.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-end p-4">
                  <div>
                    <h3 className="text-white text-xl font-semibold">
                      {destination.name}
                    </h3>
                    <p className="text-orange-500 font-bold">
                      {destination.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
