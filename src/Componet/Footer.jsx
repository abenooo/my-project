import React from 'react'

const Footer = () => {
  return (
    <section className="flex justify-center items-center py-12">
      <div className="max-w-5xl w-full">
        <footer className="py-16">
          <div className="grid md:grid-cols-4 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold mb-4">Visit Ethiopia</h3>
              <p className="text-gray-600">
                Book your trip in minutes, get full control for much longer.
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
                    Lalibela
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
              <div className="flex justify-center space-x-2 mb-4">
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
              <div className="flex justify-center space-x-4">
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
    </section>
  )
}

export default Footer;
