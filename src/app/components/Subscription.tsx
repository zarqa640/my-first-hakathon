import React from 'react'

const Subscription = () => {
  return (
    <section className="flex justify-center items-center bg-gray-50 py-16 px-4">
      <div className="max-w-3xl w-full bg-white shadow-md rounded-lg p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-4">
          Join the club and get the benefits
        </h2>
        <p className="text-gray-600 text-sm md:text-base mb-6">
          Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
        </p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 w-full sm:w-auto px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-purple-800 text-white text-sm rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            Sign up
          </button>
        </form>
      </div>
    </section>

  )
}

export default Subscription
