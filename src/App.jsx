import { BiPlayCircle } from "react-icons/bi";
import download from "./assets/download.jpeg";
import banner from "./assets/Image.png";
import logo from "./assets/logo.png";
import { useState } from "react";
import group1 from "./assets/Group1.png";
import group2 from "./assets/Group2.png";
import group3 from "./assets/Group3.png";
import group4 from "./assets/Group4.png";
export default function App() {
  const testimonials = [
    {
      name: "Mike Taylor",
      location: "Lahore, Pakistan",
      text: "Visiting Ethiopia was an unforgettable experience. The landscapes and culture were truly awe-inspiring, leaving me with memories I'll cherish forever.",
    },
    {
      name: "Chris Thomas",
      location: "CEO of Red Button",
      text: "Ethiopia's rich history and vibrant culture left me in awe. The hospitality of the people and the stunning landscapes made for an incredible journey.",
    },
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      text: "From the ancient rock-hewn churches to the bustling markets of Addis Ababa, Ethiopia offered a diverse and captivating travel experience.",
    },
    {
      name: "Ahmed Hassan",
      location: "Cairo, Egypt",
      text: "The Ethiopian coffee ceremony was a highlight of my trip. The warmth and tradition behind it truly exemplify the country's welcoming spirit.",
    },
    {
      name: "Emma Wilson",
      location: "London, UK",
      text: "Trekking in the Simien Mountains was breathtaking. The wildlife and landscapes are unlike anything I've ever seen before.",
    },
  ];
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="flex justify-between items-center py-6">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Ethiopia logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <span className="text-2xl font-bold">Visit Ethiopia</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#"
                className="bg-orange-400 text-white px-4 py-2 rounded-full"
              >
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600">
                Contact US
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600">
                Gallery
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="flex items-center justify-between py-12">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold text-navy-900 leading-tight mb-4">
              Travel, experience and live in Ethiopia visit us today!
            </h1>
            <p className="text-gray-600 mb-6">
              Ethiopia invites you to discover why it is the origin of so much!
              As you explore Ethiopia, you will be put in touch with your own
              origins...for this is a Land of Origins
            </p>
            <div className="flex space-x-4">
              <button className="bg-orange-400 text-white px-6 py-3 rounded-full font-semibold">
                Read More
              </button>
              <button className="flex items-center">
                <BiPlayCircle className="mr-2 h-12 w-12  text-red-800" /> Play
                Demo
              </button>
            </div>
          </div>
          <div className="relative">
            <img src={banner} alt="Traveler" width={500} height={500} />
          </div>
        </section>

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
          index === 1 ? 'shadow-lg' : ''
        }`}
      >
        <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <img src={service.icon} alt={service.name} width={32} height={32} />
        </div>
        <h3 className="font-semibold mb-2">{service.name}</h3>
        <p className="text-sm text-gray-600">
          Built Wicked longer admire do barton vanity itself do in it.
        </p>
      </div>
    ))}
  </div>
</section>

        {/* Top Destinations */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-navy-900 mb-8">
            Top Destinations
          </h2>
          <div className="flex space-x-6">
            {[
              "Simien Mountains",
              "Nile River",
              "Bale Mountain",
              "Harer wall",
            ].map((destination, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0"
                style={{ width: "300px" }}
              >
                <img
                  src={download}
                  alt={destination}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{destination}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-orange-400 font-bold">
                      ${(index + 1) * 2}k
                    </span>
                    <span className="text-sm text-gray-600">
                      {10 + index * 2} Days Trip
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Book Your Next Trip In 3 Easy Steps */}
        <section className="py-12 flex items-center justify-between">
          <div className="max-w-xl">
            <span className="text-orange-400 font-semibold">Easy and Fast</span>
            <h2 className="text-4xl font-bold text-navy-900 mt-2 mb-6">
              Book Your Next Trip In 3 Easy Steps
            </h2>
            <ul className="space-y-6">
              {[
                {
                  title: "Choose Destination",
                  description:
                    "Discover vibrant cultures and breathtaking landscapes as you choose your next adventure.",
                },
                {
                  title: "Make Payment",
                  description:
                    "Select your package, choose payment, and confirm. Fast and secure.",
                  img: { download },
                },
                {
                  title: "Reach Airport on Selected Date",
                  description:
                    "Arrive at the airport on your selected date and get ready to embark on your journey.",
                },
              ].map((step, index) => (
                <li key={index} className="flex">
                  <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <img
                      src={download}
                      alt={`Step ${index + 1}`}
                      width={24}
                      height={24}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="bg-white rounded-lg shadow-md overflow-hidden"
            style={{ width: "370px" }}
          >
            <img
              src={download}
              alt="Trip to Ethiopia"
              width={370}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold mb-2">Trip To Ethiopia</h3>
              <p className="text-sm text-gray-600 mb-4">
                14-29 Oct | by Abenezer Kifle
              </p>
              <div className="flex space-x-2 mb-4">
                <span className="bg-gray-200 rounded-full px-2 py-1 text-xs">
                  24 people going
                </span>
              </div>
              <div className="flex justify-between items-center">
                {/* <AiOutlinePlayCircle className="text-orange-400" /> */}
                <button className="text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* testimonials */}
        <section className="py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-sm text-blue-600 font-semibold mb-2">
                TESTIMONIALS
              </h2>
              <h3 className="text-4xl font-bold text-navy-900 mb-8">
                What People Say About Us.
              </h3>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start mb-4">
                <img
                  src="/src/assets/download.jpeg"
                  alt={testimonials[currentTestimonial].name}
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="text-gray-700 mb-2 leading-relaxed">
                    {testimonials[currentTestimonial].text}
                  </p>
                  <h4 className="font-semibold text-navy-900">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonials[currentTestimonial].location}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <BiPlayCircle
                  className="text-blue-600 cursor-pointer text-3xl"
                  onClick={prevTestimonial}
                />
                <BiPlayCircle
                  className="text-gray-400 cursor-pointer text-3xl"
                  onClick={nextTestimonial}
                />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-between shadow-md">
              <div>
                <h4 className="font-semibold text-navy-900">
                  {
                    testimonials[(currentTestimonial + 1) % testimonials.length]
                      .name
                  }
                </h4>
                <p className="text-sm text-gray-500">
                  {
                    testimonials[(currentTestimonial + 1) % testimonials.length]
                      .location
                  }
                </p>
              </div>
              {/* You can enable the next button here if needed */}
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="py-12">
            <div className="flex justify-between items-center flex-wrap gap-8">
              <img
                src="/placeholder.svg?height=40&width=100&text=axon"
                alt="Axon"
                width={100}
                height={40}
              />
              <img
                src="/placeholder.svg?height=40&width=100&text=Jetstar"
                alt="Jetstar"
                width={100}
                height={40}
              />
              <img
                src="/placeholder.svg?height=40&width=100&text=Expedia"
                alt="Expedia"
                width={100}
                height={40}
              />
              <img
                src="/placeholder.svg?height=40&width=100&text=Qantas"
                alt="Qantas"
                width={100}
                height={40}
              />
              <img
                src="/placeholder.svg?height=40&width=100&text=Alitalia"
                alt="Alitalia"
                width={100}
                height={40}
              />
            </div>
          </section>

          <section className="py-16 bg-purple-50 rounded-lg relative">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Subscribe to get information, latest news and other interesting
                offers about visit Ethiopia
              </h2>
              <form className="flex gap-4 justify-center">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <svg
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 4.16666H2.5C2.04166 4.16666 1.66666 4.54166 1.66666 5V15C1.66666 15.4583 2.04166 15.8333 2.5 15.8333H17.5C17.9583 15.8333 18.3333 15.4583 18.3333 15V5C18.3333 4.54166 17.9583 4.16666 17.5 4.16666ZM16.6667 6.25L10.4167 10.0833C10.1667 10.25 9.83332 10.25 9.58332 10.0833L3.33332 6.25C3.25832 6.20833 3.20832 6.125 3.20832 6.04166C3.20832 5.83333 3.44166 5.70833 3.62499 5.83333L10 9.72916L16.375 5.83333C16.5583 5.70833 16.7917 5.83333 16.7917 6.04166C16.7917 6.125 16.7417 6.20833 16.6667 6.25Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <button
                  type="submit"
                  className="bg-orange-400 text-white px-6 py-3 rounded-lg font-semibold flex items-center"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div className="absolute bottom-0 right-0">
              {/* <Send className="text-purple-300 w-12 h-12" /> */}
            </div>
          </section>

          <footer className="py-16">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Visit Ethiopia</h3>
                <p className="text-gray-600">
                  Book your trip in minute, get full Control for much longer.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Destinations</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-blue-600">
                      Addis Ababa and surroundings
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-blue-600">
                      The North Historic and Simien Mountains
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-blue-600">
                      Addis Ababa and surroundings
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Plan your trip</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-blue-600">
                      Get your visa
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-blue-600">
                      Book your flight
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-blue-600">
                      Choose destination
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Discover our app</h4>
                <div className="flex space-x-2 mb-4">
                  <a
                    href="#"
                    className="bg-black text-white px-4 py-2 rounded-lg text-xs flex items-center"
                  >
                    <svg
                      className="w-6 h-6 mr-2"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.08-.46-2.06-.48-3.2 0-1.42.62-2.17.53-3.1-.35C3.7 16.52 3.44 12.35 6.9 12c1.17-.02 2.04.77 3.06.82 1.02-.08 1.97-.9 3.06-.85 1.44.07 2.5.8 3.18 2.05-2.84 1.72-2.37 5.06.85 6.26zm-3.15-11.6c-.78-1.03-1.88-1.62-2.9-1.57-.23 1.84 1.62 3.54 2.9 1.58z" />
                    </svg>
                    App Store
                  </a>
                  <a
                    href="#"
                    className="bg-black text-white px-4 py-2 rounded-lg text-xs flex items-center"
                  >
                    <svg
                      className="w-6 h-6 mr-2"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.184l2.71-2.712 4.82 2.714c.504.282.82.808.82 1.374 0 .566-.316 1.092-.82 1.374l-4.82 2.714-2.71-2.712 4.32-2.652-4.32-2.652z" />
                    </svg>
                    Google Play
                  </a>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-blue-600">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center text-gray-500 text-sm">
              All rights reserved@visitethiopia.com
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
