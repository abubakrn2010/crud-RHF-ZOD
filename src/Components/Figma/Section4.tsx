
const Section4 = () => {
  return (
    <section id="about" className="w-full py-16 bg-[#fffaf2]">

      <div className="max-w-[1170px] mx-auto px-4">

        <div className="flex flex-col md:flex-row items-center gap-10">

          <div className="w-full md:w-1/2">

            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900"
              alt="Beautiful furniture"
              className="w-full h-[350px] object-cover rounded-[30px]"
            />

          </div>

          <div className="w-full md:w-1/2">

            <p className="text-[#78865b] font-semibold">
              About Woodora
            </p>

            <h2 className="text-[35px] sm:text-[45px] font-bold font-serif mt-3">
              We Make Your Home Special
            </h2>

            <p className="text-[#756f62] mt-5 leading-7">
              We create beautiful and comfortable furniture for every home.
              Our products combine modern design, quality and affordable prices.
            </p>

            <div className="flex gap-10 mt-7">

              <div>
                <h3 className="text-3xl font-bold text-[#78865b]">10+</h3>
                <p className="text-gray-600 mt-2">Years Experience</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#78865b]">500+</h3>
                <p className="text-gray-600 mt-2">Happy Clients</p>
              </div>

            </div>

            <a href="#contact" className="inline-block bg-[#596344] text-white px-7 py-4 rounded-full mt-8">
              Discover More →
            </a>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Section4
