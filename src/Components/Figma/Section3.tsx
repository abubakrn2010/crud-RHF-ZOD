
const Section3 = () => {
  return (
    <section id="products" className="w-full py-16 bg-[#eeeee3]">

      <div className="max-w-[1170px] mx-auto px-4">

        <div className="text-center mb-10">

          <p className="text-[#78865b] font-semibold">
            Our Collection
          </p>

          <h2 className="text-[32px] sm:text-[42px] font-bold font-serif mt-2">
            Best Selling Products
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600"
              className="w-full h-[260px] object-cover"
            />

            <div className="p-5">
              <h3 className="font-bold text-xl">Modern Sofa</h3>
              <p className="text-[#78865b] font-bold mt-3">$450</p>

              <button className="bg-[#596344] text-white px-6 py-3 rounded-full mt-5">
                Buy Now →
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1503602642458-232111445657?w=600"
              className="w-full h-[260px] object-cover"
            />

            <div className="p-5">
              <h3 className="font-bold text-xl">Wooden Chair</h3>
              <p className="text-[#78865b] font-bold mt-3">$120</p>

              <button className="bg-[#596344] text-white px-6 py-3 rounded-full mt-5">
                Buy Now →
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1499933374294-4584851497cc?w=600"
              className="w-full h-[260px] object-cover"
            />

            <div className="p-5">
              <h3 className="font-bold text-xl">Coffee Table</h3>
              <p className="text-[#78865b] font-bold mt-3">$180</p>

              <button className="bg-[#596344] text-white px-6 py-3 rounded-full mt-5">
                Buy Now →
              </button>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Section3
