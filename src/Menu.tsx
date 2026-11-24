
const Menu = () => {
  return (
    <div className="bg-[#fff8f0] text-[#351b10]">

      <section className="bg-[#f4e4d3]">
        <div className="max-w-[1170px] mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-12">

          <div className="w-full md:w-1/2">
            <p className="text-[#a45b35] font-bold tracking-widest mb-5">
              ☕ DISCOVER OUR MENU
            </p>

            <h1 className="text-5xl sm:text-7xl font-bold font-serif leading-tight">
              Every Cup Tells a
              <span className="text-[#a45b35] italic"> Story.</span>
            </h1>

            <p className="text-[#765e50] text-lg leading-8 mt-6">
              Discover our delicious coffee, fresh pastries and
              special drinks. Every cup is made with love and passion.
            </p>

            <a href="#coffee" className="inline-block bg-[#542b17] text-white px-9 py-4 rounded-full mt-8">
              Explore Drinks →
            </a>
          </div>

          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=85"
              className="w-full h-[400px] object-cover rounded-[35px]"
              alt="Cafe coffee"
            />
          </div>

        </div>
      </section>


      <section className="py-16">
        <div className="max-w-[1170px] mx-auto px-4">

          <div className="text-center mb-12">
            <p className="text-[#a45b35] font-bold">OUR COLLECTION</p>
            <h2 className="text-4xl font-bold font-serif mt-3">
              Explore Categories
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

            <a href="#coffee" className="bg-[#f4e4d3] rounded-2xl p-8 text-center">
              <div className="text-5xl">☕</div>
              <h3 className="font-bold mt-4">Hot Coffee</h3>
            </a>

            <a href="#iced" className="bg-[#f4e4d3] rounded-2xl p-8 text-center">
              <div className="text-5xl">🧋</div>
              <h3 className="font-bold mt-4">Iced Coffee</h3>
            </a>

            <a href="#desserts" className="bg-[#f4e4d3] rounded-2xl p-8 text-center">
              <div className="text-5xl">🍰</div>
              <h3 className="font-bold mt-4">Desserts</h3>
            </a>

            <a href="#tea" className="bg-[#f4e4d3] rounded-2xl p-8 text-center">
              <div className="text-5xl">🍵</div>
              <h3 className="font-bold mt-4">Tea</h3>
            </a>

          </div>
        </div>
      </section>


      <section id="coffee" className="py-16 bg-[#fff3e7]">
        <div className="max-w-[1170px] mx-auto px-4">

          <p className="text-[#a45b35] font-bold">FRESHLY BREWED</p>

          <h2 className="text-4xl font-bold font-serif mt-3 mb-10">
            Our Hot Coffee
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

            <div className="bg-white p-4 rounded-2xl">
              <img src="https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=600&q=85" className="w-full h-[230px] object-cover rounded-xl" alt="Espresso"/>
              <div className="flex justify-between mt-5">
                <h3 className="text-xl font-bold">Espresso</h3>
                <span className="text-[#a45b35] font-bold">$3.50</span>
              </div>
              <p className="text-[#765e50] mt-3 text-sm">Rich and strong coffee with a smooth finish.</p>
            </div>

            <div className="bg-white p-4 rounded-2xl">
              <img src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=85" className="w-full h-[230px] object-cover rounded-xl" alt="Latte"/>
              <div className="flex justify-between mt-5">
                <h3 className="text-xl font-bold">Vanilla Latte</h3>
                <span className="text-[#a45b35] font-bold">$5.49</span>
              </div>
              <p className="text-[#765e50] mt-3 text-sm">Creamy milk, espresso and sweet vanilla.</p>
            </div>

            <div className="bg-white p-4 rounded-2xl">
              <img src="https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=600&q=85" className="w-full h-[230px] object-cover rounded-xl" alt="Cappuccino"/>
              <div className="flex justify-between mt-5">
                <h3 className="text-xl font-bold">Cappuccino</h3>
                <span className="text-[#a45b35] font-bold">$4.99</span>
              </div>
              <p className="text-[#765e50] mt-3 text-sm">Perfect espresso with creamy milk foam.</p>
            </div>

            <div className="bg-white p-4 rounded-2xl">
              <img src="https://images.unsplash.com/photo-1572286258217-215cf8e9f3a1?auto=format&fit=crop&w=600&q=85" className="w-full h-[230px] object-cover rounded-xl" alt="Mocha"/>
              <div className="flex justify-between mt-5">
                <h3 className="text-xl font-bold">Chocolate Mocha</h3>
                <span className="text-[#a45b35] font-bold">$5.99</span>
              </div>
              <p className="text-[#765e50] mt-3 text-sm">Chocolate mixed with fresh espresso.</p>
            </div>

            <div className="bg-white p-4 rounded-2xl">
              <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=85" className="w-full h-[230px] object-cover rounded-xl" alt="Americano"/>
              <div className="flex justify-between mt-5">
                <h3 className="text-xl font-bold">Americano</h3>
                <span className="text-[#a45b35] font-bold">$3.99</span>
              </div>
              <p className="text-[#765e50] mt-3 text-sm">Smooth espresso with hot water.</p>
            </div>

            <div className="bg-white p-4 rounded-2xl">
              <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=85" className="w-full h-[230px] object-cover rounded-xl" alt="Flat White"/>
              <div className="flex justify-between mt-5">
                <h3 className="text-xl font-bold">Flat White</h3>
                <span className="text-[#a45b35] font-bold">$4.49</span>
              </div>
              <p className="text-[#765e50] mt-3 text-sm">Strong espresso with silky steamed milk.</p>
            </div>

          </div>
        </div>
      </section>


      <section id="iced" className="py-16">
        <div className="max-w-[1170px] mx-auto px-4">

          <p className="text-[#a45b35] font-bold">COOL & REFRESHING</p>
          <h2 className="text-4xl font-bold font-serif mt-3 mb-10">
            Iced Coffee
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

            <div className="bg-[#f4e4d3] p-4 rounded-2xl">
              <img src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=85" className="w-full h-[230px] object-cover rounded-xl" alt="Cold brew"/>
              <div className="flex justify-between mt-5">
                <h3 className="text-xl font-bold">Cold Brew</h3>
                <span className="text-[#a45b35] font-bold">$4.99</span>
              </div>
              <p className="text-sm text-[#765e50] mt-3">Slow brewed coffee with a refreshing taste.</p>
            </div>

            <div className="bg-[#f4e4d3] p-4 rounded-2xl">
              <img src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=85" className="w-full h-[230px] object-cover rounded-xl" alt="Iced latte"/>
              <div className="flex justify-between mt-5">
                <h3 className="text-xl font-bold">Iced Latte</h3>
                <span className="text-[#a45b35] font-bold">$5.49</span>
              </div>
              <p className="text-sm text-[#765e50] mt-3">Fresh espresso with cold milk and ice.</p>
            </div>

            <div className="bg-[#f4e4d3] p-4 rounded-2xl">
              <img src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=85" className="w-full h-[230px] object-cover rounded-xl" alt="Caramel iced coffee"/>
              <div className="flex justify-between mt-5">
                <h3 className="text-xl font-bold">Caramel Ice</h3>
                <span className="text-[#a45b35] font-bold">$5.99</span>
              </div>
              <p className="text-sm text-[#765e50] mt-3">Sweet caramel, coffee and refreshing ice.</p>
            </div>

          </div>
        </div>
      </section>


      <section id="desserts" className="py-16 bg-[#fff3e7]">
        <div className="max-w-[1170px] mx-auto px-4">

          <div className="text-center mb-12">
            <p className="text-[#a45b35] font-bold">SWEET MOMENTS</p>
            <h2 className="text-4xl font-bold font-serif mt-3">
              Desserts & Bakery
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">

            <div className="bg-white p-4 rounded-2xl">
              <img src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=85" className="w-full h-[230px] object-cover rounded-xl" alt="Croissant"/>
              <h3 className="text-xl font-bold mt-5">Butter Croissant</h3>
              <p className="text-sm text-[#765e50] mt-2">Fresh and crispy French pastry.</p>
              <p className="text-[#a45b35] font-bold mt-3">$3.50</p>
            </div>

            <div className="bg-white p-4 rounded-2xl">
              <img src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=85" className="w-full h-[230px] object-cover rounded-xl" alt="Brownie"/>
              <h3 className="text-xl font-bold mt-5">Chocolate Brownie</h3>
              <p className="text-sm text-[#765e50] mt-2">Rich chocolate with a soft center.</p>
              <p className="text-[#a45b35] font-bold mt-3">$4.50</p>
            </div>

            <div className="bg-white p-4 rounded-2xl">
              <img src="https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=85" className="w-full h-[230px] object-cover rounded-xl" alt="Cheesecake"/>
              <h3 className="text-xl font-bold mt-5">Cheesecake</h3>
              <p className="text-sm text-[#765e50] mt-2">Creamy cheesecake with fresh berries.</p>
              <p className="text-[#a45b35] font-bold mt-3">$5.99</p>
            </div>

          </div>
        </div>
      </section>


      <section id="tea" className="py-16">
        <div className="max-w-[1170px] mx-auto px-4 flex flex-col md:flex-row items-center gap-12">

          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=85"
              className="w-full h-[380px] object-cover rounded-[30px]"
              alt="Fresh tea"
            />
          </div>

          <div className="w-full md:w-1/2">
            <p className="text-[#a45b35] font-bold">A MOMENT OF PEACE</p>
            <h2 className="text-5xl font-bold font-serif mt-3">
              Fresh Tea Collection
            </h2>

            <p className="text-[#765e50] leading-7 mt-5">
              Enjoy our selection of fresh teas, from classic green tea
              to relaxing herbal blends.
            </p>

            <div className="mt-8 flex flex-col gap-5">

              <div className="flex justify-between border-b border-[#e8d7c7] pb-3">
                <span className="font-semibold">Green Tea</span>
                <span className="text-[#a45b35] font-bold">$3.50</span>
              </div>

              <div className="flex justify-between border-b border-[#e8d7c7] pb-3">
                <span className="font-semibold">Black Tea</span>
                <span className="text-[#a45b35] font-bold">$3.00</span>
              </div>

              <div className="flex justify-between border-b border-[#e8d7c7] pb-3">
                <span className="font-semibold">Herbal Tea</span>
                <span className="text-[#a45b35] font-bold">$4.00</span>
              </div>

            </div>
          </div>

        </div>
      </section>


      <section className="py-12 px-4">
        <div className="max-w-[1170px] mx-auto bg-[#542b17] rounded-[30px] px-6 sm:px-12 py-16 text-center text-white">

          <p className="text-[#e9c4a4] font-bold tracking-widest">
            SPECIAL OFFER
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold font-serif mt-4">
            Coffee + Dessert
          </h2>

          <p className="text-[#ead6c7] mt-5">
            Enjoy your favorite coffee and dessert together for only $7.99.
          </p>

          <a href="#coffee" className="inline-block bg-[#fff3e7] text-[#542b17] px-9 py-4 rounded-full font-bold mt-8">
            Explore Menu →
          </a>

        </div>
      </section>


      <footer className="bg-[#351b10] text-white py-14 px-4">

        <div className="max-w-[1170px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>
            <h2 className="text-3xl font-bold font-serif">☕ CaféAura</h2>
            <p className="text-[#d4b9a6] mt-5 leading-7">
              Every cup tells a story. Come and enjoy the perfect coffee moment.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-5">Quick Links</h3>
            <div className="flex flex-col gap-3 text-[#d4b9a6]">
              <a href="/">Home</a>
              <a href="#coffee">Menu</a>
              <a href="#desserts">Desserts</a>
              <a href="#tea">Tea</a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-5">Opening Hours</h3>
            <p className="text-[#d4b9a6] leading-8">
              Monday - Friday: 8AM - 10PM
              <br />
              Saturday: 9AM - 11PM
              <br />
              Sunday: 9AM - 9PM
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-5">Contact Us</h3>
            <p className="text-[#d4b9a6] leading-8">
              Email: hello@cafeaura.com
              <br />
              Phone: +992 900 000 000
              <br />
              Dushanbe, Tajikistan
            </p>
          </div>

        </div>

        <div className="max-w-[1170px] mx-auto border-t border-[#765e50] mt-12 pt-7 text-center text-[#d4b9a6] text-sm">
          © 2026 CaféAura. All Rights Reserved.
        </div>

      </footer>

    </div>
  )
}

export default Menu
