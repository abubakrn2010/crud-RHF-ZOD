

const Abou = () => {
  return (
    <div className="bg-[#fff8f0] text-[#351b10]">

      <section className="bg-[#f4e4d3] px-6 py-20 text-center">
        <p className="text-[#a45b35] font-semibold tracking-widest">
          WELCOME TO CAFÉAURA
        </p>

        <h1 className="text-5xl font-bold mt-4">
          Our Story
        </h1>

        <p className="text-[#765e50] max-w-2xl mx-auto mt-6 leading-7">
          More than just coffee, CaféAura is a place where every cup
          brings people together and every moment becomes special.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=900"
          alt="Cozy cafe interior"
          className="w-full h-[400px] object-cover rounded-2xl"
        />

        <div>
          <p className="text-[#a45b35] font-semibold tracking-widest">
            WHO WE ARE
          </p>

          <h2 className="text-4xl font-bold mt-3">
            A Little Coffee, A Lot of Love
          </h2>

          <p className="text-[#765e50] mt-6 leading-7">
            CaféAura started with a simple idea: create a cozy place
            where people can enjoy great coffee, delicious desserts,
            and unforgettable moments.
          </p>

          <p className="text-[#765e50] mt-4 leading-7">
            We carefully choose our coffee beans and prepare every
            drink with passion. From your first morning coffee to
            an afternoon with friends, we're happy to be part of it.
          </p>

          <p className="text-[#765e50] mt-4 leading-7">
            Our café is not just about coffee. It's about comfort,
            friendship, and making every visit feel special.
          </p>
        </div>
      </section>

      <section className="bg-[#542b17] text-white px-6 py-16">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-10 text-center">

          <div>
            <h2 className="text-4xl font-bold">5+</h2>
            <p className="mt-2 text-[#f4e4d3]">Years of Experience</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">20+</h2>
            <p className="mt-2 text-[#f4e4d3]">Coffee Varieties</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">1K+</h2>
            <p className="mt-2 text-[#f4e4d3]">Happy Customers</p>
          </div>

        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-[#a45b35] font-semibold tracking-widest">
            WHAT MAKES US SPECIAL
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Why Choose CaféAura?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
            <div className="text-4xl">☕</div>
            <h3 className="text-xl font-bold mt-4">Quality Coffee</h3>
            <p className="text-[#765e50] mt-3 leading-6">
              Fresh coffee beans and carefully prepared drinks
              in every cup.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
            <div className="text-4xl">🍰</div>
            <h3 className="text-xl font-bold mt-4">Fresh Desserts</h3>
            <p className="text-[#765e50] mt-3 leading-6">
              Delicious desserts made to make your coffee moments
              even better.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
            <div className="text-4xl">❤️</div>
            <h3 className="text-xl font-bold mt-4">Cozy Atmosphere</h3>
            <p className="text-[#765e50] mt-3 leading-6">
              A warm and comfortable place to relax and enjoy
              your day.
            </p>
          </div>

        </div>
      </section>

      <section className="bg-[#f4e4d3] px-6 py-16 text-center">
        <h2 className="text-4xl font-bold">
          Come and Visit Us!
        </h2>

        <p className="text-[#765e50] mt-4">
          Your favorite coffee and a cozy place are waiting for you.
        </p>

        <p className="text-[#a45b35] font-semibold mt-6">
          CaféAura — Every Cup Tells a Story.
        </p>
      </section>

    </div>
  )
}

export default Abou
