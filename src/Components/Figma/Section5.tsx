
const Section5 = () => {
  return (
    <section className="w-full py-16 bg-[#eeeee3]">

      <div className="max-w-[1170px] mx-auto px-4">

        <div className="text-center mb-10">

          <p className="text-[#78865b] font-semibold">
            Why Choose Us
          </p>

          <h2 className="text-[32px] sm:text-[42px] font-bold font-serif mt-2">
            What Makes Us Special
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white p-8 rounded-2xl text-center">
            <div className="text-5xl">🪵</div>

            <h3 className="font-bold text-xl mt-5">
              Best Quality
            </h3>

            <p className="text-gray-600 mt-4 leading-6">
              We use the best materials to create strong and beautiful furniture.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl text-center">
            <div className="text-5xl">🚚</div>

            <h3 className="font-bold text-xl mt-5">
              Free Delivery
            </h3>

            <p className="text-gray-600 mt-4 leading-6">
              We deliver your favorite furniture directly to your home.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl text-center">
            <div className="text-5xl">⭐</div>

            <h3 className="font-bold text-xl mt-5">
              Best Prices
            </h3>

            <p className="text-gray-600 mt-4 leading-6">
              Enjoy beautiful furniture at affordable prices.
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Section5
