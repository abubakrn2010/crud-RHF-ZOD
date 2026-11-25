
const Section2 = () => {
  return (
    <section className="w-full py-16 bg-[#fffaf2]">

      <div className="max-w-[1170px] mx-auto px-4">

        <div className="text-center mb-10">

          <p className="text-[#78865b] font-semibold">
            Our Categories
          </p>

          <h2 className="text-[32px] sm:text-[42px] font-bold font-serif mt-2">
            Explore Our Furniture
          </h2>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500"
              className="w-full h-[200px] object-cover rounded-2xl"
            />
            <h3 className="font-bold text-xl mt-4">Sofas</h3>
          </div>

          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1503602642458-232111445657?w=500"
              className="w-full h-[200px] object-cover rounded-2xl"
            />
            <h3 className="font-bold text-xl mt-4">Chairs</h3>
          </div>

          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1499933374294-4584851497cc?w=500"
              className="w-full h-[200px] object-cover rounded-2xl"
            />
            <h3 className="font-bold text-xl mt-4">Tables</h3>
          </div>

          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500"
              className="w-full h-[200px] object-cover rounded-2xl"
            />
            <h3 className="font-bold text-xl mt-4">Beds</h3>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Section2
