
const Section1 = () => {
  return (
    <section className="w-full bg-[#eeeee3]">

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[75px]">

        <div className="flex flex-col md:flex-row items-center justify-between gap-10 py-12 lg:py-16">

          <div className="w-full md:w-[48%]">

            <div className="inline-block bg-[#dfe4d3] px-5 py-2 rounded-full text-sm mb-6">
              🪑 Welcome to Woodora
            </div>

            <h1 className="text-[45px] sm:text-[58px] lg:text-[76px] font-bold font-serif leading-[1.05]">
              Make Your Home
              <br />
              Look <span className="text-[#78865b] italic">Beautiful</span>
            </h1>

            <p className="text-[#756f62] text-[16px] sm:text-[18px] mt-6 max-w-[420px] leading-7">
              Discover modern furniture made with love to make your home comfortable and beautiful.
            </p>

            <div className="flex flex-wrap items-center gap-5 mt-8">

              <a href="#products" className="bg-[#596344] text-white px-7 py-4 rounded-full font-semibold hover:bg-[#78865b]">
                Explore Collection →
              </a>

              <a href="#about" className="flex items-center gap-3 font-medium">
                Learn More →
              </a>

            </div>

          </div>

          <div className="w-full md:w-[52%]">

            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85"
              alt="Modern living room"
              className="w-full h-[300px] sm:h-[400px] lg:h-[470px] object-cover rounded-[40px]"
            />

          </div>

        </div>

      </div>

    </section>
  )
}

export default Section1
