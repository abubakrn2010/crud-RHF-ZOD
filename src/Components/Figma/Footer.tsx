
import { Link } from 'react-router'

const Footer = () => {
  return (
   <footer className="bg-[#30291f] text-white py-12">

        <div className="max-w-[1200px] mx-auto px-5">

          <div className="flex flex-col md:flex-row justify-between gap-8">

            <div>
              <h2 className="text-3xl font-bold font-serif">
                🪑 Woodora
              </h2>

              <p className="text-gray-300 mt-4">
                Making your home beautiful and comfortable.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl">Quick Links</h3>

              <div className="flex flex-col gap-3 mt-4 text-gray-300">
                <Link to="/">Home</Link>
                <Link to="/revi">Reviews</Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-xl">Contact Us</h3>

              <p className="text-gray-300 mt-4 leading-8">
                Dushanbe, Tajikistan
                <br />
                +992 900 000 000
                <br />
                woodora@gmail.com
              </p>
            </div>

          </div>

          <div className="border-t border-white/20 text-center mt-10 pt-6 text-gray-400">
            © 2026 Woodora. All Rights Reserved.
          </div>

        </div>

      </footer>

  )
}

export default Footer
