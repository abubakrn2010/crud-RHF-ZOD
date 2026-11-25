
import { Link, Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="bg-[#f8f6f0] text-[#30291f]">

      <header className="w-full">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-[75px] py-6">

          <div className="flex items-center justify-between">

            <Link to="/" className="text-3xl font-bold font-serif">
              🪑 Woodora
            </Link>

            <nav className="flex items-center gap-8">
              <Link to="/" className="hover:text-[#87936a]">
                Home
              </Link>

              <Link to="/revi" className="hover:text-[#87936a]">
                Reviews
              </Link>
            </nav>

            <Link
              to="/#products"
              className="bg-[#596344] text-white px-6 py-3 rounded-full"
            >
              Shop Now →
            </Link>

          </div>
        </div>
      </header>

      <Outlet />
    </div>
  );
};

export default Layout;
